const app = getApp();
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  // 点击“注册”后触发 enroll 方法，跳转到 enroll 模块
  enroll: function (e) {
  	// 发起网络请求
    wx.navigateTo({
	  // 开发者服务器接口地址
      url: '/pages/contact/contact',
    })
  },

	// 点击登录按钮后，触发此login方法
  login:function(e){//登录的方法
    console.log(e.detail.value.login_name)//在控制台输出填入的用户名
    console.log(e.detail.value.login_pass)//同理
    var form = e.detail.value//赋值
    if(form.login_name == '' ||form.login_name == null ||form.login_pass == '' || form.login_pass == null){//判断是否填写完整
      wx.showToast({
        title: '请检查是否填写完整！',
      })
    }else{
      wx.request({//小程序连接服务器的方法
        url: 'https://8.130.165.215/login.php',//服务器ip地址要事先搭建好，把接口文件放在api文件夹下
        data:{
          name:form.login_name,//name是向服务器传值，后面的是你input里填的值
          pass:form.login_pass,//同理
        },
        success:function(res){//调用连接数据库成功的方法,注意不是登录成功
          console.log(res.data)//打印返回的信息
          if(res.data.name == form.login_name && res.data.pass == form.login_pass){//判断返回的信息是否跟你填的一致
            wx.showToast({
              title: '登录成功',
              icon:"success",
              success:function(){
                wx.navigateTo({
                  url: '/pages/city/city',//登录成功会弹窗并跳转到log页
                })
              }
            })
          }else{
            wx.showToast({
              title: '用户名或密码错误！',//登录失败
              icon:"error",
            })
          }
        }
      })
    }
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

  }
})
