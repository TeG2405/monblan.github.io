module.exports = function (bh) {
    bh.match('p', function (ctx, json) {
        var FISH = 'Селекция бренда конструктивно. Интересно отметить, что бюджет на размещение ускоряет рекламоноситель. Как отмечает Майкл Мескон, искусство медиапланирования категорически усиливает креативный стиль менеджмента, осознав маркетинг как часть производства. Бренд основан на тщательном анализе. Баинг и селлинг традиционно охватывает институциональный показ баннера, учитывая современные тенденции. Один из признанных классиков маркетинга Ф.Котлер определяет это так: медиамикс тормозит экспериментальный бизнес-план.';
        ctx.tag('p').content(FISH);
    });
};