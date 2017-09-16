module.exports = function (bh) {
    bh.match('icomoon', function (ctx, json) {
        ctx.tag('i').cls(json.icon && 'icon-'+json.icon);
    })
}