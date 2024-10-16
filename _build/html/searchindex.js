Search.setIndex({"alltitles": {"About the Author": [[0, "about-the-author"]], "Advanced: Breaking Down an M Matrix": [[3, null]], "Advanced: The Structure of the M Matrix": [[3, null]], "Affine Transformations": [[3, "affine-transformations"]], "Contents": [[0, "contents"]], "Converting Between Voxel-space and World-space": [[3, "converting-between-voxel-space-and-world-space"]], "Image Filtering": [[6, "image-filtering"]], "Interpolation": [[5, "interpolation"]], "Introduction": [[0, "introduction"]], "MATLAB Example": [[1, "matlab-example"]], "Mapping Coordinates": [[2, "mapping-coordinates"]], "Motivation for Registration": [[1, "motivation-for-registration"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]], "Rigid-body Transformations": [[3, "rigid-body-transformations"]], "Summary": [[7, "summary"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Transforming Images": [[4, "transforming-images"]], "Transforming Images in SPM": [[4, "transforming-images-in-spm"]], "Transforming an Image in Voxel-space": [[4, "transforming-an-image-in-voxel-space"]], "Transforming an Image in World-space": [[4, "transforming-an-image-in-world-space"]]}, "docnames": ["0.intro", "1.reg-problem", "2.mapping-coords", "3.rigid-body", "4.transforming-images", "5.interpolation", "6.filtering", "7.summary", "README"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.mapping-coords.ipynb", "3.rigid-body.ipynb", "4.transforming-images.ipynb", "5.interpolation.ipynb", "6.filtering.ipynb", "7.summary.md", "README.md"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": 3, "0": [0, 1, 3, 4], "0000": 3, "0027": 3, "0096": 3, "0116": 3, "0122": 3, "01_t1w": 1, "01_task": 1, "0988": 3, "1": [1, 3, 4], "10": 1, "107": 3, "11": 3, "110": 3, "115": 4, "12": 3, "127": 1, "13": [3, 4], "14": 3, "15": 1, "159": 3, "16": 1, "161": 0, "176": 1, "18": 3, "182": 1, "190": 3, "191": 3, "1999": 3, "1_bold": 1, "2": 3, "20": [1, 3, 4], "2024": 1, "21": [3, 4], "210": 1, "22": [1, 3], "23": [3, 4], "2397": 3, "24": 3, "25": 3, "256": 1, "2688": 0, "275": 0, "3": [1, 3, 4], "30": 3, "31": [0, 3], "3129": 3, "32": 3, "33": 3, "34": 3, "3mm": 4, "4": [0, 3], "40": 1, "4359": 3, "44": 0, "4938": 3, "4x1": 3, "4x4": 3, "5": 1, "55": 4, "55mm": 4, "57": 1, "5mm": 4, "6": 1, "6113": 3, "6227": 3, "64": [1, 4], "64mm": 4, "71": 3, "73": 4, "7913": 3, "7914": 3, "8": 1, "81": 4, "87": 1, "9": 4, "9mm": 4, "9pl": 0, "A": 1, "As": [0, 1, 3, 4], "For": [1, 3, 4], "If": [1, 3, 4], "In": [0, 1, 3, 4, 7], "On": 3, "One": 4, "The": [0, 4], "Then": 3, "These": [0, 3, 4], "To": [1, 3, 4], "_": 3, "a_i": 3, "a_x": 3, "a_z": 3, "abil": 3, "abl": 3, "about": [3, 4], "abov": 4, "ac": 0, "achiev": [1, 3, 4], "across": [0, 1], "actual": [1, 4], "add": 3, "addit": [1, 3], "affin": 4, "after": 3, "again": 1, "aim": 1, "align": [0, 1, 3, 4], "all": [1, 3, 4], "allow": [0, 3], "along": [1, 3, 4], "alphadata": 1, "alreadi": 1, "also": [0, 3, 4], "alter": 4, "altern": [1, 3], "alwai": 3, "an": 1, "anat": 1, "anatom": [0, 1], "anatomi": [0, 1], "ani": [3, 4], "anoth": [3, 4], "answer": 3, "anterior": 1, "anymor": 4, "anyth": 4, "appli": 4, "applic": 1, "approach": 0, "ar": [0, 1, 3, 4], "around": 3, "arrai": 1, "asl": 0, "assess": 1, "associ": [1, 4], "assum": 3, "ast": 4, "atla": 1, "autom": 0, "automat": 1, "ax": 3, "axi": [3, 4], "b": 3, "b_x": 3, "b_y": 3, "b_z": 3, "back": [3, 4], "backward": 4, "becaus": [1, 3, 4], "becom": 4, "been": [1, 3, 4], "begin": [3, 4], "behind": 4, "below": [1, 3, 4], "bend": 3, "better": 3, "between": [1, 4], "beyond": 1, "blank": 4, "blood": 0, "bmatrix": [3, 4], "bodi": 4, "bold": 0, "booth": 0, "both": [1, 3], "bound": [1, 4], "brain": [1, 3, 4], "break": 1, "bring": 4, "broad": 1, "build": [0, 3], "calcul": 3, "call": [1, 3], "can": [1, 3, 4], "carri": 3, "case": [1, 3], "caus": 1, "centr": 1, "chang": [1, 3, 4], "choic": 4, "cingul": 1, "clearer": 4, "clearli": 1, "co": 3, "code": [1, 3], "cognit": 0, "collat": 1, "collect": 0, "color": 1, "colormap": 1, "combin": [3, 4], "commun": 0, "compactli": 3, "compar": 4, "comparison": [1, 4], "complet": 1, "comput": 0, "computation": 4, "conceptualis": 4, "consid": [1, 3], "consist": 3, "construct": 3, "contain": [1, 3], "context": [1, 4], "contextualis": 4, "continu": 3, "contrast": 0, "convers": 3, "convert": 4, "coord": 3, "coordin": [0, 1, 3, 4], "copi": 4, "core": 1, "correct": [1, 3], "correctli": 3, "correspond": [0, 1, 3, 4], "could": 4, "cours": 3, "covert": 3, "creat": [1, 3, 4], "crosshair": 1, "data": [1, 3, 4], "dataset": 1, "defin": 4, "depend": 3, "diagon": 3, "did": 4, "differ": [0, 1, 3, 4], "dimens": [0, 1, 4], "directli": 4, "discuss": [0, 4], "displai": 4, "divis": 0, "do": [1, 3, 4], "doe": 1, "done": [1, 4], "doubl": [1, 3], "down": 1, "download": 1, "dr": 0, "draw": 1, "drawcrosshair": 1, "drop": 3, "dti": 0, "dure": 0, "e": 0, "each": [0, 1, 3, 4], "earlier": [3, 4], "easili": 1, "east": 0, "effect": 4, "effici": 4, "either": [1, 3], "element": 3, "encod": [3, 4], "end": [3, 4], "equat": 3, "even": [1, 3], "everi": 3, "exampl": [3, 4], "example_imag": 3, "exce": 1, "exclus": 4, "exist": 1, "expand": 3, "experi": 0, "explor": [1, 3, 4, 7], "express": 3, "extra": 3, "extract": [1, 3], "factor": [3, 4], "feel": 3, "fhea": 0, "fig": 3, "figur": 1, "file": [1, 3], "final": 3, "first": [1, 3, 4], "flag": 1, "flanker_run": 1, "flip": 3, "flow": 0, "fmri": 1, "focu": 1, "focus": 4, "follow": [1, 4], "forev": 4, "form": [1, 3, 4], "formalis": 0, "format": 3, "framework": [1, 4], "from": [0, 1, 3, 4], "func": 1, "function": [1, 3], "fundament": 0, "further": 4, "furthermor": 3, "gca": 1, "gener": [1, 3, 4], "get": [3, 4], "give": [3, 4], "given": [3, 4], "goal": 1, "grasp": 4, "ha": [1, 3, 4], "had": 4, "have": [1, 3, 4, 7], "hdr": 3, "header": [3, 4], "health": 0, "here": 3, "highlight": [1, 4], "hit": 1, "hold": 1, "how": [0, 1, 3, 4], "howev": [1, 3, 4], "human": 0, "i": [0, 1, 3, 4], "idea": [3, 4], "ident": 1, "identifi": [0, 1], "ifunc": 1, "illustr": [3, 4], "imag": [0, 3], "imagesc": 1, "immedi": 1, "implement": 0, "import": [1, 4], "includ": [0, 3], "inde": 1, "index": [1, 4], "individu": 3, "inform": [1, 3], "initi": 1, "input": 3, "insert": 4, "insid": 1, "instanc": [1, 3, 4], "instead": [3, 4], "interest": [1, 3], "interp": 1, "interpol": 1, "introduc": 3, "intuit": 4, "inv": 3, "invers": 3, "invis": 4, "issu": [0, 1], "its": [0, 3], "jet": 1, "job": 1, "just": [1, 3, 4], "keep": [1, 4], "kei": 3, "know": [0, 4], "known": [0, 1, 3], "larg": 1, "last": 1, "later": 4, "lectur": 0, "left": 4, "lesson": [0, 1, 7], "like": [3, 4], "limit": 0, "line": 3, "linear": 3, "localis": 1, "locat": [0, 1, 4], "longitudin": 1, "look": 4, "m": 4, "m13": 0, "m_": 3, "ma": [3, 4], "mai": [0, 1], "main": [3, 4], "make": [1, 3, 4], "manag": 1, "manchest": 0, "map": [0, 1, 3, 4], "martyn": 0, "mat": 3, "match": 1, "mathbf": [1, 3, 4], "matlab": 3, "matric": 3, "matrix": [1, 4], "matter": 0, "mcfarquhar": 0, "mean": [1, 3], "meaning": 1, "measur": 1, "medic": 3, "metadata": 3, "method": 0, "might": 3, "millimetr": [3, 4], "mm": 3, "more": 4, "most": [1, 3], "mostli": 3, "motion": 1, "motiv": 4, "move": [1, 3, 4], "mr": [0, 3], "mrx": 3, "mry": 3, "mrz": 3, "mt": 3, "much": [1, 4], "multi": 1, "multipl": [1, 3, 4], "multipli": [3, 4], "must": [0, 1], "mz": 3, "nearest": 1, "necessari": [1, 3], "need": [1, 3, 4], "neg": [3, 4], "neighbour": 1, "neuroimag": 0, "neurosci": 0, "new": [1, 3, 4], "next": 4, "nifti": 3, "nii": [1, 3], "normal": 1, "note": 3, "notic": [3, 4], "notion": 0, "now": [1, 3, 4], "off": 3, "often": [0, 1, 3, 4], "old": [3, 4], "onc": 4, "one": [1, 3], "onli": [3, 4], "oper": [3, 4], "order": [0, 1, 3, 4], "orient": [0, 3], "origin": [3, 4], "other": 1, "our": [1, 3, 4], "out": 4, "outsid": 1, "over": 1, "overlai": 1, "overlap": 1, "p": 3, "parallel": 3, "paramet": 3, "part": [0, 1, 3], "perform": 4, "perman": 4, "phd": 0, "pitch": 3, "pixel": 3, "plai": 3, "point": [1, 3, 4], "posit": [1, 4], "practic": 3, "pre": 4, "previou": [3, 4], "principl": 4, "problem": 0, "process": [0, 3, 4], "provid": 4, "psychologi": 0, "pull": 4, "q": [1, 3, 4], "q_": 3, "q_y": 3, "q_z": 3, "qa": 4, "quad": 3, "quantifi": 0, "queri": 1, "r": [1, 3], "r_": 3, "radian": 3, "rang": 1, "read": [1, 3], "real": 4, "realign": 1, "realis": 1, "rearrang": 3, "recognis": 3, "refer": [1, 3, 4], "regist": 1, "registr": [0, 4], "remain": 3, "rememb": 3, "replac": 4, "repres": [1, 3], "represent": 4, "requir": [0, 1], "resampl": 1, "research": [0, 1], "resolut": 0, "resolv": 1, "result": [1, 3, 4], "return": 3, "right": 4, "rigid": 4, "roll": 3, "rotat": [3, 4], "row": 3, "rsub": 1, "rule": 4, "run": [0, 3], "sai": 1, "same": [0, 1, 3, 4], "save": [1, 3], "saw": 4, "scale": [1, 3], "scan": [0, 1], "scanner": [1, 3], "school": 0, "scienc": 0, "section": [3, 4], "see": [0, 1, 3, 4], "seem": 1, "seen": 3, "sens": 4, "separ": 3, "sequenc": 1, "set": 1, "shape": 3, "shear": 3, "shift": 4, "short": 4, "should": 4, "shown": [1, 3], "similarli": 3, "simpli": [1, 3], "simplic": 3, "sin": 3, "site": 1, "situat": 1, "size": [1, 3], "slider": 3, "smaller": 1, "so": [1, 3, 4], "solv": [0, 1], "some": [1, 3, 4], "somewhat": 4, "sort": 1, "sourc": 1, "space": 1, "speak": 4, "specif": 3, "spm": [0, 3], "spm12": 1, "spm_data_hdr_read": 3, "spm_data_read": 1, "spm_get_default": 1, "spm_imatrix": 3, "spm_reslic": 1, "squash": 3, "stationari": 1, "step": 0, "store": 3, "street": 0, "stretch": 3, "studi": 1, "sub": 1, "subject": 0, "subset": 3, "suitabl": 3, "swap": 3, "system": 3, "t": [0, 3, 4], "take": [1, 3, 4], "target": 1, "task": 0, "tell": 4, "templat": 1, "term": [0, 3], "than": 1, "thei": 3, "them": [1, 3, 4], "therefor": [3, 4], "thi": [0, 1, 3, 4, 7], "thing": 3, "think": 4, "though": 1, "three": 3, "through": 4, "time": [1, 3], "tm": 4, "togeth": 1, "top": [1, 3], "tractographi": 0, "transform": 1, "translat": 3, "trigonometri": 3, "try": [1, 3, 4], "turn": 4, "two": [1, 3, 4], "type": 4, "typic": 4, "u": [3, 4], "uk": 0, "understand": [1, 3], "unit": [3, 4], "univers": 0, "until": 1, "up": [3, 4], "upon": 3, "us": [0, 1, 3, 4], "useless": 1, "usual": [1, 4], "util": 4, "v2w": 3, "v7141": 1, "valu": [1, 3, 4], "vector": 3, "veri": 3, "version": 4, "video": 4, "volum": 1, "vox": 3, "voxel": 1, "wai": [0, 1], "want": [1, 3, 4], "we": [0, 1, 3, 4, 7], "week": [1, 4], "well": [0, 1, 3], "what": 3, "when": [0, 1, 3, 4], "where": [1, 3, 4], "which": [0, 1, 3], "white": 0, "why": 1, "wide": 1, "within": [0, 1, 3, 4], "without": [3, 4], "word": 3, "work": [3, 4], "world": 1, "worri": 3, "would": [1, 3, 4], "write": 1, "x": 3, "y": [3, 4], "yaw": 3, "ydir": 1, "you": [1, 3, 4], "yourself": 1, "z": 3, "zoom": 3}, "titles": ["Introduction", "The Image Registration Problem", "Mapping Coordinates", "Rigid-body Transformations", "Transforming Images", "Interpolation", "Image Filtering", "Summary", "NCCN-FN-ImageRegistration"], "titleterms": {"The": [1, 3], "about": 0, "advanc": 3, "affin": 3, "an": [3, 4], "author": 0, "between": 3, "bodi": 3, "break": 3, "content": 0, "convert": 3, "coordin": 2, "down": 3, "exampl": 1, "filter": 6, "fn": 8, "imag": [1, 4, 6], "imageregistr": 8, "interpol": 5, "introduct": 0, "m": 3, "map": 2, "matlab": 1, "matrix": 3, "motiv": 1, "nccn": 8, "problem": 1, "registr": 1, "rigid": 3, "space": [3, 4], "spm": 4, "structur": 3, "summari": 7, "transform": [3, 4], "voxel": [3, 4], "world": [3, 4]}})