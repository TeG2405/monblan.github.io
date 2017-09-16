module.exports = [
    {block: 'form-calc', mix: [
        {block: 'hidden-xs'},
        {block: 'mvl'}
    ], content: [
        {elem: 'description', content: [
            'Расчет стоимости может быть выполнен для любого вида полиграфической продукции, будь то книги, листовки или каталоги '
        ]},
        {elem: 'control', content: [
            {block: 'btn', mods: {color: 'white', size: 'lg'}, content: [
                {block: 'icomoon', icon: 'calculator'},
                'Расчитать тираж'
            ]}
        ]}
    ]}
];
