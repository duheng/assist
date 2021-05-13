import { cookie } from './utils'

const ZoomPage = {
    init(core) {
        const { namespace } = core.config
        this.setEvents(namespace)
        this.size = cookie.get('zomm',namespace) || 1.0
        this.ignore = ['LINK','SCRIPT']
        this.namespace = namespace
        this.set()
    },
    setEvents(namespace) {
       document.getElementById(`${namespace}-zoom-out`).onclick = () => {
        this.zoomOut() 
       }

       document.getElementById(`${namespace}-zoom-min`).onclick = () => {
        this.zoomMin() 
       }
    },
    zoomOut() {
        if(this.size >= 1.3) {
            console.log('已最大')
            return
        }
        this.size = parseFloat((this.size+0.1).toFixed(10));  
        this.set(); 
    },
    zoomMin() {
        if(this.size <= 1.0) {
            console.log('已最小')
            return
        }
        this.size = parseFloat((this.size-0.1).toFixed(10));  
        this.set(); 
    },
    set() {  
        [].forEach.call( document.body.children, (el)=> {
            const __el = el.tagName.toUpperCase()
            if(this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
                return
            }
            el.style.transform = `scale(${this.size})`
            el.style.transformOrigin = '0px 0px'
        });
        cookie.set('zomm', this.size, this.namespace)
    },
    reset() {
        this.size = 1.0
        this.set()
    }   
        
};

export default ZoomPage;