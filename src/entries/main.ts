import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

import '@/index'
import request from '@/utils/request'
import '@/styles/home.scss'

// 初始化轮播
new Swiper('.hot-swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination'
  }
})

// 初始化连载新番
const 连载新番列表: any = []
request.get('/json/连载新番.json').then(({ data }) => {
  for (let i = 0; i < data.length; i++) {
    const newRecord: any = { row: i + 1, content: [] }
    const rowInfo = data[i].content
    for (let j = 0; j < rowInfo.length; j++) {
      newRecord.content.push({ id: rowInfo[j].id, title: rowInfo[j].title, img: rowInfo[j].img })
    }
    连载新番列表.push(newRecord)
  }

  for (let r = 1; r <= 2; r++) {
    const 连载新番 = document.querySelector(`#section-lz${r}`)!
    let 连载新番HTML = ''
    for (let i = 1; i <= 6; i++) {
      连载新番HTML += `
      <div class="col-xl-2 col-md-4">
        <div class="col-item-box" onclick="jumpToDetail({title:'${连载新番列表[r - 1].content[i - 1].title}',img:'${连载新番列表[r - 1].content[i - 1].img}'})">
          <div class="icon i-ant-design-play-circle-filled"></div>
            <div class="box-img">
              <img src="${连载新番列表[r - 1].content[i - 1].img}" alt="" srcset="" />
            </div>
          <div class="box-title">
            <span class="d-block text-truncate">${连载新番列表[r - 1].content[i - 1].title}</span>
          </div>
        </div>
      </div>
    `
    }
    连载新番.innerHTML = 连载新番HTML
  }
})

// 初始化完结番剧
const 完结番剧列表: any = []
request.get('/json/完结番剧.json').then(({ data }) => {
  for (let i = 0; i < data.length; i++) {
    const newRecord: any = { row: i + 1, content: [] }
    const rowInfo = data[i].content
    for (let j = 0; j < rowInfo.length; j++) {
      newRecord.content.push({ id: rowInfo[j].id, title: rowInfo[j].title, img: rowInfo[j].img })
    }
    完结番剧列表.push(newRecord)
  }

  for (let r = 1; r <= 2; r++) {
    const 完结番剧 = document.querySelector(`#section-wj${r}`)!
    let 完结番剧HTML = ''
    for (let i = 1; i <= 6; i++) {
      完结番剧HTML += `
      <div class="col-xl-2 col-md-4">
        <div class="col-item-box" onclick="jumpToDetail({title:'${完结番剧列表[r - 1].content[i - 1].title}',img:'${完结番剧列表[r - 1].content[i - 1].img}'})">
          <div class="icon i-ant-design-play-circle-filled"></div>
            <div class="box-img">
              <img src="${完结番剧列表[r - 1].content[i - 1].img}" alt="" srcset="" />
            </div>
          <div class="box-title">
            <span class="d-block text-truncate">${完结番剧列表[r - 1].content[i - 1].title}</span>
          </div>
        </div>
      </div>
    `
    }
    完结番剧.innerHTML = 完结番剧HTML
  }
})

// 初始化动漫剧场
const 动漫剧场列表: any = []
request.get('/json/动漫剧场.json').then(({ data }) => {
  for (let i = 0; i < data.length; i++) {
    const newRecord: any = { row: i + 1, content: [] }
    const rowInfo = data[i].content
    for (let j = 0; j < rowInfo.length; j++) {
      newRecord.content.push({ id: rowInfo[j].id, title: rowInfo[j].title, img: rowInfo[j].img })
    }
    动漫剧场列表.push(newRecord)
  }

  for (let r = 1; r <= 2; r++) {
    const 动漫剧场 = document.querySelector(`#section-jc${r}`)!
    let 动漫剧场HTML = ''
    for (let i = 1; i <= 6; i++) {
      动漫剧场HTML += `
      <div class="col-xl-2 col-md-4">
        <div class="col-item-box" onclick="jumpToDetail({title:'${动漫剧场列表[r - 1].content[i - 1].title}',img:'${动漫剧场列表[r - 1].content[i - 1].img}'})">
          <div class="icon i-ant-design-play-circle-filled"></div>
            <div class="box-img">
              <img src="${动漫剧场列表[r - 1].content[i - 1].img}" alt="" srcset="" />
            </div>
          <div class="box-title">
            <span class="d-block text-truncate">${动漫剧场列表[r - 1].content[i - 1].title}</span>
          </div>
        </div>
      </div>
    `
    }
    动漫剧场.innerHTML = 动漫剧场HTML
  }
})
