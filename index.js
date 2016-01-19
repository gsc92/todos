$(document).ready(function(){
	$('input#new-todo').keyup(function(ev) {
		var value = $(ev.target).val();
		var $ul = $('ul#todo-list');
		if (ev.keyCode == 13) {
			$ul.append('<li>' + '<input type="checkbox" class="toggle"/>' + value + '<button>X</button>'+'</li>');
			var $li_list = $ul.find('>li');
			if ($li_list.length > 0){
				$('#toggle-all').show();
			} else {
				$('#toggle-all').hide();
			}
			ev.preventDefault();			
        $(this).val('');
        return false;
		}		
	});
	$("button").click();
});