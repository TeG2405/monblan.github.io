module.exports = [
    {block: 'header', content: [
        require('../_common/navigation.bemjson.js'),
        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
            {elem: 'inner', content: [
                {elem: 'row', content: [
                    {elem: 'col', content: [
                        {elem: 'contact', content: [
                            {elem: 'address', content: 'Волгоград, пр. Ленина,  д.100, оф 216.'},
                            {elem: 'phone', content: '8 (449) 350-22-91'}
                        ]},
                        {block: 'btn', mods: {color: 'primary'}, attrs: {'data-toggle': 'modal', 'data-target': '#MODAL_DEFAULT'}, content: [
                            {block: 'icomoon', icon: 'phone'},
                            'Обратная сязь'
                        ]}
                    ]},
                    {elem: 'logo', content: [
                        {block: 'logo', content: [
                            {block: 'icomoon', icon: 'book'},
                            {elem: 'inner', content: [
                                {elem: 'title', content: 'МОНБЛАН'},
                                {elem: 'description', content: 'издательство'}
                            ]}
                        ]}
                    ]},
                    {elem: 'col', content: [
                        {elem: 'contact', content: [
                            {elem: 'address', content: 'Москва, Сухаревский М., д.9, стр. 1'},
                            {elem: 'phone', content: '8 (917) 830-95-66'}
                        ]},
                        {block: 'btn', mods: {color: 'primary'}, content: [
                            {block: 'icomoon', icon: 'calculator'},
                            'Расчитать тираж'
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
];
