import Swal from 'sweetalert2'
import 'bootstrap'
import 'virtual:uno.css'
import '@/styles/common.scss'

const loginBtn = document.querySelector('#loginBtn')! as HTMLButtonElement

loginBtn.addEventListener('click', () => {
  Swal.fire({
    title: '哎呀！',
    text: '作者偷懒了，还没做完哦 (。-ω-)zzz',
    icon: 'info'
  })
})
