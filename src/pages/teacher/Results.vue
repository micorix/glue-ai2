<template>
  <Layout>
    <h1>Hello teacher
      <span class="primary-color">
        !
      </span>
    </h1>
    <h4>Results for the {{subject}} lesson</h4>
    <div class="chart">
      <Chart :options="options" :series="series"></Chart>
    
    </div>
<g-link to="/teacher" class="btn">Go back</g-link>
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
.chart{
  display: flex;
  justify-content: center;
}
</style>
<script>
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
export default {
    metaInfo: {
        title: 'Teacher\'s dashboard'
    },
    components: {
       Chart: () =>
        import ('vue-apexcharts')
        .then(m => m)
        .catch()
    },
    data: () => ({
        subject: '',
        series: [getRndInteger(10, 20), getRndInteger(10, 20)],
          options: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['I understand', 'I don\'t understand'],
            colors: ['#badc58', '#22AB00'],
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
          
    }),
    mounted(){
      if(process.isClient){
        this.subject = new URLSearchParams(window.location.search).get('subject')
      }
    }
}
</script>
