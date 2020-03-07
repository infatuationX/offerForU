// pages/time_pick/time_pick.js

const app = getApp();
var startX, endX;
var startY,endY;
var moveFlag = true;// 判断执行滑动事件
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    dateAll: [],
    selected: [
      [false, false, false, false, false, false, false, false, false, false, false, false,],
      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,]
    ],
    selectTimeFlag: 0,
    day: [{ id: 0, date: 1 }, { id: 1, date: 2 }, { id: 2, date: 3 }, { id: 3, date: 4 }, { id: 4, date: 5 }, { id: 5, date: 6 }, { id: 6, date: 7 }, { id: 7, date: 8 }, { id: 8, date: 9 }, { id: 9, date: 10 }, { id: 10, date: 11 }, { id: 11, date: 12 }],
    slot: [{ id: 0, time: ' [08:00-09:00]' }, { id: 1, time: ' [09:00-10:00]' }, { id: 2, time: ' [10:00-11:00]' }, { id: 3, time: ' [11:00-12:00]' }, { id: 4, time: ' [12:00-13:00]' }, { id: 5, time: ' [13:00-14:00]' }, { id: 6, time: ' [14:00-15:00]' }, { id: 7, time: ' [15:00-16:00]' }, { id: 8, time: ' [16:00-17:00]' }, { id: 9, time: ' [17:00-18:00]' }, { id: 10, time: ' [18:00-19:00]' }, { id: 11, time: ' [19:00-20:00]' }, { id: 12, time: ' [20:00-21:00]' }, { id: 13, time: ' [21:00-22:00]' }, { id: 14, time: ' [22:00-23:00]' }, { id: 15, time: ' [23:00-24:00]' }],
    dayTemp:[],
    slotTemp:[],
    page: 1,
    ani1: '',
    ani2: '',
    ani3: '',
    ani4: '',
    ani5: '',
    ani6: '',
    timeSelected:[],
    pageTemp:0,
    page1:1,
    page2: 2,
    page3: 3,
    aniFlag:true,
    moreTimeFlag:false,
    rightNum:0,
    disabled: [[false, false, true, false, false, false, false, false, false, false, false, false,],
      [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, true, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var util = require("../../utils/util.js");
    let time = util.formatDate(new Date());
    let date = util.getDates(13, time);
    console.log(date);
    this.setData({
      dateAll: date,
    })
    var systemInfo = wx.getSystemInfoSync();
    var windowHeight = systemInfo.windowHeight - 100;
    var windowWidth = systemInfo.windowWidth;
    console.log(windowWidth);
    var query = wx.createSelectorQuery();    //选择id
    var that = this;
    query.select('#lastTime').boundingClientRect(function (rect) {
      if (rect.top < windowHeight && rect.top > 0) {
        that.setData({
          moreTimeFlag: true,
        })
      }
      else {
        that.setData({
          moreTimeFlag: false,
        })
      }
    }).exec()
    query.select('#calendar').boundingClientRect(function (rect) {
      var right = windowWidth - rect.right;
      console.log(right)
      that.setData({
        rightNum: right,
      })
    }).exec()
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

  // 时间选择
  date_select: function(e) {
    if (this.data.selected[e.currentTarget.dataset.row - 1][e.currentTarget.dataset.column - 1] == true) {
      var selectTime = this.data.selected;
      selectTime[e.currentTarget.dataset.row - 1][e.currentTarget.dataset.column - 1] = false;
      var timeFlag = this.data.selectTimeFlag;
      timeFlag -= 1;
      this.setData({
        selected: selectTime,
        selectTimeFlag: timeFlag,
      })
      console.log(this.data.selectTimeFlag)
      return;
    } else {
      var timeFlag = 0;
      for (var i = 0; i < this.data.selected.length; i++) {
        for (var j = 0; j < this.data.selected[i].length; j++) {
          if (this.data.selected[i][j] == true) {
            timeFlag += 1;
            this.setData({
              selectTimeFlag: timeFlag,
            })
          }
        }
      }
    }
    if (this.data.selectTimeFlag == 5) {
      wx.showModal({
        title: '提示',
        content: '最多只能选5个时间哦',
      })
      this.setData({
        selectTimeFlag: 4,
      })
    } else {
      var selectTime = this.data.selected;
      selectTime[e.currentTarget.dataset.row - 1][e.currentTarget.dataset.column - 1] = true;
      this.setData({
        selected: selectTime,
      })
    }
    console.log(this.data.selectTimeFlag)
  },

  // 提交时间选择
  conformSelect: function() {
    var daySelectedTemp = [];
    var slotSelectedTemp = [];
    var timeSelectedConform = [];
    if (this.data.selectTimeFlag < 2) {
      return;
    } else {
      console.log('提交啦！');
      this.data.timeSlot = [];
      this.data.timeSelected = [];
      this.data.dayTemp = [];
      this.data.slotTemp = [];
      for (var i = 0; i < this.data.selected.length; i++) {
        for (var j = 0; j < this.data.selected[j].length; j++) {
          if (this.data.selected[i][j] == true) {
            this.data.dayTemp.push(j);
            this.data.slotTemp.push(i);
          }
        }
      }

      console.log(this.data.dayTemp);
      console.log(this.data.slotTemp);

      for (var i = 0; i < this.data.dayTemp.length; i++) {
        for (var j = 0; j < this.data.day.length; j++){
          if(this.data.day[j].id == this.data.dayTemp[i]){
            daySelectedTemp.push(this.data.dateAll[j+1].fullTime);
          }
        }
      }
      console.log(this.data.dayTemp);
      
      for (var i = 0; i < this.data.slot.length; i++) {
        for (var j = 0; j < this.data.slotTemp.length; j++) {
          if (this.data.slot[i].id == this.data.slotTemp[j]) {
            slotSelectedTemp.push(this.data.slot[i].time)
          }
        }
      }
      for (var i = 0; i < daySelectedTemp.length; i++){
        timeSelectedConform.push(daySelectedTemp[i] + slotSelectedTemp[i])
      }
      timeSelectedConform.sort();
      console.log(timeSelectedConform);
      this.setData({
        timeSelected:timeSelectedConform,
      })
      
      wx.setStorageSync('timeSelected', this.data.timeSelected);
      wx.navigateBack({
        delta: 1,
      })
    }
  },


  touchStart: function (e) {
    startX = e.touches[0].pageX; // 获取触摸时的原点
    startY = e.touches[0].pageY;
    moveFlag = true;
    this.setData({
      pageTemp:e.currentTarget.dataset.page,
    })
    console.log(this.data.pageTemp);
  },

  // 触摸移动事件

  touchMove: function (e) {
    endX = e.touches[0].pageX; // 获取触摸时的原点
    endY = e.touches[0].pageY;
    var tx = Math.abs(endX - startX);
    var ty = Math.abs(endY - startY);
    if(tx > ty){
      if (moveFlag) {
        if (endX - startX > 70 && ty < 10) {
          console.log("move right");
          if (this.data.pageTemp == 2) {
            this.moveRight2();
          }
          if (this.data.pageTemp == 3) {
            this.moveRight3();
          }
          moveFlag = false;
        }

        if (startX - endX > 70 && ty < 10) {
          console.log("move left");
          if (this.data.pageTemp == 1) {
            this.moveLeft1();
          }
          if (this.data.pageTemp == 2) {
            this.moveLeft2();
          }
          moveFlag = false;
        }
      }
    }
  },

  // 触摸结束事件

  touchEnd: function (e) {
    moveFlag = true; // 回复滑动事件
  },

  //向左滑动操作

  moveLeft1(e) {
    var that = this;

    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation1.opacity(0.2).translate(-500, 0).step()

    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation2.opacity(0.2).translate(0, 0).step()

    this.setData({
      ani1: animation1.export(),
      ani4: animation2.export()
    })

    setTimeout(function () {
      that.setData({
        page: 2,
        ani2: '',
        ani3: '',
        ani5: '',
        ani6: '',
      });
    }, 800)
  },

  moveLeft2(e) {
    var that = this;

    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation1.opacity(0.2).translate(-500, 0).step()

    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation2.opacity(0.2).translate(0, 0).step()

    this.setData({
      ani2: animation1.export(),
      ani5: animation2.export()
    })

    setTimeout(function () {
      that.setData({
        page: 3,
        ani1: '',
        ani3: '',
        ani4: '',
        ani6: '',
      });
    }, 800)
  },
  //向右滑动操作

  moveRight2() {
    var that = this;

    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation1.opacity(0.2).translate(500, 0).step()

    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation2.opacity(0.2).translate(0, 0).step()

    that.setData({
      ani2: animation1.export(),
      ani5: animation2.export(),
    })

    setTimeout(function () {
      that.setData({
        page: 1,
        ani1: '',
        ani3: '',
        ani4: '',
        ani6: '',
      });
    }, 800)
  },


  moveRight3() {
    var that = this;
    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });
    animation1.opacity(0.2).translate(500, 0).step()

    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
      delay: 100
    });

    animation2.opacity(0.2).translate(0, 0).step()

    this.setData({
      ani3: animation1.export(),
      ani6: animation2.export(),
    })

    setTimeout(function () {
      that.setData({
        page: 2,
        ani1: '',
        ani2: '',
        ani4: '',
        ani5: '',
      });
    }, 800)
  },
// 重置按钮
  resetAll:function(){
    this.setData({
      selected: [
      [false, false, false, false, false, false, false, false, false, false, false, false,],
      [false, false, false, false, false, false, false, false, false, false, false, false,],      [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,], [false, false, false, false, false, false, false, false, false, false, false, false,]
      ],
      selectTimeFlag: 0,
    })
  },

  // 监听滚动
  onPageScroll: function (e) {
    var systemInfo = wx.getSystemInfoSync();
    var windowHeight = systemInfo.windowHeight - 100;
    var query = wx.createSelectorQuery();    //选择id
    var that = this;
    query.select('#lastTime').boundingClientRect(function(rect) {
      if (rect.top < windowHeight && rect.top > 0) {
        that.setData({
          moreTimeFlag:true,
        })
      }
      else{
        that.setData({
          moreTimeFlag: false,
        })
      }
    }).exec()
    
  },

})