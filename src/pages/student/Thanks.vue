<template>
  <Layout>
    <h1>You nailed it
      <span class="primary-color">
        !
      </span>
    </h1>
    <p>
      Thanks for submiting your response. Let's make our lessons simple for everyone!
    </p>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
h1{
  margin-top: 20vh;
}
</style>
<script>
export default {
  metaInfo: {
    title: 'You nailed it!'
  },
  mounted(){
    if (typeof window !== 'undefined')
      this.$confetti.start();
  }
}
</script>
