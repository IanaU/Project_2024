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
        />
        <div v-if="v$.email.$error" class="text-danger">
          <div v-if="!v$.email.required">Email обязателен</div>
          <div v-if="!v$.email.email">Неверный формат email</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="password"
          class="form-control"
        />
        <div v-if="v$.password.$error" class="text-danger">
          <div v-if="!v$.password.required">Пароль обязателен</div>
          <div v-if="!v$.password.minLength">Пароль должен быть не менее 6 символов</div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary" type="submit">Add</button>
      <p class="text-center mt-3">
        Акаунт відсутній?
        <router-link to="/register">Зареєструватись</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email as emailValidator, required, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "v-main-login",
  setup() {
    const email = ref('')
    const password = ref('')
    const store = useStore()
    const router = useRouter()

    const state = { email, password }
    const v$ = useVuelidate({
      email: { required, email: emailValidator },
      password: { required, minLength: minLength(6) }
    }, state)

    const submitHandler = async () => {
      v$.value.$touch()
      if (v$.value.$invalid) {
        return
      }

      const formData = {
        email: email.value,
        password: password.value,
      }

      console.log(formData)

      try {
        await store.dispatch('login', formData)
        router.push('/')
      } catch (e) {
        console.error('Ошибка при входе:', e)
      }
    }

    return {
      email,
      password,
      submitHandler,
      v$
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