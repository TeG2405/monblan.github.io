module.exports = {
    block: 'page',
    title: 'Портфолио',
    id: 'PORTFOLIO',
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
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Портфолио'}
            ]},
            require('../_common/catalog-section-portfolio.bemjson.js'),
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {block: 'hr'},
                {block: 'h', size: '2', content: 'Почему стоит заказывать у нас, что мы еще можем предложить'},
                {block: 'p', content: 'Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. При изготовлении полгирафии мы используем цифровую печать, шелкографию, тиснение. Специалисты нашей типографии всегда готовы оперативно выполнить Ваш заказ от допечатной подготовки до выпуска готовой продукции. Мы всегда рады новым клиентам и надеемся на сотрудничество! '}
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
