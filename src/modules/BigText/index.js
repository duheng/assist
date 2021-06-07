import { cookie, addEvent, removeEvent, parseTagText } from '../utils'
import audioTabText from '../constans'
import Audio from '../Audio';

import styles from './index.scss'
import tmpl from './index.tmpl.js'
const BigText = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        this.namespace = namespace
        core.creatStyle('bigtext-style',styles)
        core.creatHtml('bigtext-html',tmpl)
    },
    setEvents(core) {
      const { namespace } = core.config
      addEvent(window,'DOMContentLoaded',()=>{
        if(cookie.get('bigtext',namespace)) {
            this.show(core)
        }
      })
      this.toggleBigText(core, namespace)
    },
    addEventMove() {
       addEvent(this.body,'mouseover',this.mouseOver)
    },
    removeEventMove() {
      removeEvent(this.body,'mouseover',this.mouseOver)
    },
    toggleBigText(core, namespace) {
        const tabBarBtn = document.getElementById(`${namespace}-bigtext`)
        const tabBarBtnClose = document.getElementById(`${namespace}-bigtext-close`)
        tabBarBtn.onclick = () => {
             const activeBtn = document.getElementById(`${namespace}-bigtext-html`)
             if( activeBtn.style.display == 'block' ) {
                this.reset(core)
                Audio.playAudio(audioTabText.bigtextClose)
             } else {
                this.show(core)
                Audio.playAudio(audioTabText.bigtextOpen)
             }
        }

        tabBarBtnClose.onclick = ()=> {
            this.reset(core)
            Audio.playAudio(audioTabText.bigtextClose)
        }
    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target || event.srcElement;
        const { namespace } = BigText
        var __parentNodeId  =  target.parentNode.id
        var __isAssist = __parentNodeId.indexOf(namespace) > -1
        const activeBtn = document.getElementById(`${namespace}-bigtext-content`)
        activeBtn.innerText = parseTagText(target)
        if(__isAssist) {
            activeBtn.innerText = ''
            return
        }
        activeBtn.innerText = parseTagText(target)
    },
    show(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-bigtext-html`)
        const tabBar = document.getElementById(`${namespace}-bigtext-bone`)
        activeBtn.style.display = 'block'
        tabBar.className = 'bigtext-html-bone'
        this.addEventMove()
        cookie.set('bigtext', true, namespace)
        core.message.publish('bigTextState',true)
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-bigtext-html`)
        const tabBar = document.getElementById(`${namespace}-bigtext-bone`)
        activeBtn.style.display = 'none'
        tabBar.className = ''
        this.removeEventMove()
        cookie.set('bigtext', false, namespace)
        core.message.publish('bigTextState',false)
    }
};

export default BigText;