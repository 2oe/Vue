import jsonp from "@/common/js/jsonp.js"
export function getrecommendList() {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
    const cof = {
        tpl: 3,
        page: "detail",
        date: "2018-07-19",
        topid: 4,
        type: "top",
        song_begin: 0,
        song_num: 30,
        g_tk: 2068878057,
        loginUin: 1641249366,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    return jsonp(url, cof, {
        param: "jsonpCallback",
        prefix: "__jp"
    });
}
export function getrecommendDetail(id) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg";
    const cof = {
        albummid: id,
        g_tk: 2068878057,
        loginUin: 1641249366,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    return jsonp(url, cof, {
        param: "jsonpCallback",
        prefix: "__jp"
    });
}