
/* Perform a sliding effect of the elements children */
(function($){
	jQuery.fn.metroSlide = function(){
		this.each(function(){
			that = $(this);
			if(that.children().not('.noslide-js').length > 1){
				(function(that){
					setInterval(function(){
						that.children(':not(.noslide-js):nth-child(2)').show();
						that.children(':not(.noslide-js):first').slideUp(830,function(){
							that.append($(this));
						});
					},2000);
				})(that);
			}
		});
		return this;
	}

	/* Randomly insert the last mosaic tile into the visible ones */
	jQuery.fn.mosaic = function(){
		this.each(function(){
			that = $(this);
			var settings = {fadeDuration:500,intervalDuration:2000};
			if(that.children().length > 9){
				(function(that){
					setInterval(function(){
						var lastElement = $(that.children()[that.children().length-1]);
						var replaceElement = $(that.children()[Math.floor(Math.random() * 8)]);
						lastElement.hide();
						replaceElement.after(lastElement);

						replaceElement.fadeOut(settings.fadeDuration,function(){
							lastElement.fadeIn(settings.fadeDuration,function(){								
								$(that.children()[that.children().length-1]).after(replaceElement);
								replaceElement.show();

							});						
						});
					},settings.intervalDuration);
				})(that);
			}
		});
		return this;
	}
})(jQuery);