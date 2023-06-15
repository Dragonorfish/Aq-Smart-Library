
const environment={
  //请求后台地址
  // aquamanBackDev:"https://cnaquaman.com:8080/WebApi",//线上环境
  aquamanBackDev:"https://56x62914o3.zicp.fun/WebApi",//开发环境,本地域名穿透
  //腾讯cos存储配置
  bucket:'aquaman-1314140460',
  region:'ap-beijing',
  cosip:"https://aquaman-1314140460.cos.ap-beijing.myqcloud.com",
  cosFileTree:{
    blogPic:{
      path:"/blogPic",
      children:{
        articlePic:{
          path:"/blogPic/articlePic"
        }
      }
    },
    aquamanIcon:{
      path:"/aquamanIcon"
    }
  },
  hdbsThor:{
    getway:"http://127.0.0.1:8080/AppApi",
    getwayonline:"https://hdbsthor-simulationtrain.xueshu.ren/AppApi",
    accessToken:"90c0e25c0cc8070984023e3afa18a42c",

  },
  currentWay:"https://hdbsthor-simulationtrain.xueshu.ren/AppApi",

}





export function getServer() {
  return environment
}
