module.exports = function (bh) {
    bh.match('modal', function (ctx, json) {
        ctx.cls('fade').attrs({
            'tabindex': '-1',
            'role': 'document'
        })
    });
};