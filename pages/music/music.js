// pages/music/music.js
import {rankingStore} from "../../store/index"
import {
    getBanners
} from '../../service/api_music';
import queryRect from '../../utils/query-rect';
import utils from "../../utils/util"

Page({
    data: {
        banners: [],
        swiperHeight: 0,
        recommendSongs:[]
    },
    onLoad() {
        this.getPageData()
        rankingStore.dispatch("getRankingDataAction")
        rankingStore.onState("hotRanking",(res)=>{
            if(!res.tracks) return;
            let recommendSongs = res.tracks.slice(0, 6)
            this.setData({recommendSongs : recommendSongs})
        })
    },
    handleSearchClick() {
        wx.navigateTo({
            url: '/pages/search-detail/index',
        })
    },
    handleSwiperImageLoaded:utils.throttle(function () {
        queryRect('.swiper-image').then(res=>{
            this.setData({
                swiperHeight:res[0].height
            })
        })
    }, 100),
    getPageData() {
        getBanners().then(res => {
            this.setData({
                banners: res.banners
            })
        })
    }
})
