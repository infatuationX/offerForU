// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starRank: 5,
    starFlag1: true,
    starFlag2: true,
    starFlag3: true,
    starFlag4: true,
    starFlag5: true,
    starFlag6: true,
    starFlag7: true,
    starFlag8: true,
    starFlag9: true,
    starFlag10: true,
    starFlag11: true,
    starFlag12: true,
    starFlag13: true,
    starFlag14: true,
    starFlag15: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  },

  switchToUserOrder: function() {
    wx.showToast({
      title: '提交成功',
      success: function() {
        setTimeout(function() {
          wx.navigateBack({
            delta: 2,
          })
        }, 1000)
      }
    })
  },

  rank: function(e) {
    console.log(e.currentTarget.dataset.index)
    if (e.currentTarget.dataset.index == 1) {
      this.setData({
        starFlag1: false,
        starFlag2: true,
        starFlag3: true,
        starFlag4: true,
        starFlag5: true,
      })
    }
    if (e.currentTarget.dataset.index == 2) {
      this.setData({
        starFlag1: false,
        starFlag2: false,
        starFlag3: true,
        starFlag4: true,
        starFlag5: true,
      })
    }
    if (e.currentTarget.dataset.index == 3) {
      this.setData({
        starFlag1: false,
        starFlag2: false,
        starFlag3: false,
        starFlag4: true,
        starFlag5: true,
      })
    }
    if (e.currentTarget.dataset.index == 4) {
      this.setData({
        starFlag1: false,
        starFlag2: false,
        starFlag3: false,
        starFlag4: false,
        starFlag5: true,
      })
    }
    if (e.currentTarget.dataset.index == 5) {
      this.setData({
        starFlag1: false,
        starFlag2: false,
        starFlag3: false,
        starFlag4: false,
        starFlag5: false,
      })
    }
    if (e.currentTarget.dataset.index == 6) {
      this.setData({
        starFlag6: false,
        starFlag7: true,
        starFlag8: true,
        starFlag9: true,
        starFlag10: true,
      })
    }
    if (e.currentTarget.dataset.index == 7) {
      this.setData({
        starFlag6: false,
        starFlag7: false,
        starFlag8: true,
        starFlag9: true,
        starFlag10: true,
      })
    }
    if (e.currentTarget.dataset.index == 8) {
      this.setData({
        starFlag6: false,
        starFlag7: false,
        starFlag8: false,
        starFlag9: true,
        starFlag10: true,
      })
    }
    if (e.currentTarget.dataset.index == 9) {
      this.setData({
        starFlag6: false,
        starFlag7: false,
        starFlag8: false,
        starFlag9: false,
        starFlag10: true,
      })
    }
    if (e.currentTarget.dataset.index == 10) {
      this.setData({
        starFlag6: false,
        starFlag7: false,
        starFlag8: false,
        starFlag9: false,
        starFlag10: false,
      })
    }
    if (e.currentTarget.dataset.index == 11) {
      this.setData({
        starFlag11: false,
        starFlag12: true,
        starFlag13: true,
        starFlag14: true,
        starFlag15: true,
      })
    }
    if (e.currentTarget.dataset.index == 12) {
      this.setData({
        starFlag11: false,
        starFlag12: false,
        starFlag13: true,
        starFlag14: true,
        starFlag15: true,
      })
    }
    if (e.currentTarget.dataset.index == 13) {
      this.setData({
        starFlag11: false,
        starFlag12: false,
        starFlag13: false,
        starFlag14: true,
        starFlag15: true,
      })
    }
    if (e.currentTarget.dataset.index == 14) {
      this.setData({
        starFlag11: false,
        starFlag12: false,
        starFlag13: false,
        starFlag14: false,
        starFlag15: true,
      })
    }
    if (e.currentTarget.dataset.index == 15) {
      this.setData({
        starFlag11: false,
        starFlag12: false,
        starFlag13: false,
        starFlag14: false,
        starFlag15: false,
      })
    }
  }
})