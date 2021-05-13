import Cookies from 'js-cookie'

 /**
     * 1 - 是否展示无障碍
     * 2 - 是否开启声音
     * 3 - 语速
     * 4 - 缩放倍数
     * 5 - 是否替换鼠标样式
     * 6 - 是否开启十字线
     * 7 - 是否开启大字幕
     * 8 - 是否开启指读
     * [0,0,'slow',0.0,0,]
     * **/
const cookie = {
    set:(key,value, namespace) => {
     let memory = {
         show: false,
         audio: false,
         speed: 'slow',
         zomm: 0.1,
         cursor: false,
         pointer: false,
         bigtext: false,
         overead: false
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
         //  console.log(key,'Cookies++++>', JSON.parse(Cookies.get(namespace))[key])
           __key =  JSON.parse(Cookies.get(namespace))[key]
       }
       console.log('__key+++++',__key)
       return __key
    },
    remove: (namespace) => {
        Cookies.remove(namespace, { domain: '.qunar.com'})
    }
}
export default cookie;