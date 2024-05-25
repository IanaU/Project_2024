import { initializeApp } from 'firebase/app'

export default {
    actions: {
        async login({dispatch, commit},{email, password}){
            try{
                await initializeApp.auth().singInWithEmailAndPassword(email, password)
            } catch(e){
                throw e
            }
        }
    }
}