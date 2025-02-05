
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx8e65107ca903eed5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9ObB2RKXYhbc7xPjqJfr-_Ep-NMRJpwPPpd2Q75jQ1g	',

  PROVINCE: '安徽',
  CITY: '淮南',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小陶先生',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omdys6dQ2GRHEIesjbNIkFrEz_mg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '9ObB2RKXYhbc7xPjqJfr-_Ep-NMRJpwPPpd2Q75jQ1g	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小陶', year: '2001', date: '09-025',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小王', year: '2001', date: '10-07',
        },
        {
         
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-19' },
       
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '9ObB2RKXYhbc7xPjqJfr-_Ep-NMRJpwPPpd2Q75jQ1g',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omdys6YRdXJd7-AxIrhkY0NtGr5M',
    }
  ],

}

module.exports = USER_CONFIG

