// pages/video-detail/index.js
import {getMVURL, getMVDetail, getMVRelated} from "../../service/api_video";
Page({
    data: {
        mvURLInfo:{},
        mvDetails:{},
        mvRelated:{}
    },
    onLoad: function (options) {
        let id = options.id
        this.getPageData(id)
    },
    getPageData(id){
        getMVURL(id).then(res=>{
            this.setData({
                mvURLInfo:res.data 
            })
        })
        getMVDetail(id).then(res=>{
            this.setData({
                mvDetails:res.data 
            })
        })
        getMVRelated(id).then(res=>{
            this.setData({
                mvRelated:res.data 
            })
        })
    }
})