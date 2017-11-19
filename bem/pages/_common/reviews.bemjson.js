module.exports = [
    {block: 'reviews', content: [
        ((item)=>{
            return [item, item, item, item]
        })(
            {elem: 'item', content: [
                {elem: 'image', content: [
                    {block: 'img', src: '../../../upload/blank-165.jpg', mods: {lazyload: true, responsive: true, shape: 'circle'}}
                ]},
                {elem: 'body', content: [
                    {elem: 'text', content: '«Мы выполнили большое количество работы на разную тему, все остались довольны и возвращаются или клиента.»'},
                    {elem: 'name', content: 'Александр, директор ООО Компания'},
                    {elem: 'date', content: '06.07.2017'}
                ]}
            ]}
        )
    ]}

];
