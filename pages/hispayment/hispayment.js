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
    wx.getStorage({
      key: 'userId',
      success: function(res) {
        console.log(res.data)
        self.setData({
          empty: false,
          userId: res.data,
        })
      },
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
    if(res.msg=="成功"){
      self.setData({
        empty:false,
        goodsMsg: res.goodsMsg,
      })
    } else if (res.msg == "暂无数据"){
      self.setData({
        empty: true,
        goodsMsg:[],
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
    console.log('onReady',this.data.userId)
    var url = app.globalData.urlIp + "goods/payment";
    var params = {
      userId: this.data.userId,
      type: '0',

    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed); //调用get方法情就是户数
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