module.exports = [
    {block: 'catalog-section', content: ((list)=>{
        return [
            Object.keys(list).map((header)=>{
                return [
                    {elem: 'item', content: [
                        {mix: {block: 'row'}, content: [
                            list[header].map((title)=>{
                                return {mix: {block: 'row', elem: 'col', mods: {ex: 12, xs: 6, sm: 6, md: 3}}, content: [
                                    {block: 'tile', mix: {block: 'pbs'}, content: [
                                        {elem: 'image', mix: {block: 'mbs'}, content: [
                                            {block: 'img', src: '../../../upload/article-1.jpg', mods: {lazyload: true, responsive: true}}
                                        ]},
                                        {elem: 'title', content: title}
                                    ]}
                                ]}
                            })
                        ]}
                    ]}
                ]
            })
        ]
    })({
        'Разработка дизайна рекламной полиграфии': [
            'Шелкография от 2 300 руб.',
            'Тиснение от 1 000 руб.',
            'Дизайнерская бумага от 850 руб.',
            'Вырубка от 2 300 руб.',
            'Шелкография от 2 300 руб.',
            'Тиснение от 1 000 руб.',
            'Дизайнерская бумага от 850 руб.',
            'Вырубка от 2 300 руб.'
        ]
    })}
];
