<template>
    <div class="bottom-left-chart-1">
        <div class="header-name">攻击类型排行</div>
        <dv-capsule-chart :config="config" style="width:280px;height:80%" />
    </div>
</template>


<script>
    export default {
        name: "BottomLeft1",
        data() {
            return {
                // ssh: 0,
                // mysql: 0,
                // proxyCount: 0,
                // web: 0,
                // redis: 0,
                // telnet: 0,
                // memcache:0,
                // ftp: 0,

                config:{
                    data : [
                        // {
                        //     name: 'SSH',
                        //     value: this.ssh
                        // },
                        // {
                        //     name: 'MySQL',
                        //     value: this.mysql
                        // },
                        // {
                        //     name: 'Proxy',
                        //     value: this.proxyCount
                        // },
                        // {
                        //     name: 'Web',
                        //     value: this.web
                        // },
                        // {
                        //     name: 'Redis',
                        //     value: this.redis
                        // },
                        // {
                        //     name: 'Telnet',
                        //     value: this.telnet
                        // },
                        // {
                        //     name: "MemCache",
                        //     value: this.memcache
                        // },
                        // {
                        //     name: "FTP",
                        //     value: this.ftp
                        // },
                        // {
                        //     name: "FTP",
                        //     value: this.ftp
                        // },
                    ]
                }
            }
        },
        mounted() {
            // this.ws.onmessage = (evt) => {
                // var res = JSON.parse(evt.data);
                // console.log(res);
                // this.proxy = res.service.proxy;
                // console.log(this.config.data[0].value)
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
