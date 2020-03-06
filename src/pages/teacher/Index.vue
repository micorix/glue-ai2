<template>
  <Layout>
    <h1>Hello teacher
      <span class="primary-color">
        !
      </span>
    </h1>
    <form>
        <input type="text" placeholder="Lesson subject">
        <button type="submit">Publish survey</button>
    </form>
    <p>
      
    </p>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
h1{
  margin-top: 20vh;
}
input{
  width: 100%;
  box-sizing: border-box;
  background:#ddd;
  border: 2px solid #999;
  outline: none;
  padding: 10px;
  border-radius: 10px;
}
button{
  display: block;
  box-sizing: border-box;
  display: inline-block;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  background: #badc58;
  border: 2px solid #badc58;
  border-radius: 10px;
  cursor: pointer;
}
</style>
<script>
export default {
  metaInfo: {
    title: 'Teacher dashboard'
  }
}
</script>
