<template>
  <div id="app">
    <ul class="list">
      <li class="item" v-for="item in result" :key="item.id">
        <img :src="item.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      result:[]
    }
  },
  created () {
    axios.get('http://jsonplaceholder.typicode.com/photos?_limit=3')
    .then(({ data }) => {
      this.result = data;
    })
  }
}
</script>

<style>
#app{
  width: 720px;
  height: 720px;
  border: 5px solid #000;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

.list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list::after{
  content: "";
  width: 200px;
  height: 200px;
}
.item{
  width: 200px;
  height: 200px;
}

img{
  width: 200px;
}
</style>
