import { CALL_API, GET, POST } from '../middleware/api'

/*
 *  EVENT ACTIONS
 *  Handles all singular event actions
 *  E.x. signing up for an event, or getting data for one event
 *  TODO wire these up to work on every possible user field. It currently only works on name, email, phone and bio
 */

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PHONE = 'UPDATE_PHONE';
export const UPDATE_BIO = 'UPDATE_BIO';
//export const SET_POC = 'SET_POC';
//export const SET_PASSWORD = 'SET_PASSWORD';
//export const SET_PASSWORDVERIFY = 'SET_PASSWORDVERIFY';
//export const SET_PHONE = 'SET_PHONE';
//export const SET_GENDER = 'SET_GENDER';
//export const SET_BIRTHDATE = 'SET_BIRTHDATE';
//export const SET_LOCATION = 'SET_LOCATION';
//export const SET_EDUCATION = 'SET_EDUCATION';
//export const SET_ADDRESS = 'SET_ADDRESS';
//export const SET_CITY = 'SET_CITY';
//export const SET_STATE = 'SET_STATE';
//export const SET_ZIP = 'SET_ZIP';
//export const SET_SKILLS = 'SET_SKILLS';
//export const SET_INTERESTS = 'SET_INTERESTS';
//export const SET_BIO = 'SET_BIO';
//export const SET_MISSION = 'SET_MISSION';
//export const SET_CONTACT = 'SET_CONTACT';
export const CLEAR_UPDATE_FIELDS = 'CLEAR_UPDATE_FIELDS';
export const SET_UPDATE_ERROR = 'SET_UPDATE_ERROR';
export const REMOVE_UPDATE_ERROR = 'REMOVE_UPDATE_ERROR';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';


export const updateName = (name) => {
    let valid = true;
    let error = null;

    if (name.length == 0) {
        valid = false;
        error = "Invalid name";
    }

    return ({
        type: UPDATE_NAME,
        name: {value: name, valid: valid, error: error}
    })
};

export const updateEmail = (email) => {
    let valid = false;
    let error = null;

    if (email.indexOf('@') > 0) {
        valid = true;
    } else if (email.length == 0) {
        error = "Enter an email";
    } else {
        error = "Invalid email address";
    }

    return ({
        type: UPDATE_EMAIL,
        email: {value: email, valid: valid, error: error}
    })
};

export const updatePhone = (phone) => {
    let valid = false;
    let isNum = /^\d+$/.test(phone);
    let error = null;

    phone = phone.replace(/\D/g,'');

    if (phone.length == 10 && isNum) {
        valid = true;
    }
    else if (!isNum) {
        error = "Phone number must only contain numbers";
    }
    else if (phone.length == 0) {
        error = "Enter a phone number";
    }
    else {
        error = "Phone number must be 10 digits";
    }

    return({
        type: UPDATE_PHONE,
        phone: {value: phone, valid: valid, error: error}
    })
};

