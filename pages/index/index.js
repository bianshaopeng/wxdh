// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: null,
    showAll: false,
    showSearch: true,
    hiddenName: true,
    scorllId: "a",
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

  bindfocuClick: function() {

    this.setData({
      showAll: true,
      showSearch: false
    })

  },
  bindconfirmClick() {
    console.log('点击了搜索');
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
  closeClick: function() {
    this.setData({
      showAll: false,
      showSearch: true,
      inputValue: ''
    })
  },
  bindinput: function(e) {
    var value = e.detail.value;
    console.log(value)
    if (value != null) {
      console.log('1')
    } else {
      console.log('2')
    }
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