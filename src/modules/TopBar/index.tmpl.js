import reset from '../../assets/reset.png';
import audio from '../../assets/audio.png';
import speed from '../../assets/speed.png';
import zoomout from '../../assets/zoomout.png';
import zoomin from '../../assets/zoomin.png';
import cursor from '../../assets/cursor.png';
import pointer from '../../assets/pointer.png';
import bigtext from '../../assets/bigtext.png';
import close from '../../assets/close.png';





const topBarHtml = (namespace) => {
     return `<div class='topbar-html-content'>
        <div id='${namespace}-reset' class='topbar-html-content-item'>
          <span>重置</span>
          <img src='${reset}'></img>
        </div>
        <div id='${namespace}-audio' class='topbar-html-content-item topbar-html-margin0'>
          <span>声音开关</span>
          <img src='${audio}'></img>
        </div>
        <div id='${namespace}-audio-speed' class='topbar-html-content-item topbar-html-mright'>
          <span>语速</span>
          <img src='${speed}'></img>
        </div>
        <div id='${namespace}-zoom-out' class='topbar-html-content-item'>
          <span>放大</span>
          <img src='${zoomout}'></img>
        </div>
        <div id='${namespace}-zoom-min' class='topbar-html-content-item topbar-html-mright'>
          <span>缩小</span>
          <img src='${zoomin}'></img>
        </div>
        <div id='${namespace}-cursor-auto' class='topbar-html-content-item topbar-html-margin0'>
          <span>鼠标样式</span>
          <img src='${cursor}'></img>
        </div>
        <div id='${namespace}-pointer-follow' class='topbar-html-content-item'>
          <span>十字线</span>
          <img src='${pointer}'></img>
        </div>
        <div id='${namespace}-bigtext' class='topbar-html-content-item topbar-html-mright'>
          <span>大字幕</span>
          <img src='${bigtext}'></img>
        </div>
        <div id='${namespace}-close' class='topbar-html-content-item'>
          <span>退出服务</span>
          <img src='${close}'></img>
        </div>
      </div>`
}

export default topBarHtml;