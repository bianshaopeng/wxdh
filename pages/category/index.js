// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:0,
    colors:[],
    fontColor: 'red',
    showtwo:true,
    listTitle: [
      { onelist: "水果" ,isOk:true, isShow:true, twolist: [{ name: "苹果" }, { name: "苹果" }] },
      { onelist: "蔬菜", isOk: false, isShow: true, twolist: [] },
      { onelist: "水果", isOk: true, isShow: true, twolist: [{ name: "苹果" }, { name: "苹果" }] },
    ],
    navRightItems: [{
      title: '食品',
      desc: [{
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: true
        },
        {
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: false
        },
        {
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: false
        },
        {
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: false
        },
        {
          image: "../../images/cargoty.jpg",
          title: "新疆薄皮核桃",
          standard: "500g",
          price: "￥34",
          status: false
        }
      ]

    }],
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
  
    console.log(this.data.listTitle[index].isShow)
  },
  twoList: function (res) {
    var that = this
    console.log(res.currentTarget.dataset)
    var index1 = res.currentTarget.dataset.index1

    that.setData({
      key1: index1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  

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