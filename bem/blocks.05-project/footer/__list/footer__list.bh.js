module.exports = function (bh) {
    bh.match('footer__list', function (ctx, json) {
        ctx.tag('ul');
    });
};