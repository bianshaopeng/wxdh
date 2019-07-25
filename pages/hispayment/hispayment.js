var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:true,
    userId:'',
    goodsMsg: [{
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
      status: "已收货",
    },
    {
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
      status: "已收货",
    },
    {
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
      status:"已收货",

    }
    ],
    btnDesc: "",
    sm_desc: false,




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    var url = app.globalData.urlIp + "order/orderInfoList";
    var params = {
      userId: wx.getStorageSync('userId'),
      type: '0',
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
   
    

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
    if (res.msg == "获取待收货列表成功") {
      that.setData({
        goodsMsg: res.goodsMsg,
        empty: false
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

  pay_desc(e) {
  let txt = e.currentTarget.dataset.orderid
    wx.navigateTo({
      // 根剧跳转 id  动态设置 标题
      url: "/pages/pay_desc/index?orderid="+txt
    })
  },
  Todesc(e) {
    // 根据类型不同跳转页面

    let txt = e.currentTarget.dataset.txt;

    wx.navigateTo({
      url: "/pages/pay_desc/index"
    })
  },
})