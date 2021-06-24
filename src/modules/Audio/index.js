import { cookie, ajax, addEvent, removeEvent, parseTagText, triggerEvent, trim } from '../utils'
import audioTabText,{ symbolsReg } from '../constans'

import styles from './index.scss'
import tmpl from './index.tmpl.js'
const Audio = {
    init(core) {
        const { namespace, url } = core.config
        this.body =  document.body
        this.namespace = namespace
        this.AudioApi = url
        core.creatStyle('audio-style',styles)
        core.creatHtml('audio-html',tmpl)
        this.isAudio  = cookie.get('audio',namespace)
    },
    setEvents(core) {
        const { namespace } = core.config
        this.registeDom(namespace)
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
    registeDom(namespace) {
        this.audio = document.getElementById(`${namespace}-audio-media`) || ''
        this.audioTab = document.getElementById(`${namespace}-audio`) || ''
        this.audioTabImg =  this.audioTab.getElementsByTagName('img')[0]

        this.speed =  cookie.get('speed',namespace)
        this.speedTab =  document.getElementById(`${namespace}-audio-speed`) || ''
        this.speedTabImg =   this.speedTab.getElementsByTagName('img')[0]

        this.pointeReadTab =  document.getElementById(`${namespace}-pointeread`) || ''
    },
    toggleAudio() {
        const { namespace } = Audio
        this.audioTab.onclick = () => {
            if(this.isAudio) {
                this.closeAudio()
            }else {
                this.showAudio()
                Audio.playAudio(audioTabText.audioOpen)
            }
        } 

        this.speedTab.onclick = () => {
            if(this.speed == 'middle') {
                this.speed = 'fast'
                this.speedTabImg.src =  this.speedTabImg.getAttribute('selected-src')
                Audio.playAudio(audioTabText.speedQuick)
            } else {
                this.speed = 'middle'
                this.speedTabImg.src =  this.speedTabImg.getAttribute('source-src')
                Audio.playAudio(audioTabText.speedMiddle)
            }
            cookie.set('speed', this.speed, namespace)
        }

        this.pointeReadTab.onclick = () => {
            this.showAudio(); 
            Audio.playAudio(audioTabText.pointeread)
        }



    },
    showAudio() {
        const { namespace } = Audio
        this.isAudio = true
        this.addEventMove()
        cookie.set('audio', true, namespace)
        this.audioTabImg.src = this.audioTabImg.getAttribute('source-src')
    },
    closeAudio() {
        const { namespace } = Audio
        this.isAudio = false
        this.audio.pause()
        this.removeEventMove()
        cookie.set('audio', false, namespace)
        this.audioTabImg.src = this.audioTabImg.getAttribute('selected-src')
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
        var __text = parseTagText(target).replace(symbolsReg,'')
        var __parentNodeId  =  target.parentNode.id
        var __isAssist = __parentNodeId.indexOf(Audio.namespace) > -1
        
        if(__text == '' || trim(__text) == '文本' || __isAssist ) {
            return
        }
        Audio.playAudio(__text)
    },
    playAudio(text) {
        const { namespace, AudioApi, isAudio, audio, speed, forceSafariPlayAudio } = Audio

        if(!isAudio) {
            return
        }
       
       let __speed = speed == 'middle' ? 5 : 7
       let  AudioParam = `lan=zh&ie=UTF-8&spd=${__speed}&text=${encodeURI(text)}`
       let AudioUrl = `${AudioApi}?${AudioParam}`
        audio.src = AudioUrl
        document.getElementById(`${namespace}-audio-source`).src =  AudioUrl
        document.getElementById(`${namespace}-audio-embed`).src =  AudioUrl
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
        this.closeAudio()
        this.speedTabImg.src = this.speedTabImg.getAttribute('source-src')
        this.speed =  'middle'
        cookie.set('speed', 'middle', namespace)
    }   
        
};

export default Audio;