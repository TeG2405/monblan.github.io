+function($){
    var Block = function(element, option){
        this.$block = null;
        this.$up = null;
        this.scrollPosition = null;
        this.ticking = false;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$body = $('body,html');
        this.$block = $(element);
        this.$up = this.$block.find('.fixed__up');
        this.$up.on('click', $.proxy(function (e) {
            this.ticking = true;
            this.$body.animate({ scrollTop: 0 }, 0, $.proxy(function () {
                this.ticking = false;
                window.requestAnimationFrame($.proxy(function() {
                    this.onScroll(e);
                    this.ticking = false;
                }, this));
            }, this));
            e.preventDefault();
        }, this));
        $(window).on('resize scroll load', $.proxy(function (e) {
            var EventType = e.type;
            if(EventType == 'load')   this.$block.css({visibility: 'visible'});
            if(EventType == 'scroll') this.scrollPosition = window.scrollY;

            if(!this.ticking){
                window.requestAnimationFrame($.proxy(function() {
                    this.onScroll(e);
                    this.ticking = false;
                }, this));
            }
            this.ticking = true;
        }, this));
    };
    Block.prototype.onScroll = function () {
        var flag = window.innerHeight / 2 > this.scrollPosition;
        this.$block.css({
            opacity: flag ? '0' : '1',
            visibility: flag ? 'hidden' : 'visible'
        });
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.fixed');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.fixed', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_fixed = Plugin;
    $.fn.block_fixed.Constructor = Block;

    $('.fixed').block_fixed();
}(jQuery);

