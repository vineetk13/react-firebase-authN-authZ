import app from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyBP6qYMiWivop41pHH4aWinQafUxrfPxAk",
    authDomain: "reactfirebaseintro-f1790.firebaseapp.com",
    databaseURL: "https://reactfirebaseintro-f1790.firebaseio.com",
    projectId: "reactfirebaseintro-f1790",
    storageBucket: "reactfirebaseintro-f1790.appspot.com",
    messagingSenderId: "321817854695",
    appId: "1:321817854695:web:4d45af73ae2aab2ef29842",
    measurementId: "G-T32HW72CSR"
  };

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        this.auth=app.auth();
    }
    //*** Auth API ***
    doCreateUserWithEmailAndPassword = (email,password)=>this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email,password)=>this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;