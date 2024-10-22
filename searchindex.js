Search.setIndex({"alltitles": {"About the Author": [[0, "about-the-author"]], "Contents": [[0, "contents"]], "Evaluating the Q matrix": [[2, "evaluating-the-q-matrix"]], "Finding the Best Transformation": [[3, "finding-the-best-transformation"]], "Image Filtering": [[6, "image-filtering"]], "Information Theory Objective Functions": [[3, "information-theory-objective-functions"]], "Interpolation": [[5, "interpolation"]], "Introduction": [[0, "introduction"]], "Least-squares Objective Functions": [[3, "least-squares-objective-functions"]], "MATLAB Example": [[1, "matlab-example"]], "Mapping Coordinates": [[2, "mapping-coordinates"]], "Motivation for Registration": [[1, "motivation-for-registration"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]], "Objective functions": [[3, "objective-functions"]], "Optimisation": [[3, "optimisation"]], "Summary": [[7, "summary"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Transforming Images": [[4, "transforming-images"]], "Transforming Images in SPM": [[4, "transforming-images-in-spm"]], "Transforming an Image in Voxel-space": [[4, "transforming-an-image-in-voxel-space"]], "Transforming an Image in World-space": [[4, "transforming-an-image-in-world-space"]], "Using the \\mathbf{Q} Matrix for Mapping": [[2, "using-the-mathbf-q-matrix-for-mapping"]]}, "docnames": ["0.intro", "1.reg-problem", "2.mapping-coords", "3.finding-transforms", "4.transforming-images", "5.interpolation", "6.filtering", "7.summary", "README"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.mapping-coords.ipynb", "3.finding-transforms.ipynb", "4.transforming-images.ipynb", "5.interpolation.ipynb", "6.filtering.ipynb", "7.summary.md", "README.md"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [1, 2, 3], "0": [0, 1, 3, 4], "0000": 2, "01_t1w": [1, 2], "01_task": [1, 2], "0541": 2, "0542": 2, "1": [1, 2, 3, 4], "10": 1, "115": 4, "125": 2, "1250": 2, "127": [1, 2], "13": 4, "14": 1, "161": 0, "17": 1, "176": 1, "182": [1, 2], "1999": 3, "1_bold": [1, 2], "1x3": 1, "2": 3, "20": [2, 4], "2001": 3, "2024": 1, "21": 4, "210": 1, "23": 4, "256": 1, "2688": 0, "275": 0, "3": [3, 4], "31": 0, "34": 1, "3mm": 4, "4": [0, 2, 3], "40": 1, "4056": 2, "44": 0, "48": 2, "5000": 2, "52": 2, "55": 4, "55mm": 4, "57": 1, "59": 1, "5mm": 4, "6": 1, "64": [1, 4], "64mm": 4, "73": 4, "7972": 2, "81": 4, "83": 2, "8313": 2, "87": [1, 2], "9": 4, "9mm": 4, "9pl": 0, "A": [1, 3], "As": [0, 1, 2, 3, 4], "At": [2, 3], "For": [1, 2, 3, 4], "If": [1, 2, 3, 4], "In": [0, 1, 2, 3, 4, 7], "One": [3, 4], "The": [0, 2, 3, 4], "These": [0, 3, 4], "To": [1, 2, 3, 4], "_": [2, 3], "abl": [2, 3], "about": [2, 3, 4], "abov": [2, 3, 4], "ac": 0, "accord": 2, "achiev": [1, 2, 4], "across": [0, 1, 2, 3], "actual": [1, 4], "ad": 3, "adapt": 2, "addit": [1, 2], "adjust": 2, "advantag": 3, "affin": [2, 3, 4], "after": [1, 3], "aim": [1, 2, 3], "al": 3, "algorithm": 3, "align": [0, 1, 2, 3, 4], "all": [1, 3, 4], "allow": 0, "along": [1, 3, 4], "alphadata": 1, "alreadi": 1, "also": [0, 2, 3, 4], "alter": 4, "altern": [1, 2, 3], "although": 3, "amount": 3, "an": [1, 2, 3], "anat": 1, "anatom": [0, 1, 2, 3], "anatomi": [0, 1], "ani": [2, 3, 4], "anoth": [2, 4], "anterior": 1, "anymor": 4, "anyth": 4, "anywher": 2, "appli": [2, 3, 4], "applic": 1, "approach": [0, 2, 3], "ar": [0, 1, 2, 3, 4], "argument": 3, "arrai": 1, "asl": 0, "assess": 1, "associ": [1, 3, 4], "assum": [2, 3], "ast": 4, "atla": 1, "autom": 0, "automat": [1, 3], "avail": 3, "ax": 3, "axi": 4, "b": 3, "back": [2, 4], "backward": 4, "base": 3, "basic": 3, "becaus": [1, 2, 3, 4], "becom": [3, 4], "been": [1, 3, 4], "begin": [3, 4], "behind": 4, "being": [2, 3], "below": [1, 3, 4], "bend": 2, "best": 0, "better": [2, 3], "between": [1, 2, 3, 4], "beyond": [1, 3], "big": 3, "bigger": 3, "blank": 4, "blind": 3, "blood": 0, "bmatrix": 4, "bodi": 4, "bold": [0, 3], "booth": 0, "both": [1, 2, 3], "bound": [1, 4], "brain": [1, 2, 3, 4], "break": 1, "bring": 4, "broad": 1, "build": [0, 3], "c": [1, 3], "calcul": [2, 3], "call": [1, 3], "can": [1, 2, 3, 4], "cancel": 3, "cannot": [2, 3], "case": [1, 3], "caus": 1, "centr": 1, "cerebellum": 3, "certain": 3, "chang": [1, 2, 3, 4], "choic": [3, 4], "choos": 3, "cingul": 1, "clearer": 4, "clearli": [1, 3], "click": 2, "close": 3, "closest": 2, "co": 3, "code": [1, 2], "cognit": 0, "collat": 1, "collect": [0, 2], "color": 1, "colormap": 1, "combin": [3, 4], "come": 2, "common": 2, "commun": 0, "compar": [3, 4], "comparison": [1, 4], "complet": [1, 3], "complex": [2, 3], "comput": [0, 2, 3], "computation": 4, "concept": 3, "conceptualis": 4, "consid": [1, 2, 3], "contain": 1, "content": 2, "context": [1, 4], "contextualis": 4, "contrast": 0, "convert": [2, 4], "coordin": [0, 1, 3, 4], "copi": 4, "core": 1, "correct": [1, 2, 3], "correspond": [0, 1, 2, 3, 4], "cost": [2, 3], "could": [3, 4], "cours": 3, "covert": 2, "creat": [1, 3, 4], "cross": 3, "dai": 3, "data": [1, 4], "dataset": 1, "deal": 3, "decis": 3, "deduc": 3, "deepest": 3, "default": [1, 2], "defin": [2, 3, 4], "definit": 2, "degre": [2, 3], "depend": 3, "deriv": 3, "desir": 3, "despit": 3, "detail": 3, "did": 4, "differ": [0, 1, 2, 3, 4], "difficult": 3, "dimens": [0, 1, 2, 3, 4], "direct": 3, "directli": [3, 4], "disadvantag": 3, "discov": 3, "discuss": [0, 2, 3, 4], "displai": 4, "divis": 0, "do": [1, 2, 3, 4], "document": 1, "doe": [1, 2], "done": [1, 4], "doubl": [1, 2], "down": 1, "download": 1, "dr": 0, "draw": 1, "drawcrosshair": 1, "drop": 2, "dti": 0, "dure": 0, "e": 0, "each": [0, 1, 2, 3, 4], "earli": 3, "earlier": 4, "easiest": 3, "easili": 1, "east": 0, "effect": 4, "effici": 4, "either": 1, "element": [2, 3], "elsewher": 3, "encod": 4, "end": [2, 4], "enough": 3, "entropi": 3, "equat": [2, 3], "equival": 2, "establish": 3, "et": 3, "even": 1, "everyth": 3, "evid": 3, "exampl": [2, 3, 4], "exce": 1, "exclus": 4, "exist": 1, "expand": 2, "experi": 0, "explor": [1, 3, 4, 7], "express": 3, "extract": 1, "face": 3, "fact": 3, "factor": 4, "far": 3, "fast": 3, "fhea": 0, "field": 1, "fig": [2, 3], "figur": 1, "file": 1, "find": [0, 2], "finish": 3, "first": [2, 3, 4], "fix": 1, "flag": 1, "flanker_run": [1, 2], "flavour": 3, "flexibl": [2, 3], "flow": 0, "fmri": [1, 3], "focu": [1, 2], "focus": 4, "follow": [1, 2, 4], "forev": 4, "form": [1, 2, 3, 4], "formalis": [0, 3], "found": 3, "foundat": 3, "framework": [1, 4], "free": 2, "from": [0, 1, 2, 3, 4], "frontal": 3, "full": 3, "func": 1, "function": [1, 2], "fundament": 0, "further": 4, "gca": 1, "gener": [1, 4], "get": [2, 3, 4], "give": [2, 3, 4], "given": [2, 3, 4], "global": 3, "go": 3, "goal": 1, "goe": 3, "good": [2, 3], "got": 3, "grasp": 4, "greater": [2, 3], "h": 3, "ha": [1, 3, 4], "had": 4, "happen": 3, "have": [1, 2, 3, 4, 7], "hdr_anat": 2, "hdr_func": 2, "header": [2, 4], "health": 0, "help": 3, "here": [2, 3], "heurist": 3, "highlight": [3, 4], "histogram": 3, "hit": 1, "hold": 1, "hopefulli": 2, "how": [0, 1, 2, 3, 4], "howev": [1, 2, 3, 4], "human": 0, "i": [0, 1, 2, 3, 4], "idea": [2, 3, 4], "ident": [1, 2, 3], "identifi": [0, 1], "ifunc": 1, "illustr": [2, 3, 4], "imag": [0, 2, 3], "imagesc": 1, "imagin": 3, "immedi": 1, "implement": 0, "implicitli": 3, "import": [1, 2, 3, 4], "impract": 3, "improv": 3, "includ": [0, 2], "increas": 3, "inde": 1, "index": [1, 4], "indic": 3, "inform": 1, "initi": 1, "insert": 4, "insid": 1, "instanc": [1, 2, 4], "instead": [2, 3, 4], "intens": 3, "interest": 1, "interp": 1, "interpol": [1, 3], "intuit": [2, 4], "inv": 2, "invers": 2, "invis": 4, "involv": 2, "irrespect": 2, "issu": [0, 1, 3], "its": [0, 3], "jenkinson": 3, "jet": 1, "job": 1, "joint": 3, "just": [1, 2, 3, 4], "keep": [1, 3, 4], "kei": 3, "know": [0, 2, 3, 4], "known": [0, 1, 2, 3], "landscap": 3, "larg": [1, 3], "larger": 3, "largest": 3, "last": [1, 2], "later": 4, "learn": 3, "lectur": 0, "left": 4, "less": 3, "lesson": [0, 1, 2, 3, 7], "let": 3, "like": [2, 4], "limit": [0, 3], "line": [1, 2], "linear": 2, "littl": 3, "load": 2, "lobe": 3, "local": 3, "localis": 1, "locat": [0, 1, 2, 3, 4], "longitudin": 1, "look": [3, 4], "lot": 3, "lower": 3, "m": [1, 2, 3, 4], "m13": 0, "ma": 4, "mai": [0, 1, 2, 3], "main": [3, 4], "mainli": 3, "make": [1, 2, 3, 4], "manag": 1, "manchest": 0, "mani": 3, "manual": 3, "map": [0, 1, 3, 4], "marti": 1, "martyn": 0, "mat": 2, "match": [1, 2, 3], "mathbf": [1, 3, 4], "matlab": 2, "matric": 2, "matrix": [1, 4], "matter": [0, 3], "maximum": 3, "mcfarquhar": 0, "mean": [1, 2, 3], "meaning": 1, "measur": [1, 3], "mention": 2, "method": [0, 2], "metric": 3, "millimetr": [2, 3, 4], "minimis": 3, "minimum": 3, "misalign": [2, 3], "modal": 3, "modifi": 1, "more": [2, 3, 4], "most": [1, 3], "motion": [1, 2, 3], "motiv": 4, "mountain": 3, "move": [1, 4], "mr": 0, "mt": 2, "much": [1, 3, 4], "multi": 1, "multipl": [1, 3, 4], "multipli": 4, "must": [0, 1, 3], "mutual": 3, "n": 3, "navig": 3, "nearest": 1, "necessari": [1, 2], "necessarili": 2, "need": [1, 2, 3, 4], "neg": [3, 4], "neighbour": 1, "neuroimag": 0, "neurosci": 0, "never": 3, "new": [1, 2, 4], "next": [2, 4], "nii": [1, 2], "nois": 3, "non": 2, "normal": 1, "normalis": 3, "note": [2, 3], "noth": 3, "notic": 4, "notion": 0, "now": [1, 2, 4], "number": 3, "numer": 3, "observ": 3, "obviou": 2, "occur": 3, "occurr": 3, "off": 3, "offer": 2, "often": [0, 1, 3, 4], "old": 4, "onc": [3, 4], "one": [1, 2, 3], "ones": 3, "onli": [2, 3, 4], "oper": [2, 4], "optim": 3, "option": 3, "order": [0, 1, 3, 4], "orient": [0, 2], "origin": [2, 3, 4], "other": [1, 2, 3], "our": [1, 2, 3, 4], "out": [2, 3, 4], "outsid": 1, "over": [1, 3], "overlai": 1, "overlap": [1, 3], "paper": 3, "paramet": 3, "part": [0, 1, 2], "particularli": 3, "past": 3, "peak": 3, "perfectli": 3, "perform": [3, 4], "perman": 4, "phd": 0, "pictur": 3, "place": 2, "point": [1, 2, 3, 4], "polish": 3, "poor": 2, "poorli": 3, "posit": [1, 3, 4], "possibl": 3, "potenti": 3, "practis": 3, "pre": 4, "precis": 3, "predict": 3, "prevent": 3, "previou": [2, 3, 4], "principl": [3, 4], "probabl": 3, "problem": [0, 3], "problemat": 3, "process": [0, 4], "produc": 3, "provid": [3, 4], "psychologi": 0, "pull": 4, "purpos": 3, "q": [1, 3, 4], "qa": 4, "quantifi": [0, 3], "queri": 1, "question": 2, "qx": 2, "r": 1, "random": 3, "rang": 1, "rather": 3, "reach": 3, "read": 1, "real": [2, 4], "realign": 1, "realis": 1, "reason": [2, 3], "recalcul": 3, "reduc": 3, "refer": [1, 3, 4], "reflect": 3, "region": 2, "regist": [1, 3], "registr": [0, 2, 3, 4], "reign": 2, "relat": 3, "render": 3, "replac": 4, "repres": [1, 2, 3], "represent": 4, "requir": [0, 1], "resampl": 1, "research": [0, 1], "resolut": [0, 2], "rest": 1, "restrict": 2, "result": [1, 3, 4], "right": 4, "rigid": 4, "rotat": [2, 3, 4], "roughli": 3, "rsub": 1, "rule": [2, 4], "run": 0, "s_": 3, "s_v": 3, "sai": [1, 3], "sake": 3, "same": [0, 1, 2, 3, 4], "save": 1, "saw": [2, 3, 4], "scale": [1, 2, 3], "scan": [0, 1], "scanner": 1, "school": 0, "scienc": 0, "scope": 3, "search": 3, "section": [2, 3, 4], "see": [0, 1, 2, 3, 4], "seem": [1, 3], "seen": 3, "sens": [2, 4], "sensit": 3, "sequenc": 1, "set": [1, 2, 3], "sever": 3, "share": 2, "shear": 2, "shift": [2, 4], "short": 4, "should": [2, 3, 4], "show": 3, "shown": 1, "similar": 3, "similarli": 2, "simpl": 3, "simpli": 1, "site": 1, "situat": [1, 3], "size": 1, "small": 3, "smaller": [1, 3], "smallest": 3, "smeari": 3, "smith": 3, "so": [1, 2, 3, 4], "softwar": [2, 3], "solut": 3, "solv": [0, 1], "some": [1, 2, 3, 4], "someth": [2, 3], "somewhat": 4, "soon": 3, "sort": [1, 3], "sourc": [1, 2, 3], "space": [1, 2, 3], "speak": 4, "spirit": 3, "spm": [0, 3], "spm12": 1, "spm_data_hdr_read": 2, "spm_data_read": 1, "spm_get_default": 1, "spm_my_default": 1, "spm_reslic": 1, "start": [2, 3], "stat": 1, "stationari": 1, "step": 0, "still": 2, "stop": 3, "street": 0, "structur": [1, 3], "stuck": 3, "studholm": 3, "studi": 1, "sub": [1, 2], "subject": [0, 3], "suggest": 3, "suitabl": 3, "sum": 3, "sum_": 3, "surround": 3, "system": [2, 3], "t": [0, 2, 3, 4], "t1": 3, "t_": 3, "t_v": 3, "take": [1, 2, 3, 4], "tani": 3, "target": [1, 2, 3], "task": [0, 2], "tell": [2, 3, 4], "templat": 1, "tend": 3, "term": [0, 2], "than": [1, 3], "thank": 2, "thei": [2, 3], "them": [1, 2, 4], "therefor": [2, 3, 4], "thi": [0, 1, 2, 3, 4, 7], "thing": 3, "think": [3, 4], "thoroughli": 3, "those": 2, "though": 1, "through": [3, 4], "thu": 3, "ti": 3, "time": [1, 3], "tm": [2, 3, 4], "togeth": [1, 3], "tractographi": 0, "transform": [0, 1, 2], "translat": [2, 3], "transpar": 1, "trough": 3, "try": [3, 4], "turn": [2, 4], "two": [1, 2, 3, 4], "type": 4, "typic": 4, "u": [2, 3, 4], "ui": 1, "uk": 0, "uncertainti": 3, "understand": [1, 3], "unit": [2, 4], "univers": 0, "unknown": 3, "unpredict": 3, "unrel": 3, "until": [1, 3], "up": [1, 2, 3, 4], "us": [0, 1, 3, 4], "useless": 1, "user": 1, "usual": [1, 3, 4], "util": 4, "v": 3, "v7141": 1, "vallei": 3, "valu": [1, 3, 4], "varianc": 3, "varieti": 3, "veri": [2, 3], "version": [2, 4], "via": 3, "video": 4, "view": 2, "visual": 3, "visualis": 2, "volum": 1, "voxel": [1, 2, 3], "wa": 3, "wai": [0, 1, 2, 3], "want": [1, 2, 3, 4], "we": [0, 1, 2, 3, 4, 7], "week": [1, 2, 4], "weight": 3, "well": [0, 1, 2, 3], "were": 3, "what": [2, 3], "when": [0, 1, 2, 3, 4], "where": [1, 2, 3, 4], "wherea": 2, "which": [0, 1, 2, 3], "white": 0, "why": [1, 2, 3], "wide": 1, "wider": 3, "window": 2, "within": [0, 1, 3, 4], "without": [3, 4], "word": 3, "work": [2, 3, 4], "world": [1, 2, 3], "wors": 3, "would": [1, 3, 4], "write": 1, "x": [2, 3], "y": [3, 4], "ydir": 1, "yet": 2, "you": [1, 2, 3, 4], "yourself": 1}, "titles": ["Introduction", "The Image Registration Problem", "Mapping Coordinates", "Finding the Best Transformation", "Transforming Images", "Interpolation", "Image Filtering", "Summary", "NCCN-FN-ImageRegistration"], "titleterms": {"The": 1, "about": 0, "an": 4, "author": 0, "best": 3, "content": 0, "coordin": 2, "evalu": 2, "exampl": 1, "filter": 6, "find": 3, "fn": 8, "function": 3, "imag": [1, 4, 6], "imageregistr": 8, "inform": 3, "interpol": 5, "introduct": 0, "least": 3, "map": 2, "mathbf": 2, "matlab": 1, "matrix": 2, "motiv": 1, "nccn": 8, "object": 3, "optimis": 3, "problem": 1, "q": 2, "registr": 1, "space": 4, "spm": 4, "squar": 3, "summari": 7, "theori": 3, "transform": [3, 4], "us": 2, "voxel": 4, "world": 4}})