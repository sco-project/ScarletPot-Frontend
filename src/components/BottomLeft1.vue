<template>
    <div class="bottom-left-chart-1">
        <div class="header-name">攻击类型排行</div>
        <dv-capsule-chart :config="config" style="width:280px;height:80%" />
    </div>
</template>


<script>
    // import {mapGetters, mapState, mapActions} from "vuex";

    export default {
        name: "BottomLeft1",
        data() {
            return {
                config:{
                    data : [
                        {
                            name: 'SSH',
                            value: 110
                        },
                        {
                            name: 'Mysql',
                            value: 210
                        },
                        {
                            name: 'Proxy',
                            value: 30
                        },
                        {
                            name: 'Redis',
                            value: 10
                        },
                        {
                            name: 'Web',
                            value: 330
                        },
                        {
                            name: 'Telnet',
                            value: 40
                        },

                    ]
                }
            }
        },


        mounted() {
            // this.controller.ws.onmessage = (evt) => {
                // var resData = JSON.parse(evt.data);
                // console.log(resData)
                // this.config.data[0].value = resData.service.proxy
                // this.config.data[0].push(resData.service)
                // console.log(this.config.data[0].name)
            // };
        }
    }
</script>

<style lang="less">
    .bottom-left-chart-1 {
        position: relative;
        .header-name {
            height: 80px;
            line-height: 110px;
            font-size: 20px;
            text-align: center;
        }

        .details-value {
            height: 40px;
            font-size: 30px;
            font-weight: bold;
            text-align: center;
            span {
                color: #00c0ff;
                font-size: 45px;
            }
        }

        .dv-charts-container {
            height: calc(~"100% - 190px");
        }

        .decoration-ring {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 5px solid fade(#fefefe, 30);
            top: 190px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
