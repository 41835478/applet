//var root = "https://api.debug.dashijiadao.net/index.php/"; //域名
//var root = "http://api.douban.com/"; //域名
function req(url,data,cb){
    wx.request({
        url: root + url,
        data: data,
        method: 'POST',
        header: {'content-type': 'application/json'},
        success: function(res){
            return typeof cb == "function" && cb(res.data)
        },
        fail: function(){
            return typeof cb == "function" && cb(false)
        }
    })
};
module.exports = { req: req };