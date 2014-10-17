PMSIpilot UI
============

PMSIpilot UI is a themable UI library based on Bootstrap. It's the the base UI library in all PMSIpilot/PSIH applications.


Using the library in your project
---------------------------------------------

Install with bower

```javascript
bower install pmsipilot-ui --save
```

In your main.less, import the library less file

```less
@import 'bower_components/fontawesome/less/font-awesome';
@import 'bower_components/bootstrap/less/bootstrap';
@import 'bower_components/pmsipilot-ui/less/bootstrap';
```

Customize your UI Theme

```less
body {
    .theme-colored(@themeColorOne, @themeColorTwo, @themeColorThree);
}
```
