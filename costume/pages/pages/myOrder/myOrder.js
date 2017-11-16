Page({
    data: {
        tabList: [
            "待付款", "待发货", "已发货", "全部订单"
        ],
        orderList: [
            {
              orderno: 'E201709221903',status:'待支付',imgUrls:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',name: '一米阳光',price:68.0,num:1
            },
            {
                orderno: 'E201709221904',status:'待支付',imgUrls:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',name: '一米阳光',price:68.0,num:1
            },
            {
                orderno: 'E201709221905',status:'待支付',imgUrls:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',name: '一米阳光',price:68.0,num:1
            }
        ],
        current: 0
    },
    changeTab: function (e) {
        var that = this;
        var index = e.currentTarget.dataset.id;
        that.setData({
            current: index
        })
        //console.log(that.data.current)
    }
})