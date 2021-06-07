import { cookie , addEvent, removeEvent } from './utils'
import pubSub from './pubSub'

export default class Base {
    constructor() {
      this.config = {
        namespace: 'mozi-assist',
        url: ''
      };
      this.message = pubSub
      this.tmplStyle = []
      this.tmplHtml = []
      this.registeOpen()
    }

    mergeConfig(opts) {
      this.config = { ...this.config, ...opts }; 
      this.creatContainer()
    }
  
    use(plugin, ...args) {
      plugin.init(this, ...args);
    }

    useEvent(plugin, ...args) {
      plugin.setEvents(this, ...args);
    }

    creatContainer() {
      const { namespace } = this.config
      if(document.getElementById(namespace)) {
        return
      }
      const Container = document.createElement("div");
      Container.id = namespace
      document.body.appendChild(Container)
     
    }

    registeOpen() {
      if(document.getElementById('assist-open')) {
        document.getElementById('assist-open').onclick = ()=> {
          if(!this.existIgnore()) {
            this.show()
            this.message.publish('openState',true)
          }
        }
      }
    }

    isShow() {
      const { namespace } = this.config
      addEvent(window,'DOMContentLoaded',()=>{
        if(cookie.get('show',namespace) && !this.existIgnore()) {
          this.isShowTopBar(true)
          this.message.publish('openState',true)
        } else {
          this.message.publish('openState',false)
        }
      })
    }

    existIgnore() {
      const { namespace } = this.config
      const { origin, pathname } = location
      const __key = `${origin}${pathname}`
      return cookie.getTag(namespace).includes(__key)
    }

    show() {
      this.isShowTopBar(true)
    }

    close() {
      this.isShowTopBar(false)
    }

    showTag() {
      const { namespace } = this.config
      cookie.setTag(namespace)
      cookie.set('show',true, namespace)
      this.resetAction()
    }

    isShowTopBar(isShow) {
      const { namespace } = this.config
      const activeBtn =  document.getElementById(`${namespace}-topbar-html`)
      if(isShow) {
        document.body.style.marginTop = '100px'
        activeBtn.style.display = 'block'
        cookie.set('show',true, namespace)
        this.hideModules()
      } else {
        if(document.body.style.cssText) {
          document.body.style.cssText = ''
        } else {
          document.body.style = ''
        }
        //activeBtn.style.display = 'none'
        cookie.remove(`${namespace}`)
        location.reload()
      }
     
    }

    hideModules() {
      const { namespace } = this.config
      const classList = document.getElementsByClassName(`${namespace}-hide`)
      for(let i=0;i< classList.length;i++){
          classList[i].style.display = 'none'
      }
    }

    creatStyle(id, css, flag = false) {
      if(!flag) {
        this.tmplStyle.push(css)
      } else {
        const { namespace } = this.config
        let styleNode = document.createElement('style')
        styleNode.type  = 'text/css'
        styleNode.id = `${namespace}-${id}`
        styleNode.className = id
        if(styleNode.styleSheet) {
            styleNode.styleSheet.cssText = css;  
        } else {
            styleNode.innerHTML = css
        }
        document.getElementsByTagName('head')[0].appendChild(styleNode);  
      }
    }

    creatHtml(id,htmlFn) {
        const { namespace } = this.config
        const DomContainer = document.createElement("div");
        DomContainer.id = `${namespace}-${id}`
        DomContainer.className = id
        DomContainer.style.display = 'none'
        if(typeof(htmlFn) !== 'function') {
           console.error('htmlFn不是一个函数')
           return
        }
        const __html = htmlFn(namespace)
        DomContainer.innerHTML = __html
        this.tmplHtml.push(DomContainer.outerHTML)
    }

    registeHtml() {
      const { namespace } = this.config
      document.getElementById(namespace).innerHTML = this.tmplHtml.join('')
    }

    registeStyle() {
      const { namespace } = this.config
      let styleNode = document.createElement('style')
      styleNode.type  = 'text/css'
      styleNode.id = `${namespace}-style`
      let __css = this.tmplStyle.join('\n')
      if(styleNode.styleSheet) {
          styleNode.styleSheet.cssText = __css;  
      } else {
          styleNode.innerHTML = __css
      }
      document.getElementsByTagName('head')[0].appendChild(styleNode); 
    }

    formatLongText() {
      const { namespace } = this.config
      const longText = document.getElementsByClassName(`${namespace}-long-text`) || [];
      [].forEach.call( longText, (el)=> {
        const __el = el.innerText.split('。')
        let __elItem = []
        __el.map(item=> {
          __elItem.push(`<label>${item}</label>`)
        })
        el.innerHTML = __elItem.join('。')
      });
    }
    
  }
  