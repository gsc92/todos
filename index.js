$(document).ready(function(){
	$('input#new-todo').keyup(function(ev) {
		var value = $(ev.target).val();
		var $ul = $('ul#todo-list');
		if (ev.keyCode == 13) {
			$ul.append('<div class="view">' + '<li>' + '<input type="checkbox" class="toggle"/>'+'<label>'+value+'</label>'+'<button class="destroy"></button>'+'</li>'+'</div>');
			var $li_list = $ul.find('>li');
			if ($li_list.length < 0){
				$('#toggle-all').hide();
			} else {
				$('#toggle-all').show();
			}
			ev.preventDefault();			
    $(this).val('');
    return false;
	}		
	});
	$("#toggle").on('click', function(ev){
		var is_checked = $(ev.target).prop('checked');
		if($('.toggle').is(':checked')){
			return('<strike><ul></ul></strike>');
		}
	});
	
});