<template>
    
    
    <div>
      <h2>Отчет по времени</h2>
      <form @submit.prevent="fetchReport">
    
        <label for="startDate">Дата начала:</label>
        <input type="date" class="form-control" v-model="startDate" id="startDate" required><br>
  
        <br>
        <label for="endDate">Дата окончания:</label>
        <input type="date" class="form-control" v-model="endDate" id="endDate" required><br>
  
        <br>
        <button class="btn btn-primary" type="submit">Показать отчет</button>
      
      </form>
  
      <div v-if="report.length">
        <h3>Отчет</h3>
        <ul>
          <li v-for="entry in report" :key="entry.id">{{ entry.category }}: {{ entry.hours }} часов</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        startDate: '',
        endDate: '',
        report: []
      };
    },
    methods: {
      fetchReport() {
        axios.get('http://localhost:8080/time/report', {
          params: {
            userId: 1,
            startDate: this.startDate,
            endDate: this.endDate
          }
        })
        .then(response => {
          this.report = response.data;
        })
        .catch(error => {
          console.error(error);
          alert('Ошибка при получении отчета');
        });
      }
    }
  }
  </script>
  