<template>
  <Layout>
    <h2 class="title">We're trying to find you a
      <span class="primary-color">
        buddy
      </span>
    </h2>
    <div class="loader"></div>
    <div v-show="this.paired" class="buddy-info">
      <h2>Say hello to {{this.name}}!</h2>
      <img :src="this.imageUrl" width="80px" />
      <g-link to="/student/exit" class="thx">Ok, thanks</g-link>
    </div>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
h2.title{
  margin-top: 20vh;
}
@keyframes load {
  to{
    width: 100%;
  }
}
.loader{
  width: 0;
  height: 5px;
  background: #22AB00;
  animation: load 5s ease-in forwards;
  border-radius: 2px;
}
.buddy-info{
  margin-top: 10vh;
  text-align: center;
}
.buddy-info img{
  margin: auto;
}
.thx{
  color: inherit;
  display: block;
  margin-top: 1em;
}
</style>
<script>
import {randomName, randomAvatarUrl} from '../../utils/random'

export default {
  metaInfo: {
    title: 'You nailed it!'
  },
  data: () => ({
    paired: false,
    name: '',
    imageUrl: ''
  }),
  async mounted(){
    setTimeout(() => {
      this.paired = true
    }, 5000)
    this.name = await randomName()
    this.imageUrl = randomAvatarUrl(this.name)
  }
}
</script>
