const ZoomPage = {
    init(core) {
        const { namespace } = core.config
        this.setEvents(namespace)
        this.size = 1.0
        this.ignore = ['LINK','SCRIPT']
        this.namespace = namespace
    },
    setEvents(namespace) {
       // document.onmousedown = this.mouseDown; 
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
        this.size = this.size + 0.1;  
        this.set(); 
    },
    zoomMin() {
        if(this.size <= 1.0) {
            console.log('已最小')
            return
        }
        this.size = this.size - 0.1;  
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
    }     
        
};

export default ZoomPage;