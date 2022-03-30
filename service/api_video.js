import request from "./index";

export const getTopMV = (offset, limit = 10) => {
    return request.get('/top/mv', {
        offset,
        limit
    })
}