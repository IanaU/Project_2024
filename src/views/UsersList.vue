<template>
    <div>
      <!-- <h2>Пользователи</h2> -->
      <form class="card auth-card">
      
      <add-review class="pt-3"></add-review>
      <hr>
      <top-users></top-users>
      </form>
    </div>
  </template>
  
  <script>
  import AddReview from '../components/AddReview.vue';
  import TopUsers from '../components/TopUsers.vue';
  
  export default {
    name: 'UsersList',
    components: {
      AddReview,
      TopUsers
    }
  }
  </script>
