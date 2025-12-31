import test, {
  Browser,
  chromium,
  expect,
  Locator,
  Page,
} from "playwright/test";

test("todoApp Test", async () => {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  const inputBox: Locator = page.locator("input");
  const addBtn: Locator = page.locator("button", { hasText: "Add" });

  await inputBox.fill("Buy milk");
  await addBtn.click();

  const todoItem: Locator = page.locator("li span").first();
  await expect(todoItem).toHaveText("Buy milk");
  await page.screenshot({ path: "addToItem.png" });

  await todoItem.click();
  const textDecorationVal = await todoItem.evaluate(
    (val) => getComputedStyle(val).textDecoration
  );
  expect(textDecorationVal).toContain("line-through");
  await page.screenshot({ path: "toogleCompeleteTodo.png" });

  const deleteBtn: Locator = page.locator("button", { hasText: "Delete" });
  await deleteBtn.click();
  await expect(page.locator("li")).toHaveCount(0);
  await page.screenshot({ path: "deleteTodo.png" });

  await browser.close();
});
