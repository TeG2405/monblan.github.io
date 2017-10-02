+function($){
    var Block = function(element, option){
        this.$block = null;
        this.$li = null;
        this.$link = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$li = this.$block.find('.nav-section__li');
        this.$link = this.$block.find('.nav-section__link');
        this.$link.on('click', $.proxy(function (e) {
            var $this = $(e.currentTarget);
            if(!$this.next('.nav-section__dropdown').is(':visible')){
                this.$li.removeClass('open');
                $this.closest(this.$li).addClass('open');
                e.preventDefault();
            }
        }, this));
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.nav_section');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.nav_section', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_nav_section = Plugin;
    $.fn.block_nav_section.Constructor = Block;
    
    $('.nav-section').block_nav_section();
}(jQuery);
