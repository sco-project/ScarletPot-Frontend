<template>
    <div id="home">
        <dv-full-screen-container>
            <div class="main-header">
                <div class="mh-left"></div>
                <div class="mh-middle">
                    <dv-decoration-7 style="width:450px;height:30px;">
                        <dv-decoration-11 style="width:450px;height:80px;">ScarletPot 态势感知大屏</dv-decoration-11>
                    </dv-decoration-7>
                </div>
                <div class="mh-right">
                    <dv-border-box-2 style="width: 120px; height: 50px; line-height: 50px; text-align:center;margin-left:200px;">
                        控制台
                    </dv-border-box-2>
                </div>
            </div>
            <dv-border-box-1 class="main-container">
                <div class="mc-top">
                    <top-left-cmp></top-left-cmp>
                    <top-middle-cmp></top-middle-cmp>
                    <top-right-cmp></top-right-cmp>
                </div>

                <div class="mc-bottom">
                    <dv-border-box-6 class="bottom-left-container">
                        <dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
                        <dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
                        <bottom-left1></bottom-left1>
                        <bottom-left2></bottom-left2>
                    </dv-border-box-6>
                    <div class="bottom-right-container">
                        <bottom-right></bottom-right>
                    </div>
                </div>
            </dv-border-box-1>
        </dv-full-screen-container>
    </div>
</template>


<script>
    import TopLeftCmp from '../components/TopLeftCmp'
    import TopMiddleCmp from "@/components/TopMiddleCmp";
    import BottomLeft1 from "@/components/BottomLeft1";
    import BottomRight from "@/components/BottomRight";
    import BottomLeft2 from "@/components/BottomLeft2";
    import TopRightCmp from "@/components/TopRightcmp";
    export default {
        name : 'Home',
        components: {
            TopLeftCmp,
            TopMiddleCmp,
            TopRightCmp,
            BottomLeft1,
            BottomLeft2,
            BottomRight,
        },
        data () {
            return {}
        }
    }
</script>

<style lang="less">
   #home {
       width: 100%;
       height: 100%;
       background-color: #030409;
       color: #ffffff;
       #dv-full-screen-container {
           /*background-image: url('../assets/background.jpg');*/
           background-size: 100% 100%;
           box-shadow: 0 0 3px blue;
           display: flex;
           flex-direction: column;
       }

       .main-header {
           height: 100px;
           display: flex;
           justify-content: space-between;
           align-items: flex-end;

           .mh-middle {
               font-size: 30px;
           }

           .mh-left, .mh-right {
               width: 450px;
           }
       }

       .main-container {
           height: calc(~"100% - 80px");

           .mc-top, .mc-bottom {
               box-sizing: border-box;
               padding: 30px;
               display: flex;
           }

           .mc-top {
               height: 40%;
           }

           .mc-bottom {
               height: 60%;
           }

           .top-left-cmp, .bottom-left-container {
               width: 32%;
           }

           .top-middle-cmp, .top-right-cmp {
               width: 34%;
           }

           .bottom-left-container {
               position: relative;

               .border-box-content {
                   display: flex;
               }

               .mcb-decoration-1, .mcb-decoration-2 {
                   position: absolute;
                   left: 50%;
                   margin-left: -2px;
               }

               .mcb-decoration-1 {
                   top: 5%;
                   transform: rotate(180deg);
               }

               .mcb-decoration-2 {
                   top: 50%;
               }

               .bottom-left-chart-1, .bottom-left-chart-2 {
                   width: 50%;
                   height: 100%;
               }
           }

           .bottom-right-container {
               width: 68%;
               padding-left: 30px;
               box-sizing: border-box;
               display: flex;
           }
       }

   }

</style>
