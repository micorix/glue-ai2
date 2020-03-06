<template>
  <Layout>
    <header>
      <span class="breadcrumbs">
        Step 2.
      </span>
      <h1>Do you need any help
        <span class="primary-color">
        ?
      </span>
      </h1>
    </header>
    <p>
      We can find you a buddy who will try to explain the lesson for you.
    </p>
    <g-link to="/student/bot" class="find-buddy">
      Ask our bot
    </g-link>
    <g-link to="/student/glue-buddy" class="find-buddy">
      Glue a buddy
    </g-link>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
header{
  margin-top: 20vh;
}
.breadcrumbs{
  color: rgba(0,0,0,0.3);
  font-weight: bold;
}
.find-buddy{
  display: inline-block;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  background: #badc58;
  border-radius: 3px;
  padding: 10px;
  margin-top: 1em;
  cursor: pointer;
}
.find-buddy:last-of-type{
  margin-left: 20px;
  background: #22AB00;
  color: #eee;
}
</style>
<script>
export default {
  metaInfo: {
    title: 'Step 2'
  }
}
</script>
