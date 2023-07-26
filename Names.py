import io

with io.open("Recipes.docx", encoding='utf-8') as file:
    for line in file:
        print(line)