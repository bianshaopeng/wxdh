// pages/me/payment /payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsMsg: [{
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
     
    },
    {
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
     
    },
    {
      orderid: 46515189456185,
      image: "../../images/list1.jpg",
      title: "兰州大学门店",
      ordertime: "2019-09-20",
      price: 34,
      price_smail: "￥00",
      
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
    wx.setNavigationBarTitle({
      title: options.title
    });

    //  根据标题改变按钮
    if (options.title == "已收货") {
      self.setData({
        btnDesc: "申请售后",

      })
    } else if (options.title == "待收货") {
      self.setData({
        btnDesc: "确认收货"

      })
    } else if (options.title == "退款/售后") {
      self.setData({
        btnDesc: "查看详情",
        sm_desc: true
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

    let txt = e.currentTarget.dataset.txt;
   
      wx.navigateTo({
        url: "/pages/pay_desc/index"
      })
  },
})