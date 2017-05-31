//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  onShow:function(){
    wx.request({
      url:"http://www.easy-mock.com/mock/59214ea59aba4141cf294e07/m.jd.com/index/list",
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res)=>{
        console.log(res);
         this.setData({
           serverlist:res.data.serverlist,
           lovelist:res.data.lovelist,
           piclist:res.data.piclist,
           piclist1:res.data.piclist1,
           imgUrls:res.data.imgUrls
         })
        }
    })
}
});
