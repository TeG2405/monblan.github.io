module.exports = [
    {block: 'well', content: [
        {block: 'h', size: 2, mix: {block: 'mtn'}, content: 'Оставить отзыв'},
        {block: 'form', content: [
            {mix: {block: 'row'}, content: [
                {mix: {block: 'row', elem: 'col', mods: {xs: 12}}, content: [
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control', placeholder: 'ФИО'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Email'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Должность'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Компания'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control',  placeholder: 'Должность'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {block: 'form-control', tag: 'textarea', attrs: {style: 'height: 240px'}, placeholder: 'Текст сообщения'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12}}, content: [

                    {mix: {block: 'form-group'}, content: [
                        {block: 'img', src: 'http://placehold.it/310x80?text=ReCaptcha'}
                    ]},
                    {mix: {block: 'form-group'}, content: [
                        {mix: {block: 'row'}, content: [
                            {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6}}, content: [
                                {block: 'btn', mods: {color: 'primary'}, mix: {block: 'phl'}, content: [
                                    {block: 'span', mix: {block: 'phl'}, content: 'Оставить отзыв'}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    ]}
];