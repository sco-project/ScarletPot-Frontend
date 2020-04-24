<template>
    <div class="top-left-cmp">
<!--        蜜罐访问量展示：包括总请求量 上报成功量 上报失败量-->
        <div class="sp-count">
            <dv-border-box5>
                <div class="totle-value"><span>9999</span>次</div>
                <div class="sub-value"><span>成功</span>9000 次</div>
                <div class="sub-value"><span>失败</span>999 次</div>
            </dv-border-box5>
<!--        蜜罐攻击情况展示：日均攻击数量 总攻击数 有效攻击数-->
            <div class="sp-text">
                蜜罐攻击上报量
                <dv-decoration3 style="width: 200px;height: 20px;"></dv-decoration3>
            </div>
        </div>

        <div class="sp-average">
            <div class="sp-text">
                蜜罐攻击统计
                <dv-decoration3 style="width: 200px;height: 20px;"></dv-decoration3>
            </div>
            <dv-border-box5 :reverse="true">
                    <div class="totle-value"><span>999</span>次/日</div>
                    <div class="sub-value"><span>有效攻击</span>9999 次</div>
                    <div class="sub-value"><span>总攻击</span>100001 次</div>
            </dv-border-box5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopLeftCmp"
    }
</script>

<style lang="less">
    .top-left-cmp{
        display: flex;
        .sp-count .sp-average{
            width: 50%;
        }

        .dv-border-box-5{
            height: 60%;
        }

        .sp-text {
            display: flex;
            flex-direction: column;
            height: 40%;
            font-size: 20px;
            padding: 20px;
            box-sizing: border-box;
        }

        .sp-count .sp-text {
            align-items: flex-end;
            justify-content: center;
        }

        .sp-average .sp-text {
            justify-content: flex-start;
            padding-top: 20px;
        }

        .sp-count .dv-border-box-5 {
            padding: 30px;
            box-sizing: border-box;
        }

        .sp-average .dv-border-box-5 {
            padding: 40px;
            padding-left: 75px;
            box-sizing: border-box;
        }

        .totle-value {
            font-weight: bold;
            font-size: 30px;

            span {
                font-size: 50px;
                color: #00c0ff;
                margin-right: 15px;
            }
        }

        .sub-value {
            height: 35px;
            line-height: 35px;
            font-size: 18px;

            span {
                margin-right: 30px;
            }
        }
    }
</style>
