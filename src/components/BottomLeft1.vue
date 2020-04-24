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
                config:{
                    data : [
                        {
                            name: 'SSH',
                            value: 55
                        },
                        {
                            name: 'MySQL',
                            value: 120
                        },
                        {
                            name: 'Proxy',
                            value: 78
                        },
                        {
                            name: 'Web',
                            value: 66
                        },
                        {
                            name: 'Redis',
                            value: 80
                        },
                        {
                            name: 'Telnet',
                            value: 45
                        },
                        {
                            name: "MemCache",
                            value: 100
                        },
                        {
                            name: "FTP",
                            value: 100
                        },
                        {
                            name: "FTP",
                            value: 100
                        },
                    ]
                }
            }
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
