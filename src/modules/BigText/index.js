import cookie from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const BigText = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        this.namespace = namespace
        this.parseTagText = core.parseTagText
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
    addEventMove(core) {
        core.addEvent(this.body,'mouseover',this.mouseMove)
    },
    removeEventMove(core) {
        core.removeEvent(this.body,'mouseover',this.mouseMove)
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
        const { parseTagText, namespace } = BigText
        const activeBtn = document.getElementById(`${namespace}-bigtext-content`)
        activeBtn.innerText = BigText.parseTagText(target)
    },
    show(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-bigtext-html`)
        activeBtn.style.display = 'block'
        this.addEventMove(core)
        cookie.set('bigtext', true, namespace)
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-bigtext-html`)
        activeBtn.style.display = 'none'
        this.removeEventMove(core)
        cookie.set('bigtext', false, namespace)
    }
};

export default BigText;