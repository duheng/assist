import styles from './index.scss'
import tmpl from './index.tmpl.js'
const TopBar = {
    init(core) {
      
        core.creatStyle('topbar-style',styles)
        core.creatHtml('topbar-html',tmpl)
        this.setEvents(core)

    },
    setEvents(core) {
        const { namespace } = core.config
        const Btn = document.getElementById(`${namespace}-close`)
        Btn.onclick = () => {
            core.close()
        }
        // document.onmousemove = this.mouseMove; 
        // this.togglePointer(namespace)
    }
};

export default TopBar;