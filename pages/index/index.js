Page({
  data: {
    launchData: null,
    showData: null
  },

  onLaunch(options) {
    console.log(test);
    console.log("Received data in onLaunch:", options);
    const receivedData = options.query.data ? JSON.parse(decodeURIComponent(options.query.data)) : null;
    console.log("Received data in onLaunch:", receivedData);
    this.setData({
      launchData: receivedData
    });
  },
  onShow(options) {
    console.log("Received data in onShow:", options);
    const receivedData = options.query.data ? JSON.parse(decodeURIComponent(options.query.data)) : null;
    console.log("Received data in onShow:", receivedData);
    this.setData({
      showData: receivedData
    });
  },



  getParam() {
    var params = this;
    const {query, referrerInfo: {extraData} = {}} = my.getLaunchOptionsSync();
    my.alert({
      title: "Prueba data",
      content: `query:${JSON.stringify(query) || ""}\nextraData:${JSON.stringify(extraData) || ""}`
    });
  }
});
