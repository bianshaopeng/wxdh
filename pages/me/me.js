// pages/me/me.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:true,
    userId:'',
    avatarUrl:'../../images/anthor.png',
    viewBoneItem: [{
      image: "../../images/shouhou4.png",
      text: "待付款"
    }, {
      image: "../../images/shouhou3.png",
      text: "待收货"
    }, {
      image: "../../images/shouhou2.png",
      text: "已收货"
    }, {
      image: "../../images/shouhou1.png",
      text: "退款/售后"
    }]

  },
  //登录
  loginClick:function(){
    var that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({

            success: res => {
              console.log('res.userInfo')
              // 可以将 res 发送给后台解码出 unionId
              app.globalData.userInfo = res.userInfo
              console.log(res.userInfo)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res)

          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        console.log(res.userInfo.avatarUrl)
        that.setData({
          avatarUrl: res.userInfo.avatarUrl
        })
        wx.setStorage({
          key: 'avatarUrl',
          data: 'res.userInfo.avatarUrl',
        })
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    })
  },
  couponClick: function () {
    wx.navigateTo({
      url: 'coupon/coupon',
    })
  },
  costomerClick: function () {
    wx.navigateTo({
      url: 'cusservice/cusservice',
    })
  },
  itemClick: function (e) {
    console.log(e.currentTarget.dataset.index)
    let txt = e.currentTarget.dataset.txt


    if (e.currentTarget.dataset.index == 0) {
      wx.navigateTo({
        url: '/pages/payment/payment?title=' + txt,
      })
    } else {
      wx.navigateTo({
        url: '/pages/received/index?title=' + txt,
      })
    }
    // if (e.currentTarget.dataset.index == 1) {
    //   wx.navigateTo({
    //     url: '/pages/received/index?title=' + txt,
    //   })
    // }
    // if (e.currentTarget.dataset.index == 2) {
    //   wx.navigateTo({
    //     url: '/pages/received/index?title=' + txt,
    //   })
    // }
    // if (e.currentTarget.dataset.index == 3) {
    //   wx.navigateTo({
    //     url: '/pages/received/index?title=' + txt,
    //   })
    // }
  },
  calLogin: function () {
    wx.showModal({
      title: '提示',
      content: '是否注销登录',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  adressClick: function () {
    wx.navigateTo({
      url: "adress/adress",
      events: {
        aishang: function (data) {
          console.log('aishang', data);
          if (data === true) {
            console.log('aishang111');
          } else {
            console.log('aishang222');
          }
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('aishang', {
          data: '爱尚丽明'
        })
      }
    })


  },
  rechargeClick: function () {
    wx.navigateTo({
      url: 'recharge/recharge?type=1',
    })
  },
  historyClick:function(){
    wx.navigateTo({
      url: '/pages/hispayment/hispayment',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorage({
      key: 'userId',
      data: '1',
    })
        
    wx.getStorage({
      key: 'userId',
      success: function(res) {
        that.setData({
          userId:res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (this.data.userId != null || this.data.userId != ''){
      this.setData({
        // isLogin:false
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