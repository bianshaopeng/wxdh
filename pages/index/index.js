// pages/index/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    height1: 100,
    moneys: 0,
    index: 0,
    index1: 0,
    issettle: false,
    carselect: true,
    inputValue: null,
    showAll: false,
    showSearch: true,
    hiddenName: false,
    selectgoogs: [],
    shopId: 0,
    ids: ["a", "b", "c", "d"],
    scorllId: "",
    informations: {


    },



    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,

    // 底部动画 
    chooseSize: false,
    animationData: {},

    cardesc: [

    ]

  },


  barClick1: function () {
    this.setData({
      scorllId: "a"
    })

  },
  barClick2: function () {
    this.setData({
      scorllId: "b"
    })

  },
  barClick3: function () {
    this.setData({
      scorllId: "c"
    })

  },
  barClick4: function () {
    this.setData({
      scorllId: "d"
    })
  },
  //分类
  typeClick: function (res) {
    console.log(res.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../indextype/indextype?typeId=' + res.currentTarget.dataset.id.id + '&text=' + res.currentTarget.dataset.id.text,
    })
  },
  imgClick: function (res) {
    console.log(res.currentTarget.dataset)
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 2000
    })
  },

  bindinput: function (e) {
    wx.navigateTo({
      url: '../search/search',

    })
  },
  detailsClick: function () {

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

  //加数量
  addClick: function (res) {
    var that = this
    this.data.index = res.currentTarget.dataset.index
    //内层index
    this.data.index1 = res.currentTarget.dataset.item
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
        shopId: this.data.shopId,
      }

      netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    } else {
      var index = this.data.index
      var index1 = this.data.index1
      var sItem = "informations.data.bottom[" + index + "].list[" + index1 + "].number";
      that.setData({
        [sItem]: this.data.informations.data.bottom[index].list[index1].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.informations.data.bottom[index].list[index1].id,
        image: this.data.informations.data.bottom[index].list[index1].image,
        title: this.data.informations.data.bottom[index].list[index1].title,
        money: this.data.informations.data.bottom[index].list[index1].price,
        number: this.data.informations.data.bottom[index].list[index1].number
      }

      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.informations.data.bottom[index].list[index1].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: this.data.moneys + this.data.cardesc[i].money
          })
        }
      }

      console.log(iscun)
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + this.data.informations.data.bottom[index].list[index1].price * this.data.informations.data.bottom[index].list[index1].number
        })
      }
    }


  },

  //减数量
  reduceClick: function (res) {
    var that = this
    //外层index
    var index = res.currentTarget.dataset.index
    console.log(index)
    //内层index1
    var index1 = res.currentTarget.dataset.item
    console.log(index1)
    var sItem = "informations.data.bottom[" + index + "].list[" + index1 + "].number";
    that.setData({
      [sItem]: this.data.informations.data.bottom[index].list[index1].number - 1.

    })
    for (var i in this.data.cardesc) {
      if (this.data.cardesc[i].id === this.data.informations.data.bottom[index].list[index1].id) {
        if (this.data.informations.data.bottom[index].list[index1].number == 0) {
          that.setData({
            moneys: this.data.moneys - this.data.cardesc[i].money,
          })
          this.data.cardesc.splice(i, 1)
          that.setData({
            cardesc: this.data.cardesc,
          })

        } else {
          console.log(this.data.cardesc[i].number)
          var sItem2 = "cardesc[" + i + "].number";
          that.setData({
            [sItem2]: this.data.cardesc[i].number - 1,
            moneys: this.data.moneys - this.data.cardesc[i].money
          })
        }

      }
    }
  },
  addToast: function (res) {
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem2 = "cardesc[" + index + "].number";
    that.setData({
      [sItem2]: this.data.cardesc[index].number + 1,
      moneys: this.data.moneys + this.data.cardesc[index].money
    })
    for (var i in this.data.informations.data.bottom) {
      for (var j in this.data.informations.data.bottom[i].list) {
        if (this.data.cardesc[index].id == this.data.informations.data.bottom[i].list[j].id) {
          var sItem3 = "informations.data.bottom[" + i + "].list[" + j + "].number";
          that.setData({
            [sItem3]: this.data.cardesc[index].number
          })
        }
      }
    }
  },
  reduceToast: function (res) {
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem2 = "cardesc[" + index + "].number";
    that.setData({
      [sItem2]: this.data.cardesc[index].number - 1,
    })
    console.log(this.data.cardesc[index].number)
    for (var i in this.data.informations.data.bottom) {
      for (var j in this.data.informations.data.bottom[i].list) {
        if (this.data.cardesc[index].id == this.data.informations.data.bottom[i].list[j].id) {
          var sItem3 = "informations.data.bottom[" + i + "].list[" + j + "].number";
          that.setData({
            [sItem3]: this.data.cardesc[index].number
          })
        }
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
  settle: function () {
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
  onLoad: function (options) {



  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    if (res.msg == "首页获取成功") {
      this.data.shopId = res.shopId
      this.setData({
        informations: res,
      })
      wx.setStorage({
        key: 'shopId',
        data: this.data.shopId,
      })

      //调用get方法情就是户数
    } else if (res.msg == "生成订单成功") {
      wx.navigateTo({
        url: '../settle/index?orderId=' + `res.order,`
      })
    } else if (res.msg == "获取购物车成功") {

      var that = this
      this.setData({
        cardesc: res.cardesc
      })
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
      var index1 = this.data.index1
      var sItem = "informations.data.bottom[" + index + "].list[" + index1 + "].number";
      that.setData({
        [sItem]: this.data.informations.data.bottom[index].list[index1].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.informations.data.bottom[index].list[index1].id,
        image: this.data.informations.data.bottom[index].list[index1].image,
        title: this.data.informations.data.bottom[index].list[index1].title,
        money: this.data.informations.data.bottom[index].list[index1].price,
        number: this.data.informations.data.bottom[index].list[index1].number
      }

      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.informations.data.bottom[index].list[index1].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: this.data.moneys + this.data.cardesc[i].money
          })
        }
      }

      console.log(iscun)
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + this.data.informations.data.bottom[index].list[index1].price * this.data.informations.data.bottom[index].list[index1].number
        })
      }

    } else if (res.msg == "购物车暂无数据") {
      var that = this
      this.setData({
        cardesc: []
      })
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
      var index1 = this.data.index1
      var sItem = "informations.data.bottom[" + index + "].list[" + index1 + "].number";
      that.setData({
        [sItem]: this.data.informations.data.bottom[index].list[index1].number + 1,
      })
      var iscun = false;
      var item = {
        id: this.data.informations.data.bottom[index].list[index1].id,
        image: this.data.informations.data.bottom[index].list[index1].image,
        title: this.data.informations.data.bottom[index].list[index1].title,
        money: this.data.informations.data.bottom[index].list[index1].price,
        number: this.data.informations.data.bottom[index].list[index1].number
      }

      for (var i in this.data.cardesc) {
        if (this.data.cardesc[i].id === this.data.informations.data.bottom[index].list[index1].id) {
          iscun = true;
          var sItem1 = "cardesc[" + i + "].number";
          that.setData({
            [sItem1]: this.data.cardesc[i].number + 1,
            moneys: this.data.moneys + this.data.cardesc[i].money
          })
        }
      }

      console.log(iscun)
      if (iscun == false) {
        that.setData({
          cardesc: this.data.cardesc.concat(item),
          moneys: this.data.moneys + this.data.informations.data.bottom[index].list[index1].price * this.data.informations.data.bottom[index].list[index1].number
        })
      }
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
  click: function (e) {
    this.setData({

      hiddenName: !this.data.hiddenName
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
    this.data.issettle = false
    var that = this


    wx.getLocation({
      success: function (res) {
        console.log(res)
        var url = app.globalData.urlIp + "/index/homepage";
        var params = {
          lat: res.latitude,
          lon: res.longitude,
          userId: wx.getStorageSync('userId')

        }

        netUtil.getRequest(url, params, that.onStart, that.onSuccess, that.onFailed);
      },
      fail: function (res) {
        console.log(res)
      },

    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
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