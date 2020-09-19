export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email, 
      credentials.password
    ).then(() => {
      dispatch({
        type: 'LOGIN_SUCCESS'
      })
    }).catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        err
      });
    })
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      })
    })
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // 1st - Creating new user in firebase auth service
    firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res) => {
      // 2nd - Adding this user as a new collection in firestore (the DB)
      return firestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
        });
    })
    .then(() => {
      dispatch({
        type: "SIGNUP_SUCCESS",
      });
    })
    .catch((err) => {
      dispatch({
        type: "SIGNUP_ERROR",
        err,
      });
    });
  };
};