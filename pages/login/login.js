// pages/login/login.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    code:'',
    openId:'',
    disabled:false,
    timer : "获取验证码"

  },
  getPhoneValue:function(res){
    this.setData({
      phone: res.detail.value
    })

  },
  getCode: function (res) {
    this.setData({
      code: res.detail.value
    })

  },
  //获取短信验证码
  getVerification:function(){
   
    if (this.getphone()==true){
      var url = app.globalData.urlIp + "index/loginCode";
      var params = {
        phoneNumber: this.data.phone ,
      }
      netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    }
  },
  //登录
  login:function(){
    if (this.getlogin() == true){
      if (this.getphone() == true) {
        var url = app.globalData.urlIp + "index/wxLogin";
        var params = {
          phoneNumber: this.data.phone,
          openId:this.data.openId,
          loginCode:this.data.code
        }
        netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
      }
     }
  },

//验证手机号码
getphone(){
  var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
  if(this.data.phone==""){
    wx.showToast({
      title: '手机号不能为空',
      icon: 'none',
      duration: 1000
    })
    return false
  } else if (!myreg.test(this.data.phone)){
    wx.showToast({
      title: '请输入正确的手机号',
      icon: 'none',
      duration: 1000
    })
    return false
  }else{
    return true
  }
},


  //验证绑定
  getlogin() {
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
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
    } else if (this.data.phone == ""){
      wx.showToast({
        title: '请输入短信码',
        icon: 'none',
        duration: 1000
      })
      return false
    } else {
      return true
    }
  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    var that = this
    if(res.msg=="发送验证码成功"){
    var time = 60
    var Interval = setInterval(function () {

      time--;
      if (time > 0) {
        that.setData({
          timer: time + '秒后重发',
          disabled: true
        })
      } else {
        clearInterval(Interval);
        that.setData({
          timer: '获取验证码',
          disabled: false
        })
      }
    }, 1000)
    }else if(res.msg=="登录成功"){
      wx.showToast({
        title: '登录成功',
        icon: 'none',
        duration: 1000
      })
      wx.setStorage({
        key: 'userId',
        data: res.userId,
      })
      wx.navigateBack({
        
      })
    } else if (res.msg == "验证码已失效"){
      wx.showToast({
        title: '验证码已失效',
        icon: 'none',
        duration: 1000
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.data.openId = options.openId 

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