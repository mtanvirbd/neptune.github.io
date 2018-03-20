$(function(){
	//cache the window object
	var $window = $(window);
	//Parallax background effect
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
			// scroll the background at var speed
			//the yPos is a negative value because we're scrolling it up
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50%'+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});


 $("#contactUs").submit(function(e) {
              
              var error = "";
              
               if ($("#contact-form").val() == "") {
                  
                  error += "The Name field is required.<br>"
                  
              }
	 			if ($("#email").val() == "") {
                  
                  error += "The email field is required.<br>"
                  
              }
              
             
              
              if ($("#contact-words").val() == "") {
                  
                  error += "The content field is required.<br>"
                  
              }
              
              if (error != "") {
                  
                 $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
                  
                  return false;
                  
              } else {
                  
                  return true;
                  
              }
          })