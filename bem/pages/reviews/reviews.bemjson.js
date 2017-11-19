module.exports = {
    block: 'page',
    title: 'Отзывы',
    id: 'REVIEWS',
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
                    {block: 'span', content: 'Отзывы'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Отзывы и письма от благодарных клиентов'},
                {block: 'p', content: 'Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются роду своей деятельности имеют большой круг общения. Передача визитки в процессе знакомства не только признак хорошего тона, но и хорошая возможность привлечь внимание потенциального делового партнера или клиента.  '},
                {block: 'h', size: 2, content: 'Благодарственные письма'},
                require('../_common/reviews-slider.bemjson.js'),
                {block: 'h', size: 2, content: 'Отзывы'},
                {mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md:7, lg: 8}}, content: [
                        require('../_common/reviews.bemjson.js')
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md:5, lg: 4}}, content: [
                        require('../_common/reviews-add-form.bemjson.js')
                    ]}
                ]},
                require('../_common/pagination.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
