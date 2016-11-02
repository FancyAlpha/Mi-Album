function slabTextHeadlines() {
	$("h1").slabText({
    	// Don't slabtext the headers if the viewport is under 380px
		"viewportBreakpoint": 200
 	});
};

$(window).load(function() {
  	setTimeout(slabTextHeadlines, 100);
});