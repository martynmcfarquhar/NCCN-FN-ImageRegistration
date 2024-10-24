Search.setIndex({"docnames": ["0.intro", "1.reg-problem", "2.mapping-coords", "3.finding-transforms", "4.applying-transforms", "5.registering-different-subs", "6.non-linear-reg", "7.summary", "README", "unused"], "filenames": ["0.intro.ipynb", "1.reg-problem.ipynb", "2.mapping-coords.ipynb", "3.finding-transforms.ipynb", "4.applying-transforms.ipynb", "5.registering-different-subs.ipynb", "6.non-linear-reg.ipynb", "7.summary.md", "README.md", "unused.ipynb"], "titles": ["Introduction", "The Image Registration Problem", "Mapping Coordinates", "Finding the Best Transformation", "Applying Transformations", "Registering Images from Different Subjects", "Non-linear Registration", "Summary", "NCCN-FN-ImageRegistration", "<code class=\"docutils literal notranslate\"><span class=\"pre\">MATLAB</span></code> Example"], "terms": {"registr": [0, 2, 3, 5, 9], "i": [0, 1, 2, 3, 4, 5, 6, 9], "fundament": [0, 5], "imag": [0, 2, 3, 6, 9], "process": [0, 5, 6], "step": [0, 4], "when": [0, 1, 2, 3, 4, 5, 6], "run": [0, 4], "neuroimag": [0, 5], "experi": 0, "research": [0, 1], "often": [0, 1, 3], "collect": [0, 2], "differ": [0, 1, 2, 3, 4, 6, 9], "scan": [0, 1, 5, 6], "from": [0, 1, 2, 3, 4, 9], "same": [0, 1, 2, 3, 4, 5, 6, 9], "subject": [0, 3, 6], "These": [0, 3, 4, 5, 6], "mai": [0, 1, 2, 3, 5, 9], "includ": [0, 2, 5], "anatom": [0, 1, 2, 3, 4, 5, 6, 9], "mr": 0, "bold": [0, 3], "dure": 0, "cognit": 0, "task": [0, 2], "asl": 0, "quantifi": [0, 3], "blood": 0, "flow": 0, "dti": 0, "white": [0, 6], "matter": [0, 3], "tractographi": 0, "each": [0, 1, 2, 3, 4, 5, 6], "term": [0, 2, 5], "its": [0, 3, 4, 6], "dimens": [0, 1, 2, 3, 4, 5, 9], "resolut": [0, 2, 4], "contrast": 0, "orient": [0, 2, 4], "anatomi": [0, 1, 5, 9], "In": [0, 1, 2, 3, 4, 5, 6, 7], "order": [0, 1, 3, 5, 6, 9], "us": [0, 1, 3, 5, 6, 9], "locat": [0, 1, 2, 3, 4, 5, 6, 9], "must": [0, 3, 6, 9], "identifi": [0, 9], "As": [0, 1, 2, 3, 4, 5, 6, 9], "method": [0, 2, 5, 6], "ar": [0, 1, 2, 3, 4, 5, 6, 9], "requir": [0, 6, 9], "allow": 0, "comput": [0, 2, 3], "know": [0, 2, 3, 4], "which": [0, 1, 2, 3, 5, 9], "part": [0, 2, 5, 9], "correspond": [0, 2, 3, 5, 9], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 9], "known": [0, 1, 2, 3, 5, 6], "lesson": [0, 2, 3, 4, 5, 7, 9], "we": [0, 1, 2, 3, 4, 5, 6, 7, 9], "formalis": [0, 3], "notion": 0, "align": [0, 1, 2, 3, 4, 5, 6, 9], "across": [0, 1, 2, 3, 4, 5], "discuss": [0, 2, 3, 4, 5], "autom": 0, "well": [0, 2, 3, 5, 9], "limit": [0, 3, 5, 6], "issu": [0, 1, 3, 5], "approach": [0, 2, 3, 6], "solv": [0, 5, 9], "problem": [0, 3, 5, 9], "also": [0, 2, 3], "see": [0, 2, 3, 4, 5, 9], "how": [0, 2, 3, 4, 6, 9], "implement": 0, "wai": [0, 1, 2, 3], "within": [0, 1, 3, 4], "spm": [0, 3, 6], "The": [0, 2, 3, 4, 6, 9], "map": [0, 1, 3, 4, 6, 9], "coordin": [0, 1, 3, 4, 5, 6], "find": [0, 2, 4, 5], "best": [0, 4], "transform": [0, 1, 2, 5, 6], "appli": [0, 2, 3, 6], "regist": [0, 1, 3, 4, 6, 9], "non": [0, 2, 5], "linear": [0, 2, 4, 5], "summari": 0, "dr": 0, "martyn": 0, "mcfarquhar": 0, "phd": 0, "fhea": 0, "lectur": 0, "4": [0, 2, 3], "31": 0, "booth": 0, "street": 0, "east": 0, "build": [0, 3], "divis": 0, "psychologi": 0, "commun": [0, 5], "human": 0, "neurosci": 0, "school": 0, "health": 0, "scienc": 0, "univers": 0, "manchest": 0, "m13": 0, "9pl": 0, "t": [0, 2, 3, 4], "44": 0, "0": [0, 3, 6, 9], "161": 0, "275": 0, "2688": 0, "e": 0, "ac": 0, "uk": 0, "core": 1, "applic": 1, "wide": 1, "rang": [1, 3], "context": [1, 9], "For": [1, 2, 3, 4, 5, 6, 9], "exampl": [1, 2, 3, 4, 5, 6], "necessari": [1, 2], "fmri": [1, 3, 6], "volum": 1, "correct": [1, 2, 3], "motion": [1, 2, 3], "longitudin": 1, "dataset": 1, "togeth": [1, 3], "assess": [1, 4], "chang": [1, 2, 3, 4], "over": [1, 3], "time": [1, 3, 4], "data": [1, 4, 5, 9], "scanner": 1, "site": 1, "multi": 1, "centr": 1, "templat": [1, 6], "atla": [1, 5], "localis": [1, 5], "result": [1, 3, 4, 5, 6, 9], "make": [1, 2, 3, 4, 5], "comparison": 1, "studi": [1, 5, 9], "all": [1, 3, 4, 5, 6], "case": [1, 3, 5], "can": [1, 2, 3, 4, 5, 6, 9], "break": 1, "down": [1, 3], "two": [1, 2, 3, 4, 5, 9], "our": [1, 2, 3, 5, 6], "gener": [1, 4, 5, 6], "framework": [1, 4], "where": [1, 2, 3, 4, 5, 6, 9], "goal": 1, "move": [1, 4, 5, 6], "one": [1, 2, 3, 4, 5, 6, 9], "other": [1, 2, 3, 4, 5, 9], "sourc": [1, 2, 3, 4, 6], "keep": [1, 3, 6], "stationari": 1, "target": [1, 2, 3], "refer": [1, 3, 4, 6], "To": [1, 2, 3, 4, 9], "need": [1, 2, 3, 4, 5, 6, 9], "consid": [1, 2, 3, 5, 6, 9], "shown": [1, 4, 5, 6], "below": [1, 3, 4, 5, 6, 9], "clearli": [1, 3, 5, 9], "becaus": [1, 2, 3, 4, 6, 9], "brain": [1, 2, 3, 5, 9], "doe": [1, 2, 4, 9], "overlap": [1, 3], "broad": 1, "aim": [1, 2, 3, 5], "would": [1, 3, 4, 5, 6, 9], "until": [1, 3], "point": [1, 2, 3, 4], "sai": [1, 3], "understand": [1, 3, 5, 9], "why": [1, 2, 3, 5, 9], "collat": 1, "meaning": 1, "inform": [1, 5], "multipl": [1, 3], "do": [1, 2, 3, 4, 5, 6, 9], "some": [1, 2, 3, 4, 5, 6, 9], "sort": [1, 3], "between": [1, 2, 3, 4, 5, 6, 9], "If": [1, 2, 3, 4, 9], "ident": [1, 2, 3, 5], "size": [1, 5, 9], "simpli": [1, 4, 5, 9], "an": [1, 2, 3, 4, 5, 6, 9], "sequenc": 1, "ha": [1, 3, 4, 5], "been": [1, 3, 4, 5, 9], "interpol": [1, 3, 4, 6, 9], "altern": [1, 2, 3, 4], "world": [1, 2, 3, 5, 6], "space": [1, 2, 3, 6, 9], "matrix": [1, 4], "mathbf": [1, 3, 4], "q": [1, 3, 4], "explor": [1, 3, 4, 7], "last": [1, 2, 4, 6], "week": [1, 2, 4], "either": [1, 4], "take": [1, 2, 3], "them": [1, 2], "extract": [1, 5, 9], "match": [1, 2, 3, 4, 5, 9], "voxel": [1, 2, 3, 5, 6, 9], "valu": [1, 3, 4, 6, 9], "most": [1, 3, 5, 6], "import": [1, 2, 3, 4, 6], "realis": 1, "just": [1, 2, 3, 9], "exist": [1, 9], "mean": [1, 2, 3, 4, 5, 6, 9], "instanc": [1, 2, 4, 5, 6, 9], "larg": [1, 3, 5], "useless": 1, "posit": [1, 3, 4, 9], "associ": [1, 3], "inde": 1, "insid": 1, "outsid": [1, 9], "addit": [1, 2, 5], "beyond": [1, 3, 5, 6], "mention": [2, 4], "previou": [2, 3], "section": [2, 3, 4, 6], "given": [2, 3, 4, 5, 6], "about": [2, 3, 4, 5], "affin": [2, 3, 6], "matric": [2, 6], "covert": 2, "obviou": [2, 5], "place": [2, 5], "start": [2, 3, 4], "expand": 2, "content": 2, "header": [2, 4, 6], "anoth": [2, 4, 5], "note": [2, 3], "have": [2, 3, 4, 5, 6, 7, 9], "free": 2, "reign": 2, "howev": [2, 3, 4, 6, 9], "like": [2, 3], "cannot": [2, 3], "bend": 2, "ani": [2, 3, 4, 6], "element": [2, 3], "instead": [2, 3, 5, 6], "restrict": 2, "onli": [2, 3, 4, 5], "being": [2, 3], "abl": [2, 3], "translat": [2, 3], "rotat": [2, 3], "scale": [2, 3, 9], "shear": 2, "get": [2, 3, 6], "line": [2, 9], "up": [2, 3, 4, 9], "sens": [2, 5], "wherea": [2, 5], "someth": [2, 3], "more": [2, 3, 6], "flexibl": [2, 3, 6], "At": [2, 3, 6], "end": [2, 4], "offer": 2, "greater": [2, 3], "cost": [2, 3, 5], "complex": [2, 3, 6], "saw": [2, 3, 4, 6], "defin": [2, 3, 5, 6], "version": 2, "those": [2, 5], "tm": [2, 3, 4], "1": [2, 3, 4, 9], "m": [2, 3, 4, 9], "work": [2, 3], "turn": [2, 4], "millimetr": [2, 3, 4, 5, 6], "convert": [2, 4, 6], "back": 2, "intuit": 2, "real": [2, 5], "unit": 2, "degre": [2, 3, 5], "similarli": 2, "want": [2, 3, 5, 6, 9], "yet": 2, "still": [2, 4, 5, 6], "thank": 2, "therefor": [2, 3, 5, 6], "common": [2, 5, 6], "system": [2, 3], "irrespect": 2, "question": 2, "achiev": [2, 9], "adapt": 2, "definit": 2, "_": [2, 3, 4], "": [2, 3, 4, 5, 9], "so": [2, 3, 4, 5, 6, 9], "what": [2, 3, 4, 5], "new": [2, 4, 6, 9], "assum": [2, 3], "x": [2, 3, 6], "repres": [2, 3, 5, 9], "oper": [2, 4], "qx": 2, "first": [2, 3, 4, 5], "invers": 2, "here": [2, 3, 6], "form": [2, 3, 6, 9], "abov": [2, 3], "adjust": 2, "misalign": [2, 3], "default": [2, 4, 5, 9], "set": [2, 3, 5, 9], "equival": 2, "drop": 2, "out": [2, 3], "equat": [2, 3], "give": [2, 3, 4, 6], "u": [2, 3, 6], "follow": [2, 4, 9], "matlab": 2, "code": [2, 9], "load": 2, "function": [2, 4, 5, 6, 9], "87": [2, 9], "182": [2, 9], "127": [2, 9], "hdr_anat": 2, "spm_data_hdr_read": 2, "sub": [2, 9], "01_t1w": [2, 9], "nii": [2, 9], "hdr_func": 2, "01_task": [2, 9], "flanker_run": [2, 9], "1_bold": [2, 9], "mt": 2, "mat": 2, "inv": 2, "doubl": [2, 9], "7972": 2, "48": 2, "4056": 2, "20": [2, 6], "1250": 2, "0000": 2, "accord": 2, "calcul": [2, 3, 6], "125": 2, "83": 2, "8313": 2, "52": 2, "0542": 2, "5000": 2, "0541": 2, "reason": [2, 3], "thei": [2, 3, 4, 5], "share": 2, "now": [2, 4, 5, 9], "good": [2, 3, 4], "idea": [2, 3], "both": [2, 3, 4, 9], "region": [2, 5], "origin": [2, 3, 5, 6], "anywher": 2, "rule": [2, 4], "involv": 2, "necessarili": 2, "tell": [2, 3], "visualis": 2, "fig": [2, 3, 4, 5], "you": [2, 3, 4, 6, 9], "view": [2, 3], "window": 2, "click": 2, "softwar": [2, 3, 5], "closest": 2, "veri": [2, 3], "poor": 2, "illustr": [2, 3, 4, 5], "hopefulli": [2, 5], "should": [2, 3], "come": [2, 4, 5], "shift": [2, 6], "better": [2, 3], "focu": [2, 9], "next": 2, "establish": 3, "creat": [3, 4, 5, 9], "render": [3, 4], "possibl": [3, 5], "could": 3, "via": 3, "manual": 3, "soon": 3, "impract": 3, "number": [3, 4, 5], "look": [3, 4, 5, 6], "automat": [3, 9], "go": [3, 4, 5], "numer": 3, "try": [3, 5], "recalcul": 3, "improv": [3, 4, 5], "found": [3, 4], "stop": 3, "measur": [3, 9], "depend": 3, "big": 3, "small": 3, "provid": 3, "choic": [3, 4], "sever": 3, "through": [3, 5], "main": [3, 4, 5, 6], "ones": 3, "avail": [3, 4], "One": [3, 5], "basic": [3, 6], "base": [3, 4, 5, 6], "ad": 3, "prevent": 3, "neg": 3, "cancel": 3, "sum": 3, "c": [3, 9], "sum_": 3, "v": 3, "n": 3, "t_": 3, "s_": 3, "2": 3, "t_v": 3, "s_v": 3, "indic": [3, 6], "modal": [3, 5], "similar": [3, 5], "compar": [3, 6], "bigger": 3, "thu": 3, "smaller": [3, 9], "advantag": [3, 5], "fast": 3, "disadvantag": 3, "suitabl": 3, "t1": 3, "weight": 3, "perform": [3, 4], "poorli": 3, "mainli": 3, "option": [3, 4], "elsewher": 3, "earli": 3, "dai": 3, "tend": 3, "simpl": [3, 6], "metric": 3, "wa": [3, 5], "discov": 3, "deriv": 3, "principl": [3, 4], "although": [3, 5], "full": 3, "foundat": 3, "scope": 3, "stone": 3, "2015": 3, "learn": [3, 5], "flavour": 3, "help": 3, "kei": 3, "concept": 3, "entropi": 3, "random": 3, "uncertainti": 3, "spirit": 3, "varianc": 3, "varieti": 3, "intens": 3, "larger": 3, "becom": [3, 5, 6], "less": [3, 5], "predict": 3, "perfectli": 3, "complet": [3, 4, 6, 9], "unpredict": 3, "seen": 3, "h": 3, "A": [3, 9], "nois": 3, "histogram": 3, "reflect": 3, "probabl": 3, "occur": 3, "structur": [3, 5, 9], "lower": 3, "joint": 3, "amount": [3, 5], "were": [3, 5], "increas": 3, "ti": 3, "deal": 3, "co": 3, "occurr": 3, "certain": 3, "combin": 3, "3": 3, "show": [3, 5], "after": [3, 6, 9], "wors": 3, "colour": 3, "height": 3, "bar": 3, "think": 3, "mountain": 3, "top": [3, 4], "bright": 3, "smeari": 3, "express": 3, "rather": [3, 6], "than": [3, 6, 9], "directli": [3, 6], "seem": [3, 9], "paper": 3, "past": 3, "jenkinson": 3, "smith": 3, "2001": 3, "choos": 3, "close": 3, "relat": 3, "call": [3, 5, 9], "mutual": [3, 5], "thing": [3, 4, 5], "b": 3, "observ": 3, "word": 3, "much": [3, 6, 9], "reduc": 3, "unrel": 3, "noth": 3, "everyth": 3, "maximum": 3, "normalis": [3, 6], "practis": 3, "evid": 3, "suggest": 3, "wider": 3, "sensit": 3, "studholm": 3, "et": 3, "al": 3, "1999": 3, "onc": [3, 4], "search": 3, "mani": [3, 5], "produc": [3, 5], "smallest": 3, "largest": 3, "algorithm": [3, 4], "detail": [3, 5, 6], "far": [3, 4, 5], "cours": [3, 5, 6], "lot": [3, 4, 5], "decis": 3, "tani": 3, "littl": 3, "imagin": 3, "paramet": [3, 6], "sake": 3, "argument": 3, "let": 3, "along": [3, 9], "y": [3, 6], "ax": 3, "situat": [3, 5, 9], "face": [3, 5], "desir": 3, "minimis": 3, "usual": [3, 9], "global": 3, "minimum": 3, "potenti": 3, "surround": 3, "peak": 3, "trough": 3, "navig": [3, 6], "visual": 3, "local": 3, "highlight": [3, 5], "difficult": [3, 5], "landscap": 3, "blind": 3, "pictur": 3, "vallei": 3, "thoroughli": 3, "enough": [3, 6], "deduc": 3, "deepest": 3, "without": 3, "despit": [3, 4], "unknown": 3, "purpos": [3, 4], "heurist": 3, "reach": 3, "direct": 3, "goe": 3, "got": 3, "stuck": 3, "problemat": 3, "finish": 3, "solut": [3, 5], "fact": [3, 5], "happen": 3, "off": 3, "optim": 3, "roughli": [3, 4, 5], "polish": 3, "easiest": 3, "cross": 3, "particularli": 3, "implicitli": 3, "frontal": 3, "lobe": 3, "cerebellum": 3, "never": 3, "precis": 3, "begin": 3, "behind": 4, "final": 4, "decid": 4, "optimis": [4, 6], "typic": [4, 5, 6], "second": 4, "resampl": [4, 5, 6, 9], "thought": 4, "redefin": 4, "confid": 4, "land": 4, "importantli": 4, "longer": [4, 6], "5": 4, "bottom": 4, "clear": [4, 5], "replac": 4, "ast": 4, "perman": 4, "forev": 4, "again": 4, "recognis": 4, "touch": 4, "anyth": 4, "had": 4, "6": [4, 9], "accur": [4, 5, 6], "pull": 4, "blank": 4, "whole": 4, "copi": [4, 6], "old": 4, "fraction": 4, "Not": 4, "7": 4, "illusr": [4, 5], "spent": 4, "talk": 4, "theori": [4, 6], "practic": 4, "side": 4, "yourself": [4, 9], "earlier": [4, 5], "chanc": 4, "success": [4, 5], "alreadi": [4, 9], "video": 4, "happi": 4, "procedur": 4, "themselv": 4, "tool": 4, "individu": [5, 6], "might": 5, "variabl": 5, "healthi": 5, "inconsist": 5, "finer": 5, "shape": 5, "variat": 5, "8": 5, "9": 5, "ag": 5, "caus": [5, 9], "analys": 5, "furthermor": 5, "abil": 5, "hamper": 5, "singl": 5, "analysi": 5, "group": 5, "nigh": 5, "imposs": 5, "statist": 5, "later": 5, "reli": 5, "remov": 5, "effect": 5, "warp": [5, 6], "spatial": 5, "pick": 5, "extent": 5, "someon": 5, "featur": 5, "util": 5, "report": 5, "rest": [5, 9], "standardis": 5, "chosen": 5, "major": 5, "agre": 5, "upon": 5, "standard": [5, 6], "develop": 5, "montreal": 5, "neurolog": 5, "institut": 5, "creation": 5, "design": 5, "adher": 5, "convent": 5, "attempt": 5, "neurosurgeon": 5, "jean": 5, "talairach": 5, "3d": 5, "cartesian": 5, "grid": 5, "anterior": [5, 9], "commissur": 5, "came": 5, "life": 5, "specimen": 5, "donat": 5, "elderli": 5, "french": 5, "ladi": 5, "averag": 5, "cohort": 5, "latest": 5, "albeit": 5, "gif": 5, "flick": 5, "while": 5, "grossli": 5, "discrep": 5, "ventricl": 5, "outlin": 5, "itself": 5, "modest": 5, "room": 5, "motiv": 5, "alon": 6, "independ": 6, "techniqu": 6, "present": 6, "remain": 6, "relev": 6, "mni": 6, "estim": 6, "object": 6, "12": 6, "specif": 6, "There": 6, "three": 6, "axi": 6, "z": 6, "contain": [6, 9], "Of": 6, "almost": 6, "alwai": 6, "around": 6, "red": 6, "18": 6, "01": 6, "fashion": 6, "pre": 6, "befor": 6, "apppli": 6, "reuseabl": 6, "long": 6, "read": 9, "anat": 9, "spm_data_read": 9, "func": 9, "download": 9, "interest": 9, "cingul": 9, "easili": 9, "210": 9, "file": 9, "hit": 9, "index": 9, "exce": 9, "arrai": 9, "bound": 9, "64": 9, "queri": 9, "1x3": 9, "176": 9, "256": 9, "40": 9, "spm_reslic": 9, "flag": 9, "spm_get_default": 9, "realign": 9, "write": 9, "interp": 9, "nearest": 9, "neighbour": 9, "modifi": 9, "user": 9, "marti": 9, "document": 9, "spm_my_default": 9, "field": 9, "ui": 9, "stat": 9, "spm12": 9, "v7141": 9, "14": 9, "34": 9, "57": 9, "17": 9, "10": 9, "2024": 9, "59": 9, "rsub": 9, "save": 9, "ifunc": 9, "job": 9, "done": 9, "manag": 9, "immedi": 9, "overlai": 9, "figur": 9, "imagesc": 9, "hold": 9, "alphadata": 9, "draw": 9, "transpar": 9, "gca": 9, "ydir": 9, "normal": 9, "colormap": 9, "jet": 9, "drawcrosshair": 9, "color": 9, "r": 9, "even": 9, "though": 9, "initi": 9, "actual": 9, "fix": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"introduct": 0, "content": 0, "about": 0, "author": 0, "The": [1, 5], "imag": [1, 4, 5], "registr": [1, 4, 6], "problem": 1, "motiv": 1, "map": 2, "coordin": 2, "us": [2, 4], "mathbf": 2, "q": 2, "matrix": 2, "evalu": 2, "find": 3, "best": 3, "transform": [3, 4], "object": 3, "function": 3, "least": 3, "squar": 3, "inform": 3, "theori": 3, "optimis": 3, "appli": 4, "world": 4, "space": [4, 5], "voxel": 4, "spm": 4, "manual": 4, "autom": 4, "regist": 5, "from": 5, "differ": 5, "subject": 5, "templat": 5, "mni": 5, "affin": 5, "approach": 5, "normalis": 5, "non": 6, "linear": 6, "deform": 6, "field": 6, "summari": 7, "nccn": 8, "fn": 8, "imageregistr": 8, "matlab": 9, "exampl": 9}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 57}, "alltitles": {"Introduction": [[0, "introduction"]], "Contents": [[0, "contents"]], "About the Author": [[0, "about-the-author"]], "The Image Registration Problem": [[1, "the-image-registration-problem"]], "Motivation for Registration": [[1, "motivation-for-registration"]], "Mapping Coordinates": [[2, "mapping-coordinates"]], "Using the \\mathbf{Q} Matrix for Mapping": [[2, "using-the-mathbf-q-matrix-for-mapping"]], "Evaluating the Q matrix": [[2, "evaluating-the-q-matrix"]], "Finding the Best Transformation": [[3, "finding-the-best-transformation"]], "Objective functions": [[3, "objective-functions"]], "Least-squares": [[3, "least-squares"]], "Information Theory": [[3, "information-theory"]], "Optimisation": [[3, "optimisation"]], "Applying Transformations": [[4, "applying-transformations"]], "Applying the Transformation in World-space": [[4, "applying-the-transformation-in-world-space"]], "Applying the Transformation in Voxel-space": [[4, "applying-the-transformation-in-voxel-space"]], "Image Registration Using SPM": [[4, "image-registration-using-spm"]], "Manual Registration": [[4, "manual-registration"]], "Automated Registration": [[4, "automated-registration"]], "Registering Images from Different Subjects": [[5, "registering-images-from-different-subjects"]], "Template Spaces": [[5, "template-spaces"]], "The MNI Template Space": [[5, "the-mni-template-space"]], "Affine Approaches to Normalisation": [[5, "affine-approaches-to-normalisation"]], "Non-linear Registration": [[6, "non-linear-registration"]], "Deformation Fields": [[6, "deformation-fields"]], "Summary": [[7, "summary"]], "NCCN-FN-ImageRegistration": [[8, "nccn-fn-imageregistration"]], "MATLAB Example": [[9, "matlab-example"]]}, "indexentries": {}})