<template>
    <div class="top-left-cmp">
<!--        蜜罐访问量展示：包括总请求量 上报成功量 上报失败量-->
        <div class="sp-count">
            <dv-border-box5>
                <div class="totle-value"><span>{{this.reportCount}}</span>次</div>
                <div class="sub-value"><span>成功</span>{{this.successReport}} 次</div>
                <div class="sub-value"><span>失败</span>{{this.errCount}} 次</div>
            </dv-border-box5>
<!--        蜜罐攻击情况展示：日均攻击数量 总攻击数 有效攻击数-->
            <div class="sp-text">
                蜜罐攻击统计
                <dv-decoration3 style="width: 200px;height: 20px;"></dv-decoration3>
            </div>
        </div>

        <div class="sp-average">
            <div class="sp-text">
                蜜罐上报情况
                <dv-decoration3 style="width: 200px;height: 20px;"></dv-decoration3>
            </div>
            <dv-border-box5 :reverse="true">
                    <div class="totle-value"><span>{{this.dayCount}}</span>/日</div>
                    <div class="sub-value"><span>有效攻击</span>{{this.validCount}} 次</div>
                    <div class="sub-value"><span>无效攻击</span>{{this.invalidCount}} 次</div>
            </dv-border-box5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopLeftCmp",
        data() {
            return {
                reportCount: 0,
                successReport:0,
                errCount: 0,
                validCount : 0,
                invalidCount: 0,
                dayCount: 0,
                ws: '',
            }
        },
        mounted() {
            this.ws = new WebSocket('ws://127.0.0.1:9000/ws');
            // 连接打开时触发
            this.ws.onopen = () => {
                console.log("已建立连接");
            };

            // 接收到消息时触发
            this.ws.onmessage = (evt) => {
                var res = JSON.parse(evt.data);
                console.log(res);
                this.reportCount = res.data.reportCount;
                this.errCount = res.data.errCount;
                this.successReport = this.reportCount-this.errCount;
                this.validCount = res.data.validCount;
                this.invalidCount  = res.data.invalidCount;
                this.dayCount = res.data.dayCount;

            };
            this.ws.onclose = () => {
                console.log('连接已断开，请检查网络情况')
            }
        },
        // 关闭连接
        beforeDestroy() {
            this.ws.close()
        },
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
            font-size: 26px;
            span {
                font-size: 40px;
                color: #00c0ff;
                margin-right: 10px;
            }
            margin-left: 15px;
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
