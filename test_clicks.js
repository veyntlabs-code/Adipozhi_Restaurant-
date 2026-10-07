const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Inject a click listener on the body to see if clicks register
  await page.evaluate(() => {
    document.body.addEventListener('click', (e) => {
      console.log('Click on element:', e.target.tagName, e.target.className);
    });
  });

  console.log('Finding button manually...');
  const btn = await page.evaluateHandle(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    return btns.find(b => b.textContent.includes('Going to Adipozhi'));
  });
  
  if (btn) {
    console.log('Found manual button. Clicking...');
    await btn.click();
    await new Promise(r => setTimeout(r, 1000));
    const isDrawerOpen = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('h2')).some(h => h.textContent.includes('Going to Adipozhi'));
    });
    console.log('Drawer is OPEN:', isDrawerOpen);
  } else {
    console.log('Button not found at all.');
  }
  
  await browser.close();
})();
