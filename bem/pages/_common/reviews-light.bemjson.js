module.exports = [
    {block: 'reviews', content: [
        ((item)=>{
            return [item, item]
        })(
            {elem: 'item', content: [
                {elem: 'image', content: [
                    {block: 'img', src: '../../../upload/blank-165.jpg', mods: {lazyload: true, responsive: true, shape: 'circle'}}
                ]},
                {elem: 'body', content: [
                    {elem: 'name',  mods: {size: 'lg'}, content: [
                        {block: 'a', content: 'Александр, директор ООО Компания'}
                    ]},
                    {elem: 'text', content: '«Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются или клиента.»'}
                ]}
            ]}
        )
    ]}
];
