<template>
  <div class="car">
      add new car 
      <form action="http://localhost:3000/car/add" method="post"><br>
            <label for="qichebianhao"></label><input type="text" placeholder="qichebianhao" name="qichebianhao">
        <br><label for="manufacturer"></label><input type="text" placeholder="manufacturer" name="manufacturer">
        <br> <label for="price"></label><input type="text" placeholder="price" name="price">
        <br><label for="purchaseDate"></label><input type="text" name="purchaseDate" placeholder="purchaseDate">
        <br><label for="name"></label><input type="text" name="name" placeholder="name">
         <br><label for="requireLisence"></label><input type="text" name="requireLisence" placeholder="requireLisence">
        <br><input type="submit" value="submit">

      </form>
      <div class="show">
        <input type="text" v-model="fetch" value="fetch">
        <button @click="fetchdata">获取数据</button>
        <div>
          <ul>
            <li>{{result.manufacturer}}</li>
            <li>{{result.name}}</li>
            <li>{{result.price}}</li>
            <li>{{result.purchaseDate}}</li>
            <li>{{result.qichebianhao}}</li>
            <li>{{result.requirelisence}}</li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'car',
  data(){
    return {
      fetch:'',
      result:{}
    }
  },
  methods: {
    fetchdata(){
      this.$axios('http://localhost:3000/car/search?name='+this.fetch).then(res=>{
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
