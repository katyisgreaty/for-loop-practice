var vowelReplace = function(string) {
	var vowels = ["a", "e", "i", "o", "u"];
	for(var n = 0; n <= string.length - 1; n += 1) {
		if (vowels.indexOf(string.charAt(n)) != -1) {
			string = string.replace(string.charAt(n), "-");
		}
	}
	return string;
}

$(document).ready(function() {

	$(".info form").submit(function(event) {
		var sentenceInput = $("input#sentence").val();
		$("span.output").text(vowelReplace(sentenceInput));
		$(".letter").show();
		event.preventDefault();
	});
});
