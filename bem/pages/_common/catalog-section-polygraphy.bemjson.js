module.exports = [
    {block: 'catalog-section', content: ((list)=>{
        return [
            Object.keys(list).map((header)=>{
                return [
                    {elem: 'item', content: [
                        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                            {block: 'h', size: 2, content: header},
                            {mix: {block: 'row'}, content: [
                                list[header].map((title)=>{
                                    return {mix: {block: 'row', elem: 'col', mods: {xs: 6, sm: 3, lg: 2}}, content: [
                                        {block: 'tile', content: [
                                            {elem: 'image', mix: {block: 'mbs'}, content: [
                                                {block: 'img', src: 'http://placehold.it/200x200', mods: {lazyload: true, responsive: true, shape: 'circle'}}
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
            'Книги',
            'Издать книгу',
            'Печать книг',
            'Твердый переплет',
            'Мягкий переплет'
        ],
        'Рекламная полиграфия': [
            'Книги',
            'Издать книгу'
        ],
        'Деловая полиграфия': [
            'Книги',
            'Издать книгу',
            'Печать книг',
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
            'Печать книг'
        ]
    })}
];
