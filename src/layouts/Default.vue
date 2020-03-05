<template>
  <div class="layout">
    <header class="header">
      <img src="/logo.png" alt="" class="brand">
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

}

.brand{
  width: 300px;
 margin: 0;
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
