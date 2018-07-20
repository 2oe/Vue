import axios from "axios";
import axiosAdapter from "axios-mock-adapter"

const mock = new axiosAdapter(axios);

mock.onGet('http://localhost:8080/getCarouselList').reply(200, {
    errcode: 0,
    errMsg: "",
    result: [{
            url: "http://y.gtimg.cn/music/common/upload/msa/2018119/1180eed164f2632f7789ba33d090e99__642x215.png"
        },
        {
            url: "//y.gtimg.cn/music/common/upload/msa/2018130/98d48b0d906ade5d20c32ccedaba802__642x215.jpg"
        }
    ]
});