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
                {mix: [{block: 'row'}], content: [
                    {mix: [{block: 'row', elem: 'col', mods: {xs: 12, md: 8}}, {block: 'mbl'}], content: [
                        {block: 'p', content: 'Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются роду своей деятельности имеют большой круг общения. Передача визитки в процессе знакомства не только признак хорошего тона, но и хорошая возможность привлечь внимание потенциального делового партнера или клиента.'},
                        {block: 'p', content: 'Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются роду своей деятельности имеют большой круг общения. Передача визитки в процессе знакомства не только признак хорошего тона, но и хорошая возможность привлечь внимание потенциального делового партнера или клиента.'},
                        {block: 'p', content: 'Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются роду своей деятельности имеют большой круг общения. Передача визитки в процессе знакомства не только признак хорошего тона, но и хорошая возможность привлечь внимание потенциального делового партнера или клиента.'}
                    ]},
                    {mix: [{block: 'row', elem: 'col', mods: {xs: 12, md: 4}}, {block: 'mbl'}], content: [
                        require('../_common/nav-section-small.bemjson.js')
                    ]}
                ]},
                require('../_common/articles-list.bemjson.js'),
                require('../_common/pagination.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
