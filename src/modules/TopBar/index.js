import { cookie, addEvent, removeEvent } from '../utils'
import styles from './index.scss'
import tmpl from './index.tmpl.js'
const TopBar = {
    init(core) {
        const { namespace } = core.config
        this.namespace = namespace
        core.creatStyle('topbar-style',styles)
        core.creatHtml('topbar-html',tmpl)
        this.setEvents(core)
        
    },
    setEvents(core) {

        const { namespace } = core.config

        const BtnClose = document.getElementById(`${namespace}-close`)
        const BtnReset = document.getElementById(`${namespace}-reset`)
        const HoverItem = document.getElementById(`${namespace}-topbar-html-content`)

        BtnClose.onclick = () => {
            core.close()
        }

        BtnReset.onclick = () => {
            core.resetAction()
        }

        [].forEach.call( HoverItem.children, (el)=> {
           addEvent(el,'mouseover',this.mouseOver)
           addEvent(el,'mouseout',this.mouseOut)
        });


    },
    mouseOver(event){
        var event = window.event || event;
        var target = event.target || event.srcElement;
        if(target.tagName !== 'IMG') {
            return
        }
        const __name = target.getAttribute('name')
        const __hover = target.getAttribute('hover-src')

        if(__name == 'audio') {
            if(cookie.get('audio',TopBar.namespace)) {
             console.log('11111',cookie.get('audio',TopBar.namespace))
             target.src = __hover
            } else {
                console.log('22222')
             target.src = target.getAttribute('selected-hover-src')
            }
         
        } else if (__name == 'speed') {
            if(cookie.get('speed',TopBar.namespace) == 'fast' ) {
            console.log('333',cookie.get('speed',TopBar.namespace))
              target.src = __hover
            } else {
                console.log('444')
              target.src = target.getAttribute('selected-hover-src')
            }
        } else {
            target.src = __hover
        }

       
    },
    mouseOut(event) {
        var event = window.event || event;
        var target = event.target || event.srcElement;
        if(target.tagName !== 'IMG') {
            return
        }
        const __name = target.getAttribute('name')
        const __source = target.getAttribute('source-src')
       // this.isAudio  = cookie.get('audio',TopBar.namespace)
       if(__name == 'audio') {
           if(cookie.get('audio',TopBar.namespace)) {
            console.log('11111',cookie.get('audio',TopBar.namespace))
            target.src = __source
           } else {
               console.log('22222')
            target.src = target.getAttribute('selected-src')
           }
        
       } else if (__name == 'speed') {
            if(cookie.get('speed',TopBar.namespace) == 'fast' ) {
            console.log('333',cookie.get('speed',TopBar.namespace))
            target.src = __source
            } else {
                console.log('444')
            target.src =  target.getAttribute('selected-src')
            }
       } else {
            target.src = __source
       }
       console.log('name-----', __name)
       
    }
};

export default TopBar;