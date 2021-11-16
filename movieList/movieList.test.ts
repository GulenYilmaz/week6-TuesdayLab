import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {

    let inputButton = await (await driver).findElement(By.name('movie'))

    let button =await driver.findElement(By.name('mbutton'))
    await inputButton.sendKeys('peppa pig\n')
    
    await button.click()
    await driver.sleep(2000)
});
