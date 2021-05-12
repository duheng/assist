import styles from './index.scss'
import tmpl from './index.tmpl.js'
import ZoomPage from '../ZoomPage';
import PointerFllow from '../PointerFllow';
import BigText from '../BigText';
import CursorAuto from '../CursorAuto';
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
           // console.log('core----', core)
             ZoomPage.reset()
             PointerFllow.reset(core)
             BigText.reset(core)
             CursorAuto.reset(core)
        }
        // document.onmousemove = this.mouseMove; 
        // this.togglePointer(namespace)
    }
};

export default TopBar;