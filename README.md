
[Demo](https://frostwolm.github.io/valid_form/)

## Аргументы конструктора
Конструктор класса принимает два аргумента:
1. Строка - id элемента в котором появится форма
2. Объект - объект с опциями

### Опции
Объект с опциями содержит строковые поля:
- URL - URL куда будет отправлен запрос;
- NOT_VALID_CSS_CLASS - имя класса невалидной группы инпутов;
- FORM_HTML - строка с HTML разметкой формы

## Пример использования
Форма внутри элемента с id "container_id" c раметкой по умолчанию, URL - "test.ru", имя класс - "not_valid".  

`
const formValid = new FormValid('container_id', {
    URL: "test.ru",
    NOT_VALID_CSS_CLASS: "not_valid"
});
`