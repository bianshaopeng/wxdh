// pages/car/settle/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paytype: '6',
    empty: true,
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    image: "../../images/bg_lockion.png",
    orderInfoVO: {},
    address: {
      status: false,
      user: "里二狗",
      phone: "18965651515",
      desc: "甘肃省兰州市城关区名城广场3号楼3287"

    },
    pay: [{
        id: 0,
        image: "../../images/pay_wx.png",
        title: "微信",
        desc: "",
        ischecked: true
      },
      {
        id: 1,
        image: "../../images/pay_bao.png",
        title: "钱包",
        desc: "",
        ischecked: false
      }

    ],
    goods: [],

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
  payType: function (res) {
    var type = res.currentTarget.dataset.id
    this.data.paytype = type
    for (var i in this.data.pay) {
      var sItem = "pay[" + i + "].ischecked";
      this.setData({
        [sItem]: !this.data.pay[i].ischecked,
      })
      for (var i in this.data.pay) {
        if (this.data.pay[i].ischecked == true) {
          if (i == 0) {
            this.data.paytype == '6'
          } else {
            this.data.paytype == '1'
          }
        }
      }
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
    } else if (res.msg == "操作成功1") {
      wx.requestPayment({
        timeStamp: res.data.timeStamp,
        nonceStr: res.data.nonceStr,
        package: res.data.package,
        signType: 'MD5',
        paySign: res.data.paySign,
        success(res) {
          console.log()
        },
        fail(res) {
          console.log(res);
        }
      })
    } else if (res.msg == "钱包支付成功") {
      wx.redirectTo({
        url: '/pages/success/index',
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

    console.log(this.data.paytype)

    //微信支付
    var url = "http://192.168.31.40:8081/gainPrePay";
    var params = {
      amount: this.data.orderInfoVO.orderTotalMoney,
      tradeType: this.data.paytype,
      memberId: wx.getStorageSync('userId')
    }
    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);



  },

})