import os
from PIL import Image


image_folder: str = "../garden.ai/src/asset"
image_files: list = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]

color_definitions: dict = {}
for image_file in image_files:
    if (not image_file.endswith(".png")):
        continue
    
    crop_type: str = image_file.replace(".png", "")
    full_file_path: str = os.path.join(image_folder, image_file)

    image: Image = Image.open(full_file_path)
    width, height = image.size
    colors: list = image.getcolors(width * height)

    most_freq_count: int = -1
    most_freq_color: tuple = None
    for color_info in colors:
        frequency: int = color_info[0]
        color: tuple = color_info[1]
        if (color[3] == 0 or
            (color[0] == 255 and color[1] == 255 and color[2] == 255) or
            (color[0] == 0 and color[1] == 0 and color[2] == 0)):
            continue
        
        if (frequency > most_freq_count):
            most_freq_count = frequency
            most_freq_color = color

    color_definitions[crop_type] = "%02x%02x%02x" % most_freq_color[:3]

print(color_definitions.__str__().replace("'", "\""))
    
