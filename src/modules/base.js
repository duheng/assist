import Cookies from 'js-cookie'

export default class Base {
    constructor() {
    
      this.config = {
        namespace: 'qunar-assist',
        url: '',
        
      };
     
      this.eventShow()

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

    eventShow() {
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
        location.reload()
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

    parseTagText(target) {
      if (target.children.length === 0){
          if (target.role === 'A' || target.tagName === 'A') {
              console.log('这是一个链接:' + target.innerText);
              return `链接 ${target.innerText}`;
          }
          if (target.role === 'IMG' ||target.tagName === 'IMG') {
              console.log('这是一张图片:' + target.alt || target.title);
              return `图片 ${target.alt || target.title}`;
          }
          if (target.role === 'BUTTON' ||target.tagName === 'BUTTON') {
              console.log('这是一个按钮:' +  target.innerText);
              return `按钮 ${target.innerText}`;
          }
          if (!!target.innerText && target.innerText != 'undefined'){
              console.log(`文本 ${target.innerText}`);
              return `文本 ${target.innerText || target.alt || target.title}`;
          }
          return ''
          
      } else {
        return ''
      }
    }

    addEvent(element, type, callback) {
      if(element.addEventListener){
          element.addEventListener(type, callback, false);
      } else if(element.attachEvent){
          element.attachEvent('on' + type, callback);
      } else {
          element['on' + type] = callback;
      }
    }

    removeEvent(element, type, callback) {
      if(element.removeEventListener){
          element.removeEventListener(type, callback);
      } else if(element.detachEvent){
          element.detachEvent('on' + type, callback);
      } else {
          element['on' + type] = null;
      }
    }
   
  }
  