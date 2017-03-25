# ion-datetime-picker-calendar-iso-saturday

[![GitHub version](https://img.shields.io/github/release/katemihalikova/ion-datetime-picker-calendar-iso-saturday.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-calendar-iso-saturday)
[![npm version](https://img.shields.io/npm/v/ion-datetime-picker-calendar-iso-saturday.svg?style=flat-square)](https://npm.im/ion-datetime-picker-calendar-iso-saturday)
[![Bower version](https://img.shields.io/bower/v/ion-datetime-picker-calendar-iso-saturday.svg?style=flat-square)](https://libraries.io/bower/ion-datetime-picker-calendar-iso-saturday)
[![Ionic version](https://img.shields.io/badge/ionic-v1.3-6ea2fb.svg?style=flat-square)](http://ionicframework.com/docs/v1/)
[![License](https://img.shields.io/npm/l/ion-datetime-picker-calendar-iso-saturday.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-calendar-iso-saturday/blob/develop/LICENSE)

> ISO calendar with week starting on Saturday - for [ion-datetime-picker](https://github.com/katemihalikova/ion-datetime-picker)

# Installation

1. Use bower or npm to install this module:

    ```bash
    bower install ion-datetime-picker-calendar-iso-saturday --save
    ```

    ```bash
    npm install ion-datetime-picker ion-datetime-picker-calendar-iso-saturday --save
    ```

2. Import the javascript file into your HTML file (or use [webpack](https://webpack.js.org/)):

    ```html
    <script src="lib/ion-datetime-picker-calendar-iso-saturday/dist/index.js"></script>
    ```

# Usage

Use `iso-saturday` as a value of `calendar` attribute when you define your picker.

```html
<ion-datetime-picker calendar="iso-saturday" ...></ion-datetime-picker>
```

See [ion-datetime-picker README](https://github.com/katemihalikova/ion-datetime-picker/blob/develop/README.md) for more info.

# Internationalization

Inject `$ionDtpCalendarIsoSaturday` service into your code and set your localized strings. <!--If `moment` is installed, localized data are taken from it, otherwise--> English ones are used as default.

### `weekDays` key

Array of weekdays abbreviations, starting from Saturday.

### `months` key

Array of months names, starting from January.

```js
angular.module("myApp")
  .run(function($ionDtpCalendarIsoSaturday) {
    $ionicPickerI18n.weekDays = ["Sá", "Нд", "Lu", "Út", "Mi", "To", "금"];
    $ionicPickerI18n.months = ["Janvier", "Febrero", "März", "四月", "Maio", "Kesäkuu", "Červenec", "अगस्त", "Вересень", "Październik", "Νοέμβριος", "డిసెంబర్"];
  });
```
