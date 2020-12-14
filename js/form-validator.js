// REGISTRATION FORM VALIDATOR
validateForm = () => {
	// INPUT DECLEARATON
	const firstName = document.getElementById('firstName');
	const lastName = document.getElementById('lastName');
	const email = document.getElementById('email');
	const phoneNumber = document.getElementById('phoneNumber');
	const password = document.getElementById('password');

	// ERRORS DECREATION
	const fNameError = document.getElementById('firstname_error');
	const lNameError = document.getElementById('lastname_error');
	const emailError = document.getElementById('email_error');
	const phoneNumberError = document.getElementById('phoneNumber_error');
	const passwordError = document.getElementById('password_error');

	// SETTING ALL EVENT LISTENERS
	firstName.addEventListener('blur', firstNameVerify, true);
	lastName.addEventListener('blur', lastNameVerify, true);
	email.addEventListener('blur', emailVerify, true);
	phoneNumber.addEventListener('blur', phoneNumberVerify, true);
	password.addEventListener('blur', passwordVerify, true);


	const nameletters = /^[a-zA-z\s]*$/;
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	const paswdletters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	// validate form

	if (firstName.value == "") {
		firstName.style.borderBottom = "2px solid #ff5f13";
		fNameError.textContent = "Please enter your first name";
		firstName.focus();
		return false;
	} else if (nameletters.test(firstName.value) === false) {
		fNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (lastName.value == "") {
		lastName.style.borderBottom = "2px solid #ff5f13";
		lNameError.textContent = "Please enter your last name";
		lastName.focus();
		return false;
	} else if (nameletters.test(lastName.value) === false) {
		lNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (email.value == "") {
		email.style.borderBottom = "2px solid #ff5f13";
		emailError.textContent = "Please enter your email address";
		email.focus();
		return false;
	} else if (emailletters.test(email.value) === false) {
		emailError.innerHTML = 'Enter a valid email address';
		return false;
	}

	if (phoneNumber.value == "") {
		phoneNumber.style.borderBottom = "2px solid #ff5f13";
		phoneNumberError.textContent = "Please enter a phone number";
		phoneNumber.focus();
		return false;
	} else if (isNaN(phoneNumber.value)) {
		phoneNumberError.innerHTML = 'Please enter a valid phone number';
		return false;
	} else if (phoneNumber.value.length > 15) {
		phoneNumberError.innerHTML = 'Invalid, phone number is too long';
		return false;
	}

	if (password.value == "") {
		password.style.borderBottom = "2px solid #ff5f13";
		passwordError.textContent = "Please enter a password";
		password.focus();
		return false;
	} else if (paswdletters.test(password.value) === false) {
		passwordError.innerHTML = 'Password should contain 6 to 20 characters include at least one digit, upper and lowercase letter';
		return false;
	}


	// event handler functions
	function firstNameVerify() {
		if (firstName.value != "") {
			firstName.style.borderBottom = "2px solid #4378db";
			fNameError.innerHTML = "";
			return true;
		}
	}

	function lastNameVerify() {
		if (lastName.value != "") {
			lastName.style.borderBottom = "2px solid #4378db";
			lNameError.innerHTML = "";
			return true;
		}
	}

	function emailVerify() {
		if (email.value != "") {
			email.style.borderBottom = "2px solid #4378db";
			emailError.innerHTML = "";
			return true;
		}
	}

	function phoneNumberVerify() {
		if (phoneNumber.value != "") {
			phoneNumber.style.borderBottom = "2px solid #4378db";
			phoneNumberError.innerHTML = "";
			return true;
		}
	}

	function passwordVerify() {
		if (password.value != "") {
			password.style.borderBottom = "2px solid #4378db";
			passwordError.innerHTML = "";
			return true;
		}
	}
}


// CONTACT FORM VALIDATOR
validateContactForm = () => {
	// INPUT DECLEARATON
	const firstName = document.getElementById('firstName');
	const email = document.getElementById('email');
	const phoneNumber = document.getElementById('phoneNumber');
	const subject = document.getElementById('subject');
	const message = document.getElementById('message');

	// ERRORS DECREATION
	const fNameError = document.getElementById('firstname_error');
	const emailError = document.getElementById('email_error');
	const phoneNumberError = document.getElementById('phoneNumber_error');
	const subjectError = document.getElementById('subject_error');
	const messageError = document.getElementById('message_error');

	// SETTING ALL EVENT LISTENERS
	firstName.addEventListener('blur', firstNameVerify, true);
	email.addEventListener('blur', emailVerify, true);
	phoneNumber.addEventListener('blur', phoneNumberVerify, true);
	subject.addEventListener('blur', subjectVerify, true);
	message.addEventListener('blur', messageVerify, true);


	const nameletters = /^[a-zA-z\s]*$/;
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate form

	if (firstName.value == "") {
		firstName.style.borderBottom = "2px solid #ff5f13";
		fNameError.textContent = "Please fill out this field.";
		firstName.focus();
		return false;
	} else if (nameletters.test(firstName.value) === false) {
		fNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (email.value == "") {
		email.style.borderBottom = "2px solid #ff5f13";
		emailError.textContent = "Please enter your email address";
		email.focus();
		return false;
	} else if (emailletters.test(email.value) === false) {
		emailError.innerHTML = 'Enter a valid email address';
		return false;
	}

	if (phoneNumber.value == "") {
		phoneNumber.style.borderBottom = "2px solid #ff5f13";
		phoneNumberError.textContent = "Please enter a phone number";
		phoneNumber.focus();
		return false;
	} else if (isNaN(phoneNumber.value)) {
		phoneNumberError.innerHTML = 'Please enter a valid phone number';
		return false;
	} else if (phoneNumber.value.length > 15) {
		phoneNumberError.innerHTML = 'Invalid, phone number is too long';
		return false;
	}

	if (subject.value == "") {
		subject.style.borderBottom = "2px solid #ff5f13";
		subjectError.textContent = "Please fill out this field.";
		subject.focus();
		return false;
	}

	if (message.value == "") {
		message.style.border = "2px solid #ff5f13";
		messageError.textContent = "Please fill out this field.";
		subject.focus();
		return false;
	}

	// event handler functions
	function firstNameVerify() {
		if (firstName.value != "") {
			firstName.style.borderBottom = "2px solid #4378db";
			fNameError.innerHTML = "";
			return true;
		}
	}

	function emailVerify() {
		if (email.value != "") {
			email.style.borderBottom = "2px solid #4378db";
			emailError.innerHTML = "";
			return true;
		}
	}

	function phoneNumberVerify() {
		if (phoneNumber.value != "") {
			phoneNumber.style.borderBottom = "2px solid #4378db";
			phoneNumberError.innerHTML = "";
			return true;
		}
	}
	
	function subjectVerify() {
		if (subject.value != "") {
			subject.style.borderBottom = "2px solid #4378db";
			subjectError.innerHTML = "";
			return true;
		}
	}

	function messageVerify() {
		if (message.value != "") {
			message.style.border = "2px solid #4378db";
			messageError.innerHTML = "";
			return true;
		}
	}
}


// LOGIN FORM VALDATOR
validateLogForm = () => {
	// INPUT DECLEARATON
	const logEmail = document.getElementById('logEmail');
	const logPassword = document.getElementById('logPassword');

	// ERRORS DECREATION
	const logEmailError = document.getElementById('logEmail_error');
	const logPasswordError = document.getElementById('logPassword_error');

	// SETTING ALL EVENT LISTENERS
	logEmail.addEventListener('blur', logEmailVerify, true);
	logPassword.addEventListener('blur', logPasswordVerify, true);

	// ReGex
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	// validate form
	if (logEmail.value == "") {
		logEmail.style.borderBottom = "2px solid #ff5f13";
		logEmailError.textContent = "Please enter your email address";
		logEmail.focus();
		return false;
	} else if (emailletters.test(logEmail.value) === false) {
		logEmailError.innerHTML = 'Please enter a valid email address';
		return false;
	}

	if (logPassword.value == "") {
		logPassword.style.borderBottom = "2px solid #ff5f13"
		logPasswordError.textContent = "Please enter a password";
		logPassword.focus();
		return false;
	}

	// event handler functions
	function logEmailVerify() {
		if (logEmail.value != "") {
			logEmail.style.borderBottom = "2px solid #4378db";
			logEmailError.innerHTML = "";
			return true;
		}
	}

	function logPasswordVerify() {
		if (logPassword.value != "") {
			logPassword.style.borderBottom = "2px solid #4378db";
			logPasswordError.innerHTML = "";
			return true;
		}
	}
}

// FORGOT PASSWORD FORM VALDATOR
validateForgotPasswrForm = () => {
	// INPUT DECLEARATON
	const logEmail = document.getElementById('logEmail');

	// ERRORS DECREATION
	const logEmailError = document.getElementById('logEmail_error');

	// SETTING ALL EVENT LISTENERS
	logEmail.addEventListener('blur', logEmailVerify, true);

	// ReGex
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	// validate form
	if (logEmail.value == "") {
		logEmail.style.borderBottom = "2px solid #ff5f13";
		logEmailError.textContent = "Please enter your email address";
		logEmail.focus();
		return false;
	} else if (emailletters.test(logEmail.value) === false) {
		logEmailError.innerHTML = 'Please enter a valid email address';
		return false;
	}

	// event handler functions
	function logEmailVerify() {
		if (logEmail.value != "") {
			logEmail.style.borderBottom = "2px solid #4378db";
			logEmailError.innerHTML = "";
			return true;
		}
	}

}





// PROFILE DATA FORM VALIDATOR
validateProfileForm = () => {
	// INPUT DECLEARATON
	const firstName = document.getElementById('firstName');
	const lastName = document.getElementById('lastName');
	const email = document.getElementById('email');
	const phoneNumber = document.getElementById('phoneNumber');


	// ERRORS DECREATION
	const fNameError = document.getElementById('firstname_error');
	const lNameError = document.getElementById('lastname_error');
	const emailError = document.getElementById('email_error');
	const phoneNumberError = document.getElementById('phoneNumber_error');


	// SETTING ALL EVENT LISTENERS
	firstName.addEventListener('blur', firstNameVerify, true);
	lastName.addEventListener('blur', lastNameVerify, true);
	email.addEventListener('blur', emailVerify, true);
	phoneNumber.addEventListener('blur', phoneNumberVerify, true);


	const nameletters = /^[a-zA-z\s]*$/;
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate form

	if (firstName.value == "") {
		firstName.style.border = "2px solid #ff5f13";
		fNameError.textContent = "Please enter your first name";
		firstName.focus();
		return false;
	} else if (nameletters.test(firstName.value) === false) {
		fNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (lastName.value == "") {
		lastName.style.border = "2px solid #ff5f13";
		lNameError.textContent = "Please enter your last name";
		lastName.focus();
		return false;
	} else if (nameletters.test(lastName.value) === false) {
		lNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (email.value == "") {
		email.style.border = "2px solid #ff5f13";
		emailError.textContent = "Please enter your email address";
		email.focus();
		return false;
	} else if (emailletters.test(email.value) === false) {
		emailError.innerHTML = 'Enter a valid email address';
		return false;
	}

	if (phoneNumber.value == "") {
		phoneNumber.style.border = "2px solid #ff5f13";
		phoneNumberError.textContent = "Please enter a phone number";
		phoneNumber.focus();
		return false;
	} else if (isNaN(phoneNumber.value)) {
		phoneNumberError.innerHTML = 'Please enter a valid phone number';
		return false;
	} else if (phoneNumber.value.length > 15) {
		phoneNumberError.innerHTML = 'Invalid, phone number is too long';
		return false;
	}


	// event handler functions
	function firstNameVerify() {
		if (firstName.value != "") {
			firstName.style.border = "2px solid #4378db";
			fNameError.innerHTML = "";
			return true;
		}
	}

	function lastNameVerify() {
		if (lastName.value != "") {
			lastName.style.border = "2px solid #4378db";
			lNameError.innerHTML = "";
			return true;
		}
	}

	function emailVerify() {
		if (email.value != "") {
			email.style.border = "2px solid #4378db";
			emailError.innerHTML = "";
			return true;
		}
	}

	function phoneNumberVerify() {
		if (phoneNumber.value != "") {
			phoneNumber.style.border = "2px solid #4378db";
			phoneNumberError.innerHTML = "";
			return true;
		}
	}
}



// CREATE ORDER DATA FORM VALIDATOR
validateCreateOrderForm = () => {
	// INPUT DECLEARATON
	const firstName = document.getElementById('firstName');
	const lastName = document.getElementById('lastName');
	const email = document.getElementById('email');
	const phoneNumber = document.getElementById('phoneNumber');
	const pickupAddress = document.getElementById('pickupAddress');
	const dropOffAddress = document.getElementById('dropOffAddress');
	const datePicker = document.getElementById('datepicker');
	const timePicker = document.getElementById('timepicker');


	// ERRORS DECREATION
	const fNameError = document.getElementById('firstname_error');
	const lNameError = document.getElementById('lastname_error');
	const emailError = document.getElementById('email_error');
	const phoneNumberError = document.getElementById('phoneNumber_error');
	const datePickerError = document.getElementById('datepicker_error');
	const timePickerError = document.getElementById('timepicker_error');


	// SETTING ALL EVENT LISTENERS
	firstName.addEventListener('blur', firstNameVerify, true);
	lastName.addEventListener('blur', lastNameVerify, true);
	email.addEventListener('blur', emailVerify, true);
	phoneNumber.addEventListener('blur', phoneNumberVerify, true);
	pickupAddress.addEventListener('blur', pickupAddressVerify, true);
	dropOffAddress.addEventListener('blur', dropOffAddressVerify, true);
	datePicker.addEventListener('blur', datePickerVerify, true);
	timePicker.addEventListener('blur', timePickerVerify, true);


	const nameletters = /^[a-zA-z\s]*$/;
	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate form

	if (firstName.value == "") {
		firstName.style.border = "2px solid #ff5f13";
		fNameError.textContent = "Please enter your first name";
		firstName.focus();
		return false;
	} else if (nameletters.test(firstName.value) === false) {
		fNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (lastName.value == "") {
		lastName.style.border = "2px solid #ff5f13";
		lNameError.textContent = "Please enter your last name";
		lastName.focus();
		return false;
	} else if (nameletters.test(lastName.value) === false) {
		lNameError.innerHTML = 'Only letters is allowed';
		return false;
	}

	if (email.value == "") {
		email.style.border = "2px solid #ff5f13";
		emailError.textContent = "Please enter your email address";
		email.focus();
		return false;
	} else if (emailletters.test(email.value) === false) {
		emailError.innerHTML = 'Enter a valid email address';
		return false;
	}

	if (phoneNumber.value == "") {
		phoneNumber.style.border = "2px solid #ff5f13";
		phoneNumberError.textContent = "Please enter a phone number";
		phoneNumber.focus();
		return false;
	} else if (isNaN(phoneNumber.value)) {
		phoneNumberError.innerHTML = 'Please enter a valid phone number';
		return false;
	} else if (phoneNumber.value.length > 15) {
		phoneNumberError.innerHTML = 'Invalid, phone number is too long';
		return false;
	}
	if (pickupAddress.value == "") {
		pickupAddress.style.border = "2px solid #ff5f13";
		pickupAddress.focus();
		return false;
	}
	if (dropOffAddress.value == "") {
		dropOffAddress.style.border = "2px solid #ff5f13";
		dropOffAddress.focus();
		return false;
	}
	if (datePicker.value == "") {
		datePicker.style.border = "2px solid #ff5f13";
		datePickerError.textContent = "Please select pickup date";
		datePicker.focus();
		return false;
	}
	if (timePicker.value == "") {
		timePicker.style.border = "2px solid #ff5f13";
		timePickerError.textContent = "Please select pickup time";
		timePicker.focus();
		return false;
	}


	// event handler functions
	function firstNameVerify() {
		if (firstName.value != "") {
			firstName.style.border = "2px solid #4378db";
			fNameError.innerHTML = "";
			return true;
		}
	}

	function lastNameVerify() {
		if (lastName.value != "") {
			lastName.style.border = "2px solid #4378db";
			lNameError.innerHTML = "";
			return true;
		}
	}

	function emailVerify() {
		if (email.value != "") {
			email.style.border = "2px solid #4378db";
			emailError.innerHTML = "";
			return true;
		}
	}

	function phoneNumberVerify() {
		if (phoneNumber.value != "") {
			phoneNumber.style.border = "2px solid #4378db";
			phoneNumberError.innerHTML = "";
			return true;
		}
	}
	function pickupAddressVerify() {
		if (pickupAddress.value != "") {
			pickupAddress.style.border = "2px solid #4378db";
			return true;
		}
	}

	function dropOffAddressVerify() {
		if (dropOffAddress.value != "") {
			dropOffAddress.style.border = "2px solid #4378db";
			return true;
		}
	}

	function datePickerVerify() {
		if (datePicker.value != "") {
			datePicker.style.border = "2px solid #4378db";
			datePickerError.innerHTML = "";
			return true;
		}
	}
	function timePickerVerify() {
		if (timePicker.value != "") {
			timePicker.style.border = "2px solid #4378db";
			timePickerError.innerHTML = "";
			return true;
		}
	}
}


// NEWSLETTER DATA FORM VALIDATOR
validateNewsletterForm = () => {
	// INPUT DECLEARATON
	const email = document.getElementById('subscrEmail');

	// ERRORS DECREATION
	const emailError = document.getElementById('subscrEmail_error');

	// SETTING ALL EVENT LISTENERS
	email.addEventListener('blur', emailVerify, true);

	const emailletters = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate form

	if (email.value == "") {
		email.style.border = "2px solid #ff5f13";
		emailError.textContent = "Please enter your email address";
		email.focus();
		return false;
	} else if (emailletters.test(email.value) === false) {
		emailError.innerHTML = 'Enter a valid email address';
		return false;
	}

	// event handler functions
	function emailVerify() {
		if (email.value != "") {
			email.style.border = "2px solid #4378db";
			emailError.innerHTML = "";
			return true;
		}
	}

}


let pswrd = document.querySelector('.showHide');
let toggler = document.getElementById('toggler');

showHidePassword = () => {
	if (pswrd.type == 'password') {
		pswrd.setAttribute('type', 'text');
		toggler.classList.add('fa-eye-slash');
	} else {
		toggler.classList.remove('fa-eye-slash');
		pswrd.setAttribute('type', 'password');
	}
};

toggler.addEventListener('click', showHidePassword);