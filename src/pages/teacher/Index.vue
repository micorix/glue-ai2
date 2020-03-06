<template>
  <Layout>
    <h1>Hello teacher
      <span class="primary-color">
        !
      </span>
    </h1>
    <div v-show="!isSurveyPublished">
        <h4>Let's check if everyone got it!</h4>
        <p>Publish a survey and ask students to scan QR codes on their desks.</p>
        <form @submit="handleSubmit">
            <input type="text" placeholder="Lesson subject" v-model="lessonSubject">
            <button type="submit">Publish survey</button>
        </form>
    </div>
    <div v-show="isSurveyPublished">
        <h4>It's published 😎</h4>
        <p>Check if everyone completed the survey and get the results!</p>
        <g-link :to="`/teacher/results?subject=${lessonSubject}`" class="btn">Get the results</g-link>
    </div>

  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
h1{
  margin-top: 10vh;
}
h4{
    color: #999;
}
input{
  width: 100%;
  box-sizing: border-box;
  background:#ddd;
  border: 2px solid #999;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1em;
}
button, .btn{
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  display: block;
  font-size: 1em;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  background: #badc58;
  border: 2px solid #badc58;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
<script>
export default {
    metaInfo: {
        title: 'Teacher\'s dashboard'
    },
    data: () => ({
        isSurveyPublished: false,
        lessonSubject: ''
    }),
    methods: {
        handleSubmit(e){
            e.preventDefault()
            this.isSurveyPublished = true
        }
    }
}
</script>
