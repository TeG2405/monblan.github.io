module.exports = [
    {block: 'total', content: [
        {elem: 'line', content: [
            {mix: {block: 'row'}, content: [
                {mix: {block: 'row', elem: 'col', mods: {xs: 12}}, content: [
                    {mix: {block: 'form-inline'}, content: [
                        {mix: {block: 'form-group'}, content: [
                            {block: 'radio',
                                mix: {block: 'mvl'},
                                name: 'radio_1',
                                content: 'Мягкий переплет',
                                checked: true
                            },
                            {block: 'radio',
                                mix: {block: 'mvl'},
                                name: 'radio_1',
                                content: 'Скоба'
                            },
                            {block: 'radio',
                                mix: {block: 'mvl'},
                                name: 'radio_1',
                                content: 'Пружина'
                            }
                        ]}
                    ]}
                ]}
            ]}  
        ]},
        {elem: 'line', content: [
            {mix: {block: 'row'}, content: [
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 3}}, content: [
                    {block: 'form-control', content: [
                        'Количество страниц',
                        '100',
                        '200',
                        '300',
                        '400'
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 3}}, content: [
                    {block: 'form-control', content: [
                        'Вид бумаги',
                        '100',
                        '200',
                        '300',
                        '400'
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 3}}, content: [
                    {block: 'form-control', content: [
                        'Цветность',
                        '100',
                        '200',
                        '300',
                        '400'
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 3}}, content: [
                    {block: 'checkbox',
                        mix: {block: 'mvs'},
                        name: 'check_1',
                        checked: true,
                        mods: {styled: true},
                        content: 'Заказать дизайн'
                    }
                ]}
            ]},
            {elem: 'muted', content: 'Стоимость указана за 1 экземпляр, при соотведствующем тираже'}
        ]},
        {elem: 'table', content: [
            {elem: 'thead', content: [
                {elem: 'tr', content: [
                    {elem: 'th', mix: {block: 'pan'}, content: [
                        {elem: 'split', content: [
                            {elem: 'split-right', mix: {block: 'hidden-xs'}, content: 'Тираж'},
                            {elem: 'split-left', content: 'Формат'}
                        ]}
                    ]},
                    {elem: 'th', content: '50'},
                    {elem: 'th', content: '100'},
                    {elem: 'th', content: '150'},
                    {elem: 'th', content: '200'},
                    {elem: 'th', content: '250'},
                    {elem: 'th', mix: [{block: 'hidden-sm'}], content: '300'},
                    {elem: 'th', mix: [{block: 'hidden-sm'}], content: '400'},
                    {elem: 'th', mix: [{block: 'hidden-sm'}], content: '500'},
                    {elem: 'th', mix: [{block: 'hidden-sm'}], content: '1000'},
                    {elem: 'th', content: 'Введите тираж'}
                ]}
            ]},
            {elem: 'tbody', content: [
                ((item)=>{
                    return [item, item, item, item]
                })(
                    {elem: 'tr', content: [
                        {elem: 'td', content: 'A6'},
                        {elem: 'td', content: [
                            {elem: 'label', content: [
                                '100'
                            ]}
                        ]},
                        {elem: 'td', content: [
                            {elem: 'label', content: [
                                '200'
                            ]}
                        ]},
                        {elem: 'td', content: [
                            {elem: 'label', content: [
                                '300'
                            ]}
                        ]},
                        {elem: 'td', content: [
                            {elem: 'label', content: [
                                '400'
                            ]}
                        ]},
                        {elem: 'td', content: [
                            {elem: 'label', content: [
                                '200'
                            ]}
                        ]},
                        {elem: 'td', mix: [{block: 'hidden-sm'}], content: [
                            {elem: 'label', content: [
                                '500'
                            ]}
                        ]},
                        {elem: 'td', mix: [{block: 'hidden-sm'}], content: [
                            {elem: 'label', content: [
                                '600'
                            ]}
                        ]},
                        {elem: 'td', mix: [{block: 'hidden-sm'}], content: [
                            {elem: 'label', content: [
                                '100'
                            ]}
                        ]},
                        {elem: 'td', mix: [{block: 'hidden-sm'}], content: [
                            {elem: 'label', content: [
                                '100'
                            ]}
                        ]},
                        {elem: 'td', content: [
                            {elem: 'input'}
                        ]}
                    ]}
                )
            ]}
        ]},
        {elem: 'price', content: [
            {elem: 'price-title', content: 'Стоимость печати тиража'},
            {elem: 'price-number', content: [
                {elem: 'price-total', content: '300'},
                {content: 'руб.'}
            ]},
            {elem: 'price-btn', content: [
                {block: 'btn', mods: {color: 'primary', size: 'lg'}, content: 'Расчитать'}
            ]}
        ]}
    ]}
];
