
function FindWord(text, search_word) {
    var list = [];
    word = 1;
    for (let i = 5; i < text.length - 1; i++) {
        if (text[i] == '\n') {
            list.push(text.substring(word + 1, i))
            word = i;

        }
    }
    console.log(list);
    return list[list.indexOf(search_word) + 1];
}

function LoadRecipe(recipe_name) {
    var adress = decodeURI(window.location.href);
    if (adress.search("#") != -1) {
        adress = adress.substring(0, adress.search("#") + 1) + recipe_name;
    }
    else {
        adress +=
         "#" + recipe_name;
    }
    window.location = adress;
    location.reload();
}

function NewLine(text) {
    var list = "";
    word = 2;
    for (let i = 5; i < text.length - 1; i++) {
        if (text[i] == '\n') {
            recipe=text.substring(word-1, i)
            list += '<a onclick=\" LoadRecipe(\'' + recipe + '\')\" href=\"#' + recipe + '\">' + recipe + '</a>'
            word = i + 2;
        }
    }
    return list;
}

function GetList(text) {
    return text.substring(text.search("Основная таблица") + "Основная таблица".length, text.search("Попробовать"));
}
