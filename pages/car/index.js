// pages/car/index.js
var netUtil = require("../../utils/netUtils.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAll:true,
    counts:0,
    carselect:true,
    issettle:false,
    shopId:'',
    status: false,
    unselect: "../../images/unselected.png",
    select: "../../images/selected.png",
    cardesc:[],
     goods: [
     //  {
    //   image: "../../images/list1.jpg",
    //   title: "新疆薄皮核桃",
    //   standard: "500g",
    //   ischecked:true,
    //   shop: "来自XXXX店铺",
    //   price: 34,
    //   price_smail: "￥00",
    //   number: 1
    // }, {
    //     image: "../../images/list1.jpg",
    //     title: "新疆薄皮核桃",
    //     standard: "500g",
    //     ischecked: true,
    //     shop: "来自XXXX店铺",
    //     price: 34,
    //     price_smail: "￥00",
    //     number: 2
    //   }
    ],
 
     
   
    guess_like: [
      // {
      //   image: "../../images/list1.jpg",
      //   title: "新疆薄皮核桃",
      //   standard: "500g",
      //   price: 34,
      //   price_smail: "￥00",
      // },
      // {
      //   image: "../../images/list1.jpg",
      //   title: "新疆薄皮核桃",
      //   standard: "500g",
      //   price: 35,
      //   price_smail: "￥00",
      // },
      // {
      //   image: "../../images/list1.jpg",
      //   title: "新疆薄皮核桃",
      //   standard: "500g",
      //   price: 300,
      //   price_smail: "￥00",
      // }
    ]


  },

  selectClick:function(res){
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem = "goods[" + index + "].ischecked";
    that.setData({
      [sItem]: !this.data.goods[index].ischecked,
      selectAll:false
    })
    if (this.data.goods[index].ischecked==false){
      that.setData({
        counts: this.data.counts - this.data.goods[index].price * this.data.goods[index].number
      })
    }else{
      that.setData({
        counts: this.data.counts + this.data.goods[index].price * this.data.goods[index].number
      })
    }
  },
  addClick:function(res){
    this.data.carselect = false
    var that = this
    var index = res.currentTarget.dataset.index
    var sItem = "goods[" + index + "].number";
    if (this.data.goods[index].ischecked==true){
    that.setData({
      [sItem]: this.data.goods[index].number+1,
      counts : this.data.counts + this.data.goods[index].price
    })
  }
  },
  reduceClick: function (res) {
    this.data.carselect = false
    var that = this
    var index = res.currentTarget.dataset.index
    if (this.data.goods[index].ischecked == true){
    if (this.data.goods[index].number == 1 ){
      wx.showToast({
        title: '已经减到最小了',
        icon: 'fail',
        duration: 2000
      })
    }else{
      var sItem = "goods[" + index + "].number";
      that.setData({
        [sItem]: this.data.goods[index].number -1,
        counts: this.data.counts - this.data.goods[index].price
      })
    }
    }
  },
  allClick:function(){
    var that = this
    this.data.counts = 0;
    for (var i in this.data.goods) {
      var itemprice = this.data.goods[i].price
      var itemnumber = this.data.goods[i].number
      this.data.counts += itemprice * itemnumber
      var sItem = "goods[" + i + "].ischecked";
      if (this.data.goods[i].ischecked == false) {
      that.setData({
        [sItem]: !this.data.goods[i].ischecked,
      
      })
      }
     


    }
    console.log(this.data.counts)
    that.setData({
      counts: this.data.counts,
      selectAll:!this.data.selectAll,
    })
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

    
    

  
  },
  onShow:function(){
    this.data.money = 0;
   
    this.data.counts = 0;
    this.data.issettle = true
    var url = app.globalData.urlIp + "cart/shoppingCart";
    var params = {
      userId: wx.getStorageSync('userId'),
      shopId: wx.getStorageSync('shopId'),
    }
    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
  },
  onHide:function(){
    if (this.data.carselect == false && this.data.issettle == false) {
     
      var url = app.globalData.urlIp + "cart/addShoppingCart";
      var params = {
        userId: wx.getStorageSync('userId'),
        shopId: wx.getStorageSync('shopId'),
        idList: this.data.cardesc,
      }
      netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);
    }
  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
    console.log(res)
    wx.hideLoading();
    var that = this
    if (res.msg == "获取购物车信息成功"){
    this.setData({
      status: false,
      goods: res.data.goods,
      guess_like: res.data.guess_like

    })
      for (var i in this.data.goods) {
        var itemprice = this.data.goods[i].price
        var itemnumber = this.data.goods[i].number
        this.data.counts += itemprice * itemnumber
      }
      that.setData({
        counts: this.data.counts
      })
    } else if (res.msg == "购物车是空的"){
      this.setData({
        goods: [],
        // guess_like: res.data.guess_like,
        status:true

      })
    } else if (res.msg == "生成订单成功") {
      wx.navigateTo({
        url: '../settle/index?orderId=' + res.order,
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

  account(e) {
    var that = this
    
    for (var index in this.data.goods){
      if (this.data.goods[index].ischecked == true){
        var item = {
          id: this.data.goods[index].id,
          title: this.data.goods[index].title,
          money: this.data.goods[index].price,
          number: this.data.goods[index].number
        }
        that.setData({
          cardesc: this.data.cardesc.concat(item)
        })
        
      }
    }
    this.data.issettle = true
    var url = app.globalData.urlIp + "cart/addShoppingOrder";
    var params = {
      userId: wx.getStorageSync('userId'),
      shopId: wx.getStorageSync('shopId'),
      idList: this.data.cardesc,
    }
    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed);

    //let txt = e.currentTarget.dataset.txt
   
  }
  
})