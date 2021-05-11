import styles from './index.scss'
import tmpl from './index.tmpl.js'
const TopBar = {
    init(core) {
        const { namespace } = core.config
        core.creatStyle('topbar-style',styles)
        core.creatHtml('topbar-html',tmpl)
        this.setContainer(namespace)

    },
    setContainer(namespace) {
        
    }
};

export default TopBar;