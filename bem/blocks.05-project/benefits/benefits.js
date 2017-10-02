+function($){
    var Block = function(element, option){
        this.$block = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$block.slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1200-1,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
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
            var data    = $this.data('block.benefits');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.benefits', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_benefits = Plugin;
    $.fn.block_benefits.Constructor = Block;

    $('.benefits').block_benefits();
}(jQuery);
