// miniprogram/pages/home/home.js
var testImgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544884337830&di=921405615c2aa02436e8d888fce278f5&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7LsWdDW5_xN3otqbppnN2DJv%2Fdoc%2Fpic%2Fitem%2F6d81800a19d8bc3e4a4a9a998b8ba61ea8d34527.jpg';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tablist:[{
      id:1,
      name:'电视',
    },{
      id:2,
      name:'电影',
    },{
      id:3,
      name:'动漫'
    },{
      id:4,
      name:'读书'
    },{
      id:5,
      name:'音乐'
    }],
    tvlist:[{
      name:'天下第一',
      id:null,
      imgurl: testImgUrl,
      score:7.7,
      year:'2005',
      country:'中国大陆',
      type:'动作 爱情 古装',
      people:'赵丽颖，赵丽颖，赵丽颖',
      text:'不错哦'
    }],

    tvobj: {
      name: '天下第一',
      id: null,
      imgurl: testImgUrl,
      score: 7.7,
      year: '2005',
      country: '中国大陆',
      type: '动作 爱情 古装',
      people: '赵丽颖，赵丽颖，赵丽颖',
      text: '不错哦'
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let tvlist = [];
    for(let i=0;i<100;i++){
      tvlist.push(this.data.tvobj)
    }
    this.setData({
      tvlist
    })
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