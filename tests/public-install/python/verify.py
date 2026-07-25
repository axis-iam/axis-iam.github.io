from importlib import metadata, util

import axis_vertex

assert axis_vertex is not None
assert metadata.version("axis-iam-vertex") == "0.1.0"
assert util.find_spec("iam_sdk") is None
