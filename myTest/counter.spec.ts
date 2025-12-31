import test, { Browser, expect, firefox, Locator, Page } from "playwright/test";

test("counter test", async () => {
  const browser: Browser = await firefox.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  const counterValue: Locator = page.locator("p");
  const increaseBtn: Locator = page.locator("button", { hasText: "Increase" });
  const decreaseBtn: Locator = page.locator("button", { hasText: "Decrease" });
  const resetBtn: Locator = page.locator("button", { hasText: "Reset" });

  await expect(counterValue).toHaveText("Count: 0");

  await increaseBtn.click();
  await expect(counterValue).toHaveText("Count: 1");

  await decreaseBtn.click();
  await expect(counterValue).toHaveText("Count: 0");

  await increaseBtn.click();
  await increaseBtn.click();
  await resetBtn.click();
  await expect(counterValue).toHaveText("Count: 0");

  await browser.close();
});
