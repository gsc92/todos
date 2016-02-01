$(document).ready(function () {
	$('input#new-todo').keyup(function (ev) {
		var value = $(ev.target).val();
		var $ul = $('ul#todo-list');
		if (ev.keyCode == 13) {
			$ul.append(
				'<li>' + 
					'<input type="checkbox" class="toggle"/>' +
					'<label>' + value + '</label>' +
					'<button class="destroy"></button>' +
				'</li>'
			);
			
			if ($('#footer').is(":visible")== false) $("#footer").show();
						
			var $li_list = $ul.find('>li');
			if ($li_list.length > 0){
				$('#toggle-all').show();
			} 
			
			$("input.toggle").off('click').on('click', function (ev) {
				var $input = $(ev.target), 
					$label = $input.siblings('label');
				var is_checked = $input.prop('checked');
				if (is_checked){
					$label.addClass('completed');
				} else {
					$label.removeClass('completed');
				}
			});
						
			$("button.destroy").off('click').on('click', function (ev) {
				var $button = $(ev.target),
					$li = $button.parent('li');
				$li.remove();
								
				var $li_list = $ul.find('>li');
				if ($li_list.length == 0){
					$('#toggle-all').hide();
					$('#footer').hide();
				}
			});	
			$("#toggle-all").on('click', function (ev) {
				var $input = $(ev.target);
				var is_checked = $input.prop('checked');
				$("input.toggle").prop('checked', is_checked);
			});
			
			ev.preventDefault();			
			$(this).val('');
			return false;
		}		
	});
	
});