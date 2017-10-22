module.exports = function (bh) {
    bh.match('tile', function (ctx, json) {
        ctx.tag('a').attr('href', '#');
    });
};