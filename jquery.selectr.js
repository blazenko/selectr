

(function ($) {
	
	var privateX = 0;
	
	$.fn.selectr = function(options) {
		
		// This is the easiest way to have default options.
		var settings = $.extend({}, $.fn.selectr.defaults, options);
		
		
		return this.each(function(index) {
			
			/// this = select element 
			var origName = $(this).attr('name');
			$(this).attr('name', origName + '_original');
			$(this).hide();
			
			
			var selectr = $("<div class='selectr' id='selectr-"+index+"'/>");
			$(this).after(selectr);
			
			var field = $('<input name="'+origName+'" type="hidden"/>');
			selectr.append(field);
			var display = $("<span class='selectr-display'>BBB</span>");
			selectr.append(display);
			var btn = $("<span class='selectr-btn'>");
			selectr.append(btn);
			var list = $("<ul class='selectr-list' id='selectr-list-"+index+"'/>");
			selectr.append(list);
			
			btn.html(settings.arrowHtml);
			
			$('span.selectr-display,span.selectr-btn').click(function(){
				console.log(list);
				if (list.css('display') == 'none'){
					list.css('display','block');
				}
				else {
					list.css('display','none');
				}
			});
			
			$('option', this).each(function(idx) {
				
				/// this = option element 
				var li = $("<li class='selectr-option' id='selectr-li-"+index+"-"+idx+"'/>");
				list.append(li);
				li.attr('data-value', $(this).val());
				li.text($(this).text());
				if (idx == 0 || $(this).attr('selected') != null) {
					display.text($(this).text());
				}
				
				li.click(function(){
					list.css('display','none');
					field.val($(this).attr('data-value'));
					display.text($(this).text());
				});
				
			});
			
			
			
		});
		
	};
	
}( jQuery ));


$.fn.selectr.defaults = {
	arrowHtml : '&#9660;'
};




