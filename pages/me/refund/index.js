// pages/me/refund/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsMsg: [{
        ordernumber: 46515189456185,
        image: "/images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
        number: "2"
      },
      {
        ordernumber: 46515189456185,
        image: "/images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
        number: "2"
      },
      {
        ordernumber: 46515189456185,
        image: "/images/list1.jpg",
        title: "大枣",
        standard: "500g",
        price: "￥34",
        price_smail: "￥110",
        number: "1"
      }
    ]

  },
  pay_desc(e) {
    wx.navigateTo({
      url: "/pages/me/refundesc/index"
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