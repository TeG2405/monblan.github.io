module.exports = {
    block: 'page',
    title: 'Главная',
    id: 'INDEX',
    styles: [{elem: 'css', url: '../_merged/_merged.css'}],
    scripts: [
        {elem: 'js', url: '../_merged/_merged.async.js', async: true},
        {elem: 'js', url: '../_merged/_merged.js'}, 
        {elem: 'js', url: '../_merged/_merged.i18n.ru.js'}
    ],
    content: [
        require('../_common/header.bemjson.js'),
        {block: 'main', content: [
            {block: 'pattern', mods: {view: 'book'}, content: [
                {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                    {mix: {block: 'row'}, content: [
                        {mix: [
                            {block: 'row', elem: 'col', mods: {xs: 12,  md: 8, 'md-pull': 4}},
                            {block: 'pull-right'}
                        ], content: [
                            require('../_common/carousel.bemjson.js')
                        ]},
                        {mix: {block: 'row', elem: 'col', mods: {xs: 12,  md: 4, 'md-push': 8}}, content: [
                            require('../_common/nav-section.bemjson.js')
                        ]},
                        {mix: [
                            {block: 'row', elem: 'col', mods: {xs: 12,  md: 8, 'md-pull': 4}},
                            {block: 'pull-right'}
                        ], content: [
                            require('../_common/about.bemjson.js'),
                            require('../_common/form-calc.bemjson.js'),
                            require('../_common/form-feedback.bemjson.js')
                        ]}
                    ]},
                    require('../_common/benefits.bemjson.js')
                ]}
            ]},
            require('../_common/accent.bemjson.js'),
            require('../_common/portfolio.bemjson.js'),
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                require('../_common/articles.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
