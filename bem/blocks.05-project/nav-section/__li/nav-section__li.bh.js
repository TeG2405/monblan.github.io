module.exports = function (bh) {
    bh.match('nav-section__li', function (ctx, json) {
        ctx.tag('li');
    });
};