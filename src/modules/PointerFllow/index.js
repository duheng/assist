import styles from './index.scss'
import tmpl from './index.tmpl.js'
const PointerFllow = {
    init(core) {
        const { namespace } = core.config
        core.creatStyle('pointer-follow-style',styles)
        core.creatHtml('pointer-follow-html',tmpl)
        this.setEvents(namespace)

    },
    setEvents(namespace) {
        document.onmousemove = this.mouseMove; 
        this.togglePointer(namespace)
    },
    togglePointer(namespace) {
        const tabBarBtn = document.getElementById(`${namespace}-pointer-follow`)
        const activeBtn =  document.getElementById(`${namespace}-pointer-follow-html`)
        tabBarBtn.onclick = () => {
            if( activeBtn.style.display == 'block' ) {
                activeBtn.style.display = 'none'
            } else {
                activeBtn.style.display = 'block'
            }
        }
    },
    mouseMove(event){
        var event = window.event || event;
        var pointerX = document.getElementById("pointer-follow-html-x"),
        pointerY = document.getElementById("pointer-follow-html-y");
        pointerX.style.top = event.clientY - 10 + "px";
        pointerY.style.left = event.clientX - 10 + "px";
    }
};

export default PointerFllow;