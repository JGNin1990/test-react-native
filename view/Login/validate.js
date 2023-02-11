const validate = (values) => {
    const errors = {};
    errors.phone_number = !values.phone_number
        ? 'Phone Number field is required'
        : undefined;

    errors.password = !values.password
        ? 'Password field is required'
        // : 
        // values.password.length < 8
        //     ? 'Password must be at least 8 characters long'
        : undefined;

    return errors;
}
export default validate