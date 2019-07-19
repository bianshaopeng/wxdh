// pages/category/index.js
var app = getApp();
var netUtil = require("../../utils/netUtils.js"); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeId:"",
    key:0,
    colors:[],
    fontColor: 'red',
    showtwo:true,
    listTitle: [
      { id: "x", onelist: "食品", isOk: true, isShow: true, twolist: [{ id: "x", name: "苹果" }, { id: "x", name: "苹果" }] },
      { id: "x",onelist: "蔬菜", isOk: false, isShow: true, twolist: [] },
      { id: "x",onelist: "水果", isOk: true, isShow: true, twolist: [{ id: "a", name: "苹果" }, { id: "x", name: "苹果" }] },
    ],
    navRightItems: [
      {
      
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
          id:"xxx",
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: false
        }
      

    ],
    curIndex: 0,


  },
  oneList:function(res){
    var that = this
    
    console.log(res.currentTarget.dataset)
    var index = res.currentTarget.dataset.index
    var isT = this.data.listTitle[index].isShow
    var sItem = "listTitle[" + index + "].isShow";
    var len = this.data.listTitle.lenth
    console.log(len)
    
         that.setData({
           [sItem]: !this.data.listTitle[index].isShow,
           key:index
         })
    if (this.data.listTitle[index].isOk==true){
      console.log('dddddd', this.data.listTitle[index].id)
      that.setData({
        typeId: this.data.listTitle[index].id
      })
    
      console.log('id不为空', this.data.typeId)
    }else{
      console.log('cccccc')
    }
    if (this.data.typeId!=null){
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
    var url = app.globalData.urlIp+"goods/goodsInfo";
    var params = {
      typeId: this.data.typeId,
    }

    netUtil.postRequest(url, params, this.onStart, this.onSuccess, this.onFailed); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = app.globalData.urlIp +"goods/goodsType";
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
    if (res.msg=="获取商品分类成功"){
    this.setData({
      listTitle: res.data.listTitle,
      navRightItems: res.data.navRightItems
      
    })
    } else if (res.msg == "获取商品信息成功"){
      console.log(res.data.navRightItems)
      this.setData({
        navRightItems: res.data.navRightItems

      })
    } else if (res.msg == "暂无商品信息"){
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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