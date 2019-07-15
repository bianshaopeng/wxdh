// pages/pay_desc/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    address: {
      status: true,
      image: "../../images/bg_lockion.png",
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