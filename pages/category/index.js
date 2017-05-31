//index.js
//获取应用实例
var app = getApp()
Page({
  /*data: {
    motto: 'Hello World',
    userInfo: {}
  },*/
  //事件处理函数
  onShow:function(){
    wx.request({
      url:"http://www.easy-mock.com/mock/59214ea59aba4141cf294e07/m.jd.com/category/list",
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res)=>{
        console.log(res);
         this.setData({
           goodlists:res.data.goodlists,
           listimgs:res.data.listimgs,
           hots:res.data.hots,
           hotlist:res.data.hotlist
         })
        }
    })
}
})
