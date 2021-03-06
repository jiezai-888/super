<template>
  <div class="tabbar-item" @click="btnclick">
    <div v-if="!isornotactivated">
      <slot name="tabbar-item-img"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-img-activated"></slot>
    </div>
    <div :style="activatedStyle">
      <slot name="tabbar-item-title"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbarItem',
    props:{
      path:String,
      default:'/home',
      activatedcolor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
         // isornotactivated: false
      }
    },
    computed:{
      isornotactivated(){
        return this.$route.path.indexOf(this.path) !==-1
      },
      activatedStyle(){
        return this.isornotactivated ? {color: this.activatedcolor}:{}
      }
    }
    ,
    methods:{
      btnclick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tabbar-item {
    flex: 1;
  }
  .tabbar-item img {
    width: 24px;
    vertical-align: middle;
  }
/*  .isactivated{
    color: orangered;
  } */
</style>
