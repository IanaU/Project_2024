<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
      <div class="card-body">
        <h2 class="card-title">Сторінка аутентифікації користувача</h2>
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
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            v-model.trim="password"
            class="form-control"
          >
        </div>
      </div>
      <div class="card-footer">
        <button
          class="btn btn-primary"
          type="submit"
          
        >
          Add
        </button>
        <p class="text-center mt-3">
          Акаунт відсутній?
          <router-link to="/register">Зареєструватись</router-link>
        </p>
      </div>
    </form>
  </template>
  
  <script>  
  export default {
    name: "v-main-login",
    data: () => ({
      email: '',
      password: '',
      formData: ''
    }),
    methods: {
      async submitHandler() {
        const formData = {
          email: this.email,
          password: this.password,
          
        }
       this.formData = formData;
       console.log(formData);
      //   try {
      //   await this.$store.dispatch('login', formData)
        this.$router.push('/')
      // } catch (e) {
      //   // Обробка помилок або коментар щодо пустого блоку коду
      // }
     // }
    }
  }
  }
  </script>
  
  <style>
  .card.auth-card {
    max-width: 400px;
    margin: auto;
    margin-top: 100px;
  }
  </style>