import {
  BASE_URL
} from '../config/index'
class MyRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data,
        success(res) {
          resolve(res.data)
        },
        fail:reject
      })
    })
  }
  get(url, params) {
    return this.request(url, 'GET', params)
  }
  post(url, data) {
    return this.request(url, 'POST', data)
  }
}

const myRquest = new MyRequest();
export default myRquest