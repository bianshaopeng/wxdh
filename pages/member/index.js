// pages/member/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payname: '会员支付',
    paytype: '1',
    top_bar: "../../images/top_bar.jpg",
    center_img: '',

  },
  /*  zhifu: function () {
     var that = this
     var userid = wx.getStorageSync('userId')
     if (this.data.payname == '会员支付') {
       this.setData({
         payname: '微信支付',
         paytype: '6',
         center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userid + this.data.paytype
       })
       wx.setNavigationBarTitle({
         title: '微信支付',
       })

     } else {
       this.setData({
         payname: '会员支付',
         paytype: '1',
         center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userid + this.data.paytype
       })
       wx.setNavigationBarTitle({
         title: '会员支付',
       })

     }
   }, 
   */
  // 点击切换支付方式  (操作太快,可能需要延迟 )
  actioncnt: function () {
    var that = this;
    var userid = wx.getStorageSync('userId');
    wx.showActionSheet({
      itemList: ['微信支付', '会员支付'],
      success(res) {
        if (res.tapIndex == 0) {
          that.setData({
            payname: '微信支付',
            paytype: '6',
            center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userid + that.data.paytype
          })
          wx.setNavigationBarTitle({
            title: '微信支付',
          })

        }

        if (res.tapIndex == 1) {
          that.setData({
            payname: '会员支付',
            paytype: '1',
            center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userid + that.data.paytype
          })
          wx.setNavigationBarTitle({
            title: '会员支付',
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
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
    var userid = wx.getStorageSync('userId')
    console.log(userid)
    this.setData({
      center_img: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userid + this.data.paytype
    })
    console.log(wx.getStorageSync('userId'))
    wx.connectSocket({
      url: 'wss://www.youke001.cn:8081/ws',
      header: {
        'content-type': 'application/json',
      },

      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
    wx.onSocketOpen(function (res) {

      console.log('WebSocket连接已打开！' + res)
      wx.sendSocketMessage({
        data: wx.getStorageSync('userId'),

      })

      console.log('WebSocket发送消息成功！')
    });

    wx.onSocketMessage(function (res) {
      console.log(res)
      var strpay = JSON.parse(res.data).payRequestStr
      if (strpay.msg == "钱包支付成功") {
        wx.redirectTo({
          url: '/pages/success/index',
        })
      } else if (strpay.msg == "操作成功1") {
        wx.requestPayment({
          timeStamp: strpay.data.timeStamp,
          nonceStr: strpay.data.nonceStr,
          package: strpay.data.package,
          signType: 'MD5',
          paySign: strpay.data.paySign,
          success(res) {
            console.log()
            wx.sendSocketMessage({
              data: wx.getStorageSync('userId') + "&true",

            })


          },
          fail(res) {
            console.log(res);
            wx.sendSocketMessage({
              data: wx.getStorageSync('userId') + "&false",

            })


          }
        })
      }


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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})