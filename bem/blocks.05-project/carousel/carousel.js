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
            slidesToShow: 1,
            slidesToScroll: 1
        });
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.carousel');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.carousel', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_carousel = Plugin;
    $.fn.block_carousel.Constructor = Block;
    $('.carousel').block_carousel();
}(jQuery);
