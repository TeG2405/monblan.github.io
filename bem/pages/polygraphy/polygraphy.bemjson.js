module.exports = {
    block: 'page',
    title: 'Полиграфия',
    id: 'POLYGRAPHY',
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
                    {block: 'a', mix: {block: 'visible-xs'}, content: 'Главная'},
                    {block: 'span', content: 'Полиграфия'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Полиграфия'},
                {block: 'p', content: 'Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. При изготовлении полгирафии мы используем цифровую печать, шелкографию, тиснение. Специалисты нашей типографии всегда готовы оперативно '},
            ]},
            require('../_common/catalog-section-polygraphy.bemjson.js'),
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {block: 'text-center', mix: [{block: 'mbl'}, {block: 'pbl'}], content: [
                    {mix: [{block: 'text-primary'}, {block: 'h2'}], content: 'не нашли что искали?'},
                    {block: 'btn', mods: {color: 'primary', size: 'lg'}, content: 'Оставте телефон и мы, Вам перезвоним'}
                ]},
                {block: 'mvl', content: [
                    {block: 'img', src: '../../../upload/img-content.jpg', mods: {lazyload: true, responsive: true}}
                ]},
                {block: 'p', content: 'Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. При изготовлении полгирафии мы используем цифровую печать, шелкографию, тиснение. Специалисты нашей типографии всегда готовы оперативно выполнить Ваш заказ от допечатной подготовки до выпуска готовой продукции. '},
                {block: 'p', content: 'Мы всегда рады новым клиентам и надеемся на сотрудничество!'},
                {block: 'p', content: 'Специалисты нашей типографии всегда готовы оперативно выполнить Ваш заказ от допечатной подготовки до выпуска готовой продукции. Мы всегда рады новым клиентам и надеемся на сотрудничество!'}
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
