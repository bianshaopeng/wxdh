// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    disabled:false,
    timer : "获取验证码"

  },
  getPhoneValue:function(res){
    this.setData({
      phone: res.detail.value
    })

  },
  //获取短信验证码
  getVerification:function(){
    if (this.getphone()==true){
    
    var that = this
    var time = 60
    var Interval = setInterval(function () {

      time--;
      if (time > 0) {
        that.setData({
          timer: time + '秒后重发',
          disabled:true
        })
      } else {
        clearInterval(Interval);
        that.setData({
          timer: '获取验证码',
          disabled: false
        })
      }
    }, 1000)
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
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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