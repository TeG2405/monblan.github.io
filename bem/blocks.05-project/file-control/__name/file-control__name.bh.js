module.exports = function (bh) {
    bh.match('file-control__name', function (ctx, json) {
        ctx.tag('span');
    });
};