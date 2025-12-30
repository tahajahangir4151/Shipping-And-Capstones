import test, { Browser, BrowserContext, chromium, Page } from "playwright/test";

test("auth test", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();

  const username = "admin";
  const password = "admin";
  //   const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

  //   page.setExtraHTTPHeaders({ Authorization: authHeader });
  page.setExtraHTTPHeaders({
    Authorization: createAuthHeader(username, password),
  });

  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  await context.close();
  browser.close();
});

function createAuthHeader(username: string, password: string) {
  return `Basic ${btoa(`${username}:${password}`)}`;
}
