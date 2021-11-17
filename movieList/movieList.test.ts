import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {

    let inputButton = await (await driver).findElement(By.name('movie'))

    let button =await driver.findElement(By.name('mbutton'))
    await inputButton.sendKeys('peppa pig\n')
    await driver.sleep(2000)
    await button.click()
    await driver.sleep(2000)
});

// test('I can delete a movie', async()=>{
//     let deleteInput=await (await driver).findElement(By.name('dbutton'))
//     await  deleteInput.sendKeys('Troll\n')

//     let deleteButton= await(await driver).findElement(By.name('dbutton'))
//     await deleteButton.click()
//     await driver.sleep(2000)

// });

// test('Ican cross off a movie', async ()=>{
//     let crassInput =await(await driver).findElement(By.name('crossbutton'))
//     await crassInput.sendKeys('daniel tiger\n')

//     let crossButton =await(await driver).findElement(By.name('crossbutton'))
//     await crossButton.click()
//     await driver.sleep(2000)
// })

// Automation Lab
// Part 1
// Your goal in this section is to search for 2 movies and 1 TV show on Google

// Get started by dowloading the content for this lab from Frodo. Open the folder in VS Code.

// In the terminal cd into the google folder

// Run npm i

// There will be lots of errors with the file google.test.ts that you’ll need to fix

// Follow along with the comments in the test file!

// In order to run your tests, you’ll type npm run test

// Part 2: Intermediate
// In your terminal, cd into the movieList folder, this page should look familiar!

// Run npm i

// You’ll need to make and write your test file from scratch

// Don’t forget your imports from selenium, the chromedriver, and driver

// Open the HTML file with live server (install it in the extensions tab of VS Code if you don’t have it already)

// The URL you’ll go to will be the one from Live Server
// it’ll look like this: http://localhost:5500/exercises/automation/movieList/index.html

// it might have 127.0.0.1 in the URL, which is the same as localhost, so you can replace the IP so it looks like the one above

// Write a beforeAll that connects to that URL

// Write an afterAll that quits the driver

// Write a test that adds a movie to the page
// You’ll need to select the input field and button

// You’ll need to type in the input field

// You’ll need to click the button

// Part 3: Advanced
// Write tests for the rest of the functionality of the Movie List
// Consider crossing a movie off or deleting a movie

// Maybe a test that confirms that the messages say the right thing

// © 2021 Devmountain