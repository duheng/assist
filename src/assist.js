import { cookie } from './modules/utils'

import Base from './modules/base';
import TopBar from './modules/TopBar';
import Audio from './modules/Audio';
import ZoomPage from './modules/ZoomPage';
import PointerFllow from './modules/PointerFllow';
import CursorAuto from './modules/CursorAuto';
import BigText from './modules/BigText';
class Assist extends Base {
  
    constructor(opts = {}) {
      super(opts);
      // 合并参数
      this.mergeConfig(opts);
      this.init();
      if(cookie.get('show',this.config.namespace)) {
        this.isShowTopBar(true)
      }
      this.resetAction = this.reset
    }
  
    init() {
      this.use(TopBar);
      this.use(Audio);
      this.use(ZoomPage);
      this.use(PointerFllow);
      this.use(CursorAuto);
      this.use(BigText);
    }
    reset() {
      ZoomPage.reset()
      CursorAuto.reset(this)
      PointerFllow.reset(this)
      BigText.reset(this)
    }
    
  }
  export default Assist;
