// pages/indextype/indextype.js
var app = getApp();
var netUtil = require("../../utils/netUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    empty:true,
    height1: 100,
    moneys: 0,
    carselect: true,
    typeId: "",
    issettle: false,
    key: 0,
    index: 0,
    colors: [],
    fontColor: 'red',
    showtwo: true,
    cardesc: [

    ],
    navRightItems: [


    ],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,

    // 底部动画 
    chooseSize: false,
    animationData: {},

  },
  // 底部动画
  chooseSezi: function(e) {
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
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },
  hideModal: function(e) {
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
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  },

  //商品加
  addClick: function(res) {
    var that = this
    this.data.index = res.currentTarget.dataset.index
    this.data.userId = wx.getStorageSync('userId')
    if (this.data.userId == "") {
      wx.showModal({
        title: '提示',
        content: '是否去授权登录',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.switchTab({
              url: '/pages/me/me'
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }
    if (this.data.carselect == true) {
      var url = app.globalData.urlIp + "cart/balance";
      var params = {
        userId: wx.getStorageSync('userId'),
        shopId: wx.getStorageSync('shopId'),
      }
      netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    } else {
      var index = this.data.index
      var sItem = "navRightItems.[" + index + "].number";
      that.setData({
        [sItem]: this.data.navRightItems[index].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.navRightItems[index].id,
        title: this.data.navRightItems[index].title,
        money: this.data.navRightItems[index].price,
        number: this.data.navRightItems[index].number
      }
      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.navRightItems[index].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: parseFloat(this.data.moneys + this.data.cardesc[i].money)

          })

        }

      }
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + parseFloat(this.data.navRightItems[index].price * this.data.navRightItems[index].number)
        })
      }
    }



  },
  //商品减
  reduceClick: function(res) {
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem = "navRightItems.[" + index + "].number";
    that.setData({
      [sItem]: this.data.navRightItems[index].number - 1,
    })
    for (var i in this.data.cardesc) {
      if (this.data.cardesc[i].id === this.data.navRightItems[index].id) {
        if (this.data.navRightItems[index].number == 0) {
          console.log("等于0:" + i)
          that.setData({
            moneys: this.data.moneys - this.data.cardesc[i].money,
          })
          this.data.cardesc.splice(i, 1)
          that.setData({
            cardesc: this.data.cardesc,
          })

        } else {
          console.log(this.data.cardesc[i].number)
          console.log("不等于0")
          var sItem2 = "cardesc[" + i + "].number";
          that.setData({
            [sItem2]: this.data.cardesc[i].number - 1,
            moneys: this.data.moneys - this.data.cardesc[i].money
          })
        }

      }
    }
  },
  //购物车加
  addToast: function(res) {
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem2 = "cardesc[" + index + "].number";
    that.setData({
      [sItem2]: this.data.cardesc[index].number + 1,
      moneys: this.data.moneys + this.data.cardesc[index].money
    })
    for (var i in this.data.navRightItems) {
      if (this.data.cardesc[index].id == this.data.navRightItems[i].id) {
        var sItem3 = "navRightItems[" + i + "].number";
        that.setData({
          [sItem3]: this.data.cardesc[index].number
        })
      }
    }
  },
  //购物车减
  reduceToast: function(res) {
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem2 = "cardesc[" + index + "].number";
    that.setData({
      [sItem2]: this.data.cardesc[index].number - 1,
    })
    for (var i in this.data.navRightItems) {
      if (this.data.cardesc[index].id == this.data.navRightItems[i].id) {
        var sItem3 = "navRightItems[" + i + "].number";
        that.setData({
          [sItem3]: this.data.cardesc[index].number
        })
      }
    }
    if (this.data.cardesc[index].number > 0) {
      that.setData({

        moneys: this.data.moneys - this.data.cardesc[index].money
      })

    } else {
      that.setData({
        moneys: this.data.moneys - this.data.cardesc[index].money
      })
      this.data.cardesc.splice(index, 1)
      that.setData({
        cardesc: this.data.cardesc,
      })
    }
    if (this.data.cardesc.length < 1) {
      that.setData({
        carselect: true,
        height1: 100,
        chooseSize: false
      })
    }
  },
  //结算
  settle: function() {
    this.data.issettle = true
    this.setData({
      carselect: true,
      height1: 100,
      chooseSize: false
    })

    var url = app.globalData.urlIp + "cart/addOrder";
    var params = {
      userId: wx.getStorageSync('userId'),
      shopId: wx.getStorageSync('shopId'),
      idList: this.data.cardesc,
    }
    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.typeId);
    console.log(options.text);
    
    wx.setNavigationBarTitle({
      title: options.text
    }) 
    this.data.issettle == false
    var url = app.globalData.urlIp + "goods/goodsPidInfo";
    var params = {
      userId: wx.getStorageSync('userId'),
      shopId: wx.getStorageSync('shopId'),
      typeId: options.typeId
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    
   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    if (this.data.carselect == false && this.data.issettle == false) {
      this.setData({
        carselect: true,
        height1: 100,
        chooseSize: false
      })
      var url = app.globalData.urlIp + "cart/addShoppingCart";
      var params = {
        userId: wx.getStorageSync('userId'),
        shopId: wx.getStorageSync('shopId'),
        idList: this.data.cardesc,
      }
      netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onStart: function() { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function(res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "获取商品信息成功") {
      console.log(res.data.navRightItems)
      this.setData({
        navRightItems: res.data.navRightItems,
        empty:false

      })

    } else if (res.msg == "暂无商品信息") {
      this.setData({
        navRightItems: [],
        empty:true
      })
    } else if (res.msg == "生成订单成功") {
      wx.redirectTo({
        url: '../settle/index?orderId=' + res.order,
      })
      
    } else if (res.msg == "获取购物车成功") {
      this.setData({
        cardesc: res.cardesc
      })
      var that = this
      if (this.data.carselect == true) {
        that.setData({
          carselect: false,
          height1: 90,
        })
       
        for (var i in this.data.cardesc) {
          that.setData({
            moneys: this.data.moneys + this.data.cardesc[i].money * this.data.cardesc[i].number
          })
        }
      }
      var that = this;

      var index = this.data.index
      var sItem = "navRightItems.[" + index + "].number";
      that.setData({
        [sItem]: this.data.navRightItems[index].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.navRightItems[index].id,
        title: this.data.navRightItems[index].title,
        money: this.data.navRightItems[index].price,
        number: this.data.navRightItems[index].number
      }
      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.navRightItems[index].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: parseFloat(this.data.moneys + this.data.cardesc[i].money)

          })

        }

      }
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + parseFloat(this.data.navRightItems[index].price * this.data.navRightItems[index].number)
        })
      }
    } else if (res.msg == "购物车暂无数据") {
      this.setData({
        cardesc: []
      })
      var that = this
      if (this.data.carselect == true) {
        that.setData({
          carselect: false,
          height1: 90,
        })
        for (var i in this.data.cardesc) {
          that.setData({
            moneys: this.data.moneys + this.data.cardesc[i].money * this.data.cardesc[i].number
          })
        }
      }

      var index = this.data.index
      var sItem = "navRightItems.[" + index + "].number";
      that.setData({
        [sItem]: this.data.navRightItems[index].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.navRightItems[index].id,
        title: this.data.navRightItems[index].title,
        money: this.data.navRightItems[index].price,
        number: this.data.navRightItems[index].number
      }
      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.navRightItems[index].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: parseFloat(this.data.moneys + this.data.cardesc[i].money)

          })

        }

      }
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + parseFloat(this.data.navRightItems[index].price * this.data.navRightItems[index].number)
        })
      }
    }

  },
  onFailed: function(msg) { //onFailed回调
    wx.hideLoading();
    if (msg) {
      wx.showToast({
        title: msg,
      })
    }
  },
})