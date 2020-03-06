<template>
  <Layout>
    <h1>GlueAI
      <span class="primary-color">
        Bot
      </span>
    </h1>
    <div class="chat">
      <div
      v-for="message in conversation" 
      :key="message.text"
      :class="{'message-row': true, right: message.didISendIt}"
      >
        <div class="message">
          {{message.text}}
        </div>
      </div>
      <div
      class="message-row loading"
      v-show="this.loading"
      >
        <div class="message">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <form @submit="handleSubmit">
      <input type="text" v-model="message">
      <button type="submit">
        Send
      </button>
    </form>
    <g-link to="/student/exit" class="exit">Exit the chat bot</g-link>
  </Layout>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@keyframes blink{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
h1{
  margin-top: 5vh;
}
.message-row{
  display:flex;
  margin-bottom: .5em;
}
.message{
    padding: 5px 10px;
    border-radius: 5px;
    background: #ddd;
    margin: 0 10px;
}
.right{
  justify-content: flex-end;
}
.right .message{
  background:#badc58;
}
.loading span{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #999;
}
.loading span:first-of-type{
  margin-right: 5px;
  animation: blink 2s 0s linear infinite;
}
.loading span:nth-of-type(2){
  animation: blink 2s 0.2s linear infinite;
}
.loading span:last-of-type{
  margin-left: 5px;
  animation: blink 2s 0.4s linear infinite;
}
.chat{
  border: 2px solid #999;
  border-radius: 5px;
  height: 40vh;
  padding-top: .5em;
  overflow-y: auto;
  box-sizing: border-box;
}
form{
  display: grid;
  grid-template-columns: auto 20%;
}
form *{
  font-size: 1.2em;
    margin-top: 10px;
}
input{
  width: 100%;
  box-sizing: border-box;
  background:#ddd;
  border: 2px solid #999;
  outline: none;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
}
.exit{
  color: inherit;
  display: block;
  margin-top: 10px;
}
</style>
<script>
import { askQuestion } from '../../utils/bot'
export default {
  metaInfo: {
    title: 'Bot'
  },
  data: () => ({
    conversation: [{
      didISendIt: false,
      text: 'How can I help you?'
    }],
    message: '',
    loading: false
  }),
  methods: {
    handleSubmit(e){
      e.preventDefault()
      this.askQuestion(this.message)
      this.message = ''
    },
    async askQuestion(question) {
      this.loading = true
      this.conversation.push({
        didISendIt: true,
        text: question
      })
      const res = await askQuestion(question)
      this.loading = false
      this.conversation.push({
        didISendIt: false,
        text: res.answers[0].answer
      })
  }
  }
}
</script>
