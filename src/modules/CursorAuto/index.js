import styles from './index.scss'
const CursorAuto = {
    init(core) {
        const { namespace } = core.config
        this.setEvents(core,namespace)
        
    },
    setEvents(core,namespace) {
       const tabBarBtn = document.getElementById(`${namespace}-cursor-auto`)
       tabBarBtn.onclick = () => {
            const activeBtn = document.getElementById(`${namespace}-cursor-auto-style`)
            if(activeBtn) {
                activeBtn.remove()
            } else {
                core.creatStyle('cursor-auto-style',styles)
            }
       }
    },
        
};

export default CursorAuto;