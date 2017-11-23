module.exports = [
    {block: 'portfolio', content: [
        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
            {block: 'text-center', content: [
                {block: 'h', size: '2', mix: {block: 'mtn'}, content: [
                    {block: 'a', content: 'Примеры выполненных работ в портфолио'}
                ]}
            ]},
            {elem: 'inner', mix: {block: 'row'}, content: [
                (function (item) {
                    return [item, item, item, item, item, item]
                })(
                    {elem: 'col', mix: {block: 'row', elem: 'col', mods: {xs: 6, sm: 6, md: 4}}, content: [
                        {elem: 'item', content: [
                            {elem: 'caption', content: [
                                {elem: 'title', content: 'Заголовок'},
                                {elem: 'description', content: 'Описание несколько строк не переусердствуйте, несколько строк не переусердствуйте'}
                            ]},
                            {
                                block: 'img',
                                src: '../../../upload/portfolio-1.jpg',
                                mods: { lazyload: true, responsive: true}
                            }
                        ]}
                    ]}
                ),
                {mix: {block: 'collapse'},  attrs: {id: 'PORTFOLIO-2'}, content: [
                    (function (item) {
                        return [item, item, item, item, item, item]
                    })(
                        {elem: 'col', mix: {block: 'row', elem: 'col', mods: {xs: 6, sm: 6, md: 4}}, content: [
                            {elem: 'item', content: [
                                {elem: 'caption', content: [
                                    {elem: 'title', content: 'Заголовок'},
                                    {elem: 'description', content: 'Описание несколько строк не переусердствуйте, несколько строк не переусердствуйте'}
                                ]},
                                {
                                    block: 'img',
                                    src: '../../../upload/portfolio-1.jpg',
                                    mods: { lazyload: true, responsive: true}
                                }
                            ]}
                        ]}
                    )
                ]}
            ]},
            {elem: 'more', content: [
                {block: 'a', mids: {block: 'collapsed'}, attrs: {'data-toggle': 'collapse', href: '#PORTFOLIO-2'}, content: 'Показать еще'}
            ]}
        ]}
    ]}
];
