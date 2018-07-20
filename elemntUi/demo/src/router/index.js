import Vue from "vue"
import VueRouter from "vue-router"
import Index from '../components/perform/index.vue'
import List from '../components/perform/list.vue'
import ShopCar from '../components/shopcar.vue'
import Music from "../components/music/index.vue"
import Recommend from "../components/music/recommend.vue"
import Search from "../components/music/search.vue"
import Toplist from "../components/music/toplist.vue"
import Detail from "../components/music/detail.vue"

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/index'
        }, {
            path: '/index',
            component: Index
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "/shopcar",
            component: ShopCar
        },
        {
            path: "/music",
            component: Music,
            children: [{
                    path: "/music/recommend",
                    component: Recommend
                },
                {
                    path: "/music/search",
                    component: Search
                },
                {
                    path: "/music/toplist",
                    component: Toplist
                },
                {
                    path: "/music/detail",
                    component: Detail
                }
            ]
        }
    ]
})

export default router;