
function FindWord(text, search_word) {
    var list = [];
    word = 1;
    for (let i = 5; i < text.length - 1; i++) {
        if (text[i] == '\n') {
            list.push(text.substring(word + 1, i - 1))
            word = i;

        }
    }
    return list[list.indexOf(search_word) + 1];
}
function NewLine(text) {
    var list = "";
    word = 0;
    for (let i = 5; i < text.length - 1; i++) {
        if (text[i] == '\n') {
            list += '<a onclick=\"closeNav()\" href=\"#' + text.substring(word, i - 1) + '\">' + text.substring(word, i) + '</a>'
            word = i;

        }
    }
    return list;
}

function GetList(text) {
    return text.substring(text.search("Основная таблица") + "Основная таблица".length, text.search("Попробовать"));
}
