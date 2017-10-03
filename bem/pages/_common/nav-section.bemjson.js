function getList(map, images, flag){
    return Object.keys(map).map((item, index)=>{
        return {
            elem: 'li', mods: {line: flag && (index > images.length - 4)}, mix: {block: !flag && !index ? 'open' : ''}, content: [
                {elem: 'image', mods: {icon: images[index] ? images[index]: false}},
                {elem: 'link', content: item},
                {elem: 'dropdown', content: [
                    map[item].map((item)=>{
                        return {
                            elem: 'li', content: [
                                {elem: 'link', content: item}
                            ]
                        }
                    })
                ]}
            ]
        }
    })
}

module.exports = [
    {block: 'nav-section', mods: {offset: true}, mix: {block: 'mbl'}, content: [
        {mix: {block: 'row'}, content: [
            {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 12}}, content: [
                {elem: 'list', content: [
                    getList({
                        'Книги': [
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Мягкий переплет'
                        ],
                        'Журналы и каталоги': [
                            'Печать каталогов',
                            'Печать журналов'
                        ],
                        'Рекламная полиграфия': [
                            'Печать листовок',
                            'Печать флаеров',
                            'Пачать плакатов',
                            'Печать наклеек',
                            'Печать брошюр',
                            'Печать буклетов'
                        ],
                        'Деловая полиграфия': [
                            'Печать визиток',
                            'Печать блокнотов',
                            'Печать бланков',
                            'Печать календарей',
                            'Журналы и каталоги',
                            'Печать каталогов',
                            'Печать журналов'
                        ]
                    }, ['book', '', 'image', '' ], false)
                ]}
            ]},
            {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 12}}, content: [
                {elem: 'list', content: [
                    getList({
                        'Упаковка': [
                            'Картонная упаковка',
                            'Бумажные пакеты'
                        ],
                        'Услуги': [
                            'Дизайн полиграфии',
                            'Верстка',
                            'Корректура и редактура',
                            'Послепечатные работы'
                        ],
                        'Типография': [
                            'Цифровая печать',
                            'Офсетная печать',
                            'Оперативная полиграфия'
                        ]
                    }, ['', 'services', 'typography'], true)
                ]}
            ]}
        ]}
    ]}
];
