// pages/car/settle/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paytype:1,
    empty:true,
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    image: "../../images/bg_lockion.png",
    orderInfoVO:{},
    address: {
      status: false,
     
      user: "里二狗",
      phone: "18965651515",
      desc: "甘肃省兰州市城关区名城广场3号楼3287"

    },
    pay: [{
        id:0,
        image: "../../images/pay_wx.png",
        title: "微信",
        desc: "",
        ischecked:true
      },
      {
        id:1,
        image: "../../images/pay_bao.png",
        title: "钱包",
        desc: "",
        ischecked: false
      }

    ],
    goods: [
    ],
  
    information: {
      price: "￥34",
      number: "2",
      sum: "￥80",
      preferential: "20"

    }



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderId = options.orderId
    console.log(orderId)
    var url = app.globalData.urlIp + "order/receivedAddress";
    var params = {
      userId: wx.getStorageSync('userId'),
      orderCode: orderId,
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);

   
  },
  payType:function(res){
    var type = res.currentTarget.dataset.id
    this.data.paytype = type
    for(var i in this.data.pay){
      var sItem = "pay[" + i + "].ischecked";
      this.setData({
        [sItem]: !this.data.pay[i].ischecked,
      })
    }
    
  },
  adDress(e) {
    wx.navigateTo({
      url: "/pages/me/adress/adress"
    })
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
    if (res.msg == "操作成功") {
      that.setData({
        goods: res.orderDetail,
        orderInfoVO: res.orderInfoVO,
        address: res.receivedAddress,
        empty: false
      })
    } else if (res.msg == "订单列表暂无数据") {
      that.setData({
        goodsMsg: [],
        empty: true
      })
    } else if (res.msg == "操作成功1"){
      wx.requestPayment({
        timeStamp: res.data.timeStamp,
        nonceStr: res.data.nonceStr,
        package: res.data.package,
        signType: 'MD5',
        paySign: res.data.paySign,
        success(res) { },
        fail(res) {
          console.log(res);
         }
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
  paySure(e) {
    // wx.navigateTo({
    //   url: '/pages/success/index'
    // })
    wx.requestPayment({
      timeStamp: '1564220056',
      nonceStr: 'cWwzAjWmwTemKtwC',
      package: 'prepay_id=wx27173416834969389ec057ff1926223700',
      signType: 'MD5',
      paySign: '95492264DF67024C68BAAA4A739BA232',
      success(res) { },
      fail(res) {
        console.log(res);
      }
    })
    // var that = this
    // wx.login({
    //   success(res) {
    //     if (res.code) {
    //       console.log(res.code)
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx118a70cafd086628&secret=a9b0b7e2c0ea91300478f2d9019c366a' + '&js_code=' + res.code + '&grant_type=authorization_code',
    //         method: 'GET',
    //         success: function (res) {
    //           console.log(res)
    //           var url = "http://192.168.31.123/gainPrePay";
    //           var params = {
    //             openid: res.data.openid,
           
    //           }

    //           netUtil.postRequest(url, params, that.onStart, that.onSuccess, that.onFailed);
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   },

    // })

    

    //
  },

})