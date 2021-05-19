import { cookie, ajax, addEvent, removeEvent, parseTagText, triggerEvent } from '../utils'

import styles from './index.scss'
import tmpl from './index.tmpl.js'
const Audio = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        this.namespace = namespace
        core.creatStyle('audio-style',styles)
        core.creatHtml('audio-html',tmpl)
        this.isAudio  = cookie.get('audio',namespace)

        this.audio = document.getElementById(`${namespace}-audio-media`) || ''
        this.audioTab = document.getElementById(`${namespace}-audio`) || ''
        this.audioTabImg =  this.audioTab.getElementsByTagName('img')[0]

        this.speed =  cookie.get('speed',namespace)
        this.speedTab =  document.getElementById(`${namespace}-audio-speed`) || ''
        this.speedTabImg =   this.speedTab.getElementsByTagName('img')[0]
      
        this.setEvents()
    },
    setEvents() {
        this.toggleAudio()
        if(this.isAudio) {
            this.addEventMove()
            addEvent(document,'click',this.forceSafariPlayAudio) // 苹果浏览器需要用户跟浏览器有个交互才可以播放语音
        } else {
            this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src')
        }

        if(this.speed == 'fast') {
            this.speedTabImg.src = this.speedTabImg.getAttribute('selected-src')
        } else {
            this.speedTabImg.src = this.speedTabImg.getAttribute('source-src')
        }
    },
    toggleAudio() {
        const { namespace } = Audio
        this.audioTab.onclick = () => {
            if(this.isAudio) {
              this.removeEventMove()
              this.isAudio = false
              cookie.set('audio', false, namespace)
              this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src')
            } else {
              this.addEventMove()
              this.isAudio = true
              cookie.set('audio', true, namespace)
              this.audioTabImg.src = this.audioTabImg.getAttribute('source-src')
            }
        }
        this.speedTab.onclick = () => {
            if(this.speed == 'middle') {
                this.speed = 'fast'
                this.speedTabImg.src =  this.speedTabImg.getAttribute('selected-src')
            } else {
                this.speed = 'middle'
                this.speedTabImg.src =  this.speedTabImg.getAttribute('source-src')
            }
            cookie.set('speed', this.speed, namespace)
        }
    },
    addEventMove() {
        addEvent(this.body,'mouseover',this.mouseOver)
    },
    removeEventMove() {
       removeEvent(this.body,'mouseover',this.mouseOver)
    },
    forceSafariPlayAudio() {
        const { audio } = Audio
        audio.load();
        audio.play();
    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target || event.srcElement;
        var __text = parseTagText(target)
        var __parentNodeId  =  target.parentNode.id
        var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1
        if(__text == '' || __isAssist ) {
            return
        }
        Audio.playAudio(__text)
    },
    playAudio(text) {
        const { namespace, audio, speed, forceSafariPlayAudio } = Audio
        let __speed = speed == 'middle' ? 5 : 7
        var __url = `https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${__speed}&text=${text}`
        var __url2 = 'https://s.qunarzz.com/common/assist/song.mp3'
        audio.src = __url
        document.getElementById(`${namespace}-audio-source`).src = __url
        document.getElementById(`${namespace}-audio-embed`).src = __url
       let playPromise =  audio.play();
       if(playPromise) {
          playPromise.then(_ => {
           // audio.pause();
            removeEvent(document,'click', forceSafariPlayAudio)
          })
          .catch(error => {
            console.log(error)
          });
       }
    },
    reset() {
        const { namespace } = Audio
        this.isAudio = true
        this.audio.pause()
        this.removeEventMove()
        this.addEventMove()
        this.audioTabImg.src = this.audioTabImg.getAttribute('source-src')
        this.speedTabImg.src = this.speedTabImg.getAttribute('source-src')
        cookie.set('audio', true, namespace)
        cookie.set('speed', 'middle', namespace)
    }   
        
};

export default Audio;