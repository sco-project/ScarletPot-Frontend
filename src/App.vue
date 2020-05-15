<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import ReconnectingWebSocket from 'reconnecting-websocket'
  export default {
    name: 'app',
    created() {
      this.initWs()
    },
    methods:{
      initWs() {
        let that = this;
        that.ws = new ReconnectingWebSocket('ws://192.168.2.148:9000/ws');
        that.controller.setWs(that.ws);
        // that.ws.onopen = that.onopen();
        that.ws.onopen = () => {
          console.log("已建立连接");
        };
        that.ws.onclose = function() {
          // 关闭 websocket
          console.log("连接已关闭...");
          setTimeout(() => {
            that.localSocket();
          }, 2000);
        };
      }
    }
  }
</script>

<style>
  html,body{
    background-color: #2c3e50;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
