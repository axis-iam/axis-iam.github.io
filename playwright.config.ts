import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  expect: {timeout: 8_000},
  fullyParallel: false,
  reporter: [['list']],
  use: {baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure'},
  projects: [
    {name: 'desktop-chromium', use: {...devices['Desktop Chrome'], viewport: {width: 1440, height: 900}}},
    {name: 'mobile-chromium', use: {...devices['Pixel 5'], viewport: {width: 390, height: 844}, browserName: 'chromium'}},
  ],
  webServer: {
    command: 'pnpm docusaurus serve --host 127.0.0.1 --port 4173 --no-open',
    url: 'http://127.0.0.1:4173/',
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
