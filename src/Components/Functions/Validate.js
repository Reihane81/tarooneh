export const Validate = (data, type) => {

    const errors = {};

    if(!data.email) {
        errors.email = "ایمیل را وارد کنید";
    } else if(!/\S+@\S+\.\S+/.test(data.emeil)) {
        errors.email = "ایمیل درست نیست";
    } else {
        delete errors.email;
    }

    if(!data.phone) {
        errors.phone = "شماره موبایل را وارد کنید";
    } else if(data.phone.length < 11) {
        errors.phone = "شماره باید 11 عدد باشد";
    } else {
        delete errors.phone;
    }

    if(!data.password) {
        errors.password = "رمز را وارد کنید";
    } else if(data.password.length < 6) {
        errors.password = "رمز باید حداقل 6 کاراکتر باشد";
    } else {
        delete errors.password;
    }

    if(type === "signup") {
        if(!data.confirmPassword) {
            errors.confirmPassword = "تایید رمز را وارد کنید";
        } else if(data.confirmPassword !== data.password) {
            errors.confirmPassword = "رمز باهم یکی نیست";
        } else {
            delete errors.confirmPassword;
        }
    }

    return errors;
}