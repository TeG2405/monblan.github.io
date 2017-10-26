module.exports = [
    {block: 'catalog-section', content: ((list)=>{
        return [
            Object.keys(list).map((header)=>{
                return [
                    {elem: 'item', content: [
                        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                            {block: 'h', size: 2, content: [
                                {block: 'a', content: header}
                            ]},
                            {mix: {block: 'row'}, content: [
                                list[header].map((title)=>{
                                    return {mix: {block: 'row', elem: 'col', mods: {xs: 6, sm: 3, lg: 2}}, content: [
                                        {block: 'tile', content: [
                                            {elem: 'image', mix: {block: 'mbs'}, content: [
                                                {block: 'img', src: '../../../upload/blank-200.png', mods: {lazyload: true, responsive: true, shape: 'circle'}}
                                            ]},
                                            {elem: 'title', content: title}
                                        ]}
                                    ]}
                                })
                            ]}
                        ]}
                    ]}
                ]
            })
        ]
    })({
        'Книги': [
            'Издать книгу',
            'Печать книг',
            'Твердый переплет',
            'Мягкий переплет',
            'Подарочные книги'
        ],
        'Журналы и каталоги': [
            'Печать каталогов',
            'Печать журналов',
            'Печать газет'
        ],
        'Рекламная полиграфия': [
            'Печать листовок',
            'Печать флаеров',
            'Печать плакатов',
            'Печать наклеек',
            'Печать брошюр',
            'Печать буклетов'
        ],
        'Деловая полиграфия': [
            'Печать флаеров',
            'Печать блокнотов',
            'Печать бланков',
            'Печать календарей',
            'Квартальные календари',
            'Настольный календарь',
            'Настенный календарь'

        ],
        'Упаковка': [
            'Производственная упаковка',
            'Бумажные пакеты с логотипом',
            'Портфели из картона и пластика'
        ]
    })}
];
