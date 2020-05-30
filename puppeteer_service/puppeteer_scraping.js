const puppeteer = require('puppeteer');
const cookies = require('./mediumCookie');


module.exports.getView = async () => {
    console.log('run pup'.yellow);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    //const cookies = 

    await page.setCookie(...cookies);
    await page.goto('https://medium.com/me/stats');

    await page.waitFor(2000);

    const data = await page.evaluate(() => {
      const views = document.querySelectorAll(
        'tr.sortableTable-row.js-statsTableRow'
      );

      const aViews = Array.from(views);

      const stats = aViews.map(a => {
        const title = a
          .querySelectorAll('td')[0]
          .querySelector('div a').innerText;
        const viewNumber = a
          .querySelectorAll('td')[1]
          .querySelector('span.sortableTable-number').childNodes[0].nodeValue;
        const readNumber = a
          .querySelectorAll('td')[2]
          .querySelector('span.sortableTable-number').childNodes[0].nodeValue;
        return { title, viewNumber, readNumber };
      });

      //const ext = Array.from(views).map(v => v);
      console.log('pup fetch complete');
      return stats;
    });

    await browser.close();



    return data;
  };

