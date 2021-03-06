function getList(map){
    return {
        elem: 'list', content: [
            Object.keys(map).map((lvl_1)=>{
                return {
                    elem: 'li', content: [
                        {elem: 'link', content: [
                            {block: 'a', content: lvl_1},
                            {block: 'icomoon', icon: 'angle-down', attrs: {
                                'data-toggle': 'open',
                                'data-target': '.navigation__li'
                            }}
                        ]},
                        {elem: 'dropdown', content: [
                            Object.keys(map[lvl_1]).map((lvl_2)=>{
                                return {
                                    elem: 'section', content: [
                                        {elem: 'title', content: [
                                            {elem: 'link', content: [
                                                {block: 'a', content: lvl_2},
                                                {block: 'icomoon', icon: 'angle-down', attrs: {
                                                    'data-toggle': 'open',
                                                    'data-target': '.navigation__section'
                                                }}
                                            ]}
                                        ]},
                                        {elem: 'list', content: [
                                            map[lvl_1][lvl_2].map((lvl_3)=>{
                                                return {
                                                    elem: 'li', content: [
                                                        {elem: 'link', content: [
                                                            {block: 'a', content: lvl_3}
                                                        ]}
                                                    ]
                                                }
                                            })
                                        ]}
                                    ]
                                }
                            })
                        ]}
                    ]
                }
            })
        ]
    }
}
module.exports = [
    {block: 'navigation', content: [
        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
            {elem: 'inner', content: [
                {elem: 'control', mods: {visible: 'xs'}, attrs: {
                    'data-toggle': 'open',
                    'data-target': '.navigation__inner'
                }, content: [
                    {elem: 'nav-icon'},
                    {elem: 'nav-icon'},
                    {elem: 'nav-icon'}
                ]},
                {elem: 'collapse', content: [
                    getList({
                        'Полиграфия': {
                            'Книги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Рекламная полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Деловая полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Журналы и каталоги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Упаковка': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        },
                        'Услуги': {
                            'Книги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Рекламная полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'деловая полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        },
                        'Типография': {
                            'журналы и каталоги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Упаковка': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        },
                        'Портфолио': {
                            'деловая полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        }
                    }),
                    getList({
                        'О компании': {
                            'Книги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Рекламная полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'деловая полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'журналы и каталоги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Упаковка': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        },
                        'Порядок работ': {
                            'деловая полиграфия': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'журналы и каталоги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Упаковка': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        },
                        'Контакты': {
                            'журналы и каталоги': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ],
                            'Упаковка': [
                                'Книги',
                                'Издать книгу',
                                'Печать книг',
                                'Твердый переплет',
                                'Мягкий переплет'
                            ]
                        }
                    })
                ]},
                {elem: 'control', attrs: {
                    'data-toggle': 'drop',
                    'data-target': '.header'
                }, content: [
                    {elem: 'search', content: [
                        {block: 'form', content: [
                            {block: 'form-control', placeholder: 'Поиск по сайту...'},
                            {block: 'btn', mods: {color: 'link'}}  
                        ]}
                    ]},
                    {block: 'icomoon', icon: 'search'}
                ]}
            ]}
        ]}
    ]}
];
