export default function validateInfo(values) {
  let errors = {}

  if (!values.firstname.trim()) {
    errors.firstname = "First name required"
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Last name required"
  }

  if (!values.username.trim()) {
    errors.username = "Username required"
  }

  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 character or more"
  }

  if (!values.password2) {
    errors.password2 = "Password is required"
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password do not match"
  }

  return errors
}