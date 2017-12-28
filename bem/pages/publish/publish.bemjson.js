module.exports = {
    block: 'page',
    title: 'Издать книгу',
    id: 'PUBLISH',
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
                    {block: 'span', content: 'Статьи'}
                ]},
                {block: 'h', size: '1', mix: {block: 'mtn'}, content: 'Статьи'},
                {block: 'jump', content: [
                    {elem: 'inner', content: [
                        {mix: [{block: 'pull-right'}, {block: 'jump', elem: 'tile'}], content: [
                            require('../_common/nav-section-small.bemjson.js')
                        ]},
                        {content: [
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {block: 'p', content: 'Книги - это источник знаний, который в век электронной информации приобрел особое значение Печать книг начинается с подготовки макетов. Макеты - это... Если макет есть - присылайте, если нет - мы готовы сделать.'},
                            {elem: 'collapse', mix: {block: 'collapse'}, attrs: {id: 'JUMP-2'}, content: [
                                {block: 'p', content: 'Перед печатью необходимо определиться с требованиями к книге - какого формата, на какой бумаге, это должна быть черно-белая книга или цветная, с каким переплетом. Если какой-либо из вопросов вызвал у Вас возникли затруднения, Вы можете обратиться к нам по ... или воспользоваться подсказками в таблице ниже. '}
                            ]}
                        ]},
                        {content: [
                            {elem: 'btn', attrs: {href: '#JUMP-2'}}
                        ]}
                    ]}
                ]},
                {block: 'h', size: '2', content: 'Варианты издания книг'},
                require('../_common/tile-list.bemjson.js'),
                {block: 'h', size: '2', content: 'Сколько стоит издать книгу'},
                {block: 'controls-box', mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 8, lg: 9}}, content: [
                        {block: 'p', content: 'Издание книг зависит от многих вводных. С ценами на отдельные этапы Вы можете ознакомиться по ссылкам на схеме выше. Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. '},
                        {block: 'p', content: [
                            {block: 'b', content: 'Также Вы можете воспользоваться калькулятором для детального расчета  или услугами нашего менеджера '}
                        ]}
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 4, lg: 3}}, content: [
                        {block: 'btn', mods: {color: 'primary', size: 'lg', block: true}, content: [
                            {block: 'icomoon', icon: 'calculator'},
                            {block: 'span', content: 'Расчитать тираж'}
                        ]},
                        {block: 'btn', mods: {color: 'red', size: 'lg', block: true}, attrs: {'data-toggle': 'modal', 'data-target': '#MODAL_CALLBACK'}, content: [
                            {block: 'span', content: 'Связь с менеджером'}
                        ]}
                    ]}
                ]},
                {block: 'h', mix: {block: 'text-center'}, size: '2', content: 'Этапы издания книг'},
                require('../_common/tile-counter.bemjson.js'),
                {block: 'h', size: '2', content: 'Издание книг малым тиражом'},
                {block: 'p', content: 'Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. При изготовлении полгирафии мы используем цифровую печать, шелкографию, тиснение. Специалисты нашей типографии всегда готовы оперативно выполнить Ваш заказ от допечатной подготовки до выпуска готовой продукции. '},
                {block: 'p', content: 'Мы всегда рады новым клиентам и надеемся на сотрудничество! '},
                {block: 'p', content: 'Уже более семи лет мы производим для наших клиентов самую различную печатную продукцию: от визиток и листовок до сложных многостраничных изделий — каталогов, брошюр и календарей. При изготовлении полгирафии мы используем цифровую печать, шелкографию, тиснение. Специалисты нашей типографии всегда готовы оперативно выполнить Ваш заказ от допечатной подготовки до выпуска готовой продукции. '},
                {block: 'h', size: '2', content: 'Наиболее частые вопросы'},
                require('../_common/collapse-list.bemjson.js'),
                {block: 'text-center', mix: [{block: 'mbl'}, {block: 'pbl'}], content: [
                    {mix: [{block: 'text-primary'}, {block: 'h2'}], content: 'Уже готовы сделать заказ?'},
                    {block: 'btn', mods: {color: 'primary', size: 'lg'}, content: [
                        {tag: 'span', mix: {block: 'visible-xs'}, content: 'Заказать обратный звонок'},
                        {tag: 'span', mix: {block: 'hidden-xs'}, content: 'Оставте телефон и мы, Вам перезвоним'}
                    ]}
                ]}
            ]},
            require('../_common/portfolio-2.bemjson.js'),
            {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
                {mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'h', size: '2', content: 'Отзывы клиентов'},
                        require('../_common/reviews-light.bemjson.js'),
                        {block: 'text-right', mix: {block: 'visible-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие отзывы'}
                        ]}
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'h', size: '2', content: 'Статьи'},
                        require('../_common/articles-list-light.bemjson.js'),
                        {block: 'text-right', mix: {block: 'visible-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие статьи'}
                        ]}
                    ]}
                ]},
                {mix: {block: 'row'}, content: [
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'text-right', mix: {block: 'hidden-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие отзывы'}
                        ]}
                    ]},
                    {mix: {block: 'row', elem: 'col', mods: {xs: 12, md: 6}}, content: [
                        {block: 'text-right', mix: {block: 'hidden-xs'}, content: [
                            {block: 'btn', mods: {color: 'red'}, content: 'Другие статьи'}
                        ]}
                    ]}
                ]}
            ]}
        ]},
        require('../_common/footer.bemjson.js')
    ]
};
