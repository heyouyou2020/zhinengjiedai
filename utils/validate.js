export const registAccount = (account) => {
    const regex = /^[0-9a-zA-Z]{5,12}$/;
    if (regex.test(account)) {
        return true;
    }
    return false;
};

export const registPwd = (pwd) => {
    // 至少出现一个英文字母
    const regex = /^(?=.*[a-z])[0-9a-zA-Z]{6,15}$/;
    if (regex.test(pwd)) {
        return true;
    }
    return false;
};

export const login = (account, pwd) => {
    const loginRegex = /^[0-9a-zA-Z]{5,12}$/;
    const loginPwd = /^[0-9a-zA-Z]{6,15}$/;
    if (loginRegex.test(account) && loginPwd.test(pwd)) {
        return true;
    }
    return false;
};

export const commentContent = (comment) => {
    const commentRegex = /^.{1,200}$/;
    if (commentRegex.test(comment)) {
        return true;
    }
    return false;
};