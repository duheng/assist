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
        this.audio = document.getElementById(`${namespace}-audio-media`) || ''
        this.setEvents()
        if(this.isAudio) {
            this.addEventMove()
            addEvent(document,'click',this.forceSafariPlayAudio)
        }
    },
    setEvents() {
        this.toggleAudio()
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
        if(__text == '') {
            return
        }
        Audio.playAudio(__text)
    },
    playAudio(text) {
        const { namespace, audio, speed, forceSafariPlayAudio } = Audio
        let __speed = speed == 'middle' ? 5 : 7
        var __url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=${__speed}&text=${text}`
        var __url2 = 'https://s.qunarzz.com/common/assist/song.mp3'
        audio.pause();
        audio.src = __url2
        document.getElementById(`${namespace}-audio-source`).src = __url2
        document.getElementById(`${namespace}-audio-embed`).src = __url2
       let playPromise =  audio.play();
       if(playPromise !== undefined) {
          playPromise.then(_ => {
            removeEvent(document,'click', forceSafariPlayAudio)
          })
          .catch(error => {
            console.log(error)
          });
       }
    },
    reset() {
        const { namespace } = Audio
        this.removeEventMove()
        this.isAudio = false
        this.audio.pause()
        cookie.set('audio', false, namespace)
        cookie.set('speed', 'middle', namespace)
    }   
        
};

export default Audio;