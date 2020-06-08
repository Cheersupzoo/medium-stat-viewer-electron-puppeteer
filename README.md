## Medium stats viewer web scrapper app by Puppeteer and Electron with React

Scraping Medium website stats information and use it in your Electron app with React.

<p align="middle">
<img src="https://github.com/Cheersupzoo/medium-stat-viewer-electron-puppeteer/blob/master/docs/images/main_screen.JPG" alt="Screenshot" width="400">
<img src="https://github.com/Cheersupzoo/medium-stat-viewer-electron-puppeteer/blob/master/docs/images/loading_screen.gif" alt="Loading Screenshot" width="400">
</p>

### Note 1
This app is built with [electron-react-webpack-boilerplate](https://github.com/alexdevero/electron-react-webpack-boilerplate)

### Note 2
App size is not optimized and built size will be huge around 500 MB since it include chromium of Electron and Puppeteer.

### Table of contents

* [Install](#install)
* [Usage](#usage)
* [License](#license)

### Install

#### Clone this repo

```
git clone https://github.com/Cheersupzoo/medium-stat-viewer-electron-puppeteer.git
```

#### Install dependencies


```
yarn
```

### Usage
#### [Before Run or Build] Add Cookies 
Update authentication for access your Medium account using cookie.

Cookie can be extracted on Chrome by using extension [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg).

Then add all cookies to 
`./puppeteer_service/mediumCookie.js`
```JavaScript
module.exports = [
  // Add your cookie here
  ];
```

#### Run the app


```
yarn start
```

#### Build the app 


```
yarn package
```


### License

MIT © Suppachai Thanrukrpasert.
