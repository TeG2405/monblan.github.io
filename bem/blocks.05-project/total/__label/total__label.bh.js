module.exports = function (bh) {
    bh.match('total__label', function (ctx, json) {
        ctx.tag('label').content([
            {elem: 'radio', tag: 'input', attrs:{type: 'radio', name: 'TOTAL', value: ctx.generateId()}},
            {tag: 'span', content: ctx.content()}
        ], true);
    });
};