module.exports = {
    block: 'page',
    title: 'Текстовая',
    id: 'TEXT',
    styles: [{elem: 'css', url: '../_merged/_merged.css'}],
    scripts: [
        {elem: 'js', url: '../_merged/_merged.async.js', async: true},
        {elem: 'js', url: '../_merged/_merged.js'}, 
        {elem: 'js', url: '../_merged/_merged.i18n.ru.js'}
    ],
    content: [
        require('../_common/header.bemjson.js'),
        {block: 'main', content: [
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {block: 'breadcrumb', content: [
                    {block: 'a', content: 'Главная'},
                    {block: 'a', content: 'Личный кабинет'},
                    {block: 'a', content: 'Профиль'},
                    {block: 'span', content: 'Редактирование данных'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}},
                {block: 'p'},
                {block: 'h', size: '2'},
                {block: 'p'},
                {block: 'h', size: '3'},
                {block: 'p'},
                {block: 'h', size: '4'},
                {block: 'p'},
                {block: 'h', size: '5'},
                {block: 'p'},
                {block: 'h', size: '6'},
                {block: 'p'},
                {block: 'ul', content: [
                    'Пункт 1',
                    ['Пункт 2', [
                        {block: 'ul', content: [
                            'Пункт 1',
                            'Пункт 2',
                            'Пункт 3'
                        ]}
                    ]],
                    'Пункт 3'
                ]},
                {block: 'p'},
                {block: 'ol', content: [
                    'Пункт 1',
                    ['Пункт 2 (вложеный)', [
                        {block: 'ol', content: [
                            'Пункт 1',
                            'Пункт 2',
                            'Пункт 3'
                        ]}
                    ]],
                    'Пункт 3'
                ]},
                {block: 'p'},
                {block: 'p'},
                {block: 'hr'},
                {block: 'a', content: 'ссылка в тексте (default)'},
                {block: 'br'},
                {block: 'a', mods: {state: 'hover'}, content: 'ссылка в тексте (hover)'},
                {block: 'hr'},
                {block: 'strong', content: 'важный текст'},
                {block: 'br'},
                {block: 'small', content: 'малый текст'},
                {block: 'br'},
                {block: 'br'},
                {block: 'span', content: [
                    'Обычная строка текста с',
                    {block: 'b', content: ' жирной '},
                    'вставкой'
                ]},
                {block: 'hr'},
                {block: 'p'},
                {block: 'h', size: '3', content: 'Таблица для bitrix'},
                {block: 'table', content: [
                    {elem: 'tbody', content: [
                        [['Ячейка', 'th'], ['Ячейка', 'th'], ['Ячейка', 'th'], ['Ячейка', 'th'], ['Ячейка', 'th']],
                        ['Ячейка', 'Ячейка', 'Ячейка', 'Ячейка', 'Ячейка'],
                        ['Ячейка', 'Ячейка', 'Ячейка', 'Ячейка', 'Ячейка'],
                        ['Ячейка', 'Ячейка', 'Ячейка', 'Ячейка', 'Ячейка']
                    ]}
                ]},
                {block: 'hr'},
                {block: 'hr'},
                {block: 'hr'},
                {block: 'hr'},
                ///
                {block: 'h', size: '1', content: 'Формы'},
                {block: 'form-group', content: [
                    {block: 'form-control', content: 'Текстовое поле по умолчанию'}
                ]},
                {block: 'form-group', content: [
                    {block: 'form-control', content: [
                        'Пункт селекта 1',
                        'Пункт селекта 2',
                        'Пункт селекта 3',
                        'Пункт селекта 4',
                        'Пункт селекта 5'
                    ]}
                ]},
                {block: 'form-group', content: [
                    {block: 'form-control', tag: 'textarea', content: 'Текст'}
                ]},
                {block: 'form-group', content: [
                    {block: 'checkbox',
                        name: 'check_1',
                        checked: true,
                        content: 'Чекбокс'
                    },
                    {block: 'checkbox',
                        name: 'check_2',
                        content: 'Чекбокс'
                    },
                    {block: 'checkbox',
                        name: 'check_1',
                        disabled: true,
                        content: 'Чекбокс (disabled)'
                    }
                ]},
                {block: 'form-group', content: [
                    {block: 'radio',
                        name: 'radio_1',
                        content: 'Радио',
                        checked: true
                    },
                    {block: 'radio',
                        name: 'radio_1',
                        content: 'Радио'
                    },
                    {block: 'radio',
                        name: 'radio_1',
                        content: 'Радио (disabled)',
                        disabled: true
                    }
                ]},


                ///
                {block: 'h', size: '1', content: 'Простые доп. блоки'},
                {block: 'hr'},
                {block: 'list-inline', content: [
                    'Пункт 1',
                    'Пункт 2',
                    'Пункт 3'
                ]},
                {block: 'hr'},
                {block: 'list-unstyled', content: [
                    'Пункт 1',
                    ['Пункт 2 (вложеный)', [
                        {block: 'list-unstyled', content: [
                            'Пункт 1',
                            'Пункт 2',
                            'Пункт 3'
                        ]}
                    ]],
                    'Пункт 3'
                ]},
                {block: 'hr'},
                {block: 'list-unstyled', content: [
                    {block: 'btn', mods: {color: 'default'}, content: 'default'},
                    {block: 'btn', mods: {color: 'primary'}, content: 'primary'},
                    {block: 'btn', mods: {color: 'warning'}, content: 'warning'},
                    {block: 'btn', mods: {color: 'danger'}, content: 'danger'},
                    {block: 'btn', mods: {color: 'info'}, content: 'info'},
                    {block: 'btn', mods: {color: 'success'}, content: 'success'}
                ]},
                {block: 'hr'},
                {block: 'list-unstyled', content: [
                    {block: 'btn', mods: {size: 'lg'}, content: 'default'},
                    {block: 'btn', mods: {size: 'md'}, content: 'default'},
                    {block: 'btn', mods: {size: 'sm'}, content: 'default'},
                    {block: 'btn', mods: {size: 'xs'}, content: 'default'}
                ]},
                {block: 'hr'},
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
