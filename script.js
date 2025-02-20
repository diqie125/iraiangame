import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTsp_k5PgMdcfzFjz35DsnjCp2dd7KUDY",
    authDomain: "iraiangame.firebaseapp.com",
    databaseURL: "https://iraiangame-default-rtdb.firebaseio.com",
    projectId: "iraiangame",
    storageBucket: "iraiangame.appspot.com",  // Diperbaiki dari firebasestorage.app ke appspot.com
    messagingSenderId: "874750512543",
    appId: "1:874750512543:web:3317e2c2810fd4286401aa",
    measurementId: "G-N7YTJY24Y4"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fungsi Registrasi
window.register = function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Registrasi Berhasil!";
            console.log("User Terdaftar:", userCredential.user);
        })
        .catch(err => document.getElementById("status").innerText = "Error: " + err.message);
};

// Fungsi Login
window.login = function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        document.getElementById("status").innerText = "Login Berhasil!";
        window.location.href = "index.html"; // Ganti dengan halaman tujuanmu
    })
    .catch(err => document.getElementById("status").innerText = "Error: " + err.message);
    