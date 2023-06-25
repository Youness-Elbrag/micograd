Search.setIndex({"docnames": ["autograd", "autograd.core", "autograd.torch", "autograd.torch.nn", "autograd.torch.optim", "index", "modules", "setup", "test"], "filenames": ["autograd.rst", "autograd.core.rst", "autograd.torch.rst", "autograd.torch.nn.rst", "autograd.torch.optim.rst", "index.rst", "modules.rst", "setup.rst", "test.rst"], "titles": ["autograd package", "autograd.core package", "autograd.torch package", "autograd.torch.nn package", "autograd.torch.optim package", "Welcome to Nano-AutoGrad's documentation!", "Nano-AutoGrad", "setup module", "test package"], "terms": {"core": [0, 6, 8], "submodul": [0, 6], "graph": [0, 2, 6, 8], "draw_dot": [0, 1], "trace": [0, 1], "spares_nn": [0, 6], "paramet": [0, 1, 2, 3, 4], "zero_grad": [0, 1, 2, 4], "sparselay": [0, 1], "sparsemlp": [0, 1], "sparseneuron": [0, 1], "engin": [0, 6, 8], "valu": [0, 1, 3, 8], "backward": [0, 1, 2, 8], "relu": [0, 1, 2, 3], "softmax": [0, 1, 2, 3], "nn": [0, 2, 6], "layer": [0, 1, 3], "mlp": [0, 1], "neuron": [0, 1], "torch": [0, 6], "function": [0, 1, 2], "optim": [0, 2], "lr_schedul": [0, 2], "init": [0, 6], "tensor": [0, 3, 6, 8], "node": [0, 1, 2], "t": [0, 2, 3], "accum_grad": [0, 2], "broadcast_axi": [0, 2], "exp": [0, 2, 3], "grad_en": [0, 2], "log": [0, 2, 3], "log_softmax": [0, 2, 3], "sigmoid": [0, 2, 3], "sum": [0, 2], "tanh": [0, 2, 3], "no_grad": [0, 2], "root": 1, "graph_nam": 1, "draw": 1, "comput": [1, 2, 3, 8], "us": [1, 2, 4, 8], "graphviz": 1, "arg": [1, 2, 3], "The": [1, 2, 3, 4, 8], "object": [1, 2, 3, 4, 8], "repres": [1, 2], "start": [1, 2], "point": 1, "name": [1, 2, 3], "filenam": 1, "return": [1, 2, 3, 4], "A": [1, 2], "digraph": 1, "from": [1, 2], "tupl": [1, 2], "contain": 1, "set": [1, 4], "edg": 1, "class": [1, 2, 3, 4], "base": [1, 2, 3, 4], "list": 1, "all": [1, 2, 3, 4], "gradient": [1, 2, 4, 8], "zero": [1, 4], "nin": 1, "nout": 1, "sparsiti": 1, "0": [1, 3, 4], "kwarg": [1, 3], "spars": 1, "nonlin": 1, "true": [1, 2], "data": [1, 2], "none": [1, 2], "_children": 1, "_op": 1, "label": 1, "store": [1, 2], "singl": [1, 4], "scalar": 1, "its": [1, 3], "keep_graph": 1, "fals": [1, 2], "perform": [1, 2, 3, 4, 8], "backpropag": [1, 2], "whether": 1, "keep": 1, "higher": 1, "order": 1, "appli": [1, 2, 3], "rectifi": [1, 2, 3], "linear": [1, 2, 3], "unit": [1, 2], "activ": [1, 2, 3], "new": 1, "output": 1, "binary_cross_entropi": [2, 3], "huber_loss": [2, 3], "mse_loss": [2, 3], "nll_loss": [2, 3], "forward": [2, 3, 8], "lrschedul": [2, 4], "get_lr": [2, 4], "step": [2, 4], "linearlr": [2, 4], "sgd": [2, 4], "grad_fn": 2, "next_funct": 2, "requires_grad": 2, "properti": 2, "transpos": 2, "grad": 2, "accumul": 2, "retain_graph": 2, "involv": 2, "leaf": 2, "requir": 2, "thi": [2, 3, 4, 8], "method": [2, 3, 4], "travers": 2, "associ": 2, "current": [2, 4], "propag": 2, "previou": 2, "respect": 2, "w": [2, 3], "r": 2, "retain": 2, "If": [2, 3, 8], "otherwis": 2, "freed": 2, "default": 2, "static": 2, "shape_left": 2, "shape_right": 2, "determin": 2, "ax": 2, "along": [2, 3], "which": [2, 3], "broadcast": 2, "occur": 2, "between": [2, 3], "two": 2, "shape": 2, "left": 2, "right": 2, "exponenti": [2, 3], "each": 2, "element": [2, 3], "result": [2, 3], "natur": [2, 3], "logarithm": [2, 3], "dim": [2, 3], "1": [2, 3, 4], "follow": 2, "dimens": [2, 3], "after": 2, "wise": [2, 3], "keepdim": 2, "reduc": 2, "ar": [2, 8], "option": 2, "size": 2, "hyperbol": [2, 3], "tangent": [2, 3], "interfac": 3, "input": 3, "target": 3, "binari": 3, "cross": 3, "entropi": 3, "loss": 3, "delta": 3, "huber": 3, "threshold": 3, "absolut": 3, "error": 3, "specifi": [3, 8], "mean": 3, "squar": 3, "mse": 3, "neg": 3, "likelihood": 3, "in_featur": 3, "out_featur": 3, "transform": 3, "y": 3, "x": 3, "b": 3, "inp": 3, "pass": [3, 8], "through": 3, "neural": 3, "network": 3, "need": 3, "implement": [3, 4, 8], "subclass": [3, 4], "defin": 3, "actual": 3, "take": 3, "place": 3, "dure": 3, "rais": [3, 8], "notimplementederror": 3, "i": [3, 8], "an": 3, "iter": 3, "over": 3, "sub": 3, "last_epoch": 4, "calcul": 4, "learn": 4, "rate": 4, "should": 4, "updat": 4, "epoch": 4, "start_factor": 4, "end_factor": 4, "total_it": 4, "lr": 4, "weight_decai": 4, "index": 5, "modul": [5, 6], "search": 5, "page": 5, "packag": 6, "subpackag": 6, "content": 6, "setup": 6, "test": 6, "test_engin": 6, "test_more_op": [6, 8], "test_sanity_check": [6, 8], "addit": 8, "oper": 8, "creat": 8, "same": 8, "replic": 8, "pytorch": 8, "assert": 8, "equal": 8, "assertionerror": 8, "differ": 8, "beyond": 8, "toler": 8, "saniti": 8, "check": 8}, "objects": {"": [[0, 0, 0, "-", "autograd"], [8, 0, 0, "-", "test"]], "autograd": [[1, 0, 0, "-", "core"], [2, 0, 0, "-", "torch"]], "autograd.core": [[1, 0, 0, "-", "Graph"], [1, 0, 0, "-", "Spares_nn"], [1, 0, 0, "-", "engine"], [1, 0, 0, "-", "nn"]], "autograd.core.Graph": [[1, 1, 1, "", "draw_dot"], [1, 1, 1, "", "trace"]], "autograd.core.Spares_nn": [[1, 2, 1, "", "Module"], [1, 2, 1, "", "SparseLayer"], [1, 2, 1, "", "SparseMLP"], [1, 2, 1, "", "SparseNeuron"]], "autograd.core.Spares_nn.Module": [[1, 3, 1, "", "parameters"], [1, 3, 1, "", "zero_grad"]], "autograd.core.Spares_nn.SparseLayer": [[1, 3, 1, "", "parameters"]], "autograd.core.Spares_nn.SparseMLP": [[1, 3, 1, "", "parameters"]], "autograd.core.Spares_nn.SparseNeuron": [[1, 3, 1, "", "parameters"]], "autograd.core.engine": [[1, 2, 1, "", "Value"]], "autograd.core.engine.Value": [[1, 3, 1, "", "backward"], [1, 3, 1, "", "relu"], [1, 3, 1, "", "softmax"]], "autograd.core.nn": [[1, 2, 1, "", "Layer"], [1, 2, 1, "", "MLP"], [1, 2, 1, "", "Module"], [1, 2, 1, "", "Neuron"]], "autograd.core.nn.Layer": [[1, 3, 1, "", "parameters"]], "autograd.core.nn.MLP": [[1, 3, 1, "", "parameters"]], "autograd.core.nn.Module": [[1, 3, 1, "", "parameters"], [1, 3, 1, "", "zero_grad"]], "autograd.core.nn.Neuron": [[1, 3, 1, "", "parameters"]], "autograd.torch": [[2, 0, 0, "-", "init"], [3, 0, 0, "-", "nn"], [4, 0, 0, "-", "optim"], [2, 0, 0, "-", "tensor"]], "autograd.torch.nn": [[3, 0, 0, "-", "functional"], [3, 0, 0, "-", "module"]], "autograd.torch.nn.functional": [[3, 1, 1, "", "binary_cross_entropy"], [3, 1, 1, "", "exp"], [3, 1, 1, "", "huber_loss"], [3, 1, 1, "", "log"], [3, 1, 1, "", "log_softmax"], [3, 1, 1, "", "mse_loss"], [3, 1, 1, "", "nll_loss"], [3, 1, 1, "", "relu"], [3, 1, 1, "", "sigmoid"], [3, 1, 1, "", "tanh"]], "autograd.torch.nn.module": [[3, 2, 1, "", "Linear"], [3, 2, 1, "", "Module"]], "autograd.torch.nn.module.Linear": [[3, 3, 1, "", "forward"]], "autograd.torch.nn.module.Module": [[3, 3, 1, "", "forward"], [3, 3, 1, "", "modules"], [3, 3, 1, "", "parameters"]], "autograd.torch.optim": [[4, 0, 0, "-", "lr_scheduler"], [4, 0, 0, "-", "optimizer"]], "autograd.torch.optim.lr_scheduler": [[4, 2, 1, "", "LRScheduler"], [4, 2, 1, "", "LinearLR"]], "autograd.torch.optim.lr_scheduler.LRScheduler": [[4, 3, 1, "", "get_lr"], [4, 3, 1, "", "step"]], "autograd.torch.optim.lr_scheduler.LinearLR": [[4, 3, 1, "", "get_lr"]], "autograd.torch.optim.optimizer": [[4, 2, 1, "", "Optimizer"], [4, 2, 1, "", "SGD"]], "autograd.torch.optim.optimizer.Optimizer": [[4, 3, 1, "", "step"], [4, 3, 1, "", "zero_grad"]], "autograd.torch.optim.optimizer.SGD": [[4, 3, 1, "", "step"]], "autograd.torch.tensor": [[2, 2, 1, "", "Node"], [2, 2, 1, "", "Tensor"], [2, 2, 1, "", "no_grad"]], "autograd.torch.tensor.Tensor": [[2, 4, 1, "", "T"], [2, 3, 1, "", "accum_grad"], [2, 3, 1, "", "backward"], [2, 3, 1, "", "broadcast_axis"], [2, 3, 1, "", "exp"], [2, 5, 1, "", "grad_enabled"], [2, 3, 1, "", "log"], [2, 3, 1, "", "log_softmax"], [2, 3, 1, "", "relu"], [2, 3, 1, "", "sigmoid"], [2, 3, 1, "", "sum"], [2, 3, 1, "", "tanh"]], "test": [[8, 0, 0, "-", "test_engine"]], "test.test_engine": [[8, 1, 1, "", "test_more_ops"], [8, 1, 1, "", "test_sanity_check"]]}, "objtypes": {"0": "py:module", "1": "py:function", "2": "py:class", "3": "py:method", "4": "py:property", "5": "py:attribute"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"], "2": ["py", "class", "Python class"], "3": ["py", "method", "Python method"], "4": ["py", "property", "Python property"], "5": ["py", "attribute", "Python attribute"]}, "titleterms": {"autograd": [0, 1, 2, 3, 4, 5, 6, 8], "packag": [0, 1, 2, 3, 4, 8], "subpackag": [0, 2], "modul": [0, 1, 2, 3, 4, 7, 8], "content": [0, 1, 2, 3, 4, 8], "core": 1, "submodul": [1, 2, 3, 4, 8], "graph": 1, "spares_nn": 1, "engin": 1, "nn": [1, 3], "torch": [2, 3, 4], "init": 2, "tensor": 2, "function": 3, "optim": 4, "lr_schedul": 4, "welcom": 5, "nano": [5, 6], "": 5, "document": 5, "indic": 5, "tabl": 5, "setup": 7, "test": 8, "test_engin": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"autograd package": [[0, "autograd-package"]], "Subpackages": [[0, "subpackages"], [2, "subpackages"]], "Module contents": [[0, "module-autograd"], [1, "module-autograd.core"], [2, "module-autograd.torch"], [3, "module-autograd.torch.nn"], [4, "module-autograd.torch.optim"], [8, "module-test"]], "autograd.core package": [[1, "autograd-core-package"]], "Submodules": [[1, "submodules"], [2, "submodules"], [3, "submodules"], [4, "submodules"], [8, "submodules"]], "autograd.core.Graph module": [[1, "module-autograd.core.Graph"]], "autograd.core.Spares_nn module": [[1, "module-autograd.core.Spares_nn"]], "autograd.core.engine module": [[1, "module-autograd.core.engine"]], "autograd.core.nn module": [[1, "module-autograd.core.nn"]], "autograd.torch package": [[2, "autograd-torch-package"]], "autograd.torch.init module": [[2, "module-autograd.torch.init"]], "autograd.torch.tensor module": [[2, "module-autograd.torch.tensor"]], "autograd.torch.nn package": [[3, "autograd-torch-nn-package"]], "autograd.torch.nn.functional module": [[3, "module-autograd.torch.nn.functional"]], "autograd.torch.nn.module module": [[3, "module-autograd.torch.nn.module"]], "autograd.torch.optim package": [[4, "autograd-torch-optim-package"]], "autograd.torch.optim.lr_scheduler module": [[4, "module-autograd.torch.optim.lr_scheduler"]], "autograd.torch.optim.optimizer module": [[4, "module-autograd.torch.optim.optimizer"]], "Welcome to Nano-AutoGrad's documentation!": [[5, "welcome-to-nano-autograd-s-documentation"]], "Indices and tables": [[5, "indices-and-tables"]], "Nano-AutoGrad": [[6, "nano-autograd"]], "setup module": [[7, "setup-module"]], "test package": [[8, "test-package"]], "test.autograd module": [[8, "test-autograd-module"]], "test.test_engine module": [[8, "module-test.test_engine"]]}, "indexentries": {"autograd": [[0, "module-autograd"]], "module": [[0, "module-autograd"], [1, "module-autograd.core"], [1, "module-autograd.core.Graph"], [1, "module-autograd.core.Spares_nn"], [1, "module-autograd.core.engine"], [1, "module-autograd.core.nn"], [2, "module-autograd.torch"], [2, "module-autograd.torch.init"], [2, "module-autograd.torch.tensor"], [3, "module-autograd.torch.nn"], [3, "module-autograd.torch.nn.functional"], [3, "module-autograd.torch.nn.module"], [4, "module-autograd.torch.optim"], [4, "module-autograd.torch.optim.lr_scheduler"], [4, "module-autograd.torch.optim.optimizer"], [8, "module-test"], [8, "module-test.test_engine"]], "layer (class in autograd.core.nn)": [[1, "autograd.core.nn.Layer"]], "mlp (class in autograd.core.nn)": [[1, "autograd.core.nn.MLP"]], "module (class in autograd.core.spares_nn)": [[1, "autograd.core.Spares_nn.Module"]], "module (class in autograd.core.nn)": [[1, "autograd.core.nn.Module"]], "neuron (class in autograd.core.nn)": [[1, "autograd.core.nn.Neuron"]], "sparselayer (class in autograd.core.spares_nn)": [[1, "autograd.core.Spares_nn.SparseLayer"]], "sparsemlp (class in autograd.core.spares_nn)": [[1, "autograd.core.Spares_nn.SparseMLP"]], "sparseneuron (class in autograd.core.spares_nn)": [[1, "autograd.core.Spares_nn.SparseNeuron"]], "value (class in autograd.core.engine)": [[1, "autograd.core.engine.Value"]], "autograd.core": [[1, "module-autograd.core"]], "autograd.core.graph": [[1, "module-autograd.core.Graph"]], "autograd.core.spares_nn": [[1, "module-autograd.core.Spares_nn"]], "autograd.core.engine": [[1, "module-autograd.core.engine"]], "autograd.core.nn": [[1, "module-autograd.core.nn"]], "backward() (autograd.core.engine.value method)": [[1, "autograd.core.engine.Value.backward"]], "draw_dot() (in module autograd.core.graph)": [[1, "autograd.core.Graph.draw_dot"]], "parameters() (autograd.core.spares_nn.module method)": [[1, "autograd.core.Spares_nn.Module.parameters"]], "parameters() (autograd.core.spares_nn.sparselayer method)": [[1, "autograd.core.Spares_nn.SparseLayer.parameters"]], "parameters() (autograd.core.spares_nn.sparsemlp method)": [[1, "autograd.core.Spares_nn.SparseMLP.parameters"]], "parameters() (autograd.core.spares_nn.sparseneuron method)": [[1, "autograd.core.Spares_nn.SparseNeuron.parameters"]], "parameters() (autograd.core.nn.layer method)": [[1, "autograd.core.nn.Layer.parameters"]], "parameters() (autograd.core.nn.mlp method)": [[1, "autograd.core.nn.MLP.parameters"]], "parameters() (autograd.core.nn.module method)": [[1, "autograd.core.nn.Module.parameters"]], "parameters() (autograd.core.nn.neuron method)": [[1, "autograd.core.nn.Neuron.parameters"]], "relu() (autograd.core.engine.value method)": [[1, "autograd.core.engine.Value.relu"]], "softmax() (autograd.core.engine.value method)": [[1, "autograd.core.engine.Value.softmax"]], "trace() (in module autograd.core.graph)": [[1, "autograd.core.Graph.trace"]], "zero_grad() (autograd.core.spares_nn.module method)": [[1, "autograd.core.Spares_nn.Module.zero_grad"]], "zero_grad() (autograd.core.nn.module method)": [[1, "autograd.core.nn.Module.zero_grad"]], "node (class in autograd.torch.tensor)": [[2, "autograd.torch.tensor.Node"]], "t (autograd.torch.tensor.tensor property)": [[2, "autograd.torch.tensor.Tensor.T"]], "tensor (class in autograd.torch.tensor)": [[2, "autograd.torch.tensor.Tensor"]], "accum_grad() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.accum_grad"]], "autograd.torch": [[2, "module-autograd.torch"]], "autograd.torch.init": [[2, "module-autograd.torch.init"]], "autograd.torch.tensor": [[2, "module-autograd.torch.tensor"]], "backward() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.backward"]], "broadcast_axis() (autograd.torch.tensor.tensor static method)": [[2, "autograd.torch.tensor.Tensor.broadcast_axis"]], "exp() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.exp"]], "grad_enabled (autograd.torch.tensor.tensor attribute)": [[2, "autograd.torch.tensor.Tensor.grad_enabled"]], "log() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.log"]], "log_softmax() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.log_softmax"]], "no_grad (class in autograd.torch.tensor)": [[2, "autograd.torch.tensor.no_grad"]], "relu() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.relu"]], "sigmoid() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.sigmoid"]], "sum() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.sum"]], "tanh() (autograd.torch.tensor.tensor method)": [[2, "autograd.torch.tensor.Tensor.tanh"]], "linear (class in autograd.torch.nn.module)": [[3, "autograd.torch.nn.module.Linear"]], "module (class in autograd.torch.nn.module)": [[3, "autograd.torch.nn.module.Module"]], "autograd.torch.nn": [[3, "module-autograd.torch.nn"]], "autograd.torch.nn.functional": [[3, "module-autograd.torch.nn.functional"]], "autograd.torch.nn.module": [[3, "module-autograd.torch.nn.module"]], "binary_cross_entropy() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.binary_cross_entropy"]], "exp() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.exp"]], "forward() (autograd.torch.nn.module.linear method)": [[3, "autograd.torch.nn.module.Linear.forward"]], "forward() (autograd.torch.nn.module.module method)": [[3, "autograd.torch.nn.module.Module.forward"]], "huber_loss() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.huber_loss"]], "log() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.log"]], "log_softmax() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.log_softmax"]], "modules() (autograd.torch.nn.module.module method)": [[3, "autograd.torch.nn.module.Module.modules"]], "mse_loss() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.mse_loss"]], "nll_loss() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.nll_loss"]], "parameters() (autograd.torch.nn.module.module method)": [[3, "autograd.torch.nn.module.Module.parameters"]], "relu() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.relu"]], "sigmoid() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.sigmoid"]], "tanh() (in module autograd.torch.nn.functional)": [[3, "autograd.torch.nn.functional.tanh"]], "lrscheduler (class in autograd.torch.optim.lr_scheduler)": [[4, "autograd.torch.optim.lr_scheduler.LRScheduler"]], "linearlr (class in autograd.torch.optim.lr_scheduler)": [[4, "autograd.torch.optim.lr_scheduler.LinearLR"]], "optimizer (class in autograd.torch.optim.optimizer)": [[4, "autograd.torch.optim.optimizer.Optimizer"]], "sgd (class in autograd.torch.optim.optimizer)": [[4, "autograd.torch.optim.optimizer.SGD"]], "autograd.torch.optim": [[4, "module-autograd.torch.optim"]], "autograd.torch.optim.lr_scheduler": [[4, "module-autograd.torch.optim.lr_scheduler"]], "autograd.torch.optim.optimizer": [[4, "module-autograd.torch.optim.optimizer"]], "get_lr() (autograd.torch.optim.lr_scheduler.lrscheduler method)": [[4, "autograd.torch.optim.lr_scheduler.LRScheduler.get_lr"]], "get_lr() (autograd.torch.optim.lr_scheduler.linearlr method)": [[4, "autograd.torch.optim.lr_scheduler.LinearLR.get_lr"]], "step() (autograd.torch.optim.lr_scheduler.lrscheduler method)": [[4, "autograd.torch.optim.lr_scheduler.LRScheduler.step"]], "step() (autograd.torch.optim.optimizer.optimizer method)": [[4, "autograd.torch.optim.optimizer.Optimizer.step"]], "step() (autograd.torch.optim.optimizer.sgd method)": [[4, "autograd.torch.optim.optimizer.SGD.step"]], "zero_grad() (autograd.torch.optim.optimizer.optimizer method)": [[4, "autograd.torch.optim.optimizer.Optimizer.zero_grad"]], "test": [[8, "module-test"]], "test.test_engine": [[8, "module-test.test_engine"]], "test_more_ops() (in module test.test_engine)": [[8, "test.test_engine.test_more_ops"]], "test_sanity_check() (in module test.test_engine)": [[8, "test.test_engine.test_sanity_check"]]}})