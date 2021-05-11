import Cookies from 'js-cookie'

export default class Base {
    constructor() {
    
      this.config = {
        namespace: 'qunar-assist',
        url: '',
        
      };
      this.creatContainer()
      this.show()

    }

    mergeConfig(opts) {
      this.config = { ...this.config, ...opts }; 
    }
  
    use(plugin, ...args) {
      plugin.init(this, ...args);
    }

    creatContainer() {
      const { namespace } = this.config
      const Container = document.createElement("div");
      Container.id = namespace
      document.body.appendChild(Container)
      
    }

    show() {
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
        Cookies.set(namespace, true, { domain: '.qunar.com' })

      }else {
        document.body.style = 'none'
        activeBtn.style.display = 'none'
        Cookies.remove(namespace, { domain: '.qunar.com'})

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
  