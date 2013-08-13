function enableSelectBoxes() {
	$('div.selectr').each(function() {
		
		
		var list = $(this).children('ul.selectr-list');
		
		
		$(this).children('span.selectr-display').html(list.children('li.selectr-option:first').html());
		$(this).children('input.selectr_value').attr('value',list.children('li.selectr-option:first').attr('data-value'));
		
		$(this).children('span.selectr-display,span.selectr-btn').click(function(){
			if (list.css('display') == 'none'){
				list.css('display','block');
			}
			else {
				list.css('display','none');
			}
		});
		
		$(this).find('li.selectr-option').click(function(){
			list.css('display','none');
			$(this).parent().siblings('input.selectr_value').attr('value',$(this).attr('data-value'));
			$(this).parent().siblings('span.selectr-display').text($(this).text());
		});
		
	});
}

