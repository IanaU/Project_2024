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
        
      </div>
      <div class="card-footer">
        
        <button class="btn btn-primary" @click="register()">Add</button>
       
        <p class="text-center mt-3">Перейти на
          <router-link to="/login"> аутентифікацію</router-link>
        </p>
      </div>
    </form>
  </template>


<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const email = ref('');
const password = ref('');
const router = useRouter();
const store = useStore();

const register = async () => {
  console.log(email.value + "," + password.value);
  try {
    // можно использовать Vuex для управления состоянием пользователя
    await store.dispatch('auth/register', { email: email.value, password: password.value });

    // Или непосредственно регистрировать пользователя через Firebase
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('User registered:', userCredential.user);

    router.push('/'); 
  } catch (error) {
    console.error('Registration error:', error);
  }
};
</script>
  
  <style>
  .card.auth-card {
    max-width: 500px;
    margin: auto;
    margin-top: 100px;
  }
  </style>