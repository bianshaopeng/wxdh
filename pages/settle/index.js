// pages/car/settle/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    address: {
      status: false,
      image: "../../images/bg_lockion.png",
      user: "里二狗",
      phone: "18965651515",
      desc: "甘肃省兰州市城关区名城广场3号楼3287"

    },
    pay: [{
        image: "../../images/pay_wx.png",
        title: "微信",
        desc: "",
      },
      {
        image: "../../images/pay_bao.png",
        title: "钱包",
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
    var orderId = options.orderId
    console.log(orderId)

  },
  paySure(e) {
    wx.navigateTo({
      url: '/pages/success/index'
    })
  },
  adDress(e) {
    wx.navigateTo({
      url: "/pages/me/adress/adress"
    })
  }


})