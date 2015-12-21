$(document).ready(function(){
	$('input#todo').keypress(function(ev) {
		var value = $(ev.target).val();
		if (ev.keyCode == 13) {
			$('ul#todo-list').append('<li>' + value + '</li>');
		}
	});
});