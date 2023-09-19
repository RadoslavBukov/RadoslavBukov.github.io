(function () {
      const userID = "gv55iKQMPuUpFyDPl"; //User ID from EmailJS account 
		  emailjs.init(userID);
		})();

		// Function to validate and send the email
		function sendEmail() {
      const serviceID = "service_1evpdh9"; //Service ID from EmailJS account
      const templateID = "template_dmkqpdt"; //Template ID from EmailJS account


		  let loader = document.getElementById("loader");
		  let name = document.getElementById("cname").value;
		  let email = document.getElementById("cemail").value;
		  let services = document.getElementById("services").value;
		  let msg = document.getElementById("cmessage").value;
	  
		  // Validate the form fields
		  if (name === "" || email === "" || services === "Select a subject you're interested in..." || msg === "") {
			emptyError();
		  } else {
			loader.style.display = "flex"; // Show the loader
			emailjs.send(serviceID, templateID, {
			  to_name: "Radoslav Bukov",
			  name: name,
			  email: email,
			  service: services,
			  message: msg,
			})
			.then(function() {
			  // Email sent successfully
			  loader.style.display = "none"; // Hide the loader
			  success();
			})
			.catch(function(error) {
			  // Handle errors
			  console.error("EmailJS error:", error);
			  loader.style.display = "none"; // Hide the loader
			  showError();
			});
		  }
		}
	  
		// Function to handle empty form fields
		function emptyError() {
		  Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Fields cannot be empty!",
		  });
		}
	  
		// Function to show a success message
		function success() {
		  Swal.fire({
			icon: "success",
			title: "Success...",
			text: "Successfully sent message",
		  });
		}
	  
		// Function to show an error message
		function showError() {
		  Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong while sending the message!",
		  });
		}
	  
		// Add an event listener to the form submission
		document.getElementById("contact").addEventListener("submit", function (e) {
		  e.preventDefault(); // Prevent the default form submission
		  sendEmail(); // Call the function to send the email
		});