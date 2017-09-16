module.exports = function (bh) {
    bh.match('footer__li', function (ctx, json) {
        ctx.tag('li');
    });
};