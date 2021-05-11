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
        
        this.size = this.size + 0.1;  
        this.set(); 
    },
    zoomMin() {
        this.size = this.size - 0.1;  
        this.set(); 
    },
    set() {  
        [].forEach.call( document.body.children, (el)=> {
            const __el = el.tagName.toUpperCase()
            if(this.ignore.indexOf(__el) > -1 || el.id == this.namespace) {
                return
            }
            el.style.zoom = this.size;
            el.style.cssText += '; -moz-transform: scale(' + this.size + ');-moz-transform-origin: 0 0; '; 
            
        });
    }     
        
};

export default ZoomPage;