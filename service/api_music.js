import request from "./index";

export const getBanners = () => {
    return request.get('/banner', {
        type:2
    })
}

export const getRanking = (idx) => {
    return request.get('/top/list', {
        idx
    })
}


