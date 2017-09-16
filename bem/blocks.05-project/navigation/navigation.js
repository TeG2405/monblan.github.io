+function($){
    var Block = function(element, option){
        this.$block = null;
        this.$openControl = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$openControl = this.$block.find('[data-toggle="open"]');
        this.$dropControl = this.$block.find('[data-toggle="drop"]');

        this.$openControl.on('click', $.proxy(this.open, this));
        this.$dropControl.on('click', $.proxy(this.drop, this));

        $(document).on('click', $.proxy(function (e) {
            $(this.$dropControl.not($(e.target).closest(this.$dropControl)).data('target')).removeClass('open');
        }, this));
    };
    Block.prototype.open = function (e) {
        var $this = $(e.currentTarget);
        $this.closest($this.data('target')).toggleClass('open');
    };
    Block.prototype.drop = function (e) {
        var $this = $(e.currentTarget);
        $this.closest($this.data('target')).addClass('open');
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.navigation');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.navigation', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_navigation = Plugin;
    $.fn.block_navigation.Constructor = Block;

    $('.navigation').block_navigation();
}(jQuery);