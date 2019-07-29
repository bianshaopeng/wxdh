// pages/pay_desc/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    adressimage: "../../images/bg_lockion.png",
    orderid:'',
    ordertime:'',

   
    orderDetail: [
        
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id
    var url = app.globalData.urlIp + "order/orderDetailList";
    var params = {
      id: id,

    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    

  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "获取订单信息成功") {
      this.setData({
        empty: false,
        orderDetail: res.orderDetail,
        ordertime: res.orderTime,
        orderid:res.orderId

      })
    } else if (res.msg == "暂无数据") {
      this.setData({
        empty: true,
        orderDetail: [],
      })
    }

  },
  onFailed: function (msg) { //onFailed回调
    wx.hideLoading();
    if (msg) {
      wx.showToast({
        title: msg,
      })
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})