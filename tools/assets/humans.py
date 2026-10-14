# Génère les personnages réalistes du jeu avec Blender + MPFB (MakeHuman, assets CC0).
# Lancement : blender -b --python tools/assets/humans.py -- <dossier_sortie> [nom1 nom2 ...]
# Chaque personnage : corps + peau, yeux, sourcils, cils, cheveux, vêtements, chaussures, squelette
# « game_engine » ; les faces du corps cachées sous les vêtements sont supprimées, puis tout est exporté en .glb.
# Prérequis : Blender 4.2, extension MPFB 2 (static.makehumancommunity.org/mpfb.html) et le pack
# « makehuman_system_assets_cc0 » copié dans le dossier de données de MPFB (…/extensions/.user/user_default/mpfb/data).
# Ensuite : node tools/assets/humans.mjs (optimisation vers assets/humans/).
import bpy, sys, os, json, re

OUT = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else '/tmp/humans'
ONLY = sys.argv[sys.argv.index('--') + 2:] if '--' in sys.argv else []
os.makedirs(OUT, exist_ok=True)

from bl_ext.user_default.mpfb.services.humanservice import HumanService
from bl_ext.user_default.mpfb.services.locationservice import LocationService
from bl_ext.user_default.mpfb.services.exportservice import ExportService

DATA = LocationService.get_user_data()

def ph(gender, age=0.5, muscle=0.5, weight=0.5, height=0.5, race=(0.0, 1.0, 0.0), cup=0.5):
    return {"gender": gender, "age": age, "muscle": muscle, "weight": weight, "proportions": 0.5, "height": height,
            "cupsize": cup, "firmness": 0.5, "race": {"african": race[0], "caucasian": race[1], "asian": race[2]}}

