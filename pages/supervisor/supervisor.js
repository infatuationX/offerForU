// pages/supervisor/supervisor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    separatorUrl: "/images/ui/arrow_separator_top.png",
    triangleFlag1: true,
    triangleFlag2: true,
    triangleFlag3: true,
    checkFlag:false,
    supervisor:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5e61c7c1de1f740be5968aa4/example/mock',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          supervisor:res.data,
        })
        console.log(that.data.supervisor.supervisor[0].name);
      }
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

  },

  searchButtonClick: function() {
    console.log("点击了");
  },

// 行业点击功能
  filterIndustry: function() {
    this.setData({
      separatorUrl: "/images/ui/arrow_separator_top.png",
      triangleFlag1: !this.data.triangleFlag1,
      triangleFlag2: true,
      triangleFlag3: true,
    })
    
  },
// 公司点击功能
  filterCompany: function() {
    this.setData({
      separatorUrl: "/images/ui/arrow_separator_middle.png",
      triangleFlag1: true,
      triangleFlag2: !this.data.triangleFlag2,
      triangleFlag3: true,
      separatorFlag: !this.data.separatorFlag,
    })
  },
  // 职级点击功能
  filterRank: function() {
    this.setData({
      separatorUrl: "/images/ui/arrow_separator_bottom.png",
      triangleFlag1: true,
      triangleFlag2: true,
      triangleFlag3: !this.data.triangleFlag3,
      separatorFlag: !this.data.separatorFlag,
    })
  },
  // 确定按钮
  conformClick:function(){
    this.setData({
      triangleFlag1: true,
      triangleFlag2: true,
      triangleFlag3: true,
      separatorFlag: true,
    })
  },
  // 取消按钮
  resetClick:function(){
    this.setData({
      checkFlag: false,
    })
  },
  passMove:function(){
    return;
  },

  // 页面跳转
  switchToInfoPage:function(){
    wx.navigateTo({
      url: '/pages/supervisor_info/supervisor_info',
    })
  }
})