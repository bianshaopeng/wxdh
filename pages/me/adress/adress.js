// pages/me/adress/adress.js
var netUtil = require("../../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receivename:'',
    phone:'',
    adress:'',
  },
  getName:function(res){
    this.setData({
      receivename: res.detail.value
    })
  },
  getPhone: function (res) {
    this.setData({
      phone: res.detail.value
    })
  },
  getAdress: function (res) {
    this.setData({
      adress: res.detail.value
    })
  },
  btn:function(){
    if (this.getphone()==true){
    var url = app.globalData.urlIp + "receivedAddress/addDetailByCondition";
    var params = {
      memberId: wx.getStorageSync('userId'),
      name: this.data.receivename,
      phone: this.data.phone,
      address:this.data.adress,
    }

    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    }
  },
  //验证手机号码
  getphone() {
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.receivename == ""){
      wx.showToast({
        title: '收货人不能为空',
        icon: 'none',
        duration: 1000
      })
      return false
    }else if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false
    } else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false
    } else if (this.data.adress == ""){
      wx.showToast({
        title: '收货地址不能为空',
        icon: 'none',
        duration: 1000
      })
      return false
    }else {
      return true
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let eventChannel = this.getOpenerEventChannel();
    // 监听aishang事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('aishang', function (data) {
      console.log('传递的参数', data);
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
    let eventChannel = this.getOpenerEventChannel();
    let obj = false
    eventChannel.emit('aishang', { data: obj });
   
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

  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "操作成功") {
     
      
    } else if (res.msg == "操作成功"){

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
})