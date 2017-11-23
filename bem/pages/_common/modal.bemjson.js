module.exports = [
    {block: 'modal', attrs: {id: 'MODAL_DEFAULT'}, content: [
        {elem: 'dialog', content: [
            {elem: 'content', content: [
                {elem: 'header', mix: {block: 'pbm'}, content: [
                    {block: 'close', content: [
                        {block: 'fa', icon: 'times'}
                    ]},
                    {elem: 'title', content: 'Заголовок h1 — основной заголовок страницы на две строки. Основной заголовок страницы на две строки'}
                ]},
                {elem: 'body', mix: {block: 'pvm'}, content: [
                    {block: 'p', content: 'Ощущение мира решительно подчеркивает дедуктивный метод, хотя в официозе принято обратное. Созерцание непредвзято подрывает естественный бабувизм, отрицая очевидное. Априори, созерцание амбивалентно. Принцип восприятия, по определению, раскладывает на элементы сложный бабувизм, ломая рамки привычных представлений. Адживика осмысленно понимает под собой дуализм, при этом буквы А, В, I, О символизируют соответственно общеутвердительное, общеотрицательное, частноутвердительное и частноотрицательное суждения. Мир дискредитирует закон исключённого третьего, однако Зигварт считал критерием истинности необходимость и общезначимость, для которых нет никакой опоры в объективном мире.'}
                ]},
                {elem: 'footer', mix: {block: 'ptm'}, content: [
                    {block: 'btn', mods: {color: 'primary'}, content: 'Заказать макет'}
                ]}
            ]}
        ]}
    ]},
    {block: 'modal', attrs: {id: 'MODAL_CALLBACK'}, content: [
        {elem: 'dialog', content: [
            {elem: 'content', content: [
                {elem: 'header', mix: {block: 'pbm'}, content: [
                    {block: 'close', content: [
                        {block: 'fa', icon: 'times'}
                    ]},
                    {elem: 'title', content: 'Оставить заявку'}
                ]},
                {elem: 'body', mix: {block: 'pvm'}, content: [
                    {block: 'form', content: [
                        {mix: {block: 'row'}, content: [
                            {mix: {block: 'row', elem: 'col', mods: {xs: 12}}, content: [
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
                            {mix: {block: 'row', elem: 'col', mods: {xs: 12}}, content: [
                                {mix: {block: 'form-group'}, content: [
                                    {block: 'form-control', tag: 'textarea', placeholder: 'Текст сообщения'}
                                ]},
                                // {mix: {block: 'form-group'}, content: [
                                //     {block: 'img', src: 'http://placehold.it/310x80?text=ReCaptcha'}
                                // ]},
                                {mix: {block: 'form-group'}, content: [
                                    {mix: {block: 'row'}, content: [
                                        {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6}}, content: [
                                            {block: 'file-control', mix: [{block: 'btn', mods: {color: 'default', block: true}}, {block: 'hidden-xs'}], content: [
                                                {elem: 'name', content: [
                                                    'Прикрепить файл'
                                                ]}
                                            ]}
                                        ]},
                                        {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6}}, content: [
                                            {block: 'btn', mods: {color: 'primary', block: true}, content: 'Оставить заявку'}
                                        ]}
                                    ]}
                                ]}
                            ]}
                        ]},
                        {mix: [{block: 'form-feedback', elem: 'description'}, {block: 'mvn'}], content: [
                            'Отправляя заявку вы соглашаетесь с ',
                            {block: 'a', content: 'политикой конфиденциальности'}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
];