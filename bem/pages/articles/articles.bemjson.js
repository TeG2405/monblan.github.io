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
                    {block: 'a', mix: {block: 'visible-xs'}, content: 'Главная'},
                    {block: 'span', content: 'Статьи'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Статьи'},
                {block: 'p', content: 'Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются роду своей деятельности имеют большой круг общения. Передача визитки в процессе знакомства не только признак хорошего тона, но и хорошая возможность привлечь внимание потенциального делового партнера или клиента.'},
                {block: 'articles', mix: [{block: 'pvn'}], content: [
                    {mix: {block: 'row'}, content: [
                        {elem: 'list', content:
                            (function (item, list) {
                                return [list, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item, item]
                            })(
                                {mix: [{block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4}}, {block: 'mbl'}, {block: 'pbm'}], content: [
                                    {elem: 'item', content: [
                                        {elem: 'image', content: [
                                            {
                                                block: 'img',
                                                src: '../../../upload/article-1.jpg',
                                                mods: { lazyload: true, responsive: true}
                                            }
                                        ]},
                                        {elem: 'date', content: '15.07.2017'},
                                        {elem: 'title', content: [
                                            'Flint Group разработала новые краски XCURA EVO для технологии UV LED'
                                        ]},
                                        {elem: 'caption', content: [
                                            'В основе всех печатных систем Mouvent лежит инновационная кластерная конструкция Mouvent Cluster, которая предлагает абсолютно новый подход – использование базового кластера, встраиваемого в модульную масштабируемую матрицу, вместо отдельных печатных узлов для различного применения и разной ширины печати, – объясняет Мартин ван Вайенберг.'
                                        ]}
                                    ]}
                                ]},
                                {mix: [{block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4}}, {block: 'mbl'}, {block: 'pbm'}], content: [
                                    require('../_common/nav-section-small.bemjson.js')
                                ]}
                            )
                        }
                    ]}
                ]},
                require('../_common/pagination.bemjson.js')
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
