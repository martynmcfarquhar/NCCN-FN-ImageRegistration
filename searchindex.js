Search.setIndex({"alltitles": {"About the Author": [[0, "about-the-author"]], "Applying Transformations": [[4, "applying-transformations"]], "Applying the Transformation in Voxel-space": [[4, "applying-the-transformation-in-voxel-space"]], "Applying the Transformation in World-space": [[4, "applying-the-transformation-in-world-space"]], "Automated Registration": [[4, "automated-registration"]], "Contents": [[0, "contents"]], "Evaluating the Q matrix": [[2, "evaluating-the-q-matrix"]], "Finding the Best Transformation": [[3, "finding-the-best-transformation"]], "Image Registration Using SPM": [[4, "image-registration-using-spm"]], "Information Theory": [[3, "information-theory"]], "Introduction": [[0, "introduction"]], "Least-squares": [[3, "least-squares"]], "MATLAB Example": [[9, "matlab-example"]], "Manual Registration": [[4, "manual-registration"]], "Mapping Coordinates": [[2, "mapping-coordinates"]], "Motivation for Registration": [[1, "motivation-for-registration"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]], "Non-linear Registration": [[6, "non-linear-registration"]], "Objective functions": [[3, "objective-functions"]], "Optimisation": [[3, "optimisation"]], "Registering Images from Different Subjects": [[5, "registering-images-from-different-subjects"]], "Summary": [[7, "summary"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Using the \\mathbf{Q} Matrix for Mapping": [[2, "using-the-mathbf-q-matrix-for-mapping"]]}, "docnames": ["0.intro", "1.reg-problem", "2.mapping-coords", "3.finding-transforms", "4.applying-transforms", "5.registering-different-subs", "6.non-linear-reg", "7.summary", "README", "unused"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.mapping-coords.ipynb", "3.finding-transforms.ipynb", "4.applying-transforms.ipynb", "5.registering-different-subs.ipynb", "6.non-linear-reg.ipynb", "7.summary.md", "README.md", "unused.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [2, 3, 4, 9], "0": [0, 3, 9], "0000": 2, "01_t1w": [2, 9], "01_task": [2, 9], "0541": 2, "0542": 2, "1": [2, 3, 4, 9], "10": 9, "125": 2, "1250": 2, "127": [2, 9], "14": 9, "161": 0, "17": 9, "176": 9, "182": [2, 9], "1999": 3, "1_bold": [2, 9], "1x3": 9, "2": 3, "20": 2, "2001": 3, "2015": 3, "2024": 9, "210": 9, "256": 9, "2688": 0, "275": 0, "3": 3, "31": 0, "34": 9, "4": [0, 2, 3], "40": 9, "4056": 2, "44": 0, "48": 2, "5": 4, "5000": 2, "52": 2, "57": 9, "59": 9, "6": [4, 9], "64": 9, "7": 4, "7972": 2, "83": 2, "8313": 2, "87": [2, 9], "9pl": 0, "A": [3, 9], "As": [0, 1, 2, 3, 4, 9], "At": [2, 3], "For": [1, 2, 3, 4, 9], "If": [1, 2, 3, 4, 9], "In": [0, 1, 2, 3, 4, 7], "Not": 4, "One": 3, "The": [0, 2, 3, 4, 9], "These": [0, 3, 4], "To": [1, 2, 3, 4, 9], "_": [2, 3, 4], "abl": [2, 3], "about": [2, 3, 4], "abov": [2, 3], "ac": 0, "accord": 2, "accur": 4, "achiev": [2, 9], "across": [0, 1, 2, 3, 4], "actual": 9, "ad": 3, "adapt": 2, "addit": [1, 2], "adjust": 2, "advantag": 3, "affin": [2, 3], "after": [3, 9], "again": 4, "aim": [1, 2, 3], "al": 3, "algorithm": [3, 4], "align": [0, 1, 2, 3, 4, 9], "all": [1, 3, 4], "allow": 0, "along": [3, 9], "alphadata": 9, "alreadi": [4, 9], "also": [0, 2, 3], "altern": [1, 2, 3, 4], "although": 3, "amount": 3, "an": [1, 2, 3, 4, 9], "anat": 9, "anatom": [0, 1, 2, 3, 4, 9], "anatomi": [0, 1, 9], "ani": [2, 3, 4], "anoth": [2, 4], "anterior": 9, "anyth": 4, "anywher": 2, "appli": [0, 2, 3], "applic": 1, "approach": [0, 2, 3], "ar": [0, 1, 2, 3, 4, 9], "argument": 3, "arrai": 9, "asl": 0, "assess": [1, 4], "associ": [1, 3], "assum": [2, 3], "ast": 4, "atla": 1, "autom": 0, "automat": [3, 9], "avail": [3, 4], "ax": 3, "b": 3, "back": 2, "bar": 3, "base": [3, 4], "basic": 3, "becaus": [1, 2, 3, 4, 9], "becom": 3, "been": [1, 3, 4, 9], "begin": 3, "behind": 4, "being": [2, 3], "below": [1, 3, 4, 9], "bend": 2, "best": [0, 4], "better": [2, 3], "between": [1, 2, 3, 4, 9], "beyond": [1, 3], "big": 3, "bigger": 3, "blank": 4, "blind": 3, "blood": 0, "bold": [0, 3], "booth": 0, "both": [2, 3, 4, 9], "bottom": 4, "bound": 9, "brain": [1, 2, 3, 9], "break": 1, "bright": 3, "broad": 1, "build": [0, 3], "c": [3, 9], "calcul": [2, 3], "call": [3, 9], "can": [1, 2, 3, 4, 9], "cancel": 3, "cannot": [2, 3], "case": [1, 3], "caus": 9, "centr": 1, "cerebellum": 3, "certain": 3, "chanc": 4, "chang": [1, 2, 3, 4], "choic": [3, 4], "choos": 3, "cingul": 9, "clear": 4, "clearli": [1, 3, 9], "click": 2, "close": 3, "closest": 2, "co": 3, "code": [2, 9], "cognit": 0, "collat": 1, "collect": [0, 2], "color": 9, "colormap": 9, "colour": 3, "combin": 3, "come": [2, 4], "common": 2, "commun": 0, "compar": 3, "comparison": 1, "complet": [3, 4, 9], "complex": [2, 3], "comput": [0, 2, 3], "concept": 3, "confid": 4, "consid": [1, 2, 3, 9], "contain": 9, "content": 2, "context": [1, 9], "contrast": 0, "convert": [2, 4], "coordin": [0, 1, 3, 4], "copi": 4, "core": 1, "correct": [1, 2, 3], "correspond": [0, 2, 3, 9], "cost": [2, 3], "could": 3, "cours": 3, "covert": 2, "creat": [3, 4, 9], "cross": 3, "dai": 3, "data": [1, 4, 9], "dataset": 1, "deal": 3, "decid": 4, "decis": 3, "deduc": 3, "deepest": 3, "default": [2, 4, 9], "defin": [2, 3], "definit": 2, "degre": [2, 3], "depend": 3, "deriv": 3, "desir": 3, "despit": [3, 4], "detail": 3, "differ": [0, 1, 2, 3, 4, 9], "difficult": 3, "dimens": [0, 1, 2, 3, 4, 9], "direct": 3, "directli": 3, "disadvantag": 3, "discov": 3, "discuss": [0, 2, 3, 4], "divis": 0, "do": [1, 2, 3, 4, 9], "document": 9, "doe": [1, 2, 4, 9], "done": 9, "doubl": [2, 9], "down": [1, 3], "download": 9, "dr": 0, "draw": 9, "drawcrosshair": 9, "drop": 2, "dti": 0, "dure": 0, "e": 0, "each": [0, 1, 2, 3, 4], "earli": 3, "earlier": 4, "easiest": 3, "easili": 9, "east": 0, "either": [1, 4], "element": [2, 3], "elsewher": 3, "end": [2, 4], "enough": 3, "entropi": 3, "equat": [2, 3], "equival": 2, "establish": 3, "et": 3, "even": 9, "everyth": 3, "evid": 3, "exampl": [1, 2, 3, 4], "exce": 9, "exist": [1, 9], "expand": 2, "experi": 0, "explor": [1, 3, 4, 7], "express": 3, "extract": [1, 9], "face": 3, "fact": 3, "far": [3, 4], "fast": 3, "fhea": 0, "field": 9, "fig": [2, 3, 4], "figur": 9, "file": 9, "final": 4, "find": [0, 2, 4], "finish": 3, "first": [2, 3, 4], "fix": 9, "flag": 9, "flanker_run": [2, 9], "flavour": 3, "flexibl": [2, 3], "flow": 0, "fmri": [1, 3], "focu": [2, 9], "follow": [2, 4, 9], "forev": 4, "form": [2, 3, 9], "formalis": [0, 3], "found": [3, 4], "foundat": 3, "fraction": 4, "framework": [1, 4], "free": 2, "from": [0, 1, 2, 3, 4, 9], "frontal": 3, "full": 3, "func": 9, "function": [2, 4, 9], "fundament": 0, "gca": 9, "gener": [1, 4], "get": [2, 3], "give": [2, 3, 4], "given": [2, 3, 4], "global": 3, "go": [3, 4], "goal": 1, "goe": 3, "good": [2, 3, 4], "got": 3, "greater": [2, 3], "h": 3, "ha": [1, 3, 4], "had": 4, "happen": 3, "happi": 4, "have": [2, 3, 4, 7, 9], "hdr_anat": 2, "hdr_func": 2, "header": [2, 4], "health": 0, "height": 3, "help": 3, "here": [2, 3], "heurist": 3, "highlight": 3, "histogram": 3, "hit": 9, "hold": 9, "hopefulli": 2, "how": [0, 2, 3, 4, 9], "howev": [2, 3, 4, 9], "human": 0, "i": [0, 1, 2, 3, 4, 9], "idea": [2, 3], "ident": [1, 2, 3], "identifi": [0, 9], "ifunc": 9, "illusr": 4, "illustr": [2, 3, 4], "imag": [0, 2, 3, 9], "imagesc": 9, "imagin": 3, "immedi": 9, "implement": 0, "implicitli": 3, "import": [1, 2, 3, 4], "importantli": 4, "impract": 3, "improv": [3, 4], "includ": [0, 2], "increas": 3, "inde": 1, "index": 9, "indic": 3, "inform": 1, "initi": 9, "insid": 1, "instanc": [1, 2, 4, 9], "instead": [2, 3], "intens": 3, "interest": 9, "interp": 9, "interpol": [1, 3, 4, 9], "intuit": 2, "inv": 2, "invers": 2, "involv": 2, "irrespect": 2, "issu": [0, 1, 3], "its": [0, 3, 4], "jenkinson": 3, "jet": 9, "job": 9, "joint": 3, "just": [1, 2, 3, 9], "keep": [1, 3], "kei": 3, "know": [0, 2, 3, 4], "known": [0, 1, 2, 3], "land": 4, "landscap": 3, "larg": [1, 3], "larger": 3, "largest": 3, "last": [1, 2, 4], "learn": 3, "lectur": 0, "less": 3, "lesson": [0, 2, 3, 4, 7, 9], "let": 3, "like": [2, 3], "limit": [0, 3], "line": [2, 9], "linear": [0, 2, 4], "littl": 3, "load": 2, "lobe": 3, "local": 3, "localis": 1, "locat": [0, 1, 2, 3, 4, 9], "longer": 4, "longitudin": 1, "look": [3, 4], "lot": [3, 4], "lower": 3, "m": [2, 3, 4, 9], "m13": 0, "mai": [0, 1, 2, 3, 9], "main": [3, 4], "mainli": 3, "make": [1, 2, 3, 4], "manag": 9, "manchest": 0, "mani": 3, "manual": 3, "map": [0, 1, 3, 4, 9], "marti": 9, "martyn": 0, "mat": 2, "match": [1, 2, 3, 4, 9], "mathbf": [1, 3, 4], "matlab": 2, "matric": 2, "matrix": [1, 4], "matter": [0, 3], "maximum": 3, "mcfarquhar": 0, "mean": [1, 2, 3, 4, 9], "meaning": 1, "measur": [3, 9], "mention": [2, 4], "method": [0, 2], "metric": 3, "millimetr": [2, 3, 4], "minimis": 3, "minimum": 3, "misalign": [2, 3], "modal": 3, "modifi": 9, "more": [2, 3], "most": [1, 3], "motion": [1, 2, 3], "mountain": 3, "move": [1, 4], "mr": 0, "mt": 2, "much": [3, 9], "multi": 1, "multipl": [1, 3], "must": [0, 3, 9], "mutual": 3, "n": 3, "navig": 3, "nearest": 9, "necessari": [1, 2], "necessarili": 2, "need": [1, 2, 3, 4, 9], "neg": 3, "neighbour": 9, "neuroimag": 0, "neurosci": 0, "never": 3, "new": [2, 4, 9], "next": 2, "nii": [2, 9], "nois": 3, "non": [0, 2], "normal": 9, "normalis": 3, "note": [2, 3], "noth": 3, "notion": 0, "now": [2, 4, 9], "number": [3, 4], "numer": 3, "observ": 3, "obviou": 2, "occur": 3, "occurr": 3, "off": 3, "offer": 2, "often": [0, 1, 3], "old": 4, "onc": [3, 4], "one": [1, 2, 3, 4, 9], "ones": 3, "onli": [2, 3, 4], "oper": [2, 4], "optim": 3, "optimis": 4, "option": [3, 4], "order": [0, 1, 3, 9], "orient": [0, 2, 4], "origin": [2, 3], "other": [1, 2, 3, 4, 9], "our": [1, 2, 3], "out": [2, 3], "outsid": [1, 9], "over": [1, 3], "overlai": 9, "overlap": [1, 3], "paper": 3, "paramet": 3, "part": [0, 2, 9], "particularli": 3, "past": 3, "peak": 3, "perfectli": 3, "perform": [3, 4], "perman": 4, "phd": 0, "pictur": 3, "place": 2, "point": [1, 2, 3, 4], "polish": 3, "poor": 2, "poorli": 3, "posit": [1, 3, 4, 9], "possibl": 3, "potenti": 3, "practic": 4, "practis": 3, "precis": 3, "predict": 3, "prevent": 3, "previou": [2, 3], "principl": [3, 4], "probabl": 3, "problem": [0, 3, 9], "problemat": 3, "procedur": 4, "process": 0, "produc": 3, "provid": 3, "psychologi": 0, "pull": 4, "purpos": [3, 4], "q": [1, 3, 4], "quantifi": [0, 3], "queri": 9, "question": 2, "qx": 2, "r": 9, "random": 3, "rang": [1, 3], "rather": 3, "reach": 3, "read": 9, "real": 2, "realign": 9, "realis": 1, "reason": [2, 3], "recalcul": 3, "recognis": 4, "redefin": 4, "reduc": 3, "refer": [1, 3, 4], "reflect": 3, "region": 2, "regist": [0, 1, 3, 4, 9], "registr": [0, 2, 3, 9], "reign": 2, "relat": 3, "render": [3, 4], "replac": 4, "repres": [2, 3, 9], "requir": [0, 9], "resampl": [4, 9], "research": [0, 1], "resolut": [0, 2, 4], "rest": 9, "restrict": 2, "result": [1, 3, 4, 9], "rotat": [2, 3], "roughli": [3, 4], "rsub": 9, "rule": [2, 4], "run": [0, 4], "s_": 3, "s_v": 3, "sai": [1, 3], "sake": 3, "same": [0, 1, 2, 3, 4, 9], "save": 9, "saw": [2, 3, 4], "scale": [2, 3, 9], "scan": [0, 1], "scanner": 1, "school": 0, "scienc": 0, "scope": 3, "search": 3, "second": 4, "section": [2, 3, 4], "see": [0, 2, 3, 4, 9], "seem": [3, 9], "seen": 3, "sens": 2, "sensit": 3, "sequenc": 1, "set": [2, 3, 9], "sever": 3, "share": 2, "shear": 2, "shift": 2, "should": [2, 3], "show": 3, "shown": [1, 4], "side": 4, "similar": 3, "similarli": 2, "simpl": 3, "simpli": [1, 4, 9], "site": 1, "situat": [3, 9], "size": [1, 9], "small": 3, "smaller": [3, 9], "smallest": 3, "smeari": 3, "smith": 3, "so": [2, 3, 4, 9], "softwar": [2, 3], "solut": 3, "solv": [0, 9], "some": [1, 2, 3, 4, 9], "someth": [2, 3], "soon": 3, "sort": [1, 3], "sourc": [1, 2, 3, 4], "space": [1, 2, 3, 9], "spent": 4, "spirit": 3, "spm": [0, 3], "spm12": 9, "spm_data_hdr_read": 2, "spm_data_read": 9, "spm_get_default": 9, "spm_my_default": 9, "spm_reslic": 9, "start": [2, 3, 4], "stat": 9, "stationari": 1, "step": [0, 4], "still": [2, 4], "stone": 3, "stop": 3, "street": 0, "structur": [3, 9], "stuck": 3, "studholm": 3, "studi": [1, 9], "sub": [2, 9], "subject": [0, 3], "success": 4, "suggest": 3, "suitabl": 3, "sum": 3, "sum_": 3, "summari": 0, "surround": 3, "system": [2, 3], "t": [0, 2, 3, 4], "t1": 3, "t_": 3, "t_v": 3, "take": [1, 2, 3], "talk": 4, "tani": 3, "target": [1, 2, 3], "task": [0, 2], "tell": [2, 3], "templat": 1, "tend": 3, "term": [0, 2], "than": [3, 9], "thank": 2, "thei": [2, 3, 4], "them": [1, 2], "themselv": 4, "theori": 4, "therefor": [2, 3], "thi": [0, 1, 2, 3, 4, 7, 9], "thing": [3, 4], "think": 3, "thoroughli": 3, "those": 2, "though": 9, "thought": 4, "through": 3, "thu": 3, "ti": 3, "time": [1, 3, 4], "tm": [2, 3, 4], "togeth": [1, 3], "tool": 4, "top": [3, 4], "touch": 4, "tractographi": 0, "transform": [0, 1, 2], "translat": [2, 3], "transpar": 9, "trough": 3, "try": 3, "turn": [2, 4], "two": [1, 2, 3, 4, 9], "typic": 4, "u": [2, 3], "ui": 9, "uk": 0, "uncertainti": 3, "understand": [1, 3, 9], "unit": 2, "univers": 0, "unknown": 3, "unpredict": 3, "unrel": 3, "until": [1, 3], "up": [2, 3, 4, 9], "us": [0, 1, 3, 9], "useless": 1, "user": 9, "usual": [3, 9], "v": 3, "v7141": 9, "vallei": 3, "valu": [1, 3, 4, 9], "varianc": 3, "varieti": 3, "veri": [2, 3], "version": 2, "via": 3, "video": 4, "view": [2, 3], "visual": 3, "visualis": 2, "volum": 1, "voxel": [1, 2, 3, 9], "wa": 3, "wai": [0, 1, 2, 3], "want": [2, 3, 9], "we": [0, 1, 2, 3, 4, 7, 9], "week": [1, 2, 4], "weight": 3, "well": [0, 2, 3, 9], "were": 3, "what": [2, 3, 4], "when": [0, 1, 2, 3, 4], "where": [1, 2, 3, 4, 9], "wherea": 2, "which": [0, 1, 2, 3, 9], "white": 0, "whole": 4, "why": [1, 2, 3, 9], "wide": 1, "wider": 3, "window": 2, "within": [0, 1, 3, 4], "without": 3, "word": 3, "work": [2, 3], "world": [1, 2, 3], "wors": 3, "would": [1, 3, 4, 9], "write": 9, "x": [2, 3], "y": 3, "ydir": 9, "yet": 2, "you": [2, 3, 4, 9], "yourself": [4, 9]}, "titles": ["Introduction", "The Image Registration Problem", "Mapping Coordinates", "Finding the Best Transformation", "Applying Transformations", "Registering Images from Different Subjects", "Non-linear Registration", "Summary", "NCCN-FN-ImageRegistration", "<code class=\"docutils literal notranslate\"><span class=\"pre\">MATLAB</span></code> Example"], "titleterms": {"The": 1, "about": 0, "appli": 4, "author": 0, "autom": 4, "best": 3, "content": 0, "coordin": 2, "differ": 5, "evalu": 2, "exampl": 9, "find": 3, "fn": 8, "from": 5, "function": 3, "imag": [1, 4, 5], "imageregistr": 8, "inform": 3, "introduct": 0, "least": 3, "linear": 6, "manual": 4, "map": 2, "mathbf": 2, "matlab": 9, "matrix": 2, "motiv": 1, "nccn": 8, "non": 6, "object": 3, "optimis": 3, "problem": 1, "q": 2, "regist": 5, "registr": [1, 4, 6], "space": 4, "spm": 4, "squar": 3, "subject": 5, "summari": 7, "theori": 3, "transform": [3, 4], "us": [2, 4], "voxel": 4, "world": 4}})