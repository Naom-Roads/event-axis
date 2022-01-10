// import { getJestCucumberConfiguration } from 'jest-cucumber/dist/src/configuration';
// import puppeteer from 'puppeteer';
//
//
// describe('show/hide an event details', () => {
// 	let browser;
// 	let page;
// 	beforeAll(async () => {
// 		jest.setTimeout(30000);
// 	browser = await puppeteer.launch({
// 		executablePath: "/usr/bin/chromium-browser",
// 			headless: false,
// 			slowMo: 250, // slow down by 250ms
// 			args: ['--disable-extensions'], // ignores default setting that causes timeout errors
// 		});
// 		page = await browser.newPage();
// 		await page.goto('http://localhost:3000/');
// 		await page.waitForSelector('.event');
// 	});
//
//
// 	test('An event element is collapsed by default', async () => {
// 		const eventDetails = await page.$('.extra-details');
// 		expect(eventDetails).toBeNull();
// 	});
//
// 	test('User can expand an event to see its details', async () => {
// 		await page.click('.show-details');
// 		const eventDetails = await page.$('.show-details');
// 	expect(eventDetails).toBeDefined();
//   });
//
// 	test('User can collapse an event to hide its details', async () => {
// 		await page.click('.hide-details');
// 		const eventDetails = await page.$('.hide-details');
// 		expect(eventDetails).toBeNull();
//
// 	});
//
// 	afterAll(() => {
// 		browser.close();
// 	});
// });
