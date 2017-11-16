var area = require('../../../utils/city.js');
var p = 0, c = 0, d = 0;
var value1 = [];
Page({
    data:{
        provinceName:[],
        provinceCode: [],
        provinceSelIndex: '',
        cityName: [],
        cityCode: [],
        citySelIndex: '',
        districtName: [],
        districtCode: [],
        districtSelIndex: '',
        showMessage: false,
        messageContent: '',
        showDistpicker: false,
        add : '请选择省市区'
    },
    onLoad:function(options){
        this.setAreaData()
    },
    setAreaData: function(p, c, d){
        var p = p || 0 // provinceSelIndex
        var c = c || 0 // citySelIndex
        var d = d || 0 // districtSelIndex
        // 设置省的数据
        var province = area['100000']
        var provinceName = [];
        var provinceCode = [];
        for (var item in province) {
            provinceName.push(province[item])
            provinceCode.push(item)
        }
        this.setData({
            provinceName: provinceName,
            provinceCode: provinceCode
        })
        // 设置市的数据
        var city = area[provinceCode[p]]
        var cityName = [];
        var cityCode = [];
        for (var item in city) {
            cityName.push(city[item])
            cityCode.push(item)
        }
        this.setData({
            cityName: cityName,
            cityCode: cityCode
        })
        // 设置区的数据
        var district = area[cityCode[c]]
        var districtName = [];
        var districtCode = [];
        for (var item in district) {
            districtName.push(district[item])
            districtCode.push(item)
        }
        this.setData({
            districtName: districtName,
            districtCode: districtCode
        })
    },
    changeArea: function(e) {
        p = e.detail.value[0]
        c = e.detail.value[1]
        d = e.detail.value[2]
        this.setAreaData(p, c, d);
    },
    showDistpicker: function() {
        this.setData({
            showDistpicker: true
        })
    },
    distpickerCancel: function() {
        this.setData({
            showDistpicker: false
        })
    },
    distpickerSure: function() {
        this.setData({
            provinceSelIndex: p,
            citySelIndex: c,
            districtSelIndex: d,
            showDistpicker: false,
            add : this.data.provinceName[p]+this.data.cityName[c]+this.data.districtName[d]
        })
        //this.distpickerCancel()
    },
    savePersonInfo: function(e) {
        var data = e.detail.value
        var telRule = /^1[3|4|5|7|8]\d{9}$/, nameRule = /^[\u2E80-\u9FFF]+$/
        if (data.name == '') {
            this.showMessage('请输入姓名')
        } else if (! nameRule.test(data.name)) {
            this.showMessage('请输入中文名')
        } else if (data.tel == '') {
            this.showMessage('请输入手机号码')
        } else if (! telRule.test(data.tel)) {
            this.showMessage('手机号码格式不正确')
        } else if (data.province == '') {
            this.showMessage('请选择所在地区')
        } else if (data.city == '') {
            this.showMessage('请选择所在地区')
        } else if (data.district == '') {
            this.showMessage('请选择所在地区')
        } else if (data.address == '') {
            this.showMessage('请输入详细地址')
        } else {
            this.showMessage(' 保存成功')
            console.log(data)
        }
    },
    showMessage: function(text) {
        var that = this
        that.setData({
            showMessage: true,
            messageContent: text
        })
        setTimeout(function(){
            that.setData({
                showMessage: false,
                messageContent: ''
            })
        }, 2000)
    }
})