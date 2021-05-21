import { cookie } from './modules/utils'

import Base from './modules/base';
import TopBar from './modules/TopBar';
import Audio from './modules/Audio';
import ZoomPage from './modules/ZoomPage';
import PointerFllow from './modules/PointerFllow';
import CursorAuto from './modules/CursorAuto';
import BigText from './modules/BigText';

const InitModules = [ TopBar, Audio, ZoomPage, PointerFllow, CursorAuto, BigText ]
class Assist extends Base {
  
    constructor(opts = {}) {
      super(opts);
      // 合并参数
      this.mergeConfig(opts);
      this.init();
      this.isShow();
      this.resetAction = this.reset
    }

    init() {
      InitModules.map(item=>this.use(item))
      this.registeHtml()
      InitModules.map(item=>this.useEvent(item))
    }
    
    reset() {
      Audio.reset()
      ZoomPage.reset()
      CursorAuto.reset(this)
      PointerFllow.reset(this)
      BigText.reset(this)
    }
   
  }
  export default Assist;
