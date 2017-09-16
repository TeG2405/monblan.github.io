module.exports = function (bh) {
    bh.match('file-control', function (ctx, json) {
        ctx.content([
            {tag: 'input', attrs: {type: 'file'}},
            ctx.content()
        ], true);
    });
};