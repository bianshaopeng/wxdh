Page({
  data: {
    array: ['7天无理由退货', '仅退货'],
    index: 0,

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

})