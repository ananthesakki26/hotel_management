export const contactValidation = (formContact) => {
  let errors = {};

  if (!formContact.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formContact.email)) {
    errors.email = "Email is invalid";
  }

  if (!formContact.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (formContact.phone.length !== 10) {
    errors.phone = "Phone number should be 10 digits";
  }

  if (!formContact.feedback.trim()) {
    errors.feedback = "Feedback is required";
  }

  return errors;
};

export const signValidation = (signForm) => {
  let errors = {};

  if (!signForm.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(signForm.email)) {
    errors.email = "Email is invalid";
  }

  if (!signForm.password.trim()) {
    errors.password = "Password is required";
  } else if (signForm.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

export const accountCreationValidation = (accountForm) => {
  let errors = {};

  if (!accountForm.name.trim()) {
    errors.name = "Name is required";
  }

  if (!accountForm.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(accountForm.email)) {
    errors.email = "Email is invalid";
  }

  if (!accountForm.password.trim()) {
    errors.password = "Password is required";
  } else if (accountForm.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  if (!accountForm.confirmPassword.trim()) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (accountForm.password !== accountForm.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};

export const bookingFormValidation = (formData) => {
  let newErrors = {};

  if (!formData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email address is required";
  }

  if (!formData.phoneNumber.trim()){
    newErrors.phoneNumber = "Phone number is required";
  }

  if (!formData.checkInDate){
    newErrors.checkInDate = "Check-in date is required";
  }

  if (!formData.checkOutDate){
    newErrors.checkOutDate = "Check-out date is required";
  }

  if (!formData.roomType){
    newErrors.roomType = "Please select a room type";
  }

  if (!formData.numberOfGuests){
    newErrors.numberOfGuests = "Please enter number of guests";
  }

  return newErrors;
};
