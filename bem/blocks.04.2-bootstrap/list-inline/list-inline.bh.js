module.exports = function (bh) {
    bh.match('list-inline', function (ctx, json) {

        var content = ctx.content();
        var result = [];
        for(var i in content){
            result.push({elem: 'li', content: [
                content[i]
            ]});
        }

        ctx.tag('ul').content(result, true);
    });
};