export const updateBio = (bio) => {
    let valid = false;
    let error = null;

    if (bio.length > 256) {
        valid = true;
    } else {
        error = "Bio too long."
    }

    return ({
        type: UPDATE_BIO,
        phone: {value: bio, valid: valid, error: error}
    })
};
//
//export const setPoc = (poc) => {
//    let valid = true;
//    let error = null;
//
//    if (poc.indexOf('@') < 0 && poc.length > 0) {
//        valid = false;
//        error = "Invalid email address for primary contact";
//    }
//
//    return ({
//        type: SET_POC,
//        poc: {value: poc, valid: valid, error: error}
//    })
//};
//
//export const setPassword = (password) => {
//    let valid = false;
//    let error = null;
//
//    if (password.length > 4){
//        valid = true;
//    }
//    else if (password.length == 0) {
//        error = "Enter a password";
//    } else {
//        error = "Password must be at least 5 characters";
//    }
//
//    return ({
//        type: SET_PASSWORD,
//        password: {value: password, valid: valid, error: error}
//    })
//};
//
//export const setPasswordVerify = (passwordVerify, password) => {
//    let valid = false;
//    let error = null;
//
//    if (passwordVerify) {
//        if (passwordVerify.length > 4 && password == passwordVerify) {
//            valid = true;
//        } else {
//            error = "Passwords do not match"
//        }
//    } else {
//        error = "Verify password"
//    }
//
//    return({
//        type: SET_PASSWORDVERIFY,
//        passwordVerify: {value: passwordVerify, valid: valid, error: error}
//    })
//};
//
//export const setPhone = (phone) => {
//    let valid = false;
//    let isNum = /^\d+$/.test(phone);
//    let error = null;
//
//    phone = phone.replace(/\D/g,'');
//
//    if (phone.length == 10 && isNum) {
//        valid = true;
//    }
//    else if (!isNum) {
//        error = "Phone number must only contain numbers";
//    }
//    else if (phone.length == 0) {
//        error = "Enter a phone number";
//    }
//    else {
//        error = "Phone number must be 10 digits";
//    }
//
//    return({
//        type: SET_PHONE,
//        phone: {value: phone, valid: valid, error: error}
//    })
//};
//
//export const setGender = (gender) => {
//    if (gender.length == 0) {
//        gender = null;
//    }
//
//    return({
//        type: SET_GENDER,
//        gender: {value: gender, valid: true, error: null}
//    })
//};
//
//export const setBirthdate = (day, month, year) => {
//    let valid = true;
//    let error = null;
//
//    if (year.length == 0) {
//        if (month.length == 0){
//            if (day.length !== 0) {
//                valid = false;
//                error = "Enter a birth month";
//            }
//        } else {
//            valid = false;
//            error = "Enter a birth year";
//        }
//    } else {
//        if (month.length == 0){
//            if (day.length !== 0) {
//                valid = false;
//                error = "Enter a birth month";
//            }
//        }
//    }
//
//    var date = day + "/" + month + "/" + year;
//
//    return({
//        type: SET_BIRTHDATE,
//        birthdate: {value: date, valid: valid, error: error}
//    })
//};
//
//export const setLocation = (location) => {
//    if (location.length == 0) {
//        location = null;
//    }
//
//    return({
//        type: SET_LOCATION,
//        location: {value: [location], valid: true, error: null}
//    })
//};
//
//export const setEducation = (education) => {
//    if (education.length == 0) {
//        location = null;
//    }
//
//    return({
//        type: SET_EDUCATION,
//        education: {value: education, valid: true, error: null}
//    })
//};
//
//export const setAddress = (address) => {
//    return ({
//        type: SET_ADDRESS,
//        address: {value: address, valid: true, error: null}
//    })
//};
//
//export const setCity = (city) => {
//    return ({
//        type: SET_CITY,
//        city: {value: city, valid: true, error: null}
//    })
//};
//
//export const setState = (state) => {
//    return ({
//        type: SET_STATE,
//        state: {value: state, valid: true, error: null}
//    })
//};
//
//export const setZip = (zip) => {
//    let valid = true;
//    let error = null;
//    let isNum = /^\d+$/.test(zip);
//
//    if (zip.length == 0 && !isNum){
//        valid = false;
//        error = "Zip must only contain numbers";
//    }
//
//    return ({
//        type: SET_ZIP,
//        zip: {value: zip, valid: valid, error: error}
//    })
//};
//
//export const setSkills= (skill, currentSkills) => {
//    let skillIndex = currentSkills.indexOf(skill);
//
//    if (skillIndex > -1) {
//        currentSkills.splice(skillIndex, 1);
//    } else {
//        currentSkills.push(skill);
//    }
//
//    return({
//        type: SET_SKILLS,
//        skills: {value: currentSkills, valid: true, error: null}
//    })
//};
//
//export const setInterests= (interest, currentInterests) => {
//    let interestIndex = currentInterests.indexOf(interest);
//
//    if (interestIndex > -1) {
//        currentInterests.splice(interestIndex, 1);
//    } else {
//        currentInterests.push(interest);
//    }
//
//    return({
//        type: SET_INTERESTS,
//        interests: {value: currentInterests, valid: true, error: null}
//    })
//};
//
//
//export const setBio = (bio) => {
//    return ({
//        type: SET_BIO,
//        bio: {value: bio, valid: true, error: null}
//    })
//};
//
//export const setMission = (mission) => {
//    return ({
//        type: SET_MISSION,
//        mission: {value: mission, valid: true, error: null}
//    })
//};
//
//export const setContact = (contact) => {
//    let value = true;
//
//    if (contact == "false"){
//        value = false;
//    }
//
//    return ({
//        type: SET_CONTACT,
//        contact: {value: value, valid: true, error: null}
//    })
//};

export const setUpdateError = (error) => (
{ type: SET_UPDATE_ERROR,
    error: error }
);

export const removeUpdateError = () => (
{ type: REMOVE_UPDATE_ERROR }
);

export const clearUpdateFields = () => (
{ type: CLEAR_UPDATE_FIELDS}
);

export const updateUser = (userData, id) => {
    let error = checkData(userData);
    let data = formatData(userData);

    if (error) {
        return ({
            type: SET_UPDATE_ERROR,
            error: error
        })
    } else {

            return ({
                [CALL_API]: {
                    types: [UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE],
                    endpoint: `user/${id}`,
                    method: POST,
                    data: data
                }
            })
        }
};

const formatData = (userData) => {
    console.log("userData " + userData);
    var results = {};
    for (var entry in userData) {
        console.log("key " + entry);
        console.log("value " + userData[entry].value);
        results[entry] = userData[entry].value;
        console.log(results);
        console.log("results value "+ results[entry]);
    }
    return results;
};

const checkData = (userData) => {

    if (userData.name) {
        if (!userData.name.valid) {
            return userData.name.error;
        }
    }
    else if (userData.email) {
        if (!userData.email.valid) {
            return userData.email.error;
        }
    }
    else {
        return null;
    }
};

