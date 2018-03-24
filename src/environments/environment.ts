// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBIG98WFlGqrKz-vE7So3pCO_BM2Q0gkhc",
    authDomain: "angular-chat-pmf.firebaseapp.com",
    databaseURL: "https://angular-chat-pmf.firebaseio.com",
    projectId: "angular-chat-pmf",
    storageBucket: "angular-chat-pmf.appspot.com",
    messagingSenderId: "385206860198"
  }
};
