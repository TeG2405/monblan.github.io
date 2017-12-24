module.exports = function (bh) {
    bh.match('total__table', function (ctx, json) {
        ctx.tag('table');
    });
    bh.match('total__thead', function (ctx, json) {
        ctx.tag('thead');
    });
    bh.match('total__tbody', function (ctx, json) {
        ctx.tag('tbody');
    });
    bh.match('total__tr', function (ctx, json) {
        ctx.tag('tr');
    });
    bh.match('total__td', function (ctx, json) {
        ctx.tag('td');
    });
    bh.match('total__th', function (ctx, json) {
        ctx.tag('th');
    });
};