import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import 'css/common.css'
import './index.css'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

new Vue({
  el: '#app',
  data: {
    list: null,
    pageNum: 1,
    pageSize: 8,
    loading: false,
    allLoaded: false,
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      if (this.allLoaded) return
      this.loading = true
      axios.post(url.hotList, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let currentList = res.data.list
        if (currentList.length < this.pageSize) {
          // 判断所有数据是否已加载完成
          this.allLoaded = true
        }
        if (this.list) {
          this.list = this.list.concat(currentList)
        } else {
          this.list = currentList     // 首次请求数据
        }
        this.loading = false
        this.pageNum++
      })
    }
  },
})