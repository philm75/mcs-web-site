$(function() {
	$("#service-more-info").hide();
	$("#sd-more-info").hide();
			
	$('#service-more-info-link').click(function(){
		$("#service-more-info").slideToggle("fast", function() {
			if ($("#service-more-info").is(":hidden")) {
				$("#service-more-info-link").attr('value', 'Read more');
				$("#service-more-info-link").text('Read more');
			} else {
				$("#service-more-info-link").attr('value', 'Read less');
				$("#service-more-info-link").text('Read less');
			}			
		});
	});

	$('#sd-more-info-link').click(function(){
		$("#sd-more-info").slideToggle("fast", function() {
			if ($("#sd-more-info").is(":hidden")) {
				$("#sd-more-info-link").attr('value', 'Read more');
				$("#sd-more-info-link").text('Read more');
			} else {
				$("#sd-more-info-link").attr('value', 'Read less');
				$("#sd-more-info-link").text('Read less');
			}					
		});
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