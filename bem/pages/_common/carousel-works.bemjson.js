module.exports = [
    {block: 'carousel', mods: {view: 'works'}, content: [
        ((item)=>{
            return [item, item, item]
        })(
            {elem: 'item', attrs: {style: 'background-image: url("../../../upload/carousel-image-1.jpg")'}, content: [
                {elem: 'inner', content: [
                    {elem: 'caption', content: [
                        {elem: 'title', content: 'Каталог в мягком переплете'},
                        {block: 'p', content: 'Обычно выполняются на бумаге плотностью, с глянцевым покрытием, с односторонней или двусторонней печатью выполнены работы:'},
                        {block: 'list-square', content: [
                            'Работа 1',
                            'Работа 2',
                            'Работа 3'
                        ]},
                        {block: 'p', content: 'Листы соединены пружиной пластиковой <br> Листы отрывные'},
                    ]}
                ]}
            ]}
        )
    ]}
];
