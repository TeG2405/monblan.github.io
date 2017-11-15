module.exports = {
    block: 'page',
    title: 'Статьи',
    id: 'ARTICLES',
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
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Статьи'},
                {block: 'jump', content: [
                    {elem: 'inner', content: [
                        {mix: [{block: 'pull-right'}, {block: 'jump', elem: 'tile'}], content: [
                            require('../_common/nav-section-small.bemjson.js')
                        ]},
                        {content: [
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение '},
                            {block: 'p', content: 'Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
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
                require('../_common/articles-list.bemjson.js'),
                require('../_common/pagination.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
