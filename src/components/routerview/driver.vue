<template>
  <div class="driver">
       this is driver page
       <form action="http://localhost:3000/driver/add" method="post"><br>
        <label for="name"></label><input type="text" placeholder="name" name="name">
        <br><label for="license"></label><input type="text" placeholder="license" name="license">
        <br> <label for="age"></label><input type="text" placeholder="age" name=age>
        <br><label for="rating"></label><input type="text" name="rating" placeholder="rating">
        <br><label for="count"></label><input type="text" name="count" placeholder="count">
        <br><input type="submit" value="submit">
      </form>
      <div class="show">
          <input type="text" v-model="fetch" value="fetch">
          <button @click="fetchdata">获取数据</button>
          <div>
              <ul>
                    <li>{{result.name}}</li>
                    <li>{{result.license}}</li>
                    <li>{{result.age}}</li>
                    <li>{{result.rating}}</li>
                    <li>{{result.count}}</li>
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
          result:{}
      }
  },
  methods:{
      fetchdata(){
          this.$axios('http://localhost:3000/driver/search?driver='+this.fetch).then(res=>{
              console.log(res.data)
              this.result = res.data[0]
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
