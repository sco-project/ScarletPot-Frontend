<template>
    <div class="bottom-left-chart-2">
        <div class="header-name">蜜罐实时状态</div>
<!--        <div class="status">-->
        <div class="sp-info">
            <a>CPU使用率</a>
<!--            <img src="../assets/cpu.svg" width="60px" style="">-->
            <dv-percent-pond :config="CPUInfo" style="width:220px;height:100px;" />
            <a>内存使用率</a>
            <dv-percent-pond :config="MemInfo" style="width:220px;height:100px;" />
            <a>硬盘使用率</a>
            <dv-percent-pond :config="DiskInfo" style="width:220px;height:100px;" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "BottomLeft2",
        data () {
            return {
                CPUInfo: {
                    "value":66
                },
                MemInfo: {
                    "value":20
                },
                DiskInfo : {
                    "value":30
                }
            }
        }
    }
</script>

<style lang="less">
    .bottom-left-chart-2 {
        position: relative;
        .header-name {
            height: 80px;
            line-height: 110px;
            font-size: 20px;
            text-align: center;
        }

        .dv-percent-pond {
            left: 35px;
            margin-bottom: 30px;
        }

        .status {
            padding-bottom: 20px;
        }

        .sp-info {
            flex: 1;
            text-align: center;
            a{
                color: rgba(44, 161, 242, 0.98);
                padding-bottom: 10px;
            }


        }

    }
</style>
