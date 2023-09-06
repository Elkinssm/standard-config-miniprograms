App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info("App onLaunch");
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    console.log(`Recibo  ${options}`)
    console.log(`Recibo extraData: ${options.extraData}`)
    my.alert({
      title: 'Tips',
      content: `query: ${JSON.stringify(query) || ''}\nextraData: ${JSON.stringify(extraData) || ''}`,
      buttonText: 'Show',
    });
  }
});
