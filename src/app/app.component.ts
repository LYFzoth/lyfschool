import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6KiYd_md_0Vi2_uswf9dYLXnzrThmQQ8",
  authDomain: "firt-21b1d.firebaseapp.com",
  projectId: "firt-21b1d",
  storageBucket: "firt-21b1d.firebasestorage.app",
  messagingSenderId: "568670468010",
  appId: "1:568670468010:web:0fdd5087515f119a609dd3",
  measurementId: "G-Q3DQZRHP6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lyfschool';
}
