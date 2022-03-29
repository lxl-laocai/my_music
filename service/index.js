class MyRequest{
    request(url, method, data){
      return new Promise((resolve, reject)=> {
        wx.request({
          url,
          method,
          data,
          success(res){
            resolve(res)
          },
          fail(rej){
            reject(rej)
          }
        })
      })
    }
}

const myRquest = new MyRequest();
export default myRquest