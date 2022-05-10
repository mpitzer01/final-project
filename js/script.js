// HAMBURGER SCRIPT
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});
var form = document.forms["contact"];
	form.addEventListener('submit',contact_submit,false);

	function contact_submit(e) {
		// STOP THE FORM FROM SUBMITTING
		e.preventDefault();

		// SET INITIAL VARIABLES
		var target = e.target || e.srcElement;
		var to = 'mpitzer@sar.org';
		var uri = 'mailto:' + to;
		var body = '';

		// SET FORM VALUES TO VARIABLES
		var name = target.elements['name'].value;
		var subject = target.elements['subject'].value;
		var message = target.elements['message'].value;

		// BUILD MESSAGE WITH INPUTS
		body += message + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		
		// BUILD FINAL MAILTO 
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		// NEW MAILTO WINDOW OR TAB
    	// FOOTER RESIZES WITHOUT TEXT MOVEMENT
		window.open(uri,'_blank');
	}
  function rF() // resizeFooter
    {
        $("#footer").css('width', ($(document).width() + "px"));
    }
