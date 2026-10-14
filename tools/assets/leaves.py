"""Compose des rameaux feuillus (atlas 2 x 2) à partir des feuilles photographiées de LeafSet029 (ambientCG, CC0).
Chaque rameau sert de « carte » de feuillage pour les arbres et les haies du jeu."""
import random, math
from PIL import Image, ImageDraw, ImageEnhance

SRC = 'assets-src/textures/LeafSet029/LeafSet029_1K-JPG_'
color = Image.open(SRC + 'Color.jpg').convert('RGB')
alpha = Image.open(SRC + 'Opacity.jpg').convert('L')
rgba = color.copy(); rgba.putalpha(alpha)
cell = 1024 // 3
leaves = []
for k in range(7):                       # les 7 feuilles vertes (les 2 dernières sont abîmées)
    r, c = divmod(k, 3)
    tile = rgba.crop((c * cell, r * cell, (c + 1) * cell, (r + 1) * cell))
    leaves.append(tile.crop(tile.getbbox()))

random.seed(7)
S = 512
atlas = Image.new('RGBA', (S * 2, S * 2), (0, 0, 0, 0))
for v in range(4):
    canvas = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    # Rameau : tige principale en diagonale avec ramifications.
    x0, y0 = S * 0.5, S * 0.97
    pts = []
    for i in range(14):
        t = i / 13
        pts.append((x0 + math.sin(t * 2.4 + v) * S * 0.08, y0 - t * S * 0.82))
    d.line(pts, fill=(92, 70, 45, 255), width=7)
    spots = []
    for i, (px, py) in enumerate(pts[2:]):
        for side in (-1, 1):
            if random.random() < 0.85:
                ang = side * random.uniform(35, 70)
                ln = random.uniform(30, 70)
                ex = px + math.sin(math.radians(ang)) * ln
                ey = py - math.cos(math.radians(ang)) * ln
                d.line([(px, py), (ex, ey)], fill=(92, 70, 45, 255), width=3)
                spots.append((ex, ey, ang))
    spots.append((pts[-1][0], pts[-1][1], 0))
    random.shuffle(spots)
    for ex, ey, ang in spots:
        leaf = random.choice(leaves)
        sc = random.uniform(0.38, 0.62)
        lw, lh = int(leaf.width * sc), int(leaf.height * sc)
        img = leaf.resize((lw, lh), Image.LANCZOS)
        img = ImageEnhance.Brightness(img).enhance(random.uniform(0.72, 1.05))
        # Le pétiole est à gauche de l'image : on oriente la feuille vers l'extérieur du rameau.
        rot = -(ang - 90) + random.uniform(-25, 25) if ang else 90 + random.uniform(-20, 20)
        img = img.rotate(rot, resample=Image.BICUBIC, expand=True)
        ox = int(ex - img.width / 2 + math.sin(math.radians(ang or 0)) * lw * 0.35)
        oy = int(ey - img.height / 2 - math.cos(math.radians(ang or 0)) * lw * 0.35)
        canvas.alpha_composite(img, (max(0, min(S - img.width, ox)), max(0, min(S - img.height, oy))))
    atlas.paste(canvas, ((v % 2) * S, (v // 2) * S))
atlas.save('assets/tex/leafcluster.webp', quality=88)
atlas.resize((512, 512), Image.LANCZOS).save('/tmp/leafcluster_preview.png')
print('atlas de feuillage créé')
