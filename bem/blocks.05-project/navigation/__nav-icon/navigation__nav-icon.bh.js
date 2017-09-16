module.exports = function (bh) {
    bh.match('navigation__nav-icon', function (ctx, json) {
        ctx.tag('i');
    });
};