module.exports = [
    {block: 'portfolio', content: [
        {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
            {block: 'text-center', content: [
                {block: 'h', size: '2', mix: {block: 'mtn'}, content: 'Портфолио'},
                {block: 'p', content: 'Полиграфическая продукция которую мы производим'}
            ]},
            {elem: 'inner', mix: {block: 'row'}, content:
                (function (item) {
                    return [item, item, item, item, item, item]
                })(
                    {elem: 'col', mix: {block: 'row', elem: 'col', mods: {xs: 6, sm: 6, md: 4}}, content: [
                        {elem: 'item', attrs: {'data-title': 'Заголовок'}, content: [
                            {
                                block: 'img',
                                src: '../../../upload/portfolio-1.jpg',
                                mods: { lazyload: true, responsive: true}
                            }
                        ]}
                    ]}
                )
            },
            {block: 'text-center', content: [
                {mix: [{block: 'text-primary'}, {block: 'h2'}], content: 'хотите так же?'},
                {block: 'btn', mods: {color: 'primary', size: 'lg'}, content: 'Заказывайте'}
            ]}
        ]}
    ]}
];
