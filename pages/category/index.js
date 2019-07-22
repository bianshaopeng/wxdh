// pages/category/index.js
var app = getApp();
var netUtil = require("../../utils/netUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeId: "",
    key: 0,
    colors: [],
    fontColor: 'red',
    showtwo: true,
    listTitle: [{
        id: "x",
        onelist: "食品",
        isOk: true,
        isShow: true,
        twolist: [{
          id: "x",
          name: "苹果"
        }, {
          id: "x",
          name: "苹果"
        }]
      },
      {
        id: "x",
        onelist: "蔬菜",
        isOk: false,
        isShow: true,
        twolist: []
      },
      {
        id: "x",
        onelist: "水果",
        isOk: true,
        isShow: true,
        twolist: [{
          id: "a",
          name: "苹果"
        }, {
          id: "x",
          name: "苹果"
        }]
      },
    ],
    navRightItems: [{

        id: "xxx",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "34",
        status: true
      },
      {
        id: "xxx",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        status: false
      },
      {
        id: "xxx",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        status: false
      },
      {
        id: "xxx",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        status: false
      },
      {
        id: "xxx",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: "￥34",
        status: false
      }


    ],
    curIndex: 0,
    // 底部动画 
    chooseSize: false,
    animationData: {},

    cardesc: [{
      id: "ssss",
      title: "北京方便面",
      money: 12,
      number: 2
    }, ]




  },
  oneList: function (res) {
    var that = this

    console.log(res.currentTarget.dataset)
    var index = res.currentTarget.dataset.index
    var isT = this.data.listTitle[index].isShow
    var sItem = "listTitle[" + index + "].isShow";
    var len = this.data.listTitle.lenth
    console.log(len)

    that.setData({
      [sItem]: !this.data.listTitle[index].isShow,
      key: index
    })
    if (this.data.listTitle[index].isOk == true) {
      console.log('dddddd', this.data.listTitle[index].id)
      that.setData({
        typeId: this.data.listTitle[index].id
      })

      console.log('id不为空', this.data.typeId)
    } else {
      console.log('cccccc')
    }
    if (this.data.typeId != null) {
      console.log('id不为空')
    }

  },
  twoList: function (res) {
    var that = this
    console.log(res.currentTarget.dataset)
    var index1 = res.currentTarget.dataset

    that.setData({
      typeId: res.currentTarget.dataset.data.id
    })
    console.log("typeId", this.data.typeId)
    var url = app.globalData.urlIp + "goods/goodsInfo";
    var params = {
      typeId: this.data.typeId,
    }

    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = app.globalData.urlIp + "goods/goodsType";
    var params = {

    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);

  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "获取商品分类成功") {
      this.setData({
        listTitle: res.data.listTitle,
        navRightItems: res.data.navRightItems

      })
    } else if (res.msg == "获取商品信息成功") {
      console.log(res.data.navRightItems)
      this.setData({
        navRightItems: res.data.navRightItems

      })
    } else if (res.msg == "暂无商品信息") {
      this.setData({
        navRightItems: []
      })

      wx.showToast({
        title: '暂无改商品',
        icon: 'success',
        duration: 2000
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
  // 底部动画
  chooseSezi: function (e) {
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 500,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(200).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  hideModal: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export()

    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  },

})