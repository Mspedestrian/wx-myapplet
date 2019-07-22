// miniprogram/pages/canvasdraw/canvasdraw.js
let moveList = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorlist: ["#ed5565", "#da4453", "#fc6e51", "#E9573f", "#ec87c0", "#d770ad", "#ffce54", "#f6bb42", "#a0d468", "#8cc152", "#48cfad", "#37bc9b", "#4fc1e9", "#3bafda", "#5d9cec", "#4ab9dc", "#ac92ec", "#967aec", "#434a54", "#656d78", "#aab2bd", "#ccd1d9", "#e6e9ed", "#f5f7fa"],
    pensize:1,
    pencolor:'#ed5565',
    context:null,
    lastPos:null,
    canvasW: 350,
    canvasH: 400,
    iseraser:false,
    imgUrl:'http://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
    isShowPicModal:false,
 
  },
  getContext(){
    if(this.data.context){
      
    }
    else {
      var context = wx.createCanvasContext('drawcanvas');
      this.setData({
        context: context
      })
      this.data.context.setStrokeStyle(this.data.pencolor)
      this.data.context.setLineWidth(this.data.pensize);
      
    }
    return this.data.context;
  },
  drawtouchstart(e){
    let ctx = this.getContext();
    
    this.setData({
      lastPos:{
        flag:0,
        x: e.touches[0].x,
        y: e.touches[0].y
      }
    })
  },
  
  drawtouchmove(e) {
    let ctx = this.getContext();
    if (this.data.iseraser){
      ctx.clearRect(this.data.lastPos.x, this.data.lastPos.y, e.touches[0].x - this.data.lastPos.x, e.touches[0].y - this.data.lastPos.y)
      ctx.draw(true)
    }
    else {
      ctx.moveTo(this.data.lastPos.x, this.data.lastPos.y)
      ctx.lineTo(e.touches[0].x, e.touches[0].y)
      ctx.setLineCap('round')
      ctx.setStrokeStyle(this.data.pencolor)
      ctx.setLineWidth(this.data.pensize);
      ctx.stroke()
      ctx.draw(true)
    }
    this.setData({
      lastPos: {
        x: e.touches[0].x,
        y: e.touches[0].y
      }
    })
  },
  drawtouchend(e) {
    let ctx = this.getContext();
    let that = this;
    console.log('111')
    
    //优化
    
  },
  penChange(e){
    var pensize = e.detail.value;
    this.setData({
      pensize
    })
  },
  changecolor(e){
    console.log(e)
    let pencolor = e.target.dataset.color;
    this.setData({
      pencolor
    })
  },
  eraser(){
    let iseraser = !this.data.iseraser
    this.setData({
      iseraser,
    })
  },
  clearAll(){
    let ctx = this.getContext();
    
    ctx.clearRect(0, 0, this.data.canvasW, this.data.canvasH)
    ctx.draw(false)
  },
  saveBtn(){
    
    let that  = this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      fileType:'jpg',
      canvasId: 'drawcanvas',
      success(res) {
        console.log(res.tempFilePath)
        that.setData({
          isShowPicModal: true,
          imgUrl: res.tempFilePath
        })
      }
    })
  },
  cancel(){
    this.setData({
      isShowPicModal:false,
      imgUrl:''
    })
  },
    // 将图片保存到手机
  savePhone(){
    this.cancel();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var context = wx.createCanvasContext('drawcanvas');
    var that = this;
    this.setData({
      context: context
    })
    this.data.context.setStrokeStyle(this.data.pencolor)
    this.data.context.setLineWidth(this.data.pensize);
    
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