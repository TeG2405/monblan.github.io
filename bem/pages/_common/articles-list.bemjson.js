module.exports = [
    {block: 'articles', mix: [{block: 'pvn'}, {block: 'mtn'}], content: [
        {mix: {block: 'row'}, content: [
            {elem: 'list', content:
                (function (item) {
                    return [item, item, item, item, item, item, item, item, item]
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
                    ]}
                )
            }
        ]}
    ]}
];