SNEAK = "shoes05/shoes05.mhclo"   # baskets blanches
SNEAK2 = "shoes06/shoes06.mhclo"  # baskets bleues
# cut : le pantalon devient un short (coupé au-dessus du genou) ; tint : haut et bas séparés, textures
# passées en niveaux de gris pour que le jeu choisisse leurs couleurs.
CHARACTERS = {
    # Joueurs et joueuses (t-shirt + short teintables).
    "m_player_a": dict(phenotype=ph(1.0, 0.45, 0.6, 0.45, 0.6), skin="young_caucasian_male/young_caucasian_male.mhmat",
                       hair="short02/short02.mhclo", suit="male_casualsuit06/male_casualsuit06.mhclo", shoes=SNEAK, cut=0.06, tint=True, eyes="brownlight"),
    "m_player_b": dict(phenotype=ph(1.0, 0.4, 0.65, 0.4, 0.65, race=(1, 0, 0)), skin="young_african_male/young_african_male.mhmat",
                       hair="short04/short04.mhclo", suit="male_casualsuit06/male_casualsuit06.mhclo", shoes=SNEAK2, cut=0.06, tint=True, eyes="brown"),
    "m_player_c": dict(phenotype=ph(1.0, 0.62, 0.45, 0.62, 0.5), skin="middleage_caucasian_male/middleage_caucasian_male.mhmat",
                       hair="short01/short01.mhclo", suit="male_casualsuit04/male_casualsuit04.mhclo", shoes=SNEAK, cut=0.06, tint=True, eyes="blue"),
    "m_player_d": dict(phenotype=ph(1.0, 0.42, 0.5, 0.45, 0.42, race=(0, 0, 1)), skin="young_asian_male/young_asian_male.mhmat",
                       hair="short03/short03.mhclo", suit="male_casualsuit06/male_casualsuit06.mhclo", shoes=SNEAK2, cut=0.06, tint=True, eyes="brown"),
    "m_player_e": dict(phenotype=ph(1.0, 0.85, 0.4, 0.6, 0.45), skin="old_caucasian_male/old_caucasian_male.mhmat",
                       hair="short04/short04.mhclo", suit="male_casualsuit04/male_casualsuit04.mhclo", shoes=SNEAK, cut=0.06, tint=True, eyes="grey"),
    "f_player_a": dict(phenotype=ph(0.0, 0.42, 0.55, 0.42, 0.55), skin="young_caucasian_female/young_caucasian_female.mhmat",
                       hair="ponytail01/ponytail01.mhclo", suit="female_casualsuit01/female_casualsuit01.mhclo", shoes=SNEAK, cut=0.11, tint=True, eyes="bluegreen"),
    "f_player_b": dict(phenotype=ph(0.0, 0.4, 0.55, 0.45, 0.6, race=(1, 0, 0)), skin="young_african_female/young_african_female.mhmat",
                       hair="braid01/braid01.mhclo", suit="female_casualsuit01/female_casualsuit01.mhclo", shoes=SNEAK2, cut=0.11, tint=True, eyes="brown"),
    "f_player_c": dict(phenotype=ph(0.0, 0.6, 0.5, 0.5, 0.45, race=(0, 0, 1)), skin="middleage_asian_female/middleage_asian_female.mhmat",
                       hair="bob02/bob02.mhclo", suit="female_casualsuit01/female_casualsuit01.mhclo", shoes=SNEAK, cut=0.11, tint=True, eyes="brown"),
    "f_player_d": dict(phenotype=ph(0.0, 0.42, 0.6, 0.4, 0.5), skin="young_caucasian_female2/young_caucasian_female2.mhmat",
                       hair="ponytail01/ponytail01.mhclo", suit="female_sportsuit01/female_sportsuit01.mhclo", shoes=SNEAK2, tint=True, eyes="blue"),
    "f_player_e": dict(phenotype=ph(0.0, 0.8, 0.45, 0.55, 0.45), skin="old_caucasian_female/old_caucasian_female.mhmat",
                       hair="short02/short02.mhclo", suit="female_casualsuit01/female_casualsuit01.mhclo", shoes=SNEAK, cut=0.11, tint=True, eyes="grey"),
    # Visiteurs, personnel.
    "m_casual_a": dict(phenotype=ph(1.0, 0.5, 0.5, 0.55, 0.55), skin="young_caucasian_male2/young_caucasian_male2.mhmat",
                       hair="short02/short02.mhclo", suit="male_casualsuit03/male_casualsuit03.mhclo", shoes="shoes02/shoes02.mhclo", eyes="brown"),
    "m_casual_b": dict(phenotype=ph(1.0, 0.6, 0.5, 0.6, 0.5, race=(0.5, 0.5, 0)), skin="middleage_african_male/middleage_african_male.mhmat",
                       hair="short04/short04.mhclo", suit="male_casualsuit05/male_casualsuit05.mhclo", shoes="shoes01/shoes01.mhclo", eyes="brown"),
    "m_suit": dict(phenotype=ph(1.0, 0.5, 0.75, 0.5, 0.7), skin="middleage_caucasian_male/middleage_caucasian_male.mhmat",
                   hair="short04/short04.mhclo", suit="male_elegantsuit01/male_elegantsuit01.mhclo", shoes="shoes04/shoes04.mhclo", eyes="grey"),
    "m_work": dict(phenotype=ph(1.0, 0.5, 0.65, 0.6, 0.55), skin="young_caucasian_male/young_caucasian_male.mhmat",
                   hair="short01/short01.mhclo", suit="male_worksuit01/male_worksuit01.mhclo", shoes="shoes03/shoes03.mhclo", eyes="brown"),
    "m_staff": dict(phenotype=ph(1.0, 0.45, 0.55, 0.5, 0.55, race=(0, 0.3, 0.7)), skin="young_asian_male/young_asian_male.mhmat",
                    hair="short03/short03.mhclo", suit="male_casualsuit06/male_casualsuit06.mhclo", shoes="shoes04/shoes04.mhclo", tint=True, eyes="brown"),
    "f_casual_a": dict(phenotype=ph(0.0, 0.5, 0.5, 0.5, 0.5), skin="middleage_caucasian_female/middleage_caucasian_female.mhmat",
                       hair="long01/long01.mhclo", suit="female_casualsuit02/female_casualsuit02.mhclo", shoes="shoes02/shoes02.mhclo", tint=True, eyes="blue"),
    "f_suit": dict(phenotype=ph(0.0, 0.45, 0.5, 0.45, 0.55, race=(0.6, 0.4, 0)), skin="young_african_female/young_african_female.mhmat",
                   hair="bob02/bob02.mhclo", suit="female_elegantsuit01/female_elegantsuit01.mhclo", shoes="shoes04/shoes04.mhclo", eyes="brown"),
    "f_staff": dict(phenotype=ph(0.0, 0.4, 0.5, 0.45, 0.5), skin="young_caucasian_female/young_caucasian_female.mhmat",
                    hair="ponytail01/ponytail01.mhclo", suit="female_casualsuit01/female_casualsuit01.mhclo", shoes="shoes04/shoes04.mhclo", tint=True, eyes="brownlight"),
}

