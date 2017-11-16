Page({
  data: {
      imgUrl: "",
      cur: "",
      discribe:"主题描述",
      proList: [
          {
              imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '一米阳光潮流女装',
              price: 68.0,
              oriPrice: 168
          },
          {
              imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
              name: '城市度假休闲',
              price: 88.0,
              oriPrice: 188
          },
          {
              imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
              name: '春夏风情文艺',
              price: 98.0,
              oriPrice: 198
          },
          {
              imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '一米阳光潮流女装',
              price: 68.0,
              oriPrice: 168
          },
      ]
  },
  goDetail: function () {
      wx.navigateTo({
        url: '/pages/pages/productDetails/productDetails'
      })
  },
  onLoad: function (options) {
      this.setData({
          imgUrl:options.url
      })
      if(options.cur==0) {
          this.setData({
              cur:'城市度假休闲'
          })
      }else if(options.cur==1) {
          this.setData({
              cur:'仲夏风情文艺'
          })
      }else if(options.cur==2){
          this.setData({
              cur:'夏日美裙'
          })
      }
  }
})