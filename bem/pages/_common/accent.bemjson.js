module.exports = [
    {block: 'accent', content: [
        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
            {elem: 'row', mix: {block: 'row'}, content: [
                {elem: 'col', mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6}}, src: '../../../upload/accent-left.jpg', content: [
                    {elem: 'item', content: [
                        {elem: 'control', content: [
                            {elem: 'image', content: [
                                {block: 'icomoon', icon: 'arms'}
                            ]},
                            {block: 'h', size: '5', mix: {block: 'mtn'}, content: 'Наши услуги'}
                        ]},
                        {elem: 'drop', content: [
                            {block: 'btn', mods: {color: 'white'}, mix: {block: 'phl'}, content: 'Подробнее'}
                        ]},
                        {elem: 'description', content: [
                            {block: 'p', content: 'Наше издательство предлагает Вам полный спектр услуг по корректорским и редакторским работам, верстке, дизайну обложки и блока, сканированию и ретушированию фотографий, набору текстов с рукописей, печати и присвоению международного номера ISBN.'},
                            {block: 'p', content: 'Мы рады предложить Вам изготовление книг. '}
                        ]}
                    ]}
                ]},
                {elem: 'col', mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6}}, src: '../../../upload/accent-right.jpg', content: [
                    {elem: 'item', content: [
                        {elem: 'control', content: [
                            {elem: 'image', content: [
                                {block: 'icomoon', icon: 'booklet'}
                            ]},
                            {block: 'h', size: '5', mix: {block: 'mtn'}, content: 'Полиграфия'}
                        ]},
                        {elem: 'drop', content: [
                            {block: 'btn', mods: {color: 'white'}, mix: {block: 'phl'}, content: 'Подробнее'}
                        ]},
                        {elem: 'description', content: [
                            {block: 'p', content: 'Издательство «Монблан» выполняет весь комплекс услуг по изданию печатной продукции для заказчиков из г. Волгоград и всех регионов России. Работаем с физическими и юридическими лицами. Применением современных технологий и оборудования позволяет нам предложить лучшую цену на печать книг и короткие сроки производства при неизменно высоком качестве продукции.'}
                        ]}
                    ]}
                ]}
            ]}
        ]}  
    ]}
];
