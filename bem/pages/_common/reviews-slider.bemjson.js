module.exports = [
    {block: 'reviews-slider', content: [
        {elem: 'inner', content: [
            ((item)=>{
                return [item, item, item, item, item, item, item, item]
            })(
                {elem: 'item', content: [
                    {block: 'a', attrs: {href:  '../../../upload/pdf.pdf'}, content: [
                        {block: 'img', src: '../../../upload/blank-rew.jpg', mods: {lazyload: true, responsive: true}}
                    ]}
                ]}
            )
        ]}
    ]}

];
