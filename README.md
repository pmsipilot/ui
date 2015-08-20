PMSIpilot UI
============

PMSIpilot UI is a themable UI library based on Bootstrap. It's the the base UI library in all PMSIpilot/PSIH applications.

[Live Demo](http://pmsipilot.github.io/ui/#/)


Using the library in your project
---------------------------------

Install with npm

```javascript
npm install pmsipilot-ui --save
```

In your main.scss, import the library sass file

```sass
@import 'node_modules/pmsipilot-ui/scss/bootstrap';
```

Customize your UI Theme

```sass
body {
    @include theme-colored(@themeColorOne, @themeColorTwo, @themeColorThree);
}
```

Build
 * The output css should be in the css public folder
 * Copy images from the library to the images public folder
 * Copy fonts from the library, bootstrap and from font-awesome the publid font folder
