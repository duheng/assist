import { cookie } from './utils'

export default class Base {
    constructor() {
      this.config = {
        namespace: 'mozi-assist',
        url: ''
      };
      this.registeOpen()
    }

    mergeConfig(opts) {
      this.config = { ...this.config, ...opts }; 
      this.creatContainer()
    }
  
    use(plugin, ...args) {
      plugin.init(this, ...args);
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
          this.isShowTopBar(true)
        }
      }
    }

    close() {
      this.isShowTopBar(false)
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
        document.body.style = 'none'
        activeBtn.style.display = 'none'
        cookie.remove(namespace)
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

    creatStyle(id, css) {
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
        document.getElementById(namespace).appendChild(DomContainer)
    }
  }
  