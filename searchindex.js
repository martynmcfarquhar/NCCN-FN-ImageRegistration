Search.setIndex({"alltitles": {"About the Author": [[0, "about-the-author"]], "Contents": [[0, "contents"]], "Evaluating the Q matrix": [[2, "evaluating-the-q-matrix"]], "Finding the Best Transformation": [[3, "finding-the-best-transformation"]], "Image Filtering": [[6, "image-filtering"]], "Interpolation": [[5, "interpolation"]], "Introduction": [[0, "introduction"]], "MATLAB Example": [[1, "matlab-example"]], "Mapping Coordinates": [[2, "mapping-coordinates"]], "Motivation for Registration": [[1, "motivation-for-registration"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]], "Summary": [[7, "summary"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Transforming Images": [[4, "transforming-images"]], "Transforming Images in SPM": [[4, "transforming-images-in-spm"]], "Transforming an Image in Voxel-space": [[4, "transforming-an-image-in-voxel-space"]], "Transforming an Image in World-space": [[4, "transforming-an-image-in-world-space"]], "Using the \\mathbf{Q} Matrix for Mapping": [[2, "using-the-mathbf-q-matrix-for-mapping"]]}, "docnames": ["0.intro", "1.reg-problem", "2.mapping-coords", "3.finding-transforms", "4.transforming-images", "5.interpolation", "6.filtering", "7.summary", "README"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.mapping-coords.ipynb", "3.finding-transforms.ipynb", "4.transforming-images.ipynb", "5.interpolation.ipynb", "6.filtering.ipynb", "7.summary.md", "README.md"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [1, 2], "0": [0, 1, 4], "0000": 2, "01_t1w": [1, 2], "01_task": [1, 2], "0541": 2, "0542": 2, "1": [1, 2, 4], "10": 1, "115": 4, "125": 2, "1250": 2, "127": [1, 2], "13": 4, "14": 1, "161": 0, "17": 1, "176": 1, "182": [1, 2], "1_bold": [1, 2], "1x3": 1, "20": [2, 4], "2024": 1, "21": 4, "210": 1, "23": 4, "256": 1, "2688": 0, "275": 0, "3": 4, "31": 0, "34": 1, "3mm": 4, "4": [0, 2], "40": 1, "4056": 2, "44": 0, "48": 2, "5000": 2, "52": 2, "55": 4, "55mm": 4, "57": 1, "59": 1, "5mm": 4, "6": 1, "64": [1, 4], "64mm": 4, "73": 4, "7972": 2, "81": 4, "83": 2, "8313": 2, "87": [1, 2], "9": 4, "9mm": 4, "9pl": 0, "A": 1, "As": [0, 1, 2, 4], "At": 2, "For": [1, 2, 4], "If": [1, 2, 4], "In": [0, 1, 2, 4, 7], "One": 4, "The": [0, 2, 4], "These": [0, 4], "To": [1, 2, 4], "_": 2, "abl": 2, "about": [2, 4], "abov": [2, 4], "ac": 0, "accord": 2, "achiev": [1, 2, 4], "across": [0, 1, 2], "actual": [1, 4], "adapt": 2, "addit": [1, 2], "adjust": 2, "affin": [2, 4], "after": 1, "aim": [1, 2], "align": [0, 1, 2, 4], "all": [1, 4], "allow": 0, "along": [1, 4], "alphadata": 1, "alreadi": 1, "also": [0, 2, 4], "alter": 4, "altern": [1, 2], "an": [1, 2], "anat": 1, "anatom": [0, 1, 2], "anatomi": [0, 1], "ani": [2, 4], "anoth": [2, 4], "anterior": 1, "anymor": 4, "anyth": 4, "anywher": 2, "appli": [2, 4], "applic": 1, "approach": [0, 2], "ar": [0, 1, 2, 4], "arrai": 1, "asl": 0, "assess": 1, "associ": [1, 4], "assum": 2, "ast": 4, "atla": 1, "autom": 0, "automat": 1, "axi": 4, "back": [2, 4], "backward": 4, "becaus": [1, 2, 4], "becom": 4, "been": [1, 4], "begin": 4, "behind": 4, "being": 2, "below": [1, 4], "bend": 2, "best": 0, "better": 2, "between": [1, 2, 4], "beyond": 1, "blank": 4, "blood": 0, "bmatrix": 4, "bodi": 4, "bold": 0, "booth": 0, "both": [1, 2], "bound": [1, 4], "brain": [1, 2, 4], "break": 1, "bring": 4, "broad": 1, "build": 0, "c": 1, "calcul": 2, "call": 1, "can": [1, 2, 4], "cannot": 2, "case": 1, "caus": 1, "centr": 1, "chang": [1, 2, 4], "choic": 4, "cingul": 1, "clearer": 4, "clearli": 1, "click": 2, "closest": 2, "code": [1, 2], "cognit": 0, "collat": 1, "collect": [0, 2], "color": 1, "colormap": 1, "combin": 4, "come": 2, "common": 2, "commun": 0, "compar": 4, "comparison": [1, 4], "complet": 1, "complex": 2, "comput": [0, 2], "computation": 4, "conceptualis": 4, "consid": [1, 2], "contain": 1, "content": 2, "context": [1, 4], "contextualis": 4, "contrast": 0, "convert": [2, 4], "coordin": [0, 1, 4], "copi": 4, "core": 1, "correct": [1, 2], "correspond": [0, 1, 2, 4], "cost": 2, "could": 4, "covert": 2, "creat": [1, 4], "data": [1, 4], "dataset": 1, "default": [1, 2], "defin": [2, 4], "definit": 2, "degre": 2, "did": 4, "differ": [0, 1, 2, 4], "dimens": [0, 1, 2, 4], "directli": 4, "discuss": [0, 2, 4], "displai": 4, "divis": 0, "do": [1, 2, 4], "document": 1, "doe": [1, 2], "done": [1, 4], "doubl": [1, 2], "down": 1, "download": 1, "dr": 0, "draw": 1, "drawcrosshair": 1, "drop": 2, "dti": 0, "dure": 0, "e": 0, "each": [0, 1, 2, 4], "earlier": 4, "easili": 1, "east": 0, "effect": 4, "effici": 4, "either": 1, "element": 2, "encod": 4, "end": [2, 4], "equat": 2, "equival": 2, "even": 1, "exampl": [2, 4], "exce": 1, "exclus": 4, "exist": 1, "expand": 2, "experi": 0, "explor": [1, 4, 7], "extract": 1, "factor": 4, "fhea": 0, "field": 1, "fig": 2, "figur": 1, "file": 1, "find": [0, 2], "first": [2, 4], "fix": 1, "flag": 1, "flanker_run": [1, 2], "flexibl": 2, "flow": 0, "fmri": 1, "focu": [1, 2], "focus": 4, "follow": [1, 2, 4], "forev": 4, "form": [1, 2, 4], "formalis": 0, "framework": [1, 4], "free": 2, "from": [0, 1, 2, 4], "func": 1, "function": [1, 2], "fundament": 0, "further": 4, "gca": 1, "gener": [1, 4], "get": [2, 4], "give": [2, 4], "given": [2, 4], "goal": 1, "good": 2, "grasp": 4, "greater": 2, "ha": [1, 4], "had": 4, "have": [1, 2, 4, 7], "hdr_anat": 2, "hdr_func": 2, "header": [2, 4], "health": 0, "here": 2, "highlight": 4, "hit": 1, "hold": 1, "hopefulli": 2, "how": [0, 1, 2, 4], "howev": [1, 2, 4], "human": 0, "i": [0, 1, 2, 4], "idea": [2, 4], "ident": [1, 2], "identifi": [0, 1], "ifunc": 1, "illustr": [2, 4], "imag": [0, 2], "imagesc": 1, "immedi": 1, "implement": 0, "import": [1, 2, 4], "includ": [0, 2], "inde": 1, "index": [1, 4], "inform": 1, "initi": 1, "insert": 4, "insid": 1, "instanc": [1, 2, 4], "instead": [2, 4], "interest": 1, "interp": 1, "interpol": 1, "intuit": [2, 4], "inv": 2, "invers": 2, "invis": 4, "involv": 2, "irrespect": 2, "issu": [0, 1], "its": 0, "jet": 1, "job": 1, "just": [1, 2, 4], "keep": [1, 4], "know": [0, 2, 4], "known": [0, 1, 2], "larg": 1, "last": [1, 2], "later": 4, "lectur": 0, "left": 4, "lesson": [0, 1, 2, 7], "like": [2, 4], "limit": 0, "line": [1, 2], "linear": 2, "load": 2, "localis": 1, "locat": [0, 1, 2, 4], "longitudin": 1, "look": 4, "m": [1, 2, 4], "m13": 0, "ma": 4, "mai": [0, 1, 2], "main": 4, "make": [1, 2, 4], "manag": 1, "manchest": 0, "map": [0, 1, 4], "marti": 1, "martyn": 0, "mat": 2, "match": [1, 2], "mathbf": [1, 4], "matlab": 2, "matric": 2, "matrix": [1, 4], "matter": 0, "mcfarquhar": 0, "mean": [1, 2], "meaning": 1, "measur": 1, "mention": 2, "method": [0, 2], "millimetr": [2, 4], "misalign": 2, "modifi": 1, "more": [2, 4], "most": 1, "motion": [1, 2], "motiv": 4, "move": [1, 4], "mr": 0, "mt": 2, "much": [1, 4], "multi": 1, "multipl": [1, 4], "multipli": 4, "must": [0, 1], "nearest": 1, "necessari": [1, 2], "necessarili": 2, "need": [1, 2, 4], "neg": 4, "neighbour": 1, "neuroimag": 0, "neurosci": 0, "new": [1, 2, 4], "next": [2, 4], "nii": [1, 2], "non": 2, "normal": 1, "note": 2, "notic": 4, "notion": 0, "now": [1, 2, 4], "obviou": 2, "offer": 2, "often": [0, 1, 4], "old": 4, "onc": 4, "one": [1, 2], "onli": [2, 4], "oper": [2, 4], "order": [0, 1, 4], "orient": [0, 2], "origin": [2, 4], "other": [1, 2], "our": [1, 2, 4], "out": [2, 4], "outsid": 1, "over": 1, "overlai": 1, "overlap": 1, "part": [0, 1, 2], "perform": 4, "perman": 4, "phd": 0, "place": 2, "point": [1, 2, 4], "poor": 2, "posit": [1, 4], "pre": 4, "previou": [2, 4], "principl": 4, "problem": 0, "process": [0, 4], "provid": 4, "psychologi": 0, "pull": 4, "q": [1, 4], "qa": 4, "quantifi": 0, "queri": 1, "question": 2, "qx": 2, "r": 1, "rang": 1, "read": 1, "real": [2, 4], "realign": 1, "realis": 1, "reason": 2, "refer": [1, 4], "region": 2, "regist": 1, "registr": [0, 2, 4], "reign": 2, "replac": 4, "repres": [1, 2], "represent": 4, "requir": [0, 1], "resampl": 1, "research": [0, 1], "resolut": [0, 2], "rest": 1, "restrict": 2, "result": [1, 4], "right": 4, "rigid": 4, "rotat": [2, 4], "rsub": 1, "rule": [2, 4], "run": 0, "sai": 1, "same": [0, 1, 2, 4], "save": 1, "saw": [2, 4], "scale": [1, 2], "scan": [0, 1], "scanner": 1, "school": 0, "scienc": 0, "section": [2, 4], "see": [0, 1, 2, 4], "seem": 1, "sens": [2, 4], "sequenc": 1, "set": [1, 2], "share": 2, "shear": 2, "shift": [2, 4], "short": 4, "should": [2, 4], "shown": 1, "similarli": 2, "simpli": 1, "site": 1, "situat": 1, "size": 1, "smaller": 1, "so": [1, 2, 4], "softwar": 2, "solv": [0, 1], "some": [1, 2, 4], "someth": 2, "somewhat": 4, "sort": 1, "sourc": [1, 2], "space": [1, 2], "speak": 4, "spm": 0, "spm12": 1, "spm_data_hdr_read": 2, "spm_data_read": 1, "spm_get_default": 1, "spm_my_default": 1, "spm_reslic": 1, "start": 2, "stat": 1, "stationari": 1, "step": 0, "still": 2, "street": 0, "structur": 1, "studi": 1, "sub": [1, 2], "subject": 0, "system": 2, "t": [0, 2, 4], "take": [1, 2, 4], "target": [1, 2], "task": [0, 2], "tell": [2, 4], "templat": 1, "term": [0, 2], "than": 1, "thank": 2, "thei": 2, "them": [1, 2, 4], "therefor": [2, 4], "thi": [0, 1, 2, 4, 7], "think": 4, "those": 2, "though": 1, "through": 4, "time": 1, "tm": [2, 4], "togeth": 1, "tractographi": 0, "transform": [0, 1, 2], "translat": 2, "transpar": 1, "try": 4, "turn": [2, 4], "two": [1, 2, 4], "type": 4, "typic": 4, "u": [2, 4], "ui": 1, "uk": 0, "understand": 1, "unit": [2, 4], "univers": 0, "until": 1, "up": [1, 2, 4], "us": [0, 1, 4], "useless": 1, "user": 1, "usual": [1, 4], "util": 4, "v7141": 1, "valu": [1, 4], "veri": 2, "version": [2, 4], "video": 4, "view": 2, "visualis": 2, "volum": 1, "voxel": [1, 2], "wai": [0, 1, 2], "want": [1, 2, 4], "we": [0, 1, 2, 4, 7], "week": [1, 2, 4], "well": [0, 1, 2], "what": 2, "when": [0, 1, 2, 4], "where": [1, 2, 4], "wherea": 2, "which": [0, 1, 2], "white": 0, "why": [1, 2], "wide": 1, "window": 2, "within": [0, 1, 4], "without": 4, "work": [2, 4], "world": [1, 2], "would": [1, 4], "write": 1, "x": 2, "y": 4, "ydir": 1, "yet": 2, "you": [1, 2, 4], "yourself": 1}, "titles": ["Introduction", "The Image Registration Problem", "Mapping Coordinates", "Finding the Best Transformation", "Transforming Images", "Interpolation", "Image Filtering", "Summary", "NCCN-FN-ImageRegistration"], "titleterms": {"The": 1, "about": 0, "an": 4, "author": 0, "best": 3, "content": 0, "coordin": 2, "evalu": 2, "exampl": 1, "filter": 6, "find": 3, "fn": 8, "imag": [1, 4, 6], "imageregistr": 8, "interpol": 5, "introduct": 0, "map": 2, "mathbf": 2, "matlab": 1, "matrix": 2, "motiv": 1, "nccn": 8, "problem": 1, "q": 2, "registr": 1, "space": 4, "spm": 4, "summari": 7, "transform": [3, 4], "us": 2, "voxel": 4, "world": 4}})