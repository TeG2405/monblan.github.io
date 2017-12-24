module.exports = function (bh) {
    bh.match('total__input', function (ctx, json) {
        ctx.tag('input').attrs({type: 'text'});
    });
};