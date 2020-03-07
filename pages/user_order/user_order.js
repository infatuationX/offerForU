// pages/user_order/user_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conformOrderNumber:5,
    onGoingOrderNumber: 0,
    completeOrderNumber: 1,
    status1:true,
    status2: false,
    status3: false,
    hiddenFlag:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.conformOrderNumber == 0) {
      this.setData({
        hiddenFlag: false,
      })
    }
    else {
      this.setData({
        hiddenFlag: true,
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

  },

  statusClick1:function(){
    if (this.data.status1 == true){
      return
    }
    else{
      this.setData({
        status1:true,
        status2:false,
        status3:false,
      })
    }
    if(this.data.conformOrderNumber == 0){
      this.setData({
        hiddenFlag:false,
      })
    }
    else{
      this.setData({
        hiddenFlag: true,
      })
    }
  },
  statusClick2: function () {
    if (this.data.status2 == true) {
      return
    }
    else {
      this.setData({
        status1: false,
        status2: true,
        status3: false,
      })
    }
    if (this.data.onGoingOrderNumber == 0) {
      this.setData({
        hiddenFlag: false,
      })
    }
    else {
      this.setData({
        hiddenFlag: true,
      })
    }
  },

  statusClick3: function () {
    if (this.data.status3 == true) {
      return
    }
    else {
      this.setData({
        status1: false,
        status2: false,
        status3: true,
      })
    }

    if (this.data.completeOrderNumber == 0) {
      this.setData({
        hiddenFlag: false,
      })
    }
    else {
      this.setData({
        hiddenFlag: true,
      })
    }
  },

  switchToUserOrderInfo:function(){
    wx.navigateTo({
      url: '/pages/user_order_info/user_order_info',
    })
  },

  switchToUserOrderComplete:function(){
    wx.navigateTo({
      url: '/pages/user_order_complete/user_order_complete',
    })
  }
})