<template>

    <div>
      <!-- <h2>Отчеты</h2> -->
      <form class="card auth-card">
      <time-report class="pt-3"></time-report>
    </form>
    </div>
  </template>

<script>
import TimeReport from '../components/TimeReport.vue';

export default {
  name: 'ReportList',
  components: {
    TimeReport
  }
}
</script>
