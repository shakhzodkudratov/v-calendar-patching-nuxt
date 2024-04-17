# vc

Created a patch that enables custom translation messages passed to the v-calendar

Steps to include it in your project:
- set exact package version for `"v-calendar": "2.4.2"` in your `package.json`
- in your imports use `import VCalendar from 'v-calendar/src/lib';` instead of `import VCalendar from 'v-calendar';`
- install as a dev dependency `"@popperjs/core": "^2.4.0"` because v-calendar won't run without it
- add `build: { transpile: ['v-calendar'] }` to your `nuxt.config.js` because it would complain "Cannot import outside module"
- copy patches folder from this repository and include to your project
- install `patch-package postinstall-postinstall` packages as dev dependency
- add `"postinstall": "patch-package"` to your scripts in `package.json`
- `npm install` or `yarn` and your package will be patched


now you can pass
```Vue.use(VCalendar, {
  componentPrefix: 'vc',
  locales: {
    kz: {
      translations: {
        dayNames: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
      }
    }
  }
})
```
and it will work when you explicitly set required locale in your component `<vc-calendar title-position="left" locale="kz" />`
