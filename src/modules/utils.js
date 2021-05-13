import Cookies from 'js-cookie'

const cookie = {
    set:(key,value, namespace) => {
     let memory = {
        show: false,   // 是否展示无障碍
        audio: false,  // 是否开启声音
        speed: 'slow', // 语速
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

export {
    cookie,
    addEvent,
    removeEvent,
    parseTagText
};