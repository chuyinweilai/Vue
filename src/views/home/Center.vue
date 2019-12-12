<template>
  <div id="container" class="home">
    <Search></Search>
    <a-carousel className="carousel-box" :afterChange="onChange">
      <div class="carousel-list" v-for="(item, index) in hoteventList" :key="item.ID"><img class="cover-img" :alt="item.Title" :src="'https://testwx.taoraise.com/images/program/hotevent/'+item.ImageUrl"></div>
    </a-carousel>
    
    <router-link to="/others/agency">机构</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Carousel } from 'ant-design-vue';
import Search from '@/components/Search';
Vue.use(Carousel);

export default {
  name: 'home',
  data(){
    return{
      hoteventList: []
    }
  } ,
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
  components: {
    Search
  },
  async created(){
    let params = {
      licence: 'taozhitianxia2019',
      nav: 'hotevent'
    }
    let res = await this.$api.hoteventList(params) || [];
    this.$data.hoteventList = res.hotevent;
  },
}
</script>
<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 2rem;
    background: #364d79;
    overflow: hidden;
  }
  .ant-carousel >>> .slick-slide > div {
    height: 100%;
    overflow: hidden;
  }
  .carousel-list{
    height: 100%;
  }
</style>