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
       addEvent(this.body,'mouseover',this.mouseMove)
    },
    removeEventMove() {
      removeEvent(this.body,'mouseover',this.mouseMove)
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
    mouseMove(event){
        var event = window.event || event;
        var target = event.target;
        const { namespace } = BigText
        const activeBtn = document.getElementById(`${namespace}-bigtext-content`)
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