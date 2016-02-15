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
				$('#todo-count').find('>span.number').text(
					$li_list.length
				);
			}
			
			function input_toggle (ev){
				var $input = $(ev.target), 
					$label = $input.siblings('label');
					
				var is_checked = $input.prop('checked');
				if (is_checked){
					$label.addClass('completed');
				} else {
					$label.removeClass('completed');
				}
				
				var $li_list = $('ul#todo-list>li'),
					$not_completed_list = $li_list.find('label:not(.completed)');
				
				$('#todo-count')
					.find('>span.number').text($not_completed_list.length);
				
				var $completed_list = $li_list.find('label.completed');
				if ($completed_list.length == 0) {
					$('#clear-completed').hide();
				} else {
					$('#clear-completed').show();
				}
			}
			
			$("input.toggle").off('click').on('click', input_toggle);
									
			function delete_item (ev) {
				var $button = $(ev.target),
					$li = $button.parent('li');
				$li.remove();
												
				var $li_list = $ul.find('>li');
				if ($li_list.length == 0){
					$('#toggle-all').hide();
					$('#footer').hide();
				}
				$('#todo-count').find('>span.number').text(
					$li_list.length
				);
			}
			
			$("button.destroy").off('click').on('click', delete_item);	
			
			function all_items (ev) {
				$('ul#todo-list>li').show();
				$('#all').addClass('selected');
				$('#active').removeClass('selected');
				$('#completed').removeClass('selected');
			}
			
			$("#all").off('click').on('click', all_items);
			
			function active_items (ev) {
				$('ul#todo-list>li').show().each(function (i, li) {
					var $labels = $(li).find('label.completed');
					if ($labels.length > 0) $(li).hide(); 
				});
				$('#all').removeClass('selected');
				$('#active').addClass('selected');
				$('#completed').removeClass('selected');
			}
			
			$("#active").off('click').on('click', active_items);
			
			function completed_items (ev) {
				$('ul#todo-list>li').show().each(function (i, li) {
					var $labels = $(li).find('label:not(.completed)');
					if ($labels.length > 0) $(li).hide();	
				});
				$('#all').removeClass('selected');
				$('#active').removeClass('selected');
				$('#completed').addClass('selected');
			}
			
			$("#completed").off('click').on('click', completed_items);
			
			function toggle_all (ev) {
				var $input = $(ev.target);
				var is_checked = $input.prop('checked');
				$("input.toggle").prop('checked', is_checked);
				if (is_checked){
					$('li>label').addClass('completed');
				} else {
					$('li>label').removeClass('completed');
				}
				
				var $li_list = $('ul#todo-list>li'),
					$label_list = $li_list.find('label:not(.completed)');
				$('#todo-count').find('>span.number').text(
					$label_list.length
				);
				
				var $completed_list = $li_list.find('label.completed');
				if ($completed_list.length == 0) {
					$('#clear-completed').hide();
				} else {
					$('#clear-completed').show();
				}
			}
			
			$("#toggle-all").off('click').on('click', toggle_all);
			
			function clear_completed (ev) {
				$('ul#todo-list>li').each(function (index, li) {
					var $labels = $(li).find('label.completed');
					if ($labels.length > 0) $(li).remove();
				});	
				
				if ($('ul#todo-list>li').length == 0) {
					$('#toggle-all').hide();
					$('#footer').hide();
				}		
				
				$('#clear-completed').hide();
				$('#toggle-all').prop('checked', false);
			}
			
			$("#clear-completed").off('click').on('click', clear_completed);
						
			ev.preventDefault();			
			$(this).val('');
			return false;
		}		
	});
	
});
