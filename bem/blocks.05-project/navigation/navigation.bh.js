module.exports = function (bh) {
    bh.match('navigation', function (ctx, json) {
        ctx.tag('nav');
    });
};