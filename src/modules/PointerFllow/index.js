               
import cookie from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const PointerFllow = {
    init(core) {
        const { namespace } = core.config
        this.body =  document.body
        core.creatStyle('pointer-follow-style',styles)
        core.creatHtml('pointer-follow-html',tmpl)
        this.setEvents(core, namespace)
        if(cookie.get('pointer',namespace)) {
            this.show(core)
        }
    },
    setEvents(core, namespace) {
        this.togglePointer(core, namespace)
       
    },
    addEventMove(core) {
        core.addEvent(this.body,'mousemove',this.mouseMove)
    },
    removeEventMove(core) {
        core.removeEvent(this.body,'mousemove',this.mouseMove)
    },
    togglePointer(core, namespace) {
        const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`)
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        tabBarBtn.onclick = () => {
            if( activeBtn.style.display == 'block' ) {
                this.reset(core)
            } else {
                this.show(core)
            }
        }
    },
    mouseMove(event){
        var event = window.event || event;
        var pointerX = document.getElementById("pointer-follow-html-x"),
        pointerY = document.getElementById("pointer-follow-html-y");
        pointerX.style.top = event.clientY - 10 + "px";
        pointerY.style.left = event.clientX - 10 + "px";
    },
    show(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        activeBtn.style.display = 'block'
        this.addEventMove(core)
        cookie.set('pointer',true,namespace)
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        activeBtn.style.display = 'none'
        this.removeEventMove(core)
        cookie.set('pointer',false,namespace)
    }
};

export default PointerFllow;