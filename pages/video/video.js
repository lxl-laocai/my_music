// pages/video/video.js
import {
    getTopMV
} from "../../service/api_video"

Page({
    data: {
        topMVs: []
    },
    async onLoad() {
        let result = await getTopMV(0);
        this.setData({
            topMVs: result.data
        })
        console.log(this.data.topMVs);
    }
})