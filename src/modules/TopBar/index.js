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

        const BtnClose = document.getElementById(`${namespace}-close`)
        const BtnReset = document.getElementById(`${namespace}-reset`)

        BtnClose.onclick = () => {
            core.close()
        }

        BtnReset.onclick = () => {
            core.resetAction()
        }
    }
};

export default TopBar;