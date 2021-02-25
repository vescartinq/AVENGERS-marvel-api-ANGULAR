// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://gateway.marvel.com:443/v1/public/',
  apiKey: '1db9d95a0ecdd767804b41553649c4c0',
  apiPrivateKey: '7909e62ee4aef74fb0a20b4d3c4f17b505fae4a5',
  settings: {
    appErrorPrefix: '[Angular Heroes Error] ',
    appTitle: 'Angular Heroes',
    version: '1.2.0',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
