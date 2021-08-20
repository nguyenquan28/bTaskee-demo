/**
* @description User login to app (3 test cases)
*   case 1: LINE 19 - User have account 
*   case 2: LINE 52 - User don't have account 
*   case 3: LINE 37 - User enter false phone number or password 
*   case 4: LINE 76 - User logout
* */
const {
    clearTextInput,
    enterInput,
    tapId,
    tapText,
    logout
} = require("./step-definition")

describe('Login logout to app', () => {
    beforeEach(async () => {
        await device.launchApp();
    });

    it('LINE 19 - User don`t have account', async () => {
        await tapText('Mừng trở lại')
        await clearTextInput('password_input')
        await tapText('Vui lòng đăng nhập để tiếp tục.')
        await tapText('Số điện thoại')
        await tapId('chooseCountryCode')
        await tapId('choose_th_btn')
        await tapId('chooseCountryCode')
        await tapId('choose_hk_btn')
        await tapId('chooseCountryCode')
        await tapId('choose_us_btn')
        await tapId('chooseCountryCode')
        await tapId('choose_vn_btn')
        await enterInput('phoneNumber_input', '397411512')
        await enterInput('password_input', '19111998qq')
        await tapId('login_btn')
    })

    it('LINE 37 - User enter false phone number or password', async () => {
        await clearTextInput('phoneNumber_input')
        await clearTextInput('password_input')
        // await tapText('Mừng trở lại')
        // await tapText('Vui lòng đăng nhập để tiếp tục.')
        // await tapText('Số điện thoại')
        // await tapId('chooseCountryCode')
        // await tapId('choose_th_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_hk_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_us_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_vn_btn')
        await enterInput('phoneNumber_input', '397411511')
        await enterInput('password_input', '19111998')
        await tapId('login_btn')
    })

    it('LINE 52 - User have account', async () => {
        await clearTextInput('password_input')
        await clearTextInput('phoneNumber_input')
        // await tapText('Mừng trở lại')
        // await tapText('Vui lòng đăng nhập để tiếp tục.')
        // await tapText('Số điện thoại')
        // await tapId('chooseCountryCode')
        // await tapId('choose_th_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_hk_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_us_btn')
        // await tapId('chooseCountryCode')
        // await tapId('choose_vn_btn')
        await enterInput('phoneNumber_input', '397411511')
        await enterInput('password_input', '19111998qq')
        await tapId('login_btn')
    })

    it('LINE 76 - User logout', async () => {
        await logout()
    })
});

