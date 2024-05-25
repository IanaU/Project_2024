<template>
    <form class="card auth-card" >
    <!-- <p> @submit.prevent="submitHandler"</p> -->
      <div class="card-body">
        <h2 class="card-title">Сторінка реєстрації нового користувача</h2>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            type="text"
            v-model.trim="email"
            class="form-control"
          >
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input
            id="password"
            type="text"
            v-model.trim="password"
            class="form-control"
          >
        </div>
        <!-- <div class="mb-3"> -->
          <!-- <label for="password2" class="form-label">Підтвердіть пароль</label> -->
          <!-- <input
            id="password2"
            type="password"
            v-model.trim="password2"
            class="form-control"
          > -->
        <!-- </div> -->
      </div>
      <div class="card-footer">
        <!-- <button
          class="btn btn-primary w-100"
          type="submit"
        > -->
        <button class="btn btn-primary" @click="register()">Add</button>
       
        <p class="text-center mt-3">Перейти на
          <router-link to="/login"> аутентифікацію</router-link>
        </p>
      </div>
    </form>
  </template>


<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

//const register = () => {
//  console.log(email.value + "," + password.value)
//  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//.then((data)=>{
//  console.log("Successfull registration" +data);
//  router1.push("/")
// })
// .catch((error)=>
// console.log(error)
// )
// };


const register = async () => {
  console.log(email.value + "," + password.value);
  try {
    const auth1 = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth1, email.value, password.value);
    console.log('User registered:', userCredential.user);
    router.push('/'); 
  } catch (error) {
    console.error('Registration error:', error);
  }
}


</script>



  <!-- <script>  
  export default {
    name: "v-main-registration",
    data: () => ({
      email: '',
      password: '',
      // password2: '',
      formData: ''
    }),
    methods: {
      async submitHandler() {
        const formData = {
          email: this.email,
          password: this.password,
          // password2: this.password2,
        }
       this.formData = formData;
       console.log(formData);
      //   try {
      //   await this.$store.dispatch('login', formData)
         this.$router.push('/login')
      // } catch (e) {
      //   // Обробка помилок або коментар щодо пустого блоку коду
      // }
     // }
    }
  }
  }
  </script> -->
  
  <style>
  .card.auth-card {
    max-width: 500px;
    margin: auto;
    margin-top: 100px;
  }
  </style>