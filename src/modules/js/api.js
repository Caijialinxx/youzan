let url = {
  hotList: '/index/hotList',
  indexSwiper: '/index/swiper',
}

// let host = ''
let host = 'https://nei.netease.com/api/apimock/1722a67d6705a981fc846f4ead094555'

for (const key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url