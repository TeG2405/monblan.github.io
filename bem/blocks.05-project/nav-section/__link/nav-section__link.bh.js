module.exports = function (bh) {
    bh.match('nav-section__link', function (ctx, json) {
        ctx.tag('a').attr('href', '#');
    });
};