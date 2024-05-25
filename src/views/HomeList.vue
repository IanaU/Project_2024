<template>
    <div>
      <h1>Рабочее время</h1>
      <add-time></add-time>
    </div>
  </template>
  
  <script>
  import AddTime from '../components/AddTime.vue';
  
  export default {
    name: 'HomeList',
    components: {
      AddTime
    }
  }
  </script>
