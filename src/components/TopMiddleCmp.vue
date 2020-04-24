<template>
    <div class="map" style="width: 30%; height: 400px;">
            <div id="chinaMap" style="height:400px;width:600px;" ref="myEchart"></div>
    </div>
</template>

<script>
    var echarts = require('echarts/lib/echarts');
    require('echarts/map/js/china'); // 引入中国地图数据
    require('echarts/map/js/world'); // 引入世界地图数据

    export default {
        mounted() {
            this.chinamap();
        },
        methods: {
            chinamap(){
                var myChart = echarts.init(document.getElementById("chinaMap"));
                var option= {
                    //  不同颜色的点
                    visualMap: [
                        {
                            min: 0,
                            max: 1,
                            show : false,
                            inRange: {
                                color: ['#01cae2', '#e63136',]
                            },
                            dimension : 3,
                        },
                    ],

                    // 地图样式
                    geo: {
                        map: 'world',   // 地图样式，当为‘北京’时，会显示北京地图
                        roam : true,
                        label: {
                            emphasis: {
                                show: true
                            }
                        },
                        zoom : 1.1,     //  初始大小
                        scaleLimit : {
                            min : 1.1,  //  最小缩放
                            max : 1.1     //  最大缩放
                        },
                        // regions : []   // 省份样式方法
                        itemStyle: {
                            normal: {
                                areaColor: 'rgb(44,161,242)',
                                borderColor: '#3B5077'
                            },
                            emphasis: {
                                areaColor: '#2B91B7'
                            }
                        },
                    },

                    series : [
                        {
                            name: '分布',
                            type: 'scatter',
                            coordinateSystem: 'geo',    //  地图配置
                            data: "1",
                            encode: {
                                value : 2
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    // color: '#FF3030',
                                    shadowBlur: 1,
                                }
                            },
                        }
                    ]
                };

                /**
                 *  使用刚指定的配置项和数据显示图表。
                 *  */
                myChart.setOption(option);
            }
        },
    }
</script>

<style>

</style>
