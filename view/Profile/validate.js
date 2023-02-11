
const validate = (values) => {
    const errors = {};
    errors.newpassword = !values.newpassword
        ? 'New Password field is required'
        : values.newpassword != values.cpassword
            ? "Password Not same"
            : undefined

    errors.oldpassword = !values.oldpassword
        ? 'Old Password field is required'

        : undefined

    errors.cpassword = !values.cpassword
        ? 'Confrim  Password field is required'

        : undefined



    return errors;
}
export default validate