def info(c):
    h = HumanService._create_default_human_info_dict()
    h["phenotype"] = c["phenotype"]
    h["rig"] = "game_engine"
    h["eyes"] = "low-poly/low-poly.mhclo"
    h["eyebrows"] = c.get("eyebrows", "eyebrow001/eyebrow001.mhclo")
    h["eyelashes"] = "eyelashes01/eyelashes01.mhclo"
    h["hair"] = c.get("hair", "")
    h["clothes"] = [c["suit"]]
    h["skin_mhmat"] = c["skin"]
    h["skin_material_type"] = "MAKESKIN"
    h["clothes_material_type"] = "MAKESKIN"
    h["eyes_material_type"] = "MAKESKIN"
    h["eyes_material_settings"] = {}
    h["alternative_materials"] = {}
    return h

def rest_coords(obj):
    # Positions des sommets avec les morphologies (shape keys) mais sans les masques.
    saved = [(m, m.show_viewport) for m in obj.modifiers]
    for m, _ in saved: m.show_viewport = False
    dg = bpy.context.evaluated_depsgraph_get()
    ev = obj.evaluated_get(dg)
    co = [obj.matrix_world @ v.co for v in ev.data.vertices]
    for m, v in saved: m.show_viewport = v
    return co

def build(name, c):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    settings = HumanService.get_default_deserialization_settings()
    settings["subdiv_levels"] = 0
    basemesh = HumanService.deserialize_from_dict(info(c), settings)
    rig = basemesh.parent
    suit = next(o for o in bpy.data.objects if o.type == 'MESH' and c["suit"].split('/')[0] in o.name)
    cut_z = None
    if c.get("cut") is not None:
        knee = (rig.matrix_world @ rig.data.bones['calf_l'].head_local).z
        cut_z = knee + c["cut"]
        # La peau des jambes sous le short redevient visible.
        co = rest_coords(basemesh)
        for m in basemesh.modifiers:
            if m.type == 'MASK' and m.vertex_group and m.vertex_group != 'body' and not m.invert_vertex_group is False:
                vg = basemesh.vertex_groups.get(m.vertex_group)
                if vg: vg.remove([i for i, p in enumerate(co) if p.z < cut_z and abs(p.x) > 0.005 or (p.z < cut_z and p.z > 0.02)])
        # Le pantalon est coupé au-dessus du genou.
        import bmesh
        bm = bmesh.new(); bm.from_mesh(suit.data)
        mw = suit.matrix_world
        bmesh.ops.delete(bm, geom=[f for f in bm.faces if sum((mw @ v.co).z for v in f.verts) / len(f.verts) < cut_z], context='FACES')
        bm.to_mesh(suit.data); bm.free()
    # Chaussures ajoutées après coup, pour que leur masque (pieds) ne soit pas annulé par la coupe.
    HumanService.add_mhclo_asset(os.path.join(DATA, "clothes", c["shoes"]), basemesh, asset_type="clothes", subdiv_levels=0, material_type="MAKESKIN")
    ExportService.bake_modifiers_remove_helpers(basemesh, bake_masks=True, bake_subdiv=False, remove_helpers=True)
    if c.get("tint"): split_suit(suit)
    return basemesh

