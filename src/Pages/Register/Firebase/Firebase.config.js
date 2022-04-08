const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD243m3qMXqBcUScOzs3gxOa7klcs3oo2c",
//   authDomain: "bicycle-12.firebaseapp.com",
//   projectId: "bicycle-12",
//   storageBucket: "bicycle-12.appspot.com",
//   messagingSenderId: "124318637810",
//   appId: "1:124318637810:web:833d32bcc557ed26afba6b",
// };
export default firebaseConfig;