module.exports = [
    {block: 'tile-counter', content: [
        {mix: {block: 'row'}, content: [
            {elem: 'inner', content: [
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-1', content: [
                                {block: 'tile-counter', elem: 'count', content: '1'}
                            ]},
                            {elem: 'link', content: 'Набор, редактирование и корректура текста'}
                        ]},
                        {elem: 'description', content: 'Исправление орфографических, синтактических ошибок'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-2', content: [
                                {block: 'tile-counter', elem: 'count', content: '2'}
                            ]},
                            {elem: 'link', content: 'Дизайн и верстка'}
                        ]},
                        {elem: 'description', content: 'Дихайн обложки и внутрених страниц, книжная верстка, подготовка иллюстраций'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-3', content: [
                                {block: 'tile-counter', elem: 'count', content: '3'}
                            ]},
                            {elem: 'link', content: 'Издательский пакет'}
                        ]},
                        {elem: 'description', content: 'Присвоение библиотечных знаков: isbn, bbk, удк, авторский знак, штрих-код.'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-4', content: [
                                {block: 'tile-counter', elem: 'count', content: '4'}
                            ]},
                            {elem: 'link', content: 'Печать книг'}
                        ]},
                        {elem: 'description', content: 'Печать выполняется офсетным способом. Электроный файл оригинал-макет переносится...'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-5', content: [
                                {block: 'tile-counter', elem: 'count', content: '5'}
                            ]},
                            {elem: 'link', content: 'Книжная палата'}
                        ]},
                        {elem: 'description', content: 'Исправление орфографических, синтактических ошибок'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-6', content: [
                                {block: 'tile-counter', elem: 'count', content: '6'}
                            ]},
                            {elem: 'link', content: 'Доставка тиража'}
                        ]},
                        {elem: 'description', content: 'Дихайн обложки и внутрених страниц, книжная верстка, подготовка иллюстраций'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-7', content: [
                                {block: 'tile-counter', elem: 'count', content: '7'}
                            ]},
                            {elem: 'link', content: 'Продвижение книг'}
                        ]},
                        {elem: 'description', content: 'Присвоение библиотечных знаков: isbn, bbk, удк, авторский знак, штрих-код.'}
                    ]}
                ]},
                {mix: {block: 'row', elem: 'col', mods: {xs: 12, sm: 6, md: 4, lg: 3}}, content: [
                    {elem: 'item', content: [
                        {elem: 'title', content: [
                            {block: 'icomoon', icon: 'step-8', content: [
                                {block: 'tile-counter', elem: 'count', content: '8'}
                            ]},
                            {elem: 'link', content: 'Электронная книга'}
                        ]},
                        {elem: 'description', content: 'Печать выполняется офсетным способом. Электроный файл оригинал-макет переносится...'}
                    ]}
                ]}
            ]}
        ]}
    ]}
];