def split_suit(suit):
    # Sépare le haut et le bas (parties détachées du maillage, classées selon leur hauteur moyenne).
    import bmesh
    bpy.context.view_layer.objects.active = suit
    for x in bpy.data.objects: x.select_set(x == suit)
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.mesh.separate(type='LOOSE')
    bpy.ops.object.mode_set(mode='OBJECT')
    parts = [o for o in bpy.context.selected_objects]
    rig = suit.parent
    waist = (rig.matrix_world @ rig.data.bones['spine_01'].head_local).z
    tops, bottoms = [], []
    for o in parts:
        z = sum((o.matrix_world @ v.co).z for v in o.data.vertices) / len(o.data.vertices)
        (tops if z > waist else bottoms).append(o)
    def merge(objs, label):
        if not objs: return
        for x in bpy.data.objects: x.select_set(x in objs)
        bpy.context.view_layer.objects.active = objs[0]
        if len(objs) > 1: bpy.ops.object.join()
        objs[0].name = 'tint_' + label
    merge(tops, 'top'); merge(bottoms, 'bottom')

# Rôle de chaque matériau dans le jeu (le jeu peut teinter les vêtements ou les cheveux).
def role(obj_name):
    n = obj_name.lower()
    if n == 'human': return 'skin'
    if n.startswith('tint_'): return n[5:]
    for k, r in (('eyebrow', 'brows'), ('eyelash', 'lashes'), ('low-poly', 'eyes'), ('high-poly', 'eyes'), ('shoes', 'shoes')):
        if k in n: return r
    if any(h in n for h in ('ponytail', 'bob', 'braid', 'long', 'short', 'afro')): return 'hair'
    return 'cloth'

GREY = {}
ERASE = {'female_casualsuit01_diffuse': [(0.715, 0.15, 0.875, 0.315)], 'female_casualsuit02_diffuse': [(0.7, 0.17, 0.86, 0.3)],
         'male_casualsuit06_diffuse': [(0.18, 0.08, 0.33, 0.17), (0.4, 0.1, 0.66, 0.21)], 'male_casualsuit04_diffuse': [(0.49, 0.08, 0.67, 0.24)]}
EYES = ['brown']
def grey(img):
    # Texture en niveaux de gris, éclaircie : le jeu la multiplie par la couleur choisie.
    if img.name in GREY: return GREY[img.name]
    import numpy as np
    w, h = img.size
    px = np.array(img.pixels[:], dtype=np.float32).reshape(h, w, 4)
    lum = px[..., 0] * 0.3 + px[..., 1] * 0.59 + px[..., 2] * 0.11
    solid = px[..., 3] > 0.5
    # Logos imprimés effacés (zones de la texture, en fraction, origine en haut à gauche).
    for key, rects in ERASE.items():
        if key not in img.name: continue
        for (u0, v0, u1, v1) in rects:
            y0, y1 = int((1 - v1) * h), int((1 - v0) * h)
            x0, x1 = int(u0 * w), int(u1 * w)
            ring = np.concatenate([lum[y0 - 4:y0, x0:x1].ravel(), lum[y1:y1 + 4, x0:x1].ravel()])
            lum[y0:y1, x0:x1] = np.median(ring) + (lum[y0:y1, x0:x1] - lum[y0:y1, x0:x1].mean()) * 0.0
    vis = lum[solid] if solid.any() else lum
    ref = np.percentile(vis, 70) if vis.size else 1
    g = np.clip(lum / max(ref, 1e-3) * 0.9, 0, 1)
    g = 0.55 + 0.45 * g  # contraste réduit : plis et coutures, sans motif imprimé marqué
    out = bpy.data.images.new(img.name + '_grey', w, h, alpha=True)
    px[..., 0] = px[..., 1] = px[..., 2] = g
    out.pixels = px.ravel()
    out.file_format = 'PNG'
    GREY[img.name] = out
    return out

