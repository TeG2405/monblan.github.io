# img

Блок реализует тег img http://getbootstrap.com/css/#images

## Обзор

### Специализированные поля блока

| Поле | Тип | Описание |
| ----------- | ------------------- | -------- |
| src | String | URL изображения |
| alt | String | Альтернативный текст |

### Модификаторы блока

| Модификатор | Допустимые значения | Способы использования | Описание |
| ----------- | ------------------- | -------------------- | -------- |
| lazyload | true | BEMJSON | Загрузка изображения происходит лениво, т.е. в момент приближения к области просмотра |
| responsive | true | BEMJSON | Изображение занимает всю доступную ширину (но не более 100% от реального размера). При этом браузер не может посчитать изначальный размер и до загрзуки картинки ее размер считается как 0x0 |
| shape | rounded, circle, thumbnail | BEMJSON | Скругленные углы, круглое изображение и изображение в рамке соответственно |


### Публичные технологии блока

Блок реализован в технологиях:

* `bh.js`
* `js`

## Подробности

Модификатор lazyload не работает в IE8