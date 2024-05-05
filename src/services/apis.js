const BASE_URL = process.env.REACT_APP_BASE_URL


export const RetriveFroms = {
    VIEW_ALL_FORMS: BASE_URL + 'viewAllForms',
    VIEW_FORMDATA: BASE_URL + 'viewFormData',
    VIEW_FORM_TEMPLATE: BASE_URL + 'viewFormTemplate',
}

export const submitForm = {
    CREATE_FORM :  BASE_URL + 'createForm',
    SUBMIT_FORM :  BASE_URL + 'submitForm',
}

export const authUser = {
    
    SIGNUP_USER : BASE_URL + "signup",
    LOGIN_USER : BASE_URL + "login"
}

