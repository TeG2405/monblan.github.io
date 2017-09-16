module.exports = function (bh) {
    bh.match('articles__item', function (ctx, json) {
        ctx.tag('a').attr('href', '#');
    });
};