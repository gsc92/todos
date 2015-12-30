$(document).ready(function(){
	$('input#todo').keyup(function(ev) {
		var value = $(ev.target).val();
		if (ev.keyCode == 13) {
			$('ul#todo-list').append('<li>' + value + '</li>');
			ev.preventDefault();
        $(this).val('');
        return false;
		}
	});
});