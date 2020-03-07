// pages/supervisor_info/supervisor_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"OfferForU",
    starRank:[1,2,3,4,5],
    gudianceItem:[1,2,3]
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

  },

  // 指导项目跳转
  switchToOrderDetail:function(){
    wx.navigateTo({
      url: '/pages/order_info/order_info',
    })
  },

  switchToOrderFill:function(){
    wx.navigateTo({
      url: '/pages/order_fill/order_fill',
    })
  }
})