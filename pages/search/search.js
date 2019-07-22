// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informations1: {
      code: 200,
      msg: "成功",
      adress: "门店地址",
      data: [{
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
  bindfocuClick: function () {

    this.setData({
      showAll: true,
      showSearch: false
    })

  },
  bindconfirmClick() {
    console.log('点击了搜索');
  },
  closeClick: function () {
    this.setData({
      showAll: false,
      showSearch: true,
      inputValue: '',
      informations1: ""
    })
  },
  bindinput: function (e) {
    var value = e.detail.value;
    console.log(value)
    if (value != null) {
      console.log('1')
    } else {
      console.log('2')
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