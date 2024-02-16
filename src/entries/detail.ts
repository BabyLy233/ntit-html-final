import request from '@/utils/request'

import '@/index'
import '@/styles/detail.scss'

interface DI {
  title: string
  img: string
}

const detailInfo: DI = JSON.parse(localStorage.getItem('detailInfo')!)
const titleDOM = document.querySelector('#detail-title')! as HTMLTitleElement
const imgDOM = document.querySelectorAll('.detail-img')! as NodeListOf<HTMLImageElement>
titleDOM.innerText = detailInfo.title

imgDOM.forEach((dom) => {
  dom.src = detailInfo.img
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
