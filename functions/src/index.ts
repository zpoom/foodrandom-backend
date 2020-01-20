import * as functions from "firebase-functions";
import FoodRandomApp from "../../src";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const foodRandomApp = new FoodRandomApp();
export const api = functions.https.onRequest(foodRandomApp.app);
