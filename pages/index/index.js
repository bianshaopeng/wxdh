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
    carselect: true,
    inputValue: null,
    showAll: false,
    showSearch: true,
    hiddenName: false,
    selectgoogs: [],
    shopId: 0,
    ids: ["a", "b", "c", "d"],
    scorllId: "",
    titles: [{
      text: "掌柜推荐",
      image: '../../images/four_btn1.png'
    }, {
      text: "新人特惠",
      image: '../../images/four_btn2.png'
    }, {
      text: "限时抢购",
      image: '../../images/four_btn3.png'
    }, {
      text: "新品首发",
      image: '../../images/four_btn4.png'
    }],
    informations: {
      "shopId": 2,
      "code": 200,
      "msg": "首页获取成功",
      "address": "甘肃省兰州市安宁区安宁西路88号",
      "data": {
        "top": [{
            "id": 7,
            "image": "http://www.youke001.cn/banner/banner1.png"
          },
          {
            "id": 8,
            "image": "http://www.youke001.cn/banner/banner2.png"
          },
          {
            "id": 3,
            "image": "http://www.youke001.cn/banner/banner3.png"
          },
          {
            "id": 4,
            "image": "http://www.youke001.cn/banner/banner4.png"
          }
        ],
        "bottom": [{
            "id": 1,
            "title": "掌柜推荐",
            "image": "http://www.youke001.cn/market_nav/nav_zgtj@2x.png",
            "list": [{
                "id": 2,
                "price_smail": 20,
                "price": 17,
                "title": "可口可乐",
                "standard": "500ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/kkkl.png"
              },
              {
                "id": 1,
                "price_smail": 10,
                "price": 8,
                "title": "百事可乐",
                "standard": "500ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/bskl.png"
              },
              {
                "id": 3,
                "price_smail": 30,
                "price": 25,
                "title": "雪碧",
                "standard": "500ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/xb.png"
              },
              {
                "id": 4,
                "price_smail": 40,
                "price": 43,
                "title": "美年达",
                "standard": "200ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/mnd.png"
              }
            ]
          },
          {
            "id": 2,
            "title": "新人特惠",
            "image": "http://www.youke001.cn/market_nav/nav_xrth@2x.png",
            "list": [{
                "id": 6,
                "price_smail": 6,
                "price": 5.8,
                "title": "可比克",
                "standard": "200g",
                "number": 0,
                "image": "http://www.youke001.cn/goods/sp.png"
              },
              {
                "id": 7,
                "price_smail": 16,
                "price": 15.2,
                "title": "乐事薯片",
                "standard": "300g",
                "number": 0,
                "image": "http://www.youke001.cn/goods/lssp.png"
              },
              {
                "id": 8,
                "price_smail": 26,
                "price": 25.3,
                "title": "乐事米饼",
                "standard": "100g",
                "number": 0,
                "image": "http://www.youke001.cn/goods/lsmb.png"
              }
            ]
          },
          {
            "id": 3,
            "title": "限时抢购",
            "image": "http://www.youke001.cn/market_nav/nav_xsqg@2x.png",
            "list": [{
                "id": 5,
                "price_smail": 33,
                "price": 32.1,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 3,
                "price": 2.8,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 23,
                "price": 22.5,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 13,
                "price": 12.9,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              }
            ]
          },
          {
            "id": 4,
            "title": "新品首发",
            "image": "http://www.youke001.cn/market_nav/nav_zgtj@2x.png",
            "list": [{
                "id": 5,
                "price_smail": 350,
                "price": 310,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 50,
                "price": 48,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 250,
                "price": 225,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 450,
                "price": 408,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              },
              {
                "id": 5,
                "price_smail": 150,
                "price": 140,
                "title": "悦动力",
                "standard": "300ml",
                "number": 0,
                "image": "http://www.youke001.cn/goods/ydl.png"
              }
            ]
          }
        ],
        "middle": [{
            "id": 3,
            "text": "方便食品",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563446201742&di=58e06bb06b73438774a673303b8dddb1&imgtype=0&src=http%3A%2F%2Fimg006.hc360.cn%2Fg2%2FM05%2FBE%2FA5%2FwKhQuFMLC42EbwCIAAAAACZERCU550.jpg"
          },
          {
            "id": 4,
            "text": "牛奶面包",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563446216074&di=c38b0a794b3daed3d78a2ce7fb8269a2&imgtype=0&src=http%3A%2F%2Fimg9.house365.com%2Fwhbbsuserpic%2F2011%2F11%2F16%2F13214517724ec3c0fc7972b.jpg"
          },
          {
            "id": 5,
            "text": "日用百货",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563446233436&di=fe2126e033b5808bf88f4712ef625769&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F16%2FB5%2FwKhQh1WJg4eEUiEwAAAAABWgaxI418.jpg"
          },
          {
            "id": 6,
            "text": "薯片米饼",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563445756432&di=69e2d8f967204d7ee57d5857a83b3c29&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fi2%2F766814067%2FTB2i9QRgFXXXXb2XXXXXXXXXXXX_%2521%2521766814067.jpg"
          },
          {
            "id": 7,
            "text": "海产小食",
            "image": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1476146237,2359950689&fm=26&gp=0.jpg"
          },
          {
            "id": 8,
            "text": "糖果果冻",
            "image": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1090263007,300138690&fm=15&gp=0.jpg"
          },
          {
            "id": 9,
            "text": "坚果炒货",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563445909713&di=77f5457f6c79654ed0fe696b85d6af37&imgtype=0&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2016%2F0412%2F22120113509.jpg"
          },
          {
            "id": 10,
            "text": "素食零食",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564040647&di=c795e3e856f2115ed886d2ff8c4db5c7&imgtype=jpg&er=1&src=http%3A%2F%2Fg-search1.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4i1%2FTB1FysSHpXXXXbYXpXXXXXXXXXX_%21%211-item_pic.gif_310x310.jpg"
          },
          {
            "id": 11,
            "text": "鸡鸭卤味",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563445949657&di=306564c3cd26584cd99fcbc6b8801002&imgtype=0&src=http%3A%2F%2Fimg14.360buyimg.com%2Fn7%2Fs186x186_jfs%2Ft1%2F23092%2F39%2F2751%2F229506%2F5c208dc9E1fe85950%2F15b65ba11d42ede9.jpg"
          },
          {
            "id": 12,
            "text": "功能饮料",
            "image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563446001832&di=c7c35bfb05317c3dc994fe0b0457396c&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Ffinance%2Fpics%2Fhv1%2F42%2F218%2F1382%2F89920182.jpg"
          }
        ]
      }
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


  barClick1: function() {
    this.setData({
      scorllId: "a"
    })

  },
  barClick2: function() {
    this.setData({
      scorllId: "b"
    })

  },
  barClick3: function() {
    this.setData({
      scorllId: "c"
    })

  },
  barClick4: function() {
    this.setData({
      scorllId: "d"
    })
  },
  //分类
  typeClick: function(res) {
    console.log(res.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../indextype/indextype?type=' + JSON.stringify(res.currentTarget.dataset.id),
    })
  },
  imgClick: function(res) {
    console.log(res.currentTarget.dataset)
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 2000
    })
  },

  bindinput: function(e) {
    wx.navigateTo({
      url: '../search/search',

    })
  },
  detailsClick: function() {

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

  //加数量
  addClick: function(res) {
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
  reduceClick: function(res) {
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
  addToast: function(res) {
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
  reduceToast: function(res) {
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
  settle: function() {
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

    var that = this
    wx.getLocation({
      success: function(res) {
        console.log(res)
        var url = app.globalData.urlIp + "/index/homepage";
        var params = {
          lat: res.latitude,
          lon: res.longitude,

        }

        netUtil.getRequest(url, params, that.onStart, that.onSuccess, that.onFailed);
      },
      fail: function(res) {
        console.log(res)
      },

    })

  },
  onStart: function() { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function(res) { //onSuccess回调
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
        url: '../settle/index?orderId=' + res.order,
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
  onFailed: function(msg) { //onFailed回调
    wx.hideLoading();
    if (msg) {
      wx.showToast({
        title: msg,
      })
    }
  },
  click: function(e) {
    this.setData({

      hiddenName: !this.data.hiddenName
    })
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
    if (this.data.carselect == false) {
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
onUnload: function() {

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

}
})