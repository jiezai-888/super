<template>
  <div class="tabbar">
    <slot name="tabbar"></slot>
  </div>
</template>

<script>
  export default {
    name: 'tabbar'
  }
</script>

<style>
  .tabbar {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    height: 3.0625rem;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    justify-content: center;
    border-top: 5px solid gainsboro;
    background-color: gainsboro;
  }
</style>
