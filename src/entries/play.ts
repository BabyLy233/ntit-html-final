import Artplayer from 'artplayer'
import artplayerPluginDanmuku from 'artplayer-plugin-danmuku'

import '@/index'
import '@/styles/play.scss'
import mvUrl from '@/assets/间谍过家家.mp4'

new Artplayer({
  container: '.artplayer-app',
  url: mvUrl,
  plugins: [
    artplayerPluginDanmuku({
      // 弹幕数组
      danmuku: [
        {
          text: '父亲：智商500 战力500', // 弹幕文本
          time: 1, // 发送时间，单位秒
          color: '#fff', // 弹幕局部颜色
          border: false, // 是否显示描边
          mode: 0 // 弹幕模式: 0表示滚动, 1静止
        },
        {
          text: '女儿：智商50 战力5',
          time: 2,
          color: 'red',
          border: false,
          mode: 0
        },
        {
          text: '母亲：智商2 战力2w',
          time: 3,
          color: 'green',
          border: false,
          mode: 1
        },
        {
          text: '妈妈要颜值有颜值，要战力有战力，要智商有颜值和战力',
          time: 4,
          color: '#fff',
          border: false,
          mode: 0
        },
        {
          text: '好可爱啊！！ QWQ',
          time: 1,
          color: '#fff',
          border: false,
          mode: 0
        }
      ]
    })
  ]
})
