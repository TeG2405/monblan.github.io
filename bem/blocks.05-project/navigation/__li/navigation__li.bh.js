module.exports = function (bh) {
    bh.match('navigation__li', function (ctx, json) {
        ctx.tag('li');
    });
};