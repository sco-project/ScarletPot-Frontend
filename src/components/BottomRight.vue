<template>
    <div class="bottom-right-table-1">
        <dv-border-box-6>
            <div class="table-name">
            </div>
            <dv-scroll-board :config="config" style="width:1200px;height:523px;" />
        </dv-border-box-6>
    </div>
</template>


<script>
    export default {
        name: "BottomRight",
        data () {
            return {
                config: {
                    data: [
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],
                        ['2020.4.20 15:32:21','SSH', 'IP：127.0.0.1','root root 建立链接'],


                    ],
                    index: false,
                    align: ['center'],
                    oddRowBGC: 'rgba(9, 37, 50, 0.4)',
                    evenRowBGC: 'rgba(10, 32, 50, 0.3)'
                }
            }
        }
    }
</script>
