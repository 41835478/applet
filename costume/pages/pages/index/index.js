//index.js
//获取应用实例
var app = getApp();
//var http = require('../../../service/http.js');
Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 500,
        sortList: [
            {id: 1, name: "新品"},
            {id: 2, name: "人气"},
            {id: 3, name: "销量"}
        ],
        currentItem: 1,
        proList: [
            {
                imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                name: '一米阳光潮流女装',
                price: 68.0,
                oriPrice: 168
            },
            {
                imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                name: '城市度假休闲',
                price: 88.0,
                oriPrice: 188
            },
            {
                imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                name: '春夏风情文艺',
                price: 98.0,
                oriPrice: 198
            }
        ]
    },
    //事件处理函数
    changeUrl: function (e) {
        var index = e.currentTarget.id;
        var imgUrl = this.data.imgUrls[index];
        wx.navigateTo({
            url: '/pages/pages/projectDetails/projectDetails?url='+imgUrl+'&cur='+index
        })
    },
    //点击排序
    order: function (options) {
        var that = this;
        var id = options.currentTarget.dataset.id;
        console.log(id)
        that.setData({
            'currentItem': id
        })
    },
    onLoad: function () {
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
        })
        console.log(wx.getExtConfigSync())
    }
})
