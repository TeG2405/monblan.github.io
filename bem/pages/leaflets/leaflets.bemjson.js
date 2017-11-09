module.exports = {
    block: 'page',
    title: 'Дизайн листовок',
    id: 'LEAFLETS',
    styles: [{elem: 'css', url: '../_merged/_merged.css'}],
    scripts: [
        {elem: 'js', url: '../_merged/_merged.async.js', async: true},
        {elem: 'js', url: '../_merged/_merged.js'}, 
        {elem: 'js', url: '../_merged/_merged.i18n.ru.js'}
    ],
    content: [
        require('../_common/header.bemjson.js'),
        {block: 'main', content: [
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {block: 'breadcrumb', content: [
                    {block: 'a', content: 'Главная'},
                    {block: 'span', content: 'Дизайн листовок'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Дизайн листовок, каталогов, визиток и т.д.'},
                {block: 'jump', content: [
                    {elem: 'inner', content: [
                        {block: 'img', src: 'http://placehold.it/400x250', mods: { lazyload: true, responsive: true}, mix: [{block: 'pull-right'}, {block: 'jump', elem: 'image'}], attrs: {width: 'auto'}},
                        {content: [
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение '},
                            {block: 'p', content: 'Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Перед печатью необходимо определиться с требованиями к книге - какого формата, на какой бумаге, это должна быть черно-белая книга или цветная, с каким переплетом. Если какой-либо из вопросов вызвал у Вас возникли затруднения, Вы можете обратиться к нам по ... или воспользоваться подсказками в таблице ниже.'},
                            {elem: 'collapse', mix: {block: 'collapse'}, attrs: {id: 'JUMP-1'}, content: [
                                {block: 'p', content: 'Перед печатью необходимо определиться с требованиями к книге - какого формата, на какой бумаге, это должна быть черно-белая книга или цветная, с каким переплетом. Если какой-либо из вопросов вызвал у Вас возникли затруднения, Вы можете обратиться к нам по ... или воспользоваться подсказками в таблице ниже. '}
                            ]}
                        ]},
                        {content: [
                            {elem: 'btn', attrs: {href: '#JUMP-1'}}
                        ]}
                    ]}
                ]}
            ]},
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {mix: [{block: 'catalog-section', elem: 'header'}, {block: 'mbl'}], content: [
                    {block: 'h', size: 2, mix: {block: 'mvn'}, content: 'Стоимость разработки дизайна листов'},
                    {block: 'btn', mods: {color: 'primary'}, mix: [{block: 'phl'}], content: 'Расчитать стоимость'}
                ]},
                {block: 'table', mods: {media: 'xs'}, mix: {block: 'table-bordered'}, content: [
                    {elem: 'thead', content: [
                        [['Наименование'], [{attrs: {style: 'width: 200px'}, content: 'Стоимость'}], ['Описание']]
                    ]},
                    {elem: 'tbody', content: [
                        ['Логотип', {block: 'nowrap', content: 'от 5 000 руб.'}, 'Разработка индивидуального дизайна с учетом фирменного стиля и всех требования, в 2х вариантах. Срок от 3х дней'],
                        ['Фирменный стил', {block: 'nowrap', content: 'от 15 000 руб.'}, 'Разработка индивидуального дизайна с учетом фирменного стиля и всех требования, в 2х вариантах. Срок от 3х дней'],
                        ['Брендбук', {block: 'nowrap', content: 'от 5 000 руб.'}, 'Разработка индивидуального дизайна с учетом фирменного стиля и всех требования, в 2х вариантах. Срок от 3х дней'],
                        ['Брендбук и логотип', {block: 'nowrap', content: 'от 51 000 руб.'}, 'Разработка индивидуального дизайна с учетом фирменного стиля и всех требования, в 2х вариантах. Срок от 3х дней'],
                        ['Внесение правок в существующий макет', {block: 'nowrap', content: 'от 5 000 руб.'}, 'Разработка индивидуального дизайна с учетом фирменного стиля и всех требования, в 2х вариантах. Срок от 3х дней']
                    ]}
                ]},
                {block: 'h', size: 2, content: 'Примеры выполненных работ'},
                require('../_common/carousel-works.bemjson.js'),
                {block: 'h', size: 2, content: 'Этапы и сроки разработки дизайна, форматы'},
                {block: 'jump', content: [
                    {elem: 'inner', content: [
                        {block: 'img', src: 'http://placehold.it/400x250', mods: { lazyload: true, responsive: true}, mix: [{block: 'pull-right'}, {block: 'jump', elem: 'image'}], attrs: {width: 'auto'}},
                        {content: [
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение '},
                            {block: 'p', content: 'Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {elem: 'collapse', mix: {block: 'collapse'}, attrs: {id: 'JUMP-2'}, content: [
                                {block: 'p', content: 'Перед печатью необходимо определиться с требованиями к книге - какого формата, на какой бумаге, это должна быть черно-белая книга или цветная, с каким переплетом. Если какой-либо из вопросов вызвал у Вас возникли затруднения, Вы можете обратиться к нам по ... или воспользоваться подсказками в таблице ниже. '}
                            ]}
                        ]},
                        {content: [
                            {elem: 'btn', attrs: {href: '#JUMP-2'}}
                        ]}
                    ]}
                ]},
                {block: 'hr'},
                {block: 'quote', content: [
                    {elem: 'header', content: [
                        {block: 'h', size: 2, mix: {block: 'mvn'}, content: 'Печать листовок'},
                        {block: 'btn', mods: {color: 'red'}, content: 'Заказть дизайн'}    
                    ]},
                    {elem: 'inner', content: [
                        {block: 'p', content: 'Наше издательство предлагает Вам полный спектр услуг по корректорским и редакторским работам, вер  стке, дизайну обложки и блока, сканированию и ретушированию фотографий, набору текстов с рукописей, печати и присвоению международного номера ISBN.'},
                        {block: 'p', content: 'Мы рады предложить Вам изготовление книг.'},
                        {block: 'p', content: 'Для придания Вашей книге статуса «издания» мы предлагаем Вам услугу «Издательский пакет». Она включает присвоение УДК, ББК, авторского знака и ISBN – международного серийного номера книги.'},
                    ]}
                ]},
                {block: 'hr'},

                require('../_common/articles.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
