"""Convertit les ciels HDR (Radiance .hdr) en images WebP pour le jeu, et repère la position du soleil."""
import numpy as np, os, json, subprocess
from PIL import Image

SRC, OUT = 'assets-src/skies', 'assets/sky'
NAMES = {'day': 'kloofendal_48d_partly_cloudy_puresky', 'sunset': 'kloppenheim_06_puresky', 'night': 'qwantani_night_puresky'}
# Luminosité moyenne visée pour la moitié haute du ciel (après exposition).
TARGET = {'day': 0.32, 'sunset': 0.2, 'night': 0.025}

def read_hdr(path):
    data = open(path, 'rb').read()
    i = data.index(b'\n\n') + 2
    j = data.index(b'\n', i)
    dims = data[i:j].split(); h, w = int(dims[1]), int(dims[3])
    pos = j + 1
    img = np.zeros((h, w, 4), np.uint8)
    for y in range(h):
        if data[pos] != 2 or data[pos + 1] != 2: raise ValueError('format HDR non géré')
        pos += 4
        for c in range(4):
            x = 0
            row = img[y, :, c]
            while x < w:
                n = data[pos]; pos += 1
                if n > 128:
                    n -= 128; row[x:x + n] = data[pos]; pos += 1
                else:
                    row[x:x + n] = np.frombuffer(data[pos:pos + n], np.uint8); pos += n
                x += n
    e = img[..., 3].astype(np.int32)
    f = np.where(e > 0, np.ldexp(1.0, e - 136), 0.0)
    return img[..., :3].astype(np.float32) * f[..., None]

def aces(x):
    a, b, c, d, e = 2.51, 0.03, 2.43, 0.59, 0.14
    return np.clip((x * (a * x + b)) / (x * (c * x + d) + e), 0, 1)

meta = {}
for key, name in NAMES.items():
    rgb = read_hdr(os.path.join(SRC, name + '.hdr'))
    h, w, _ = rgb.shape
    lum = rgb @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    y, x = np.unravel_index(np.argmax(lum[: h // 2]), lum[: h // 2].shape)
    meta[key] = {'sunU': float(x / w), 'sunV': float(y / h), 'peak': float(lum.max())}
    # Le soleil lui-même est rendu par le jeu : on écrête les valeurs extrêmes.
    rgb = np.minimum(rgb, 40.0)
    exposure = TARGET[key] / float(np.median(lum[: h // 2]))
    meta[key]['exposure'] = exposure
    ldr = aces(rgb * exposure)
    srgb = np.where(ldr <= 0.0031308, ldr * 12.92, 1.055 * np.power(ldr, 1 / 2.4) - 0.055)
    im = Image.fromarray((srgb * 255 + 0.5).astype(np.uint8))
    im.resize((2048, 1024), Image.LANCZOS).save(os.path.join(OUT, key + '.webp'), quality=88)
    im.resize((256, 128), Image.LANCZOS).save(os.path.join(OUT, key + '_small.webp'), quality=90)
    print('ciel', key, meta[key])
json.dump(meta, open(os.path.join(OUT, 'sky.json'), 'w'), indent=1)
