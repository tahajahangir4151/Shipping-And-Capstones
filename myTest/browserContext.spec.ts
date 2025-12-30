import test, {
  Browser,
  BrowserContext,
  expect,
  firefox,
  Locator,
  Page,
} from "playwright/test";

test("login test with different browser context", async () => {
  const browser: Browser = await firefox.launch({ headless: false });

  const browser_context_1: BrowserContext = await browser.newContext();
  const page1: Page = await browser_context_1.newPage();
  await page1.goto("http://localhost:3000/login");
  const emailId1: Locator = await page1.locator("#input-email");
  const password1: Locator = await page1.locator("#input-password");
  const loginBtn1: Locator = await page1.locator("#login-btn");

  await emailId1.fill("test@example.com");
  await password1.fill("123456");
  await loginBtn1.click();
  await page1.waitForURL("http://localhost:3000");

  const titleFromContext1 = await page1.title();
  console.log(`Home Page Title from browser context 1 is ${titleFromContext1}`);
  await page1.screenshot({ path: "browsercontext1.png" });
  expect(titleFromContext1).toEqual("Create Next App");

  const browser_context_2: BrowserContext = await browser.newContext();
  const page2: Page = await browser_context_2.newPage();
  await page2.goto("http://localhost:3000/login");
  const emailId2: Locator = await page2.locator("#input-email");
  const password2: Locator = await page2.locator("#input-password");
  const loginBtn2: Locator = await page2.locator("#login-btn");

  await emailId2.fill("taha@example.com");
  await password2.fill("123456");
  await loginBtn2.click();
  await page2.waitForURL("http://localhost:3000");

  const titleFromContext2 = await page2.title();
  console.log(`Home Page Title from browser context 2 is ${titleFromContext2}`);
  await page2.screenshot({ path: "browsercontext2.png" });

  expect(titleFromContext2).toEqual("Create Next App");

  await browser_context_1.close();
  await browser_context_2.close();

  browser.close();
});
