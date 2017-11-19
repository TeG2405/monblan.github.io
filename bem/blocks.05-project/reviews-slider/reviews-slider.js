+function($){
    var Block = function(element, option){
        this.$block = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$inner = this.$block.find('.reviews-slider__inner'); 
        this.$inner.slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 6000,
            responsive: [
                {
                    breakpoint: 768 + 1,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.reviews_slider');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.reviews_slider', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_reviews_slider = Plugin;
    $.fn.block_reviews_slider.Constructor = Block;
    $('.reviews-slider').block_reviews_slider();
}(jQuery);
