// pages/car/settle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    address: {
      image: "../../images/bg_lockion.png",
      user: "里二狗",
      phone: "18965651515",
      desc: "甘肃省兰州市城关区名城广场3号楼3287"

    },
    pay: [{
        image: "../../images/pay_wx.png",
        title: "微信",
        desc: "推荐已在微信中绑定银行卡的用户使用",
      },
      {
        image: "../../images/pay_zhi.png",
        title: "微信",
        desc: "安全快捷，可支持银行卡支付",
      },
      {
        image: "../../images/pay_yue.png",
        title: "余额",
        desc: "",
      }, {
        image: "../../images/pay_bao.png",
        title: "钱包",
        desc: "",
      }, {
        image: "../../images/pay_yi.png",
        title: "翼支付",
        desc: "",
      }

    ],
    goods: {
      image: "../../images/list1.jpg",
      title: "酸奶",
      standard: "500g",
      price: "￥34",
      freight: "免运费"
    },
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