def simple_material(obj):
    old = obj.data.materials[0]
    imgs = {n.label: n.image for n in old.node_tree.nodes if n.type == 'TEX_IMAGE' and n.image}
    r = role(obj.name)
    m = bpy.data.materials.new(r + '_' + obj.name.split('.')[-1])
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes['Principled BSDF']
    # Valeurs toutes différentes : les matériaux identiques seraient fusionnés à l'optimisation.
    bsdf.inputs['Roughness'].default_value = {'skin': 0.55, 'hair': 0.6, 'eyes': 0.1, 'shoes': 0.6, 'top': 0.84, 'bottom': 0.86}.get(r, 0.85)
    bsdf.inputs['Specular IOR Level'].default_value = 0.35
    d = imgs.get('Diffuse Texture')
    if d and r in ('top', 'bottom'): d = grey(d)
    if r == 'eyes': d = bpy.data.images.load(os.path.join(DATA, 'eyes', 'materials', EYES[0] + '_eye.png'))
    if d:
        t = nt.nodes.new('ShaderNodeTexImage'); t.image = d
        nt.links.new(t.outputs['Color'], bsdf.inputs['Base Color'])
        if r in ('hair', 'brows', 'lashes'):
            nt.links.new(t.outputs['Alpha'], bsdf.inputs['Alpha'])
            m.blend_method = 'CLIP' if r != 'hair' else 'HASHED'
    nrm = imgs.get('Normalmap Texture')
    if nrm:
        nrm.colorspace_settings.name = 'Non-Color'
        t = nt.nodes.new('ShaderNodeTexImage'); t.image = nrm
        nm = nt.nodes.new('ShaderNodeNormalMap')
        nt.links.new(t.outputs['Color'], nm.inputs['Color'])
        nt.links.new(nm.outputs['Normal'], bsdf.inputs['Normal'])
    obj.data.materials.clear()
    obj.data.materials.append(m)

def prepare(body_ratio):
    rig = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    bones = {b.name for b in rig.data.bones}
    for o in [o for o in bpy.data.objects if o.type == 'MESH']:
        bpy.context.view_layer.objects.active = o
        for x in bpy.data.objects: x.select_set(x == o)
        if o.data.shape_keys:
            bpy.ops.object.shape_key_remove(all=True, apply_mix=True)
        for vg in [vg for vg in o.vertex_groups if vg.name not in bones]:
            o.vertex_groups.remove(vg)
        ratio = body_ratio if o.name == 'Human' else (0.6 if role(o.name) in ('cloth', 'hair', 'shoes') else 1)
        if ratio < 1:
            dec = o.modifiers.new('dec', 'DECIMATE'); dec.ratio = ratio; dec.use_collapse_triangulate = True
            bpy.ops.object.modifier_move_to_index(modifier='dec', index=0)
            bpy.ops.object.modifier_apply(modifier='dec')
        simple_material(o)
    return rig

def export(name):
    for x in bpy.data.objects: x.select_set(True)
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT, name + '.blend'))
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, name + '.glb'), export_format='GLB', use_selection=True,
                              export_skins=True, export_animations=False, export_morph=False, export_apply=False,
                              export_yup=True, export_image_format='AUTO', export_texcoords=True, export_normals=True)

for name, c in CHARACTERS.items():
    if ONLY and name not in ONLY: continue
    EYES[0] = c.get('eyes', 'brown'); GREY.clear()
    build(name, c)
    prepare(c.get('body_ratio', 0.42))
    tris = sum(len(p.vertices) - 2 for o in bpy.data.objects if o.type == 'MESH' for p in o.data.polygons)
    print('TRIS', name, tris)
    export(name)
