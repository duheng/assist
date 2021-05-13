import { cookie } from '../utils'
import styles from './index.scss'
const CursorAuto = {
    init(core) {
        const { namespace } = core.config
        this.setEvents(core,namespace)
        if(cookie.get('cursor',namespace)) {
            core.creatStyle('cursor-auto-style',styles)
        }
    },
    setEvents(core,namespace) {
       const tabBarBtn = document.getElementById(`${namespace}-cursor-auto`)
       tabBarBtn.onclick = () => {
            const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`)
            if(activeBtn) {
                activeBtn.remove()
                cookie.set('cursor', false, namespace)
            } else {
                cookie.set('cursor', true, namespace)
                core.creatStyle('cursor-auto-style',styles)
            }
       }
    },
    reset(core) {
        const { namespace } = core.config
        const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`)
        activeBtn && activeBtn.remove()
    }
        
};

export default CursorAuto;