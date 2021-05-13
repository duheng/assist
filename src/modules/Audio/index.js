import { ajax, addEvent, removeEvent, parseTagText } from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const Audio = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        this.namespace = namespace
        core.creatStyle('audio-style',styles)
        core.creatHtml('audio-html',tmpl)
        this.setEvents()
        console.log('init--Audio->', this.namespace)
    },
    setEvents() {
        this.addEventMove()
    },
    addEventMove() {
        addEvent(this.body,'mouseover',this.mouseOver)
    },
    removeEventMove() {
       removeEvent(this.body,'mouseover',this.mouseOver)
    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target;
        const { namespace } = Audio
        var __text = encodeURI(parseTagText(target))
        var __url = `http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=${__text}`
        // document.getElementById(`${namespace}-audio-source`).setAttribute('src',__url)
       // document.getElementById(`${namespace}-audio`).play();
        let __audio = `<audio autoplay='autoplay' controls='controls'>
        <source src='${__url}'>
        <embed height="0" width="0"  src='${__url}'>
        </audio>`
        document.getElementById(`${namespace}-audio-html`).innerHTML = __audio
       // qunar-assist-audio-html
    },
    reset() {
       
    }   
        
};

export default Audio;