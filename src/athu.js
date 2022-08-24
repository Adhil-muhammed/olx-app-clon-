firebase.auth().signInWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:{user}})
    })