module.exports = function (bh) {
    bh.match('close', function (ctx, json) {
        ctx.tag('button').attrs({
            type:"button",
            'data-dismiss':"modal",
            'aria-label':"Close"
        }).content('&times;');
    });
};