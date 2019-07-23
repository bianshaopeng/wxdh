// pages/category/index.js
var app = getApp();
var netUtil = require("../../utils/netUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height1:100,
    moneys:0,
    carselect: true,
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

        id: "a",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: 34.00,
        number:0,
        status: true
      },
      {
        id: "b",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: 34.00,
        number: 0,
        status: false
      },
      {
        id: "c",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: 34.00,
        number: 0,
        status: false
      },
      {
        id: "d",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: 34.00,
        number: 0,
        status: false
      },
      {
        id: "e",
        image: "../../images/cargoty.jpg",
        title: "新疆薄皮核桃",
        standard: "500g",
        price: 34.00,
        number: 0,
        status: false
      }


    ],
    cardesc: [{
      id: "ssss",
      title: "北京方便面",
      money: 12,
      number: 2
    },],
    curIndex: 0,
    // 底部动画 
    chooseSize: false,
    animationData: {},

    cardesc: [
    //   {
    //   id: "ssss",
    //   title: "北京方便面",
    //   money: 12,
    //   number: 2
    // }, 
    ]
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
      userId:'1',
      shopId:'13',
    }

    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },

//商品加
  addClick:function(res){
    var that = this
    if (this.data.carselect == true) {
      that.setData({
        carselect: false,
        height1:90,
      })
      for (var i in this.data.cardesc) {
        that.setData({
          moneys: this.data.moneys + this.data.cardesc[i].money * this.data.cardesc[i].number
        })
      }
    }
    var index = res.currentTarget.dataset.index
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
   
  },
  //商品减
  reduceClick: function (res) {
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
  addToast: function (res) {
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
  reduceToast: function (res) {
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
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = app.globalData.urlIp + "goods/goodsType";
    var params = {
       userId:'1',
       shopId:'13'
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