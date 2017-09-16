module.exports = function (bh) {
    bh.match('accent__col', function (ctx, json) {
        ctx.attr('style', 'background-image:url("'+json.src+'")');
    });
};