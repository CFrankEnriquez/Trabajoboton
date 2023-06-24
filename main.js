const firebaseConfig = {
    apiKey: "AIzaSyAISk2yN5cib7RlH0pJ3_kTwMumvY0r4os",
    authDomain: "registroweb-baa66.firebaseapp.com",
    projectId: "registroweb-baa66",
    storageBucket: "registroweb-baa66.appspot.com",
    messagingSenderId: "724006152793",
    appId: "1:724006152793:web:4dba4e2530e843d1bedf48"
  };

firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

//LLamando elementos de html
let btnRegistrar = document.getElementById('btnRegistrar');
let btnIngresar = document.getElementById('btnIngresar');
let contenidoDeLaWeb = document.getElementById("contenidoDeLaWeb");
let formulario = document.getElementById('formulario');
//Funcion Registrar
btnRegistrar.addEventListener('click',()=>{
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    console.log("Inicio de sesión correcto");
    contenidoDeLaWeb.classList.replace('ocultar','mostrar');
    formulario.classList.replace('mostrar','ocultar');
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})