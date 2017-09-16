module.exports = [
    {block: 'articles', content: [
        {elem: 'header', content: [
            {block: 'h', size: 2, mix: {block: 'mvn'}, content: 'Статьи'},
            {block: 'btn', mods: {color: 'red'}, content: 'Другие статьи'}
        ]},
        {elem: 'inner', mix: {block: 'row'}, content:
            (function (item) {
                return [item, item, item]
            })(
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4}}, content: [
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
];
