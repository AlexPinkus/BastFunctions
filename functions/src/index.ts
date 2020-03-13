// import * as functions from 'firebase-functions';

export { stripeAttachSource, stripeGetSources } from './sources';
export { stripeCreateCharge, stripeGetCharges } from './charges';
export { cleanupUser, stripeCreateCustomer } from './authFunctions';


// export const testFunction = functions.https.onCall((data, context) => {
//     const uid = context.auth && context.auth.uid;
//     const message = data.message;

//     return `${uid} sent a message of ${message}`;
// });