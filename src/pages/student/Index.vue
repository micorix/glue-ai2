<template>
  <Layout>
    <h1>Did you understand the lesson
      <span class="primary-color">
        ?
      </span>
    </h1>
    <div class="centered">
      <div>
        <g-link to="/student/thanks" class="vote up">
        <i class="material-icons">
          keyboard_arrow_up
        </i>
      </g-link>
      <g-link to="/student/step2" class="vote down">
        <i class="material-icons">
          keyboard_arrow_down
        </i>
      </g-link>
      </div>
    </div>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
h1{
  text-align:center;
  margin-top: 20vh;
}
.centered{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.vote{
  display: inline-block;
  color: #badc58;
  border: 3px solid #badc58;
  border-radius: 3px;
  padding: 5px;
  margin: 0 2em;
  cursor: pointer;
}
.vote.down{
  color: #eb4d4b;
  border-color: #eb4d4b;
}
.vote i{

  font-size: 3em !important;
}

</style>
<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
