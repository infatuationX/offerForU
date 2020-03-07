// pages/order_fill/order_fill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeSelected:[],
    timeFlag:true,
    textareaFlag:true,
    buttonFlag:true,
    uploadImage: [],
    tempFilePaths: '',
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
    console.log(this.data.timeSelected);
    var timeSlot = wx.getStorageSync('timeSelected');
    this.setData({
      timeSelected: timeSlot,
    })

    if (this.data.timeSelected != '') {
      this.setData({
        timeFlag: false,
      })
    }

    if (this.data.timeFlag == false && this.data.textareaFlag == false) {
      this.setData({
        buttonFlag: false,
      })
    }
    else {
      this.setData({
        buttonFlag: true,
      })
    }
    
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

  // 提交订单

  submitOrder:function(){
    if (this.data.timeFlag == false && this.data.textareaFlag == false){
      wx.navigateTo({
        url: '/pages/order_pay/order_pay',
      })
    }
    else{
      return;
    }
  },

  judgeInput:function(e){
    if(e.detail.value != ""){
      this.setData({
        textareaFlag: false,
      })
    }
    else{
      this.setData({
        textareaFlag: true,
      })
    }
    
    if (this.data.timeFlag == false && this.data.textareaFlag == false) {
      this.setData({
        buttonFlag: false,
      })
    }
    else {
      this.setData({
        buttonFlag: true,
      })
    }
    console.log(e.detail.value)
    console.log(this.data.textareaFlag)
  },

  // 上传照片

  uploadImage:function(){
    var that = this;
    var uploadImage = this.data.uploadImage;
    if (that.data.uploadImage.length == 2) {
      wx.showModal({
        title: '提示',
        content: '最多选择两张简历照片',
      })
      return;
    }
    wx.chooseImage({
      count: 2 - that.data.uploadImage.length,
      success: function (res) {
        const tempFilePath = res.tempFilePaths;
        for (var i = 0; i < tempFilePath.length; i++) {
          var tmp = tempFilePath[i];
          uploadImage.push(tmp);
        }
        that.setData({
          uploadImage: uploadImage
        }),
          console.log(uploadImage);
      }
    })
    
  },

  previewImage: function (e) {
    var currentImg = e.currentTarget.dataset.imgsrc;
    console.log(currentImg);
    wx.previewImage({
      current: currentImg,
      urls: this.data.uploadImage,
    })
    console.log(this.data.uploadImage);
  },

  //图片删除
  deleteImage: function (e) {
    var that = this;
    var uploadImage = that.data.uploadImage;
    var currentImg = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确认要删除此图片吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          uploadImage.splice(currentImg, 1);
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
        that.setData({
          uploadImage
        });
      }
    })
  }
})