// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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