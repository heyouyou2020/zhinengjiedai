import CryptoJS from 'crypto-js';
const getUserData = () => {
    let result = localStorage.getItem('xiaomomo');
    if (result) {
        result = CryptoJS.AES.decrypt(result.toString(), 'baojian').toString(CryptoJS.enc.Utf8);
    }
    return result;
};
const setUserData = (account) => {
    const encryptResult = CryptoJS.AES.encrypt(account,'baojian');
    localStorage.setItem('xiaomomo', encryptResult);
};
const removeUserData = () => {
    localStorage.removeItem('xiaomomo');
};
const getNumber = () => {
    let result = localStorage.getItem('number');
    if (result) {
        result = CryptoJS.AES.decrypt(result.toString(), 'memeda').toString(CryptoJS.enc.Utf8);
    }
    return result;
};
const setNumber = (number) => {
    const encryptResult = CryptoJS.AES.encrypt(number, 'memeda');
    localStorage.setItem('number', encryptResult);
};
const removeNumber = () => {
    localStorage.removeItem('number');
};


export default {
    getUserData,
    setUserData,
    removeUserData,
    getNumber,
    setNumber,
    removeNumber
};