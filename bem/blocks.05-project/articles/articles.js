+function($){
    var Block = function(element, option){
        this.$block = null;
        this.$inner = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$inner = this.$block.find('.articles__inner');
        this.$inner.length && this.$inner.slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 992-1,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768 + 1,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480 + 1,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.articles');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.articles', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_articles = Plugin;
    $.fn.block_articles.Constructor = Block;
    $('.articles').block_articles();
}(jQuery);
