Search.setIndex({"docnames": ["0.intro", "1.reg-problem", "2.voxel-world-space", "3.rigid-body", "4.transforming-images", "5.interpolation", "6.filtering", "7.summary", "README"], "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.voxel-world-space.ipynb", "3.rigid-body.ipynb", "4.transforming-images.ipynb", "5.interpolation.ipynb", "6.filtering.ipynb", "7.summary.md", "README.md"], "titles": ["Introduction", "The Image Registration Problem", "Voxel-space and World-space", "Rigid-body Transformations", "Transforming Images", "Interpolation", "Image Filtering", "Summary", "NCCN-FN-ImageRegistration"], "terms": {"registr": [0, 4], "i": [0, 2, 3, 4], "fundament": 0, "imag": [0, 2, 3], "process": [0, 2, 3, 4], "step": [0, 2], "when": [0, 2, 3, 4], "run": [0, 2, 3], "neuroimag": [0, 2], "experi": 0, "research": 0, "often": [0, 3, 4], "collect": [0, 2], "differ": [0, 3, 4], "scan": [0, 2], "from": [0, 2, 3, 4], "same": [0, 2, 3, 4], "subject": 0, "These": [0, 3, 4], "mai": 0, "includ": [0, 3], "anatom": [0, 2], "mr": [0, 3], "bold": 0, "dure": 0, "cognit": 0, "task": 0, "asl": 0, "quantifi": 0, "blood": 0, "flow": 0, "dti": 0, "white": 0, "matter": [0, 2], "tractographi": 0, "each": [0, 2, 3, 4], "term": [0, 3], "its": [0, 2, 3], "dimens": [0, 2, 4], "resolut": 0, "contrast": 0, "orient": [0, 2, 3], "anatomi": 0, "In": [0, 2, 3, 4, 7], "order": [0, 2, 3, 4], "us": [0, 2, 3, 4], "locat": [0, 2, 4], "must": 0, "identifi": 0, "As": [0, 2, 3, 4], "method": [0, 2], "ar": [0, 2, 3, 4], "requir": 0, "allow": [0, 3], "comput": 0, "know": [0, 2, 4], "which": [0, 2, 3], "part": [0, 2, 3], "correspond": [0, 2, 3, 4], "thi": [0, 2, 3, 4, 7], "known": [0, 3], "lesson": [0, 2, 7], "we": [0, 2, 3, 4, 7], "formalis": 0, "notion": 0, "align": [0, 3, 4], "across": 0, "discuss": [0, 2, 4], "autom": 0, "well": [0, 2, 3], "limit": 0, "issu": [0, 2], "approach": [0, 2], "solv": 0, "problem": 0, "also": [0, 2, 3, 4], "see": [0, 2, 3, 4], "how": [0, 2, 3, 4], "implement": 0, "wai": [0, 2], "within": [0, 2, 3, 4], "spm": [0, 3], "The": [0, 2, 4], "dr": 0, "martyn": 0, "mcfarquhar": 0, "phd": 0, "fhea": 0, "lectur": 0, "4": [0, 3], "31": [0, 3], "booth": 0, "street": 0, "east": 0, "build": [0, 3], "divis": 0, "psychologi": 0, "commun": 0, "human": 0, "neurosci": 0, "school": 0, "health": 0, "scienc": 0, "univers": 0, "manchest": 0, "m13": 0, "9pl": 0, "t": [0, 3, 4], "44": 0, "0": [0, 2, 3, 4], "161": 0, "275": 0, "2688": 0, "e": [0, 2], "ac": 0, "uk": 0, "first": [2, 3, 4], "go": 2, "focus": [2, 4], "spatial": 2, "transform": 2, "spend": 2, "more": [2, 4], "time": [2, 3], "form": [2, 3, 4], "relev": 2, "much": [2, 4], "wider": 2, "varieti": 2, "analysi": 2, "where": [2, 3, 4], "error": 2, "occur": 2, "so": [2, 3, 4], "warrant": 2, "our": [2, 3, 4], "attent": 2, "can": [2, 3, 4], "conceptualis": [2, 4], "an": 2, "mri": 2, "3d": 2, "like": [2, 3, 4], "big": 2, "cube": 2, "refer": [2, 3, 4], "ani": [2, 3, 4], "index": [2, 4], "along": [2, 3, 4], "typic": [2, 4], "x": [2, 3], "y": [2, 3, 4], "z": [2, 3], "row": [2, 3], "column": 2, "slice": 2, "therefor": [2, 3, 4], "triplet": 2, "valu": [2, 3, 4], "far": 2, "need": [2, 3, 4], "travel": 2, "find": 2, "want": [2, 3, 4], "exampl": [2, 3, 4], "matlab": [2, 3], "code": [2, 3], "below": [2, 3, 4], "show": 2, "load": 2, "you": [2, 3, 4], "download": 2, "here": [2, 3], "extract": [2, 3], "coordin": [2, 3, 4], "180": 2, "110": [2, 3], "tell": [2, 4], "found": 2, "spm_data_read": 2, "example_imag": [2, 3], "nii": [2, 3], "347": 2, "0026": 2, "altern": [2, 3], "think": [2, 4], "stack": 2, "card": 2, "directli": [2, 4], "thought": 2, "repres": [2, 3], "mean": [2, 3], "themselv": 2, "system": [2, 3], "given": [2, 3, 4], "origin": [2, 3, 4], "simpli": [2, 3], "save": [2, 3], "file": [2, 3], "Of": 2, "note": [2, 3], "base": 2, "storag": 2, "disk": 2, "usual": [2, 4], "dictat": 2, "scanner": [2, 3], "guarante": 2, "about": [2, 3, 4], "direct": 2, "For": [2, 3, 4], "displai": [2, 4], "singl": 2, "abov": [2, 4], "get": [2, 3, 4], "figur": 2, "imagesc": 2, "transpos": 2, "set": 2, "gca": 2, "ydir": 2, "normal": 2, "make": [2, 3, 4], "sure": 2, "axi": [2, 3, 4], "bottom": 2, "top": [2, 3], "colormap": 2, "grai": 2, "fix": 2, "horizont": 2, "vertic": 2, "anterior": 2, "posterior": 2, "inferior": 2, "superior": 2, "through": [2, 4], "left": [2, 4], "right": [2, 4], "goe": 2, "against": 2, "convent": 2, "entir": 2, "determin": 2, "choos": 2, "fig": [2, 3], "give": [2, 3, 4], "anoth": [2, 3, 4], "function": [2, 3], "achiev": [2, 3, 4], "have": [2, 3, 4, 7], "40": 2, "highlight": [2, 4], "onli": [2, 3, 4], "depend": [2, 3], "upon": [2, 3], "ax": [2, 3], "two": [2, 3, 4], "concept": 2, "most": [2, 3], "basic": 2, "actual": [2, 4], "insid": 2, "what": [2, 3], "do": [2, 3, 4], "alwai": [2, 3], "back": [2, 3, 4], "eventu": 2, "howev": [2, 3, 4], "doe": 2, "work": [2, 3, 4], "exclus": [2, 4], "mention": 2, "alreadi": 2, "one": [2, 3], "represent": [2, 4], "between": [2, 4], "physic": 2, "instanc": [2, 3, 4], "had": [2, 4], "wherea": 2, "ha": [2, 3, 4], "standard": 2, "unit": [2, 3, 4], "measur": 2, "size": [2, 3], "sequenc": 2, "If": [2, 3, 4], "sai": 2, "object": 2, "100": 2, "wide": 2, "inform": [2, 3], "noth": 2, "real": [2, 4], "gener": [2, 3, 4], "speak": [2, 4], "filter": 2, "oper": [2, 3, 4], "perform": [2, 4], "knowledg": 2, "interpret": 2, "convert": [2, 4], "millimetr": [2, 3, 4], "cover": 2, "done": [2, 4], "later": [2, 4], "now": [2, 3, 4], "just": [2, 3, 4], "effect": [2, 4], "tradition": 2, "consid": [2, 3], "place": 2, "brain": [2, 3, 4], "specif": [2, 3], "point": [2, 3, 4], "shift": [2, 4], "rel": 2, "neg": [2, 3, 4], "side": 2, "posit": [2, 4], "illustr": [2, 3, 4], "shown": [2, 3], "compar": [2, 4], "scale": [2, 3], "chang": [2, 3, 4], "reflect": 2, "fact": 2, "1": [2, 3, 4], "equival": 2, "3mm": [2, 4], "addit": [2, 3], "been": [2, 3, 4], "commissur": 2, "meaning": 2, "60mm": 2, "30mm": 2, "video": [2, 4], "introduc": [2, 3], "facil": 2, "both": [2, 3], "click": 2, "previou": [3, 4], "section": [3, 4], "idea": [3, 4], "call": 3, "abl": 3, "them": [3, 4], "take": [3, 4], "veri": 3, "abil": 3, "express": 3, "begin": [3, 4], "b_x": 3, "m_": 3, "11": 3, "a_x": 3, "12": 3, "a_i": 3, "13": [3, 4], "a_z": 3, "14": 3, "b_y": 3, "21": [3, 4], "22": 3, "23": [3, 4], "24": 3, "b_z": 3, "32": 3, "33": 3, "34": 3, "end": [3, 4], "might": 3, "recognis": 3, "new": [3, 4], "linear": 3, "combin": [3, 4], "old": [3, 4], "some": [3, 4], "three": 3, "equat": 3, "matric": 3, "compactli": 3, "mathbf": [3, 4], "b": 3, "ma": [3, 4], "expand": 3, "bmatrix": [3, 4], "contain": 3, "paramet": 3, "notic": [3, 4], "add": 3, "extra": 3, "multipl": [3, 4], "multipli": [3, 4], "vector": 3, "u": [3, 4], "encod": [3, 4], "word": 3, "parallel": 3, "line": 3, "remain": 3, "after": 3, "bend": 3, "construct": 3, "translat": 3, "rotat": [3, 4], "zoom": 3, "shear": 3, "To": [3, 4], "feel": 3, "plai": 3, "around": 3, "move": [3, 4], "slider": 3, "everi": 3, "pixel": 3, "separ": 3, "final": 3, "_": 3, "r": 3, "": 3, "individu": 3, "read": 3, "drop": 3, "understand": 3, "explor": [3, 4, 7], "q_": 3, "would": [3, 4], "result": [3, 4], "similarli": 3, "q": [3, 4], "radian": 3, "either": 3, "pitch": 3, "roll": 3, "yaw": 3, "r_": 3, "co": 3, "sin": 3, "quad": 3, "worri": 3, "all": [3, 4], "trigonometri": 3, "main": [3, 4], "diagon": 3, "off": 3, "factor": [3, 4], "q_y": 3, "q_z": 3, "element": 3, "flip": 3, "2": 3, "3": [3, 4], "interest": 3, "without": [3, 4], "shape": 3, "subset": 3, "furthermor": 3, "up": [3, 4], "stretch": 3, "squash": 3, "seen": 3, "kei": 3, "thing": 3, "convers": 3, "consist": 3, "thei": 3, "instead": [3, 4], "v2w": 3, "covert": 3, "suitabl": 3, "answer": 3, "medic": 3, "format": 3, "store": 3, "necessari": 3, "creat": [3, 4], "metadata": 3, "carri": 3, "On": 3, "cours": 3, "mostli": 3, "nifti": 3, "map": [3, 4], "header": [3, 4], "practic": 3, "rememb": 3, "data": [3, 4], "becaus": [3, 4], "assum": 3, "simplic": 3, "correctli": 3, "case": 3, "swap": 3, "20": [3, 4], "190": 3, "rearrang": 3, "correct": 3, "even": 3, "hdr": 3, "spm_data_hdr_read": 3, "mat": 3, "4x4": 3, "doubl": 3, "0122": 3, "0027": 3, "1999": 3, "107": 3, "6227": 3, "7913": 3, "6113": 3, "0096": 3, "18": 3, "4938": 3, "7914": 3, "0116": 3, "191": 3, "0988": 3, "0000": 3, "Then": 3, "25": 3, "30": 3, "coord": 3, "mm": 3, "4x1": 3, "71": 3, "3129": 3, "2397": 3, "159": 3, "4359": 3, "invers": 3, "vox": 3, "inv": 3, "spm_imatrix": 3, "input": 3, "return": 3, "better": 3, "try": [3, 4], "p": 3, "earlier": [3, 4], "mt": 3, "mrx": 3, "continu": 3, "calcul": 3, "mry": 3, "mrz": 3, "mz": 3, "principl": 4, "affin": 4, "rigid": 4, "bodi": 4, "saw": 4, "util": 4, "provid": 4, "framework": 4, "choic": 4, "alter": 4, "rule": 4, "comparison": 4, "type": 4, "One": 4, "motiv": 4, "behind": 4, "intuit": 4, "sens": 4, "5mm": 4, "m": 4, "matrix": 4, "follow": 4, "81": 4, "115": 4, "73": 4, "55": 4, "55mm": 4, "9mm": 4, "backward": 4, "could": 4, "9": 4, "pre": 4, "tm": 4, "64": 4, "64mm": 4, "further": 4, "perman": 4, "ast": 4, "replac": 4, "forev": 4, "import": 4, "did": 4, "anyth": 4, "look": 4, "somewhat": 4, "invis": 4, "bring": 4, "next": 4, "week": 4, "grasp": 4, "contextualis": 4, "turn": 4, "context": 4, "becom": 4, "clearer": 4, "short": 4, "version": 4, "onc": 4, "anymor": 4, "computation": 4, "effici": 4, "keep": 4, "appli": 4, "defin": 4, "qa": 4, "blank": 4, "should": 4, "copi": 4, "pull": 4, "associ": 4, "out": 4, "bound": 4, "insert": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "about": 0, "author": 0, "The": [1, 3], "imag": [1, 4, 6], "registr": 1, "problem": 1, "voxel": [2, 3, 4], "space": [2, 3, 4], "world": [2, 3, 4], "data": 2, "matrix": [2, 3], "indic": 2, "view": 2, "differ": 2, "spm": [2, 4], "rigid": 3, "bodi": 3, "transform": [3, 4], "affin": 3, "advanc": 3, "structur": 3, "m": 3, "convert": 3, "between": 3, "break": 3, "down": 3, "an": [3, 4], "interpol": 5, "filter": 6, "summari": 7, "nccn": 8, "fn": 8, "imageregistr": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Introduction": [[0, "introduction"]], "Contents": [[0, "contents"]], "About the Author": [[0, "about-the-author"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Voxel-space and World-space": [[2, "voxel-space-and-world-space"]], "Data Matrix Indices": [[2, "data-matrix-indices"]], "Voxel-space": [[2, "voxel-space"]], "World-space": [[2, "world-space"]], "Viewing Different Spaces in SPM": [[2, "viewing-different-spaces-in-spm"]], "Rigid-body Transformations": [[3, "rigid-body-transformations"]], "Affine Transformations": [[3, "affine-transformations"]], "Advanced: The Structure of the M Matrix": [[3, null]], "Converting Between Voxel-space and World-space": [[3, "converting-between-voxel-space-and-world-space"]], "Advanced: Breaking Down an M Matrix": [[3, null]], "Transforming Images": [[4, "transforming-images"]], "Transforming an Image in World-space": [[4, "transforming-an-image-in-world-space"]], "Transforming an Image in Voxel-space": [[4, "transforming-an-image-in-voxel-space"]], "Transforming Images in SPM": [[4, "transforming-images-in-spm"]], "Interpolation": [[5, "interpolation"]], "Image Filtering": [[6, "image-filtering"]], "Summary": [[7, "summary"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]]}, "indexentries": {}})