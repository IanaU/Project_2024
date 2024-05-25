<template>


    <div>
      <form @submit.prevent="submitTime" class="card auth-card">
        
        <h2>Добавить время</h2>
        
        <label for="category">Категория:</label>
        <select class="form-control" v-model="category" id="category">
          <option value="Стажировка">Стажировка</option>
          <option value="Личное">Личное</option>
          <option value="Учеба">Учеба</option>
        </select>
  
        <label for="hours">Часы:</label>
        <input class="form-control" type="number" v-model="hours" id="hours" required>
  
        <label for="date">Дата:</label>
        <input class="form-control" type="date" v-model="date" id="date" required>
  
        <button class="btn btn-primary" type="submit">Добавить</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        category: 'Стажировка',
        hours: 0,
        date: new Date().toISOString().split('T')[0]
      };
    },
    methods: {
  submitTime() {
    axios.post('http://localhost:8080/time/add', {
      userId: 1,
      category: this.category,
      date: this.date,
      hours: this.hours
    })
    .then(response => {
      alert('Время успешно добавлено');
      console.log(response.data); // Использование response
    })
    .catch(error => {
      console.error(error);
      alert('Ошибка при добавлении времени');
    });
  }
}
  }
  </script>
