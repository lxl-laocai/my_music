import request from "./index";
/**
 * 请求mv的列表
 * @param {number} offset MV的页数
 */
export const getTopMV = (offset, limit = 10) => {
    return request.get('/top/mv', {
        offset,
        limit
    })
}
/**
 * 请求mv的地址
 * @param {number} id MV的id
 */
export const getMVURL = (id) => {
    return request.get('/mv/url', {
        id
    })
}

/**
 * 请求mv的详情
 * @param {number} id MV的id
 */
export const getMVDetail = (mvid) => {
    return request.get('/mv/detail', {
        mvid
    })
}
/**
 * 请求mv的相关视频
 * @param {number} id MV的id
 */
export const getMVRelated = (id) => {
    return request.get('/related/allvideo', {
        id
    })
}