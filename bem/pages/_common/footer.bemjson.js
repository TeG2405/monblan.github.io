module.exports = [
    {block: 'footer', content: [
       {mix: {block: 'container', mods: {fluid: 'false'}}, content: [
         {mix: {block: 'row'}, content: [
            {elem: 'navigation', mix: [{block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 7, lg: 8}}, {block: 'hidden-xs'}], content: [
               {mix: {block: 'row'}, content: [
                  {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 8, lg: 9}}, content: [
                     {elem: 'title', content: [
                        {block: 'a', content: 'Полиграфия'}
                     ]},
                     {elem: 'list', content:
                         [
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Мягкий переплет',
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Мягкий переплет',
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Мягкий переплет',
                            'Книги',
                            'Издать книгу',
                            'Печать книг',
                            'Твердый переплет',
                            'Мягкий переплет'
                         ].map((item)=>{return {elem: 'li', content: [
                            {block: 'a', content: item}
                         ]}})
                     }
                  ]},
                  {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                     {elem: 'title', content: [
                        {block: 'a', content: 'Услуги'}
                     ]},
                     {elem: 'list', content:
                         [
                            'Книги',
                            'Издать книгу',
                            'Печать книг'
                         ].map((item)=>{return {elem: 'li', content: [
                            {block: 'a', content: item}
                         ]}})
                     },
                     {elem: 'title', content: [
                        {block: 'a', content: [
                           'Типография'
                        ]}
                     ]},
                     {elem: 'list', content:
                         [
                            'Книги',
                            'Издать книгу',
                            'Печать книг'
                         ].map((item)=>{return {elem: 'li', content: [
                            {block: 'a', content: item}
                         ]}})
                     }
                  ]}
               ]}
            ]},
            {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 5, lg: 4}}, content: [
               {elem: 'logo', content: [
                  {block: 'logo', content: [
                     {block: 'icomoon', icon: 'book'},
                     {elem: 'inner', content: [
                        {elem: 'title', content: 'МОНБЛАН'},
                        {elem: 'description', content: 'издательство'}
                     ]}
                  ]},
                  {block: 'list-inline', mix: {block: 'mvn'}, content: [
                     {block: 'a', content: {
                        block: 'fa', icon: 'vk', mix: [{block: 'fa-2x'}, {block: 'pas'}]
                     }},
                     {block: 'a', content: {
                        block: 'fa', icon: 'odnoklassniki', mix: [{block: 'fa-2x'}, {block: 'pas'}]
                     }},
                     {block: 'a', content: {
                        block: 'fa', icon: 'facebook', mix: [{block: 'fa-2x'}, {block: 'pas'}]
                     }}
                  ]}
               ]},
               {elem: 'contact', content: [
                  {elem: 'address', content: 'Волгоград, проспект Ленина, д.100, офис 216.'},
                  {elem: 'phone', content: '+7 (917) 830-95-66'},
                  {elem: 'email', content: 'monblan-press@yandex.ru'}
               ]},
               {elem: 'contact', content: [
                  {elem: 'address', content: 'Москва, переулок Сухаревский М., д.9, стр. 1'},
                  {elem: 'phone', content: '+7 499 34 68 127'},
                  {elem: 'email', content: 'monblan-press@yandex.ru'}
               ]}
            ]}
         ]},
         {elem: 'bottom', content: [
            {mix: {block: 'row'}, content: [
               {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 7, lg: 8}}, content: [
                  {block: 'list-inline', mix: {block: 'mbn'}, content: [
                     {block: 'a', content: 'Главная'},
                     {block: 'a', content: 'О компании'},
                     {block: 'a', content: 'Цены'},
                     {block: 'a', content: 'Контакты'}
                  ]}
               ]},
               {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 5, lg: 4}}, content: [
                  {elem: 'copyright', content: [
                     '© 2017 Издательство "МОНБЛАН"'
                  ]}
               ]}
            ]}  
         ]}
      ]}
    ]},
    {block: 'fixed', content: [
        {block: 'social-likes', mods: {vertical: true}, attrs: {"data-counters" : "no"}, content: [
            {block: 'facebook'},
            {block: 'vkontakte'},
            {block: 'odnoklassniki'}
        ]},
        {elem: 'up'}
    ]}
];
