<template>
  <div class="record">
       this is record page
       <form action="http://localhost:3000/record/add" method="POST">
            <label for="cardId">cardId</label><input type="text" name='carId'><br>
            <label for="driver">driver</label><input type="text" name='driver'><br>
            <label for="rating">rating</label><input type="text" name='rating'><br>
            <label for="violation">violation</label><input type="text" name='violation'><br>
            <label for="gaz">gaz</label><input type="text" name='gaz'><br>
            <label for="returnDate">returnDate</label><input type="text" name='returnDate'><br>
            <label for="returnLocation">returnLocation</label><input type="text" name='returnLocation'><br>
            <label for="borrowDate">borrowDate</label><input type="text" name='borrowDate'><br>
            <label for="borrowLocation">borrowLocation</label><input type="text" name='borrowLocation'><br>
            <input type="submit" value="submit">
       </form>
       <div class="show">
          <input type="text" v-model="fetch" value="fetch">
          <button @click="fetchdata">获取数据</button>
          <div>
              <ul>
                    <li>{{result.carId}}</li> <span @click="()=>{this.bianji = !this.bianji}">编辑 <input v-show="bianji" type="text" v-model="updatewhat"><button @click="confirm">确定</button></span>
                    <li>{{result.driver}}</li> 
                    <li>{{result.rating}}</li>
                    <li>{{result.violation}}</li>
                    <li>{{result.gaz}}</li>
                    <li>{{result.returnDate}}</li>
                    <li>{{result.returnLocation}}</li>
                    <li>{{result.borrowDate}}</li>
                    <li>{{result.borrowLocation}}</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
   data(){
      return {
          fetch: '',
          result:{},
          bianji: false,
          updatewhat:''
      }
  },
  methods:{
      fetchdata(){
          this.$axios('http://localhost:3000/record/search?driver='+this.fetch).then(res=>{
              console.log(res.data)
              this.result = res.data[0]
          })
      },
      confirm(){
          this.$axios({
              url:'http://localhost:3000/record/update?age=20',
              method:'put',
              body:{
                  driver: this.result.driver,
                  age: 29
              }
          }).then(res=>{
              console.log(res)
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
