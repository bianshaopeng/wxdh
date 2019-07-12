// pages/indextype/indextype.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informations: {
      code: 200,
      msg: "成功",
      adress: "门店地址",
        data: [{
          id: "xxxxxxx",
          image: "../../images/list1.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          price_smail: "￥00",
        },
        {
          id: "xxxxxxx",
          image: "../../images/list1.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          price_smail: "￥00",
        },
        {
          id: "xxxxxxx",
          image: "../../images/list1.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          price_smail: "￥00",
        }
        ]
    },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
    var content = JSON.parse(options.type);
    console.log(content.id);
    wx.setNavigationBarTitle({
      title: content.text
    })

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