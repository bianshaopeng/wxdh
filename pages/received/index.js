// pages/received/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:true,
    type:0,
    goodsMsg: [
    ],
    btnDesc: "",
    sm_desc: false,




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    wx.setNavigationBarTitle({
      title: options.title
    });

    //  根据标题改变按钮
    if (options.title == "已收货") {
      self.setData({
        btnDesc: "申请售后",
        type:3

      })
    } else if (options.title == "待收货") {
      self.setData({
        btnDesc: "确认收货",
        type: 2

      })
    } else if (options.title == "退款/售后") {
      self.setData({
        btnDesc: "查看详情",
        type: 4,
        sm_desc: true
      })
    }

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
    var url = app.globalData.urlIp + "order/orderInfoList";
    var params = {
      userId: wx.getStorageSync('userId'),
      type: this.data.type,
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

  pay_desc(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      // 根剧跳转 id  动态设置 标题
      url: "/pages/pay_desc/index?id="+id
    })
  },
  Todesc(e) {
    // 根据类型不同跳转页面

    let txt = e.currentTarget.dataset.txt;
    if (txt == "查看详情") {
      wx.navigateTo({
        url: "/pages/me/refundesc/index"
      })
    }
    if (txt == "申请售后") {
      wx.navigateTo({
        url: "/pages/me/aftersale/index"
      })
    }
    if (txt == "确认收货") {

      wx.showToast({
        title: '确认收货',
        icon: 'success',
        duration: 2000
      })

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
    if (res.msg == "获取列表成功") {
      that.setData({
        goodsMsg: res.goodsMsg,
        empty:false
      })
    } else if (res.msg == "订单列表暂无数据") {
      that.setData({
        goodsMsg: [],
        empty: true
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
  }
})