// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCLBEUoZt8hI7biYxoKJ9i48NfpG_dSaLw",
    authDomain: "e-commerce-angular.firebaseapp.com",
    databaseURL: "https://e-commerce-angular.firebaseio.com",
    projectId: "e-commerce-angular",
    storageBucket: "",
    messagingSenderId: "18344934065"
  }
};
