<template>
    <div>
      <h2>Добавить отзыв</h2>
      <form @submit.prevent="submitReview">
        <br>
        <div class="text-left">
        <label for="revieweeId">ID пользователя:</label>
        <input class="form-control" type="number" v-model="revieweeId" id="revieweeId" required>
        </div>
        <br>
        <div class="text-left">
        <label for="rating">Рейтинг:</label>
        <input class="form-control" type="number" v-model="rating" id="rating" required>
        </div>
        <br>
          
        <div class="text-left">
        <label for="comment">Комментарий:</label>
        <textarea class="form-control" v-model="comment" id="comment"></textarea>
        </div>
        <br>

        <button class="btn btn-primary" type="submit">Добавить</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        revieweeId: null,
        rating: null,
        comment: ''
      };
    },
    methods: {
  submitReview() {
    axios.post('http://localhost:8080/reviews/add', {
      reviewerId: this.reviewerId,
      revieweeId: this.revieweeId,
      rating: this.rating,
      comment: this.comment
    })
    .then(response => {
      // Переменная response здесь, если нужно
      alert('Отзыв успешно добавлен');
      console.log(response.data); // Пример использования данных из ответа
    })
    .catch(error => {
      console.error(error);
      alert('Ошибка при добавлении отзыва');
    });
  }
}
  }
  </script>
  