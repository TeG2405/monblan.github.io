module.exports = function (bh) {
    bh.match('logo', function (ctx, json) {
        ctx.tag('a').attr('href', '#');
    });
};