// pages/me/payment /payment.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:true,
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

      })
    } else if (options.title == "待收货") {
      self.setData({
        btnDesc: "确认收货"

      })
    } else if (options.title == "退款/售后") {
      self.setData({
        btnDesc: "查看详情",
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
      type: '1',
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

  pay_desc(e) {
    let id = e.currentTarget.dataset.id;
    console.log('id', id)
    wx.navigateTo({
      url: "/pages/pay_desc/index?id="+id
    })
  },
  Todesc(e) {
    // 根据类型不同跳转页面
    let txt = e.currentTarget.dataset.txt
  
    wx.navigateTo({
      // 根剧跳转 id  动态设置 标题
      url: "/pages/settle/index?orderId="+txt
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
    if (res.msg == "获取待付款列表成功"){
      that.setData({
        goodsMsg: res.goodsMsg,
        empty:false
      })
    }else if(res.msg=="订单列表暂无数据"){
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
  },
})