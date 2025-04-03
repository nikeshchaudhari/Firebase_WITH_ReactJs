import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-vBY6xIz9y0Hfx4rIrIsvddwSZ6qpzYc",
  authDomain: "backend-react-c9115.firebaseapp.com",
  projectId: "backend-react-c9115",
  storageBucket: "backend-react-c9115.firebasestorage.app",
  messagingSenderId: "865617393924",
  appId: "1:865617393924:web:db2f509f58afa3b0d5f851",
  measurementId: "G-KY7EP27HH2",
  dbURI:"https://backend-react-c9115-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);