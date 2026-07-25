import {expect, test} from '@playwright/test';

test('home, English canonical navigation, assets, refresh, and layout', async ({page}) => {
  const errors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });

  await page.goto('/');
  await expect(page.getByRole('heading', {level: 1, name: 'Axis Vertex'})).toBeVisible();
  await expect(page.locator('img[alt*="Application, identity"]')).toHaveJSProperty('complete', true);
  await page.getByRole('link', {name: 'Get started'}).first().click();
  await expect(page).toHaveURL(/\/vertex\/getting-started\/$/);
  await expect(page.getByRole('heading', {level: 1, name: 'Getting started'})).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', {level: 1, name: 'Getting started'})).toBeVisible();

  await page.goto('/vertex/authorization/permission-manifest/');
  await expect(page.getByRole('heading', {level: 1, name: 'Permission Manifest'})).toBeVisible();
  await expect(page.getByText('POST /open/v1/permission-manifests:sync', {exact: true})).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', {level: 1, name: 'Permission Manifest'})).toBeVisible();

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test('search finds only the canonical Permission Manifest contract', async ({page}) => {
  const removedTerms = [
    ['Manifest', 'V2'].join(' '),
    ['ad', 'option'].join(''),
  ];
  await page.goto('/vertex/');
  await page.getByRole('button', {name: /search/i}).first().click();
  const search = page.getByPlaceholder(/search/i).or(page.getByRole('searchbox')).last();
  await search.fill('Permission Manifest');
  await expect(page.getByText('Permission Manifest', {exact: true}).first()).toBeVisible();
  for (const term of removedTerms) await expect(page.getByText(term, {exact: false})).toHaveCount(0);
});

test('bilingual SDK installation pages are copyable, searchable, and fit the viewport', async ({context, page}) => {
  const errors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {origin: 'http://127.0.0.1:4173'});

  const packageBase = 'https://vertex-packages.chaosguide.com/releases/0.1.0';
  const pages = [
    {
      sdk: 'javascript',
      heading: 'JavaScript SDK',
      install: `npm install ${packageBase}/js/axis-iam-vertex-0.1.0.tgz ${packageBase}/js/axis-iam-vertex-react-0.1.0.tgz`,
    },
    {
      sdk: 'java',
      heading: 'Java SDK',
      install: 'implementation("com.chaosguide.iam:vertex-sdk-core:0.1.0")',
    },
    {
      sdk: 'go',
      heading: 'Go SDK',
      install: 'go get github.com/axis-iam/vertex-sdk-go@v0.1.1 github.com/axis-iam/vertex-sdk-go/chi@v0.1.1',
    },
    {
      sdk: 'python',
      heading: 'Python SDK',
      install: `python -m pip install ${packageBase}/python/axis_iam_vertex-0.1.0-py3-none-any.whl`,
    },
  ];

  for (const locale of ['', '/zh-CN']) {
    for (const entry of pages) {
      await page.goto(`${locale}/vertex/sdk/${entry.sdk}/`);
      await expect(page.getByRole('heading', {level: 1, name: entry.heading})).toBeVisible();
      const codeBlock = page.locator('pre').filter({hasText: entry.install}).first();
      await expect(codeBlock).toContainText(entry.install);
      const container = codeBlock.locator('xpath=ancestor::div[contains(@class,"codeBlockContainer")][1]');
      await container.getByRole('button', {name: /Copy code to clipboard|复制代码到剪贴板/}).click();
      await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain(entry.install);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(1);
    }
  }

  await page.goto('/vertex/');
  await page.getByRole('button', {name: /search/i}).first().click();
  const englishSearch = page.getByPlaceholder(/search/i).or(page.getByRole('searchbox')).last();
  await englishSearch.fill('axis_iam_vertex-0.1.0');
  await expect(page.getByText('Python SDK', {exact: true}).first()).toBeVisible();

  await page.goto('/zh-CN/vertex/');
  await page.getByRole('button', {name: /搜索|search/i}).first().click();
  const chineseSearch = page.getByPlaceholder(/搜索|search/i).or(page.getByRole('searchbox')).last();
  await chineseSearch.fill('axis_iam_vertex-0.1.0');
  await expect(page.getByText('Python SDK', {exact: true}).first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('removed English and Chinese manifest routes return 404 without redirect', async ({page}) => {
  for (const path of ['/vertex/authorization/manifest-v2/', '/zh-CN/vertex/authorization/manifest-v2/']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(404);
    expect(new URL(page.url()).pathname).toBe(path);
  }
});

test('Simplified Chinese routes, navigation, search, and refresh work', async ({page}) => {
  const removedTerms = [
    ['Manifest', 'V2'].join(' '),
    ['ad', 'option'].join(''),
  ];
  const errors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });

  await page.goto('/zh-CN/');
  await expect(page.getByRole('heading', {level: 1, name: 'Axis Vertex'})).toBeVisible();
  await expect(page.getByText('应用身份平台', {exact: true})).toBeVisible();
  await page.getByRole('link', {name: '开始接入'}).first().click();
  await expect(page).toHaveURL(/\/zh-CN\/vertex\/getting-started\/$/);
  await expect(page.getByRole('heading', {level: 1, name: '快速入门'})).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', {level: 1, name: '快速入门'})).toBeVisible();

  await page.goto('/zh-CN/vertex/authorization/permission-manifest/');
  await expect(page.getByRole('heading', {level: 1, name: 'Permission Manifest'})).toBeVisible();
  await expect(page.getByText('POST /open/v1/permission-manifests:sync', {exact: true})).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', {level: 1, name: 'Permission Manifest'})).toBeVisible();

  await page.goto('/zh-CN/vertex/authorization/');
  await page.getByRole('button', {name: /搜索|search/i}).first().click();
  const search = page.getByPlaceholder(/搜索|search/i).or(page.getByRole('searchbox')).last();
  await search.fill('Permission Manifest');
  await expect(page.getByText('Permission Manifest', {exact: true}).first()).toBeVisible();
  for (const term of removedTerms) await expect(page.getByText(term, {exact: false})).toHaveCount(0);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test('locale switcher and keyboard focus remain usable', async ({page}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const focused = page.locator(':focus-visible');
  await expect(focused).toBeVisible();
  const outline = await focused.evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe('none');
  await focused.evaluate((element) => (element as HTMLElement).blur());

  if ((page.viewportSize()?.width ?? 0) < 800) {
    await page.getByRole('button', {name: 'Toggle navigation bar'}).click();
    await page.getByRole('button', {name: 'Expand the dropdown'}).click();
  } else {
    await page.getByRole('button', {name: 'English'}).click();
  }
  await page.getByText('简体中文', {exact: true}).last().click();
  await expect(page).toHaveURL(/\/zh-CN\/$/);
  await expect(page.getByText('应用身份平台', {exact: true})).toBeVisible();
});
