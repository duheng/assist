const topBarHtml = (namespace) => {
  console.log('namespace+++++++',namespace)
     return `<div class='topbar-html-content'>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <i></i>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item'>
          <span>缩小</span>
          <i></i>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item topbar-html-mright'>
          <span>十字线</span>
          <i></i>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item'>
          <span>鼠标样式</span>
          <i></i>
        </div>
      </div>`
}

export default topBarHtml;