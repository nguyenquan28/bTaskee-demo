describe('Test bTaskee-demo app', () => {
  before(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  //Show title
  it('should have login screen', async () => {
    await expect(element(by.id('title'))).toBeVisible();
  });

  // Choose area number
  it('Should press on area number', async () => {
    await element(by.id('areaNumber_btn')).tap()
    await element(by.id('choose_th_btn')).tap()
    await element(by.id('areaNumber_btn')).tap()
    await element(by.id('choose_hk_btn')).tap()
    await element(by.id('areaNumber_btn')).tap()
    await element(by.id('choose_us_btn')).tap()
    await element(by.id('areaNumber_btn')).tap()
    await element(by.id('choose_vn_btn')).tap()
  })

  // Enter phone number
  const phone_number = '397411511'
  it('Should type 397411511', async () => {
    const input = element(by.id('phoneNumber_input'))
    await input.typeText(phone_number)
  })

  // Enter password
  const password = '19111998qq'
  it('Should type 19111998qq', async () => {
    const input = element(by.id('password_input'))
    await input.typeText(password)
  })

  // Press login
  it('Should press on login button', async () => {
    await element(by.id('login_btn')).tap()
  })

  // Go back to login
  it('Should navigate to login screen', async () => {
    await element(by.id('logout_btn')).tap();
  })

  // Press register account
  it('Should navigate to register screen', async () => {
    await element(by.id('navigate_register_btn')).tap()
  })
});
