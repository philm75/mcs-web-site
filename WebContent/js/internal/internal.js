$(function() {
	$("#service-more-info").hide();
	$("#sd-more-info").hide();
			
	$('#service-more-info-link').click(function(){
		$("#service-more-info").toggle("fast", function() {
			var link = $("#service-more-info-link").detach();
			if ($("#service-more-info").is(":hidden")) {
				link.attr('value', 'Read more');
				link.text('Read more');
				$("#more-service").append(link);
			} else {
				link.attr('value', 'Read less');
				link.text('Read less');
				$("#less-service").append(link);				  							
			}			
		});
	});

	$('#sd-more-info-link').click(function(){
		$("#sd-more-info").toggle("fast", function() {
			var link = $("#sd-more-info-link").detach();
			if ($("#sd-more-info").is(":hidden")) {
				link.attr('value', 'Read more');
				link.text('Read more');
				$("#more-sd").append(link);
			} else {
				link.attr('value', 'Read less');
				link.text('Read less');
				$("#less-sd").append(link);
			}					
		});
	});
	
	function addLink() {
		
	}
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