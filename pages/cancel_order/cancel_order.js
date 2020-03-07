// pages/cancel_order/cancel_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    pointNumber:53,
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

  radioChange:function(e){
    console.log(e.detail.value)
  },

  conformCancel:function(){
    wx.showModal({
      title: '请确定是否取消',
      content: '订单取消后付款将返回原支付账户',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '取消成功！',
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 2
            })
          }, 1000)
        }
        else {
          return;
        }
      }
    })
  }
})