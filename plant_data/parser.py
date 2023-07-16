import json


def _average_for_range(range_str: str) -> int:
    range_cleaned: str = "".join(range_str.split()) # Remove all whitespace characters
    range_split: list = range_cleaned.split("-")
    if (len(range_split) != 2):
        return None

    start: int
    end: int
    try:
        start = float(range_split[0])
        end = float(range_split[1])
    except ValueError as e:
        return None

    return (start + end) / 2


csv_file: str = "data.csv"
json_file: str = "data.json"

csv_data: str = None
with open(csv_file, "r") as f:
    csv_data = f.read()

rows: list = csv_data.split("\n")
rows = rows[1:] # Remove the header row

json_data: dict = {}
for row in rows:
    row_split: list = row.split(",")
    if (len(row_split) != 8):
        print(f"WARN (parser)  plant info row with invalid information: {row}")
        continue
    
    info: dict = {}
    name: str = row_split[0]
    time_str: str = row_split[1]
    temp_str: str = row_split[2]
    hum_str: str = row_split[3]
    amount: str = row_split[4]
    water_str: str = row_split[5]
    height_str: str = row_split[6]
    drought_tol: str = row_split[7]

    time: int
    temp_avg: int
    hum_avg: int
    water: float
    height: int
    try:
        time = int(time_str)
        temp_avg = int(_average_for_range(temp_str))
        if (temp_avg == None):
            raise ValueError(f"cannot get average temp for {temp_str} in row {row}")
        hum_avg = int(_average_for_range(hum_str))
        if (hum_avg == None):
            raise ValueError(f"cannot get average hum for {hum_str} in row {row}")
        water = _average_for_range(water_str[:len(water_str) - 7])
        if (water == None):
            raise ValueError(f"cannot get average water/wk for {water_str} in row {row}")
        height = int(height_str)
    except ValueError as e:
        print(f"ERROR (parser)  cannot parse row info: {row}")
        
    info["time"] = time
    info["temp"] = temp_avg
    info["hum"] = hum_avg
    info["mass"] = amount
    info["water"] = water
    info["height"] = height
    info["drought_tol"] = drought_tol

    json_data[name] = info
    print(name)

with open(json_file, "w") as f:
    json.dump(json_data, f)
