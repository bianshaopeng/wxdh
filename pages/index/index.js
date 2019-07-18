// pages/index/index.js
var netUtil = require("../../utils/netUtils.js"); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: null,
    showAll: false,
    showSearch: true,
    hiddenName: false,
    ids:["a","b","c","d"],
    scorllId: "",
    informations: {
      code: 200,
      msg: "成功",
      adress: "门店地址",
      data: {
        top: [{
            id: "xxxxxxx",
            image: '../../images/banner1.png'
          },
          {
            id: "xxxxxxx",
            image: '../../images/banner2.png'
          },
          {
            id: "xxxxxxx",
            image: '../../images/banner3.png'
          },
          {
            id: "xxxxxxx",
            image: '../../images/banner4.png'
          }
        ],
        middle: [{
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"
          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          },
          {
            id: "xxxxxxx",
            image: '../../images/clessfiy1.jpg',
            text: "水果"

          }
        ],
        bottom: [{
            id: "a",
            title: "掌柜推荐",
            list: [{
                id: "xxxxxxx",
                image: "../../images/list1.jpg",
                title: "新疆薄皮核桃",
                standard: "500g",
                price: "￥34",
                price_smail: "￥00",
              },
              {
                id: "xxxxxxx",
                image: "../../images/list1.jpg",
                title: "新疆薄皮核桃",
                standard: "500g",
                price: "￥34",
                price_smail: "￥00",
              },
              {
                id: "xxxxxxx",
                image: "../../images/list1.jpg",
                title: "新疆薄皮核桃",
                standard: "500g",
                price: "￥34",
                price_smail: "￥00",
              }
            ]
          },
          {
            id: "b",
            title: "新人推荐",
            list: [{
              id: "xxxxxxx",
              image: "../../images/list1.jpg",
              title: "新疆薄皮核桃",
              standard: "500g",
              price: "￥34",
              price_smail: "￥45",
            }]
          },
          {
            id: "c",
            title: "新品手法",
            list: [{
              id: "xxxxxxx",
              image: "../../images/list1.jpg",
              title: "新疆薄皮核桃",
              standard: "500g",
              price: "￥34",
              price_smail: "#45",
            }]
          },
          {
            id: "d",
            title: "新人推荐",
            list: [{
              id: "xxxxxxx",
              image: "../../images/list1.jpg",
              title: "新疆薄皮核桃",
              standard: "500g",
              price: "$34",
              price_smail: "#45",
            }]
          }

        ]
      }

    },
    

  
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500

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
  typeClick: function(res){
    console.log(res.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../indextype/indextype?type=' + JSON.stringify(res.currentTarget.dataset.id),
    })
  },
  imgClick:function(res){
    console.log(res.currentTarget.dataset)
    wx.showToast({
      title:'添加购物车成功',
      icon: 'success',
      duration: 2000
    })
  },
  
  bindinput: function(e) {
    wx.navigateTo({
      url: '../search/search',
     
    })
  },
  detailsClick: function(){
    
  },
  click: function (e) {
    console.log('xxx')
    console.log(e.currentTarget.dataset)
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(userInfo)
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getLocation({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },

    })

    var url = "http://192.168.31.14:8080/f/index/home";
    var params = {
      Lan: "",
      Lon: 1,
      
    }

    netUtil.getRequest(url, params, this.onStart, this.onSuccess, this.onFailed); //调用get方法情就是户数
    
  },
  onStart: function () { //onStart回调
    wx.showLoading({
      title: '正在加载',
    })
  },
  onSuccess: function (res) { //onSuccess回调
  console.log(res)
    wx.hideLoading();
    this.setData({
      informations:res
      // jokeList: res.result.data //请求结果数据
    })
  },
  onFailed: function (msg) { //onFailed回调
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