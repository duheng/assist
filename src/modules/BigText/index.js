import { cookie, addEvent, removeEvent, parseTagText } from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const BigText = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        this.namespace = namespace
        core.creatStyle('bigtext-style',styles)
        core.creatHtml('bigtext-html',tmpl)
        this.setEvents(core, namespace)
        if(cookie.get('bigtext',namespace)) {
            this.show(core)
        }
    },
    setEvents(core, namespace) {
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
        tabBarBtn.onclick = () => {
             const activeBtn = document.getElementById(`${namespace}-bigtext-html`)
             if( activeBtn.style.display == 'block' ) {
                this.reset(core)
             } else {
                this.show(core)
             }
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
        activeBtn.style.display = 'block'
        this.addEventMove()
        cookie.set('bigtext', true, namespace)
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-bigtext-html`)
        activeBtn.style.display = 'none'
        this.removeEventMove()
        cookie.set('bigtext', false, namespace)
    }
};

export default BigText;