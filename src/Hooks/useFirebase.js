import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Register/Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [massage, setMassage] = useState("");
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        setMassage("Login Successfull!");
        saveUser(res.user.email, res.user.displayName, "PUT", "");
      })
      .catch((err) => {
        setMassage(err.code);
        console.log(err.code);
      });
      
  };
  // -------------  register user -------------------
  const registerUser = (email, password, name) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        saveUser(email, name, "POST", password);
      })
      .catch((err) => {
        setMassage(err.code);
      });
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        setMassage("Loged in");
      })
      .catch((err) => {
        setMassage(err.code);
        console.log(err.code);
      });
  };
  // keep the user loged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
  }, [auth]);
  

  const logout = () => {
    const confrim = window.confirm("Do You Want To Logout");
    if (confrim) {
      signOut(auth)
        .then(() => {
          setUser(false);
        })
        .catch((err) => setMassage(err.code));
    }
  };
  const saveUser = (email, displayName, method, password) => {
    const user = { email, displayName, password };
    console.log(user);
    fetch("https://pacific-ridge-36287.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // admin cheack 
  useEffect(()=>{
    fetch(`https://pacific-ridge-36287.herokuapp.com/admin/${user.email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAdmin(data)
    })
  }, [user.email])
  //return
  return {
    user,
    massage,
    signInWithGoogle,
    registerUser,
    loginUser,
    logout,
    admin
  };
};

export default useFirebase;
