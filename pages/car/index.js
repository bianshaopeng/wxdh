// pages/car/index.js
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
    },
    guess_like: [{
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
      },
      {
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥35",
        price_smail: "￥00",
      },
      {
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥300",
        price_smail: "￥00",
      }
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showListView(e) {
    //let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      url: "/pages/settle/index"
    })
  }
})