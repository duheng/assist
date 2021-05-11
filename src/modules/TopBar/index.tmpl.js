const topBarHtml = (namespace) => {
  console.log('namespace+++++++',namespace)
     return `<div class='topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <i></i>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item'>
          <span>声音开关</span>
          <i></i>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <i></i>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item'>
          <span>鼠标样式</span>
          <i></i>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <i></i>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <i></i>
        </div>
        <div id='${namespace}-info' class='topbar-html-content-item'>
          <span>说明</span>
          <i></i>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出</span>
          <i></i>
        </div>
      </div>`
}

export default topBarHtml;