// pages/me/payment /payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    goods: [{
      unselect: "../../images/unselected.png",
      select: "../../images/selected.png",
      image: "../../images/list1.jpg",
      title: "新疆薄皮核桃",
      standard: "500g",
      shop: "来自XXXX店铺",
      price: "￥34",
      price_smail: "￥00",
      number: "1"
    }],
    car: {
      status: false,
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

  account(e) {
    //let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      url: "/pages/settle/index"
    })
  },

  pay_desc(e) {
    //let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      url: "/pages/pay_desc/index"
    })
  }
})