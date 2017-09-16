+function($){
    var Block = function(element, option){
        this.$block = null;
        this.$input = null;
        this.$name = null;
        this.title = null;
        this.init(element, option);
    };
    Block.prototype.init = function(element, option){
        this.$block = $(element);
        this.$input = this.$block.find('input');
        this.$name = this.$block.find('.file-control__name');
        this.title = this.$name.text();
        this.$input.on('change', $.proxy(function (e) {
            var result = [];
            var i = 0;
            while ( i < e.target.files.length) {
                result.push(e.target.files[i].name);
                i++;
            }
            this.$name.html(result.length ? result : this.title);
        }, this));
    };
    function Plugin(option){
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('block.file_control');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('block.file_control', (data = new Block(this, options)));
            if (typeof option == 'string') data[option]();
        })
    }

    $.fn.block_file_control = Plugin;
    $.fn.block_file_control.Constructor = Block;
    $('.file-control').block_file_control();
}(jQuery);
