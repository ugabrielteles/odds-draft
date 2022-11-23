import puppeteer from 'puppeteer'
import { webkit } from 'playwright'

export const ODDs = {
    async GenerateBTTsFirstHalf() {
        console.log('Gerando Ambos marcam no Primeiro tempo')
        const browser = await webkit.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://www.bet365.com/#/HO/');
        await page.waitForLoadState('networkidle')
        await page.locator('text=Aceitar').click()
        await page.locator('.wn-PreMatchItem').locator('span', { hasText: 'Futebol' }).first().click()
        await page.locator('text=Próximas 12 Horas').click()
        await page.waitForSelector('.rcl-ParticipantFixtureDetailsAggregateScore_LhsContainer')
        const elements = await page.$$(".rcl-ParticipantFixtureDetailsAggregateScore");
        elements.forEach(async x => {  
            console.log(await x.textContent())
            await page.waitForTimeout(5500);
            await x.waitForElementState('enabled')        
            await x.click();
            
        })
        // async function GetMatchName() {
        //     await page.waitForTimeout(5000)
        //     const name = await page.locator('.sph-EventHeader_Label').locator('span').allInnerTexts();

        //     return name
        // }

        // console.log('Name', await GetMatchName())

        

        

       
    }
}

export const getFixtures = async () => {


    const browser = await webkit.launch();
    const page = await browser.newPage();
    await page.goto('https://www.bet365.com/#/HO/');
    await page.waitForLoadState('networkidle')
    await page.locator('text=Aceitar').click()
    await page.locator('.wn-PreMatchItem').locator('span', { hasText: 'Futebol' }).first().click()
    await page.locator('text=Próximas 12 Horas').click()
    await page.waitForSelector('.rcl-ParticipantFixtureDetailsAggregateScore_LhsContainer')
    const elements = await page.$$(".rcl-ParticipantFixtureDetailsAggregateScore");
    elements[0].click();

    async function GetMatchName() {
        const name = await page.locator('sph-EventHeader_Label').locator('span').innerText();

        return name
    }

    console.log(await GetMatchName())
    // await page.locator('.sph-MarketGroupNavBarButton').locator('text=1º Tempo/2º Tempo').click();
    // const oddtype = await page.locator('text=1º Tempo - Para Ambos os Times Marcarem').allTextContents()
    // console.log(oddtype)
    // const text = await oddtype.innerHTML();
    // console.log(text, 'text')
    // const elem = await page.$(oddtype as any)
    // if(elem){
    //     const parent = await elem.$('xpath=..');
    //     console.log(parent?.innerHTML())
    // }


    // elements.forEach(async el => {     
    //     console.log(el.textContent())
    // })
    await page.waitForTimeout(1000)
    await browser.close();
    return ''
    // console.log('Chegou aqui')
    // const BASE_URL = 'https://www.bet365.com/'
    // const URL_FRAGMENT = '#/HO/'

    // /** create a browser instance, then a page instance with it */
    // const browser = await puppeteer.launch({ headless: true })
    // const page = await browser.newPage()

    // /**
    //  * bet365 forces a landing page on you, so we navigate to
    //  * the base url, then go onto the fixtures page
    //  */
    // await page.goto(BASE_URL)
    // await page.goto(`${BASE_URL}${URL_FRAGMENT}`)
    // console.log(`Acessando: ${BASE_URL}${URL_FRAGMENT}`)

    // /** navigate to the schedule section */
    // await page.waitForSelector('.wn-FrequentContainer')
    //   .then(async () =>
    //     ((await page.$x("//div[contains(@class, 'wn-PreMatchFrequentItem') and text() = 'Futebol']"))[0] as any).click())

    //     console.log(page)
    // // /** navigate to the soccer section within the schedule */
    // // await page.waitForSelector('.ips-InPlayNavBarButton')
    // //   .then(async () =>
    // //     ((await page.$x("//div[contains(@class, 'ips-InPlayNavBarButton') and text() = 'Soccer']"))[0] as any)
    // //       .click())

    // /**
    //  * find all fixture divs, loop through them and extract
    //  * the appropriate data (time, home team, away team)
    //  * into it's own object and return it
    //  */
    // return await page.evaluate(() => {
    //   const divs = Array.prototype.slice.call(document.querySelectorAll('.ips-EventRow'))
    //   return divs.map(div => {
    //     console.log(div)
    //     return {
    //       scheduled: div.childNodes[4].textContent,
    //       teams: {
    //         home: div.childNodes[1].textContent.split(' v ')[0],
    //         away: div.childNodes[1].textContent.split(' v ')[1]
    //       }
    //     }
    //   })
    // })
}