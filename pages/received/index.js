// pages/received/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsMsg: [{
        ordernumber: 46515189456185,
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
        number: "2"
      },
      {
        ordernumber: 46515189456185,
        image: "../../images/list1.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        price_smail: "￥00",
        number: "2"
      },
      {
        ordernumber: 46515189456185,
        image: "../../images/list1.jpg",
        title: "大枣",
        standard: "500g",
        price: "￥34",
        price_smail: "￥110",
        number: "1"
      }
    ],
    btnDesc: ""


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    console.log(this)
    wx.setNavigationBarTitle({
      title: options.title
    });
    //  根据标题改变按钮
    if (options.title == "已收货") {
      self.setData({
        btnDesc: "申请售后"
      })
    } else if (options.title == "待收货") {
      self.setData({
        btnDesc: "待收货"
      })
    } else if (options.title == "退款/售后") {
      self.setData({
        btnDesc: "查看详情"
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
    //let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      // 根剧跳转 id  动态设置 标题
      url: "/pages/pay_desc/index"
    })
  },
  Todesc(e) {
    // 根据类型不同跳转页面
    let txt = e.currentTarget.dataset.txt
    if (txt == "已收货") {
      url: "/pages/pay_desc/index"
    }

  }
})