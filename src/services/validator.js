import { emailRegex, passwordRegex } from "../constants/regex";

function validatePasswordWithRules(password) {
    if (typeof password != "string") {
        password = "" + password;
    }
    if (password.length < 8) {
        return 'Password length must be 8 chars';
    }
    if (password.search(/[0-9]/) === -1) {
        return 'At least 1 numeric value from 0 to 9';
    }
    if (password.search(/[a-z]/) === -1) {
        return 'At least 1 small letter value [a-z]';
    }
    if (password.search(/[A-Z]/) === -1) {
        return 'At least 1 upper letter value [A-Z]';
    }
    if (password.search(/[`~!@#\$%\^&\*\(\)\-_\{\}\=\+'"\>\.\,\?<\/\|\\\:;\]\[]/) === -1) {
        return 'At least 1 special chars [~!@#$%^&*()_+{}":?><...]';
    }
    return true;
}

function validatePassowrd(password) {
    return passwordRegex.test(password);
}

function validateEmail(emai) {
    return emailRegex.test(emai);
}