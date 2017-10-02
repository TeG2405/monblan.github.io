module.exports = function (bh) {
    bh.match('file-control', function (ctx, json) {
        ctx.tag('label').content([
            {tag: 'input', attrs: {type: 'file', multiple: true}},
            ctx.content()
        ], true);
    });
};