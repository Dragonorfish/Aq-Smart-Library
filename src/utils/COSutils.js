import COS from "cos-js-sdk-v5"
import { getServer } from "../environment/environment";


let environment=getServer()
// 存储桶名称，由 bucketname-appid 组成，appid 必须填入，可以在 COS 控制台查看存储桶名称。 https://console.cloud.tencent.com/cos5/bucket
let Bucket =environment.bucket ;  /* 存储桶，必须字段 */

// 存储桶 region 可以在 COS 控制台指定存储桶的概览页查看 https://console.cloud.tencent.com/cos5/bucket/
// 关于地域的详情见 https://cloud.tencent.com/document/product/436/6224
let Region =environment.region;     /* 存储桶所在地域，必须字段 */

const cos = new COS({
  // getAuthorization 必选参数
  getAuthorization: function (options, callback) {
    // 异步获取临时密钥
    // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
    // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
    // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048

    var url ='http://127.0.0.1:8080/WebApi/AqCOSController/getTmpSecret'; // url 替换成您自己的后端服务
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onload = function (e) {
      try {
        var data = JSON.parse(e.target.responseText);
        var credentials = data;
      } catch (e) {
      }
      if (!data || !credentials) {
        return console.error('credentials invalid:\n' + JSON.stringify(data, null, 2))
      };
      callback({
        TmpSecretId: credentials.tmpSecretId,
        TmpSecretKey: credentials.tmpSecretKey,
        SecurityToken: credentials.sessionToken,
        // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
        StartTime: parseInt((new Date().getTime())/1000), // 时间戳，单位秒，如：1580000000
        ExpiredTime:parseInt((new Date().getTime()+7200)/1000), // 时间戳，单位秒，如：1580000000
      });
    };
    xhr.send();
  }
});
export default cos
