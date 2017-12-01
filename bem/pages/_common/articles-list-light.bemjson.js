module.exports = [
    {block: 'reviews', content: [
        ((item)=>{
            return [item, item]
        })(
            {elem: 'item', content: [
                {elem: 'image', content: [
                    {block: 'img', src: '../../../upload/blank-165.jpg', mods: {lazyload: true, responsive: true}}
                ]},
                {elem: 'body', content: [
                    {elem: 'date', mix: {block: 'mbs'}, content: '06.07.2017'},
                    {elem: 'name', mods: {size: 'lg'}, content: [
                        {block: 'a', content: 'Flint Group разработала новые краски XCURA EVO для технологии UV LED'}
                    ]},
                    {elem: 'text', content: '«Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются или клиента.»'},
                ]}
            ]}
        )
    ]}
];
