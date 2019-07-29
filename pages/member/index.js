// pages/member/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    top_bar: "../../images/top_bar.jpg",
    center_img: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userid = wx.getStorageSync('userId')
  this.setData({
    center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+userid
  })
   
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.connectSocket({
      url: 'ws://192.168.31.30:8081/ws',
      header: {
        'content-type': 'application/json'
      },

      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
    wx.onSocketOpen(function (res) {

      console.log('WebSocket连接已打开！')
      wx.sendSocketMessage({
        data: [130001],

      })
    });

    wx.onSocketMessage(function (res) {
      console.log(res)
    })
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  wx.closeSocket()
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