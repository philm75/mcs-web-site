$(function() {
	$("#service-more-info").hide();
	$("#sd-more-info").hide();
			
	$('#service-more-info-link').click(function(){
		$("#service-more-info").toggle();
	});

	$('#sd-more-info-link').click(function(){
		$("#sd-more-info").toggle();
	});
	
	$("#service-more-info-link").on("click", function() {
		if ($("#service-more-info").is(":hidden")) {
			$("#service-more-info-link").attr('value', 'More Info');
			$("#service-more-info-link").text('More Info');
		} else {
			$("#service-more-info-link").attr('value', 'Less Info');
			$("#service-more-info-link").text('Less Info');
		}
	});
	

	$("#sd-more-info-link").on("click", function() {
		if ($("#sd-more-info").is(":hidden")) {
			$("#sd-more-info-link").attr('value', 'More Info');
			$("#sd-more-info-link").text('More Info');
		} else {
			$("#sd-more-info-link").attr('value', 'Less Info');
			$("#sd-more-info-link").text('Less Info');
		}		
	});	
});


function printDate() {
	document.write(new Date().getFullYear());
}

function yearsExp() {
    var now = new Date();
    var past = new Date('1996-01-01');
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var yearsExp = nowYear - pastYear;
    document.write(yearsExp);	
}