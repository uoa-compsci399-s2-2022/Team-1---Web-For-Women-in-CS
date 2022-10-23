export default function validateInfo(values) {
    let errors = {};
  
    if (!values.firstname.trim()) {
      errors.firstname = 'First name required';
    }

    if (!values.lastname.trim()) {
        errors.lastname = 'Last name required';
      }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.message){
      errors.message = 'Message required';
    }
    
    return errors;
  }