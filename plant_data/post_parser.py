import json
from parser import json_file


data: dict
with open(json_file, "r") as f:
    data = json.load(f)

    
def get_names():
    string: str = "["
    names: list = list(data.keys())
    for i in range(len(names)):
        name: str = names[i]
        string += f"\"{name}\""
        if (i < len(names) - 1):
            string += ", "
    return string + "]"


names: list = get_names()
print(names)
print(f"Counted {len(data.keys())} products")
