module.exports = {
    block: 'page',
    title: 'Печать визиток',
    id: 'CARD',
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
                    {block: 'span', content: 'Статьи'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Печать каталогов (журналов)'},
                {block: 'jump', content: [
                    {elem: 'inner', content: [
                        {mix: [{block: 'pull-right'}, {block: 'jump', elem: 'tile'}], content: [
                            require('../_common/nav-section-small.bemjson.js')
                        ]},
                        {content: [
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {elem: 'collapse', mix: {block: 'collapse'}, attrs: {id: 'JUMP-2'}, content: [
                                {block: 'p', content: 'Перед печатью необходимо определиться с требованиями к книге - какого формата, на какой бумаге, это должна быть черно-белая книга или цветная, с каким переплетом. Если какой-либо из вопросов вызвал у Вас возникли затруднения, Вы можете обратиться к нам по ... или воспользоваться подсказками в таблице ниже. '}
                            ]}
                        ]},
                        {content: [
                            {elem: 'btn', attrs: {href: '#JUMP-2'}}
                        ]}
                    ]}
                ]},
                {block: 'h', size: '2', content: 'Популярные варианты печати и Применяемые материалы'},
                require('../_common/catalog-section-card.bemjson.js'),
                {block: 'h', size: '2', content: 'Цены на печать каталогов (журналов)'},
                require('../_common/total.bemjson.js'),
                {block: 'mvl', mix: {block: 'pvx'}},
                {block: 'h', size: '2', content: 'Визитки, которые мы делаем'},
                require('../_common/carousel-works.bemjson.js'),
                {block: 'mvl', mix: {block: 'pvx'}},
                {block: 'h', size: '2', content: 'Как мы печатаем визитки/наклейки/пакеты'},
                require('../_common/tile-list-2.bemjson.js'),
                {block: 'h', size: '2', content: 'Наиболее частые вопросы'},
                require('../_common/collapse-list.bemjson.js'),
                {block: 'text-center', mix: [{block: 'mbl'}, {block: 'pbl'}], content: [
                    {mix: [{block: 'text-primary'}, {block: 'h2'}], content: 'Хотите заказать полный цикл изготовления?'},
                    {block: 'btn', mods: {color: 'primary', size: 'lg'}, content: 'Расчитать тираж'}
                ]},
                {block: 'hr'},
                {block: 'quote', content: [
                    {elem: 'header', content: [
                        {block: 'h', size: 2, mix: {block: 'mtn'}, content: 'Дизайн каталога'},
                        {block: 'btn', mods: {color: 'red'}, content: 'Заказть дизайн'}
                    ]},
                    {elem: 'inner', content: [
                        {block: 'p', content: 'Наше издательство предлагает Вам полный спектр услуг по корректорским и редакторским работам, вер  стке, дизайну обложки и блока, сканированию и ретушированию фотографий, набору текстов с рукописей, печати и присвоению международного номера ISBN.'},
                        {block: 'p', content: 'Мы рады предложить Вам изготовление книг.'},
                        {block: 'p', content: 'Для придания Вашей книге статуса «издания» мы предлагаем Вам услугу «Издательский пакет». Она включает присвоение УДК, ББК, авторского знака и ISBN – международного серийного номера книги.'},
                    ]}
                ]},
                {block: 'mvl'}
            ]},
            require('../_common/feature.bemjson.js'),
            require('../_common/portfolio-2.bemjson.js'),
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'h', size: '2', content: 'Отзывы клиентов'},
                        require('../_common/reviews-light.bemjson.js'),
                        {block: 'text-right', mix: {block: 'visible-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие отзывы'}
                        ]}
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'h', size: '2', content: 'Статьи'},
                        require('../_common/articles-list-light.bemjson.js'),
                        {block: 'text-right', mix: {block: 'visible-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие статьи'}
                        ]}
                    ]}
                ]},
                {mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'text-right', mix: {block: 'hidden-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие отзывы'}
                        ]}
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'text-right', mix: {block: 'hidden-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие статьи'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
