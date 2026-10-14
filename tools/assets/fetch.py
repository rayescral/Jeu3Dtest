"""Télécharge les ressources libres de droits (CC0) utilisées par le jeu dans assets-src/ (non versionné).
Sources : Poly Haven (modèles, ciels) et ambientCG (textures). Lancer : python3 tools/assets/fetch.py"""
import json, os, subprocess, sys, zipfile

ROOT = os.path.join(os.path.dirname(__file__), '..', '..', 'assets-src')
TEXTURES = [
    'Grass001', 'PavingStones128', 'PavingStones136', 'Asphalt025C', 'Concrete034', 'WoodFloor051',
    'PaintedPlaster017', 'WoodSiding008', 'Bark001', 'LeafSet029', 'Fence003', 'Ground088', 'OfficeCeiling001',
    'Tiles107', 'Fabric030', 'Metal032', 'Cardboard002', 'Carpet014', 'Plaster001',
]
SKIES = ['kloofendal_48d_partly_cloudy_puresky', 'kloppenheim_06_puresky', 'qwantani_night_puresky']
MODELS = [
    'potted_plant_01', 'potted_plant_02', 'potted_plant_04', 'planter_box_01', 'wine_barrel_01',
    'outdoor_table_chair_set_01', 'street_lamp_01', 'modern_arm_chair_01', 'sofa_02', 'modern_coffee_table_01',
    'WetFloorSign_01', 'industrial_wall_lamp', 'modern_ceiling_lamp_01', 'steel_frame_shelves_03',
    'plastic_monobloc_chair_01', 'security_camera_01', 'exterior_aircon_unit', 'utility_box_01',
    'cardboard_box_01', 'jacaranda_tree', 'shrub_04',
]

def curl(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 0: return
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    r = subprocess.run(['curl', '-sS', '-L', '--retry', '3', '-m', '600', '-o', dest, url])
    if r.returncode: sys.exit(f'échec : {url}')

def api(path):
    out = subprocess.run(['curl', '-sS', '-m', '60', 'https://api.polyhaven.com/' + path], capture_output=True, text=True).stdout
    return json.loads(out)

for t in TEXTURES:
    z = os.path.join(ROOT, 'textures', t + '.zip')
    curl(f'https://ambientcg.com/get?file={t}_1K-JPG.zip', z)
    d = os.path.join(ROOT, 'textures', t)
    if not os.path.isdir(d): zipfile.ZipFile(z).extractall(d)
    print('texture', t)

for s in SKIES:
    f = api('files/' + s)['hdri']['2k']['hdr']
    curl(f['url'], os.path.join(ROOT, 'skies', s + '.hdr'))
    print('ciel', s)

for m in MODELS:
    f = api('files/' + m)['gltf']['1k']['gltf']
    d = os.path.join(ROOT, 'models', m)
    curl(f['url'], os.path.join(d, m + '.gltf'))
    for rel, inc in f['include'].items(): curl(inc['url'], os.path.join(d, rel))
    print('modèle', m)
print('terminé')
