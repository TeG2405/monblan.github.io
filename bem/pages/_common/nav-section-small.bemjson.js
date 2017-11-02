function getList(map, images, flag){
    return Object.keys(map).map((item, index)=>{
        return {
            elem: 'li', mods: {line: flag && (index > images.length - 4)}, mix: [{block: !flag && !index ? 'open' : ''}, {block: 'mbn'}], content: [
                {elem: 'image', mods: {icon: images[index] ? images[index]: false}},
                {elem: 'link', content: item},
                {elem: 'dropdown', content: [
                    map[item].map((item)=>{
                        return {
                            elem: 'li', mix: {block: 'pln'}, content: [
                                {elem: 'link', content: item}
                            ]
                        }
                    })
                ]}
            ]
        }
    })
}

module.exports = [
    {block: 'nav-section',content: [
        {elem: 'list', content: [
            getList({
                'Вас может заинтересовать': [
                    'Оперативная полиграфия',
                    'Офсетная печать',
                    'Послепечатная обработка',
                    'Оборудование',
                    'Как сделать то',
                    'Как сделать это',
                    'Как сделать...',
                    'Как сделать...',
                    'Как сделать...',
                    'Как сделать...'
                ]
            }, ['', '', '', '' ], false)
        ]}
    ]}
];
