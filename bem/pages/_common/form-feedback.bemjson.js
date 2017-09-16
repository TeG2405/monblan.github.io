module.exports = [
    {block: 'form-feedback', mix: {block: 'mvl'}, content: [
        {block: 'h', size: '5', mix: [{block: 'mtn'}, {block: 'text-center'}], content: 'Оставить заявку'},
        {block: 'form', content: [
            {mix: {block: 'row'}, content: [
                {mix: {block: 'row', elem: 'col', mods: {md: 12, lg: 6}}, content: [
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control', placeholder: 'ФИО'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Email'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Телефон'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {md: 12, lg: 6}}, content: [
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control', tag: 'textarea', placeholder: 'Текст сообщения'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'file-control', mix: [{block: 'btn', mods: {color: 'default'}}, {block: 'mrm'}, {block: 'hidden-xs'}], content: [
                            {elem: 'name', content: [
                                'Прикрепить файл'
                            ]}
                        ]},
                        {block: 'btn', mods: {color: 'primary'}, content: 'Оставить заявку'}
                    ]}
                ]}
            ]}  
        ]},
        {elem: 'description', content: [
            'Отправляя заявку вы соглашаетесь с',
            {block: 'a', content: 'политикой конфиденциальности'}
        ]}
    ]}
];
