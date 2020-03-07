// pages/user_order_info/user_order_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeSelected: ['2020.1.20 [12:00-13:00]', '2020.1.20 [12:00-13:00]', '2020.1.20 [12:00-13:00]', '2020.1.20 [12:00-13:00]'],
    pointNumber:52,
    rejectFlag:false,
    conformFlag:false,
    zoomLink:'https://zoom.com.cn/meeting/rooms',
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

  switchToCancelOrder:function(){
    wx.navigateTo({
      url: '/pages/cancel_order/cancel_order',
    })
  },

  //长按复制会议连接
  copyLink:function(){
    var text = this.data.zoomLink;
    wx.setClipboardData({
      data: text,
      success:function(){
        wx.showToast({
          title: '复制成功！',
        })
      }
    })
  }
})