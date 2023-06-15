import * as _ from "underscore";

export function formateSeconds(endTime) {
  let secondTime = parseInt(endTime); //将传入的秒的值转化为Number
  let min = 0; // 初始化分
  let h = 0; // 初始化小时
  let result = [];
  if (secondTime >= 60) {
    //如果秒数大于等于60，将秒数转换成整数
    min = secondTime / 60; //获取分钟，除以60取整数，得到整数分钟
    secondTime = secondTime % 60; //获取秒数，秒数取佘，得到整数秒数
    if (min >= 60) {
      //如果分钟大于等于60，将分钟转换成小时
      h = min / 60; //获取小时，获取分钟除以60，得到整数小时
      min = min % 60; //获取小时后取佘的分，获取分钟除以60取佘的分
    }
  }
  result = [h, min, secondTime];
  return result;
}

export function getRandomNum() {

  return new Date().getTime() + '' + Math.round(Math.random() * 100000);
}


export function Base_HasValue(pValue) {
  if (_.isBoolean(pValue)) {
    return true;
  } else if (_.isNumber(pValue)) {
    return true;
  } else if (_.isNull(pValue)) {
    return false;
  } else if (_.isDate(pValue)) {
    return true;
  } else if (_.isUndefined(pValue)) {
    return false;
  } else if (pValue === "") {
    return false;
  } else {
    return !_.isEmpty(pValue);
  }
}
