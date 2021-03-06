<template>
  <div>
    <tabbar>
      <tabbar-item slot="tabbar" path="/home" activatedcolor='orangered'>
        <img slot="tabbar-item-img" src="../../../assets/img/tabbar/home.png" />
        <img slot="tabbar-item-img-activated" src="../../../assets/img/tabbar/homeorange.png" />
        <div slot="tabbar-item-title">首页</div>
      </tabbar-item>
      <tabbar-item slot="tabbar" path="/category" activatedcolor='orangered'>
        <img slot="tabbar-item-img" src="../../../assets/img/tabbar/class.png" />
        <img slot="tabbar-item-img-activated" src="../../../assets/img/tabbar/classorange.png" />
        <div slot="tabbar-item-title">分类</div>
      </tabbar-item>
      <tabbar-item slot="tabbar" path="/shopcar" activatedcolor='orangered'>
        <img slot="tabbar-item-img" src="../../../assets/img/tabbar/shop.png" />
        <img slot="tabbar-item-img-activated" src="../../../assets/img/tabbar/shoporange.png" />
        <div slot="tabbar-item-title">购物车</div>
      </tabbar-item>
      <tabbar-item slot="tabbar" path="/me" activatedcolor='orangered'>
        <img slot="tabbar-item-img" src="../../../assets/img/tabbar/me.png" />
        <img slot="tabbar-item-img-activated" src="../../../assets/img/tabbar/meorange.png" />
        <div slot="tabbar-item-title">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from '../../common/tabbar/tabbar.vue'
  import tabbarItem from '../../common/tabbar/tabbarItem.vue'
  export default {
    name: 'App',
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>

<style>
</style>
