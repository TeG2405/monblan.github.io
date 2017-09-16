module.exports = [
    {block: 'h', size: '5', mix: {block: 'text-center'}, content: 'преимущества'},
    {block: 'benefits', content: [
        [
            {
                icon: 'world',
                title: 'Работаем со всеми регионами Российской Федерации и другими странами'
            },
            {
                icon: 'aircraft',
                title: 'Изготовленную продукцию доставляем по всей территории РФ'
            },
            {
                icon: 'percent',
                title: 'Предусмотрена система скидок и варианты бесплатной доставки'
            },
            {
                icon: 'monitor',
                title: 'Расчет и оформление заказов online'
            },
            {
                icon: 'medal',
                title: 'Высокое качество материалов = высокое качество продукции. Оперативное выполнение'
            }
        ].map(function (item) {
            return {
                elem: 'col', content: [
                    {elem: 'item', content: [
                        {elem: 'image', content: [
                            {block: 'icomoon', icon: item.icon}
                        ]},
                        {elem: 'description', content: item.title}
                    ]}
                ]
            }
        })
    ]}
];
