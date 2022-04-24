// pages/video/video.js
import {
    getTopMV
} from "../../service/api_video"

Page({
    data: {
        topMVs: [],
        hasMore: true
    },
    onLoad() {
        this.getTopMVData(0)
    },
    onReachBottom() {
        this.getTopMVData(this.data.topMVs.length)
    },
    onPullDownRefresh() {
        this.getTopMVData(0)
    },
    handleVideoItemClick(e) {
        let id = e.currentTarget.dataset.item.id;
        wx.navigateTo({
          url: `/pages/video-detail/index?id=${id}`,
        })
    },
    async getTopMVData(offset) {
        if (!this.data.hasMore && !offset == 0) return;
        wx.showNavigationBarLoading();
        let result = await getTopMV(offset);
        let tempData = [];
        if (offset == 0) {
            tempData = result.data
            wx.stopPullDownRefresh()
        } else {
            tempData = [...this.data.topMVs, ...result.data]
        }
        this.setData({
            hasMore: result.hasMore,
            topMVs: tempData
        })
        wx.hideNavigationBarLoading()
    }
})