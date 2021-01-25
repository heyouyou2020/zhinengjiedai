export const registAccount = (account) => {
    const regex = /^[0-9a-zA-Z]{5,12}$/;
    if (regex.test(account)) {
        return true;
    }
    return false;
}

export const registPwd = (pwd) => {
    // 至少出现一个英文字母
    const regex = /^(?=.*[a-z])[0-9a-zA-Z]{6,15}$/
    if (regex.test(pwd)) {
        return true
    }
    return false
}

export const login = (account, pwd) => {
    const loginRegex = /^[0-9a-zA-Z]{5,12}$/
    const loginPwd = /^[0-9a-zA-Z]{6,15}$/
    if (loginRegex.test(account) && loginPwd.test(pwd)) {
        return true;
    }
    return false;
}

export const commentContent = (comment) => {
    const commentRegex = /^.{1,200}$/
    if (commentRegex.test(comment)) {
        return true;
    }
    return false;
}
// 验证手机号码
export const yanZhenMobile = (comment) => {
    const commentRegex = /^\d{11}$/
    if (commentRegex.test(comment)) {
        return true
    }
    return false
}

// 验证身份证号码
export const yanZhenCard = (comment) => {
    const commentRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (commentRegex.test(comment)) {
        return true
    }
    return false
}
// 验证邮箱
export const yanZhenEmail = (comment) => {
    const commentRegex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    if (commentRegex.test(comment)) {
        return true
    }
    return false
}