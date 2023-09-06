Page({
  data: {
    launchData: null,
    showData: null
  },

  onLaunch(options) {
    console.log(test);
    console.log("Received data in onLaunch:", options);
  },

  onShow(options) {
    console.log("Received data in onShow:", options);
    this.setData({});
  },

  getParam() {
    const { query, referrerInfo: { extraData } = {} } = my.getLaunchOptionsSync();
    console.log(`query : ${query} o extraData : ${extraData}`);
    my.alert({
      title: "Prueba data",
      content: `query:${JSON.stringify(query) || ""}\nextraData:${JSON.stringify(extraData) || ""}`
    });
  }
});
