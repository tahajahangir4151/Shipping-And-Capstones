import test, { Browser, expect, firefox, Locator, Page } from "playwright/test";

test("login test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("http://localhost:3000/login");
  const emailId: Locator = await page.locator("#input-email");
  const password: Locator = await page.locator("#input-password");
  const loginBtn: Locator = await page.locator("#login-btn");

  await emailId.fill("test@example.com");
  await password.fill("123456");
  await loginBtn.click();
  await page.waitForURL("http://localhost:3000")

  const title = await page.title();
  console.log(`Home Page Title is ${title}`);

  await page.screenshot({ path: "homepage.png" });

  expect(title).toEqual("Create Next App");

  browser.close();
});
