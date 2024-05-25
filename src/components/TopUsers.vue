<template>
    <div>
      <h2>Топ пользователей</h2>
      <button @click="fetchTopUsers">Показать топ пользователей</button>
      <ul v-if="topUsers.length">
        <li v-for="user in topUsers" :key="user.id">{{ user.email }} - {{ user.averageRating }} рейтинг</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        topUsers: []
      };
    },
    methods: {
      fetchTopUsers() {
        axios.get('http://localhost:8080/users/top')
        .then(response => {
          this.topUsers = response.data;
        })
        .catch(error => {
          console.error(error);
          alert('Ошибка при получении топ пользователей');
        });
      }
    }
  }
  </script>
