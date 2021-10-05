// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://localhost:4000',
    AUTHENICATION_SERVICE_URL: 'http://localhost:9001',
    REQUEST_SERVICE_URL: 'http://localhost:9003'

    // ROUTING_SERVICE_URL=http://localhost:9929
    // AUTHENICATION_SERVICE_URL=http://localhost:9922
    // STATE_SERVICE_URL=http://10.9.213.182:9925
    // APP_SERVICE_URL=http://localhost:9924
    // EXTERNAL_WS_SERVICE=http://10.9.213.182:9923
    // EX_IMAGE_SERVICE=http://10.9.213.182:9923
    // PRESUIT_SERVICE_URL=http://localhost:9927
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
