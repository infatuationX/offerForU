// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'OfferForU',
    inputFlag: false,
    inputFlag1: false,
    inputFlag2: false,
    inputFlag3: false,
    inputFlag4: false,
    inputFlag5: false,
    inputFlag6: false,
    inputFlag7: false,
    inputFlag8: false,
    inputFlag9: false,
    inputFlag10: false,
    inputFlag11: false,
    inputFlag12: false,
    inputFlag13:false,
    inputFlag14: false,
    focusFlag: false,
    focusFlag1: false,
    focusFlag2: false,
    focusFlag3: false,
    focusFlag4: false,
    focusFlag5: false,
    focusFlag6:false,
    focusFlag7: false,
    focusFlag11: false,
    focusFlag12: false,
    focusFlag13: false,
    focusFlag14: false,
    

    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    show2:false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    selectData: [],//下拉列表的数据
    index: 40,//选择的下拉列表下标
    service: ['请选择服务项目','咨询模拟面试加复盘', '咨询模拟面试', '面试', '项目4', '项目5', '项目6'],
    index2:0,
    index3: 0,
    index4: 0,
    index5: 0,
    index6: 0,
    index7: 0,
    serviceFlag3: true,
    serviceFlag4: true,
    serviceFlag5: true,
    serviceFlag6: true,
    serviceFlag7:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var yearsTemp = [];
    for(var i = 1980; i < 2026; i++){
      yearsTemp.push(i)
    }
    this.setData({
      selectData:yearsTemp,
    })
    console.log(this.data.selectData);
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
  inputOn:function(e){
    if(e.currentTarget.dataset.id == '0'){
      this.setData({
        inputFlag: true,
        focusFlag: true,
      })
    }
    if (e.currentTarget.dataset.id == '1') {
      this.setData({
        inputFlag1: true,
        focusFlag1: true,
      })
    }
    if (e.currentTarget.dataset.id == '2') {
      this.setData({
        inputFlag2: true,
        focusFlag2: true,
      })
    }
    if (e.currentTarget.dataset.id == '3') {
      this.setData({
        inputFlag3: true,
        focusFlag3: true,
      })
    }
    if (e.currentTarget.dataset.id == '4') {
      this.setData({
        inputFlag4: true,
        focusFlag4: true,
      })
    }
    if (e.currentTarget.dataset.id == '5') {
      this.setData({
        inputFlag5: true,
        focusFlag5: true,
      })
    }
    if (e.currentTarget.dataset.id == '6') {
      this.setData({
        inputFlag6: true,
        focusFlag6: true,
      })
    }
    if (e.currentTarget.dataset.id == '7') {
      this.setData({
        inputFlag7: true,
        focusFlag7: true,
      })
    }
    if (e.currentTarget.dataset.id == '8') {
      this.setData({
        inputFlag8: true,
      })
    }
    if (e.currentTarget.dataset.id == '9') {
      this.setData({
        inputFlag9: true,
      })
    }
    if (e.currentTarget.dataset.id == '10') {
      this.setData({
        inputFlag10: true,
      })
    }
    if (e.currentTarget.dataset.id == '11') {
      this.setData({
        inputFlag11: true,
        focusFlag11: true,
      })
    }
    if (e.currentTarget.dataset.id == '12') {
      this.setData({
        inputFlag12: true,
        focusFlag12: true,
      })
    }
    if (e.currentTarget.dataset.id == '13') {
      this.setData({
        inputFlag13: true,
        focusFlag13: true,
      })
    }
    if (e.currentTarget.dataset.id == '14') {
      this.setData({
        inputFlag14: true,
        focusFlag14: true,
      })
    }
  },
  inputOut:function(e){
    console.log(e.detail.value)
    if (e.detail.value == ''){
      this.setData({
        inputFlag: false,
      })
    }
  },
  inputOut1: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag1: false,
      })
    }
  },
   inputOut2: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag2: false,
      })
    }
  },
   inputOut3: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag3: false,
      })
    }
  },
   inputOut4: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag4: false,
      })
    }
  },
   inputOut5: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag5: false,
      })
    }
  },
   inputOut6: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag6: false,
      })
    }
  },
  inputOut7: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag7: false,
      })
    }
  },
  inputOut11: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag11: false,
      })
    }
  },
  inputOut12: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag12: false,
      })
    }
  },
  inputOut13: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag13: false,
      })
    }
  },
  inputOut14: function (e) {
    console.log(e.detail.value)
    if (e.detail.value == '') {
      this.setData({
        inputFlag14: false,
      })
    }
  },
  // 点击下拉显示框
  selectTap:function() {
    this.setData({
      show: !this.data.show
    });
  },

  selectTap2: function () {
    this.setData({
      show2: !this.data.show2,
    });
  },

  selectTap3: function () {
    this.setData({
      show3: !this.data.show3,
    });
  },

  selectTap4: function () {
    this.setData({
      show4: !this.data.show4,
    });
  },
  selectTap5: function () {
    this.setData({
      show5: !this.data.show5,
    });
  },
  selectTap6: function () {
    this.setData({
      show6: !this.data.show6,
    });
  },
  selectTap7: function () {
    this.setData({
      show7: !this.data.show7,
    });
  },
  // 点击下拉列表
  optionTap:function(e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: indexTemp,
      show: !this.data.show
    });
  },

  optionTap2: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index2: indexTemp,
      show2: !this.data.show2,
    });
  },

  optionTap3: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index3: indexTemp,
      show3: !this.data.show3,
    });
  },
  optionTap4: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index4: indexTemp,
      show4: !this.data.show4,
    });
  },
  optionTap5: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index5: indexTemp,
      show5: !this.data.show5,
    });
  },
  optionTap6: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index6: indexTemp,
      show6: !this.data.show6,
    });
  },
  optionTap7: function (e) {
    let indexTemp = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index7: indexTemp,
      show7: !this.data.show7,
    });
  },

  addServiceItem:function(){
    if(this.data.serviceFlag3 == true){
      this.setData({
       serviceFlag3:false,
      })
    }
    else if (this.data.serviceFlag3 == false && this.data.serviceFlag4 == true){
      this.setData({
        serviceFlag4: false,
      })
    }
    else if (this.data.serviceFlag4 == false && this.data.serviceFlag5 == true) {
      this.setData({
        serviceFlag5: false,
      })
    }
    else if (this.data.serviceFlag5 == false && this.data.serviceFlag6 == true) {
      this.setData({
        serviceFlag6: false,
      })
    }
    else if (this.data.serviceFlag6 == false && this.data.serviceFlag7 == true) {
      this.setData({
        serviceFlag7: false,
      })
    }
  }
})