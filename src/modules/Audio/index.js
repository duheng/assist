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
        this.speed =  cookie.get('speed',namespace)
        this.setEvents()
        if(this.isAudio) {
            this.addEventMove()
        }
       
        console.log('init--Audio->', this.namespace)
    },
    setEvents() {
       this.toggleAudio()
       addEvent(this.body,'mouseover',this.mouseOver)
       window.addEventListener('touchstart', this.forceSafariPlayAudio, false);
    },
    toggleAudio() {
        const { namespace } = Audio
        document.getElementById(`${namespace}-audio`).onclick = () => {
            if(this.isAudio) {
              this.removeEventMove()
              this.isAudio = false
              cookie.set('audio', false, namespace)
            } else {
              this.addEventMove()
              this.isAudio = true
              cookie.set('audio', true, namespace)
            }
        }
        document.getElementById(`${namespace}-audio-speed`).onclick = () => {
            this.speed = this.speed == 'middle' ? 'fast' : 'middle'
            cookie.set('speed', this.speed, namespace)
            console.log('speed-----', this.speed)
        }
    },
    addEventMove() {
        addEvent(this.body,'mouseover',this.mouseOver)
    },
    removeEventMove() {
       removeEvent(this.body,'mouseover',this.mouseOver)
    },
    forceSafariPlayAudio() {
        const { namespace } = Audio
        let __audio = document.getElementById(`${namespace}-audio-media`)
        __audio.load();
        __audio.play();
    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target || event.srcElement;
        const { namespace, speed } = Audio
        var __text = parseTagText(target)
        if(__text == '') {
            return
        }
        console.log('speed2-----', this.speed)
        let __speed = speed == 'middle' ? 5 : 7
        var __url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${__speed}&text=${__text}`
        var __url2 = 'http://www.govwza.cn/yxsm/cache/voices/voices1/480/48076e3f30eabc16fbc2df6b683087b2.mp3'
        let __audio = document.getElementById(`${namespace}-audio-media`)
        __audio.src = __url2
        document.getElementById(`${namespace}-audio-source`).src = __url2
        document.getElementById(`${namespace}-audio-embed`).src = __url2
       let playPromise =  __audio.play();
       __audio.load();
       if(playPromise !== undefined) {
          playPromise.then(_ => {
            __audio.play();
            window.removeEventListener('touchstart', this.forceSafariPlayAudio, false);
          })
          .catch(error => {
            
          });
       }
    },
    reset() {
        const { namespace } = Audio
        this.removeEventMove()
        this.isAudio = false
        cookie.set('audio', false, namespace)
        cookie.set('speed', 'middle', namespace)
    }   
        
};

export default Audio;