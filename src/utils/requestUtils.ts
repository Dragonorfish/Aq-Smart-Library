import {getServer} from "../environment/environment"

export function doActionsByThor(phttpUrl,pController, pMethod, pQueryData,reqMethod, pBodyData?) {
    const httpUrl = phttpUrl;
    let actionUrl = `/${pController}/${pMethod}`;
    let queryString = '';
    let bodyString='';
    console.log(pQueryData,pBodyData)
    for (let key in pQueryData) {
        queryString =queryString+ "&" + key + "=" + pQueryData[key]
    }
    for (let key in pBodyData) {
        bodyString =bodyString+ key + "=" + pBodyData[key]+"&";
    }
    const tmpUrl = `${httpUrl + actionUrl}?${queryString}&appToken=${getServer().hdbsThor.accessToken}`;
    return fetchJson(tmpUrl,bodyString,reqMethod);
}



//返回一个promise
    function fetchJson(url,bodyData,reqMethod){
        //发起请求
        const options={
            method:reqMethod,
            body:bodyData,
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        }
        const promise = fetch(url,options)
        return promise
    }

