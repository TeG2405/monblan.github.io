module.exports = function (bh) {
    bh.match('nav-section', function (ctx, json) {
        ctx.tag('ul');
    });
};