import puppeteer from 'puppeteer';


describe('show/hide an event details', () => {
	let browser;
	let page;
	beforeAll(async () => {
		// jest.setTimeout(30000);
	const browser = await puppeteer.launch({
			headless: false,
			slowMo: 250, // slow down by 250ms
			ignoreDefaultArgs: ['--disable-extensions'], // ignores default setting that causes timeout errors
		});
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(() => {
		browser.close();
	});

	test('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('.event .hide-details');
		expect(eventDetails).toBeNull();
	});

	test('User can expand an event to see its details', async () => {
		await page.click('.event .hide-details');
		const eventDetails = await page.$('.event .show-details');
	expect(eventDetails).toBeDefined();
	browser.close();
  });
});
