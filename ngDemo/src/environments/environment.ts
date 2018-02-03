// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // firebase: {
  //   apiKey: "xxxxx",
  //   authDomain: "fir-demo-20726.firebaseapp.com",
  //   databaseURL: "https://fir-demo-20726.firebaseio.com",
  //   projectId: "fir-demo-20726",
  //   storageBucket: "fir-demo-20726.appspot.com",
  //   messagingSenderId: "141433573652"
  // },
  firebase: {
    apiKey: "AIzaSyAvlOwka2tHQ11k7cFxD0gWrv8_u19yIDc",
    authDomain: "ioccatsdemo.firebaseapp.com",
    databaseURL: "https://ioccatsdemo.firebaseio.com",
    projectId: "ioccatsdemo",
    storageBucket: "ioccatsdemo.appspot.com",
    messagingSenderId: "652898326248"
  },
  agm: {
    apiKey: "AIzaSyC2aUGq0zuZMLTgrUG72Wb4LX6nOA_Q4VM" 
  }
};
