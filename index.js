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
			
			var $li_list = $ul.find('>li');
			if ($li_list.length < 0){
				$('#toggle-all').hide();
			} else {
				$('#toggle-all').show();
			}
			$(".toggle").off('click').on('click', function (ev) {
				var $input = $(ev.target), 
					$label = $input.siblings('label');
				var is_checked = $input.prop('checked');
				if (is_checked){
					$label.addClass('completed');
				} else {
					$label.removeClass('completed');
				}
			});
			ev.preventDefault();			
			$(this).val('');
			return false;
		}		
	});
	
});