/**
 * Created by zvezd on 07.12.2017.
 */
+function($){
    var Block = function(element, option){
        this.$block = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$collapse = this.$block.find('.collapse');
        this.$collapse.on('show.bs.collapse', $.proxy(function (e) {
            this.$collapse.not(e.target).collapse('hide');
        }, this));
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.accordion');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.accordion', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_accordion = Plugin;
    $.fn.block_accordion.Constructor = Block;
    $('.accordion').block_accordion();
}(jQuery);
