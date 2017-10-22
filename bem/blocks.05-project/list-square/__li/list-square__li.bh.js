module.exports = function (bh) {
    bh.match('list-square__li', function (ctx, json) {
        ctx.tag('li');
    });
};