import {test} from '@playwright/test';

test('should handle multiple callbacks', async ({page}) => {
  await page.goto('https://example.com');
});



