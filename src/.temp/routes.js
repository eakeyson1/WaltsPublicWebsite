const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/user/Documents/WaltsPublicWebsite/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/user/Documents/WaltsPublicWebsite/src/pages/About.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/user/Documents/WaltsPublicWebsite/node_modules/gridsome/app/pages/404.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/user/Documents/WaltsPublicWebsite/src/pages/Index.vue")

export default [
  {
    path: "/blog/:slug/",
    component: c1
  },
  {
    path: "/about/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
