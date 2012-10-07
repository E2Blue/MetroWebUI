
/* Perform a sliding effect of the elements children */
(function($){
	$(document).ready(function(){
		$('.modal-backdrop').on('click',function(){
			$('.modal').metroModal('hide');
		});
	});


	/* == jQuery extensions == */

	jQuery.fn.metroSlide = function(){
		this.each(function(){
			that = $(this);
			if(that.children().not('.noslide-js').length > 1){
				(function(that){
					setInterval(function(){
						that.children(':not(.noslide-js):nth-child(2)').show();
						that.children(':not(.noslide-js):first').slideUp(830,function(){
							that.append($(this));
							that.append(that.children('.no-slide-js'));
						});
					},2000);
				})(that);
			}
		});
		return this;
	}

	/* Randomly insert the last mosaic tile into the visible ones */
	jQuery.fn.metroMosaic = function(){
		this.each(function(){
			that = $(this);
			var settings = {fadeDuration:400,intervalDuration:2000};
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

	jQuery.fn.metroModal = function(action){
		this.each(function(){
			var that = this;
			if(action === 'show'){
				$('.modal-backdrop').fadeIn('25',function(){
					$(that).addClass('open');
				});
				
			}else if(action === 'hide'){
				$(this).removeClass('open');
				$('.modal-backdrop').fadeOut('25');
			}
		});
	}

	/* Inserts a sliding alertbox in the specified element(s)*/
	jQuery.fn.metroAlert = function(){
		this.each(function(){
			that = $(this);
			var settings = {cssClass: '',click: close()};
		});
		return this;
	}
})(jQuery);