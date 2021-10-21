import firebase from "gatsby-plugin-firebase"
import { navigate } from "gatsby"

export const signUp = async values => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
    delete values.password
    await firebase
      .firestore()
      .collection("users")
      .doc(result.user.uid)
      .set({ ...values })
    return { result }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}
export const signIn = async values => {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
    navigate("/app/feed")
    return { result }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}
export const resetPassword = async values => {
  try {
    const message = await firebase.auth().sendPasswordResetEmail(values.email)
    return { message }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}
export const verifyResetCode = async code => {
  try {
    await firebase.auth().verifyPasswordResetCode(code)
    return
  } catch (error) {
    console.error("Invalid Code", error)
    return { error }
  }
}
export const newPassword = async (code, values) => {
  try {
    const message = await firebase
      .auth()
      .confirmPasswordReset(code, values.password)
    return { message }
  } catch (error) {
    console.error("Error changing password", error)
    return { error }
  }
}

export const contactTicket = async values => {
  return firebase
    .firestore()
    .collection("contactTickets")
    .add({
      ...values,
    })
    .catch(error => {
      console.error("Error writing document: ", error)
      return false
    })
}

export const newPost = (values, share, url, currentUser) => {
  return firebase
    .firestore()
    .collection("users")
    .doc(currentUser.uid)
    .collection("posts")
    .add({
      ...values,
      public: share,
      url: url,
      postAuthor: {
        name: `${currentUser.user?.firstName} ${currentUser.user?.lastName}`,
        profileImage: currentUser.user?.profileImage || "",
        cardInfo: currentUser.user?.cardInfo || "",
      },
      timeStamp: Date.now(),
    })
    .catch(error => {
      console.error("Error writing document: ", error)
      return false
    })
}

export const uploadImages = async (profileImage, coverImage, currentUser) => {
  try {
    const result = await firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .update({ profileImage, coverImage })
    return { result }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}

export const unlike = async (path, user) => {
  try {
    const result = await firebase
      .firestore()
      .doc(path)
      .update({ likes: firebase.firestore.FieldValue.arrayRemove(user) })
    return { result }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}
export const like = async (path, user) => {
  try {
    const result = await firebase
      .firestore()
      .doc(path)
      .update({ likes: firebase.firestore.FieldValue.arrayUnion(user) })
    return { result }
  } catch (error) {
    console.error("Error writing document: ", error)
    return { error }
  }
}
