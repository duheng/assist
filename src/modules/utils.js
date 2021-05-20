import Cookies from 'js-cookie'

const cookie = {
    set:(key,value, namespace) => {
     let memory = {
        show: false,   // 是否展示无障碍
        audio: true,  // 是否开启声音
        speed: 'middle', // 语速
        zomm: 0.1,     // 缩放倍数
        cursor: false, // 是否替换鼠标样式
        pointer: false,// 是否开启十字线
        bigtext: false,// 是否开启大字幕
        overead: false // 是否开启指读
      }

     if(Cookies.get(namespace)) {
        memory = JSON.parse(Cookies.get(namespace))
     }
     memory[key] = value
     Cookies.set(namespace, JSON.stringify(memory) , { domain: '.qunar.com' })
    },
    get:(key, namespace)=> {
        let __key = ''
       if(Cookies.get(namespace)) {
           __key =  JSON.parse(Cookies.get(namespace))[key]
       }
       return __key
    },
    remove: (namespace) => {
        Cookies.remove(namespace, { domain: '.qunar.com'})
    }
}

const addEvent = (element, type, callback) => {
    if(element.addEventListener){
        element.addEventListener(type, callback, false);
    } else if(element.attachEvent){
        element.attachEvent('on' + type, callback);
    } else {
        element['on' + type] = callback;
    }
}

const removeEvent = (element, type, callback) => {
    if(element.removeEventListener){
        element.removeEventListener(type, callback);
    } else if(element.detachEvent){
        element.detachEvent('on' + type, callback);
    } else {
        element['on' + type] = null;
    }
}

const parseTagText = (target) => {
    if (target.children.length === 0  ){
        if (target.role === 'IMG' ||target.tagName === 'IMG') {
            console.log('这是一张图片:' + target.alt || target.title);
            return `图片 ${target.alt || target.title}`;
        }
        if (target.role === 'BUTTON' ||target.tagName === 'BUTTON') {
            console.log('这是一个按钮:' +  target.innerText);
            return `按钮 ${target.alt || target.title || target.innerText}`;
        }
        if (target.role === 'INPUT' ||target.tagName === 'INPUT') {
            if(target.type == 'radio') {
                console.log('这是一个单选框:' + target);
                return `单选框 ${target.alt || target.title || target.value}`;
            }else if(target.type == 'checkbox') {
                console.log('这是一个复选框:' + target.alt || target.title || target.value);
                return `复选框 ${target.alt || target.title || target.value}`;
            }
            
            console.log('这是一个输入框:' + target.alt || target.title || target.value);
            return `输入框 ${target.alt || target.title || target.value}`;
        }

        if (target.alt || target.title || target.innerText){
            console.log(`文本 ${target.alt || target.title || target.innerText}`);
            return `文本 ${target.alt || target.title || target.innerText}`;
        }
    
        return ''
    } 

    if (target.role === 'A' || target.tagName === 'A') {
        console.log('这是一个链接:' + target.alt || target.title || target.innerText);
        return `链接 ${target.alt || target.title || target.innerText}`;
    }
    return ''
    
}

const triggerEvent = (element, eventType) =>{
    var e;
    if(element.dispatchEvent){//正常情况
        e = new Event(eventType);
        element.dispatchEvent(e);
    }else if(element.fireEvent){//IE
        e = document.createEventObject();
        e.button = 1;
        element.fireEvent('on'+eventType,e);
    }else if(element['on'+eventType]){
        element['on'+eventType].call();
    }
}

const ajax = {
    get: (url, fn) => {
      // XMLHttpRequest对象用于在后台与服务器交换数据   
      var xhr = new XMLHttpRequest();            
      xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
        // readyState == 4说明请求已完成
        if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
          // 从服务器获得数据 
          fn(xhr.responseText);  
        }
      };
      xhr.send();
    },
    // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
    post:  (url, data, fn) => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      // 添加http头，发送信息至服务器时内容编码类型
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
          fn(xhr.responseText);  
        }
      };
      xhr.send(data);
    }
  }

/**
 * 判断是否是IE
 */
const isIE = () => {
    if (!!window.ActiveXobject || "ActiveXObject" in window) {
        return true;
    } else {
        return false;
    }
}
/**
 * 判断是否是IE11
 */
const isIE11 = () => {
    if((/Trident\/7\./).test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}
const removeNode = (item) => {
　　if( isIE()||isIE11() ) {
        item.removeNode(true);
　　} else {
    　　item.remove();
   }
}
export {
    cookie,
    addEvent,
    removeEvent,
    parseTagText,
    ajax,
    triggerEvent,
    removeNode
};