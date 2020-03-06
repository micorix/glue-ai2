<template>
  <div class="layout">
    <header class="header">
      <img src="/logo.png" alt="" class="brand" @click="this.redirect">
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  methods: {
    redirect(){
      if(window.location.href.includes('teacher')){
        window.location.href = '/teacher'
      }else{
        window.location.href = '/student'
      }
    }
  }
}
</script>
<style>
body {
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.brand{
  width: 150px;
 margin: auto;
}
body{
  font-family: 'Roboto', sans-serif;
}
h1,h2,h3,h4,h5,h6{
  font-family: 'Spartan', sans-serif;
}
.primary-color{
  color: #badc58;
}
</style>
