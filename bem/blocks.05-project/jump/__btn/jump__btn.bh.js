module.exports = function (bh) {
    bh.match('jump__btn', function (ctx, json) {
        ctx.tag('a').cls('collapsed').attrs({
            "data-toggle":"collapse"
        })
    });
};