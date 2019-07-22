// pages/pay_desc/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    adressimage: "../../images/bg_lockion.png",
    orderid:'2222222222',
    ordertime:'2019-07-20',
    address: {   
      user: "里二狗",
      phone: "18965651515",
      desc: "甘肃省兰州市城关区名城广场3号楼3287"

    },
   
    guess_like: [{
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
        number: "2"
      },
      {
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥35",
        price_smail: "￥00",
        number: "2"
      },
      {
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥300",
        price_smail: "￥00",
        number: "2"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderid = options.options
    var url = app.globalData.urlIp + "goods/payment";
    var params = {
      order: orderid,
      type: '0',

    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "成功") {
      self.setData({
        empty: false,
        goodsMsg: res.goodsMsg,
      })
    } else if (res.msg == "暂无数据") {
      self.setData({
        empty: true,
        goodsMsg: [],
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