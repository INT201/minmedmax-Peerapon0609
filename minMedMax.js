const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  switch (n1, n2, n3) {
    case(n1<=n2&&n2<=n3):
      return {min: n1,mid: n2,max: n3}
      break;
    case(n1<=n3&&n3<=n2):
      return {min: n1,mid: n3,max: n2}
      break;
    case(n2<=n3&&n3<=n1):
      return {min: n2,mid: n3,max: n1}
      break;
    case(n2<=n1&&n1<=n3):
      return {min: n2,mid: n1,max: n3}
      break;
    case(n3<=n2&&n2<=n1):
      return {min: n3,mid: n2,max: n1}
      break;
    case(n3<=n1&&n1<=n2):
      return {min: n3,mid: n1,max: n2}
      break;
    default:
      break;
  }
}
module.exports = minMedMax
