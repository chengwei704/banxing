(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  data() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var hh = h < 10 ? '0' + h : '' + h;
    var mm = m < 10 ? '0' + m : '' + m;
    var timeStr = hh + ':' + mm;
    return {
      greetingTime: timeStr,
      messages: [],
      inputText: ''
    };
  },
  onInput(e) {
    this.inputText = e.value;
  },
  onSend() {
    const text = this.inputText.trim();
    if (!text) return;
    this.sendMessage(text);
    this.inputText = '';
  },
  async sendMessage(input) {
    const time = new Date().toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
    this.messages.push({
      role: 'user',
      content: input,
      time
    });
    const reply = await this.getAIResponse(input);
    this.messages.push({
      role: 'assistant',
      content: reply,
      time: new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    });
  },
  getAIResponse(input) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('团团收到啦！✨ 我暂时是离线模式，但会一直陪着你。有什么需要随时问我~');
      }, 800);
    });
  }
};
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  data() {
    return {
      network: '加载中...',
      battery: '加载中...',
      location: '加载中...',
      timerId: null
    };
  },
  onReady() {
    var self = this;
    self.updateEnvData();
    self.timerId = setInterval(function () {
      self.updateEnvData();
    }, 5000);
  },
  onDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },
  updateEnvData: function () {
    var self = this;
    try {
      var battery = $app_require$('@app-module/system.battery');
      battery.getBatteryInfo({
        success: function (res) {
          var level = Math.round(res.level * 100);
          self.battery = level + '%';
        },
        fail: function () {
          self.battery = '获取失败';
        }
      });
    } catch (e) {
      self.battery = '不支持';
    }
    try {
      var network = $app_require$('@app-module/system.network');
      network.getNetworkType({
        success: function (res) {
          var map = {
            'wifi': 'Wi-Fi',
            '4g': '4G',
            '5g': '5G',
            '3g': '3G',
            '2g': '2G',
            'none': '无网络'
          };
          self.network = map[res.type] || res.type || '未知';
        },
        fail: function () {
          self.network = '获取失败';
        }
      });
    } catch (e) {
      self.network = '不支持';
    }
    try {
      var geolocation = $app_require$('@app-module/system.geolocation');
      geolocation.getLocation({
        success: function (res) {
          if (res.city) {
            self.location = res.city;
          } else if (res.address) {
            self.location = res.address;
          } else if (res.latitude && res.longitude) {
            self.location = '已定位 (' + res.latitude.toFixed(2) + ', ' + res.longitude.toFixed(2) + ')';
          } else {
            self.location = '已定位';
          }
        },
        fail: function () {
          self.location = '定位失败';
        }
      });
    } catch (e) {
      self.location = '不支持';
    }
  }
};}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  data() {
    return {
      depart: '杭州东站',
      arrive: '上海虹桥站',
      departTime: '10:00',
      arriveTime: '11:02',
      trainNo: 'G1223',
      remain: 32,
      estimated: '11:02',
      timerId: null
    };
  },
  onReady() {
    var self = this;
    this.timerId = setInterval(function () {
      if (self.remain > 0) {
        self.remain = self.remain - 0.5;
        if (self.remain < 0) self.remain = 0;
        var now = new Date();
        now.setMinutes(now.getMinutes() + Math.round(self.remain));
        self.estimated = now.toLocaleTimeString('zh-CN', {
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }, 5000);
  },
  onDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
};}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".env-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "20px",
    "paddingTop": "20px",
    "paddingRight": "18px",
    "paddingBottom": "22px",
    "paddingLeft": "18px",
    "flexDirection": "column",
    "width": "50%"
  },
  ".header": {
    "marginBottom": "16px"
  },
  ".title": {
    "fontSize": "16px",
    "fontWeight": "700",
    "color": "#1a2a4a"
  },
  ".body": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  ".item": {
    "flex": 1,
    "flexDirection": "column",
    "alignItems": "center"
  },
  ".label": {
    "fontSize": "12px",
    "color": "#8fa3c8",
    "marginBottom": "4px"
  },
  ".value": {
    "fontSize": "14px",
    "fontWeight": "600",
    "color": "#2d3a5e"
  },
  ".blue": {
    "color": "#4e7cff"
  }
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".trip-card": {
    "backgroundColor": "#ffffff",
    "borderRadius": "20px",
    "paddingTop": "16px",
    "paddingRight": "18px",
    "paddingBottom": "18px",
    "paddingLeft": "18px",
    "flexDirection": "column"
  },
  ".header": {
    "marginBottom": "12px"
  },
  ".title": {
    "fontSize": "16px",
    "fontWeight": "700",
    "color": "#1a2a4a"
  },
  ".body": {
    "flexDirection": "column"
  },
  ".row": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginBottom": "6px"
  },
  ".center-row": {
    "justifyContent": "center"
  },
  ".label": {
    "fontSize": "13px",
    "color": "#8fa3c8",
    "width": "50px",
    "flexShrink": 0
  },
  ".value": {
    "fontSize": "14px",
    "fontWeight": "600",
    "color": "#1a2a4a",
    "flex": 1
  },
  ".train-no": {
    "color": "#4e7cff"
  },
  ".time": {
    "fontSize": "12px",
    "color": "#5a6d8a",
    "width": "50px",
    "textAlign": "right",
    "flexShrink": 0
  },
  ".progress-row": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": "10px",
    "paddingTop": "10px",
    "borderTopWidth": "1px",
    "borderTopStyle": "solid",
    "borderTopColor": "#f0f4fa"
  },
  ".progress-text": {
    "fontSize": "13px",
    "color": "#2d3a5e"
  }
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".page": {
    "flex": 1,
    "backgroundColor": "#f0f4ff",
    "flexDirection": "column"
  },
  ".nav-bar": {
    "height": "56px",
    "paddingTop": "0px",
    "paddingRight": "16px",
    "paddingBottom": "0px",
    "paddingLeft": "16px",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "borderBottomWidth": "1px",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#eef2ff"
  },
  ".nav-left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  ".brand": {
    "fontSize": "18px",
    "fontWeight": "700",
    "color": "#1a2a4a"
  },
  ".tag": {
    "marginLeft": "10px",
    "backgroundColor": "#eef2ff",
    "borderRadius": "12px",
    "paddingTop": "2px",
    "paddingRight": "10px",
    "paddingBottom": "2px",
    "paddingLeft": "10px"
  },
  ".tag-text": {
    "fontSize": "11px",
    "color": "#4e7cff"
  },
  ".nav-right": {
    "fontSize": "22px"
  },
  ".scroll-area": {
    "flex": 1
  },
  ".scroll-inner": {
    "paddingTop": "16px",
    "paddingRight": "14px",
    "paddingBottom": "16px",
    "paddingLeft": "14px",
    "flexDirection": "column"
  },
  ".msg-row": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "width": "100%",
    "marginBottom": "12px"
  },
  ".msg-left": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "width": "100%"
  },
  ".msg-right": {
    "flexDirection": "row",
    "alignItems": "flex-start",
    "justifyContent": "flex-end",
    "width": "100%"
  },
  ".avatar": {
    "width": "46px",
    "height": "46px",
    "borderRadius": "23px",
    "backgroundColor": "#eef2ff",
    "overflow": "hidden",
    "flexShrink": 0,
    "marginRight": "10px"
  },
  ".avatar-img": {
    "width": "46px",
    "height": "46px"
  },
  ".bubble-wrap": {
    "flexDirection": "column",
    "maxWidth": "80%"
  },
  ".bubble": {
    "backgroundColor": "#ffffff",
    "borderRadius": "18px",
    "paddingTop": "14px",
    "paddingRight": "16px",
    "paddingBottom": "14px",
    "paddingLeft": "16px",
    "marginBottom": "4px"
  },
  ".bubble-user": {
    "backgroundColor": "#4e7cff",
    "borderRadius": "18px",
    "paddingTop": "14px",
    "paddingRight": "16px",
    "paddingBottom": "14px",
    "paddingLeft": "16px",
    "marginBottom": "4px"
  },
  ".bubble-user .bubble-text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bubble-user"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bubble-text"
        }
      ]
    }
  },
  ".bubble-text": {
    "fontSize": "14px",
    "color": "#2d3a5e",
    "lineHeight": "24px"
  },
  ".bubble-time": {
    "fontSize": "11px",
    "color": "#8fa3c8"
  },
  ".card-wrap": {
    "marginBottom": "12px",
    "borderRadius": "20px",
    "overflow": "hidden"
  },
  ".bottom-space": {
    "height": "8px"
  },
  ".input-bar": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "8px",
    "paddingRight": "14px",
    "paddingBottom": "16px",
    "paddingLeft": "14px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".input-field": {
    "flex": 1,
    "height": "44px",
    "backgroundColor": "rgba(255,255,255,0.8)",
    "borderRadius": "24px",
    "paddingLeft": "18px",
    "paddingRight": "16px",
    "marginRight": "10px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(100,150,255,0.2)",
    "borderRightColor": "rgba(100,150,255,0.2)",
    "borderBottomColor": "rgba(100,150,255,0.2)",
    "borderLeftColor": "rgba(100,150,255,0.2)",
    "fontSize": "14px",
    "color": "#2d3a5e"
  },
  ".send-btn": {
    "width": "44px",
    "height": "44px",
    "borderRadius": "22px",
    "backgroundColor": "#4e7cff",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".send-icon": {
    "fontSize": "18px",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "env-card"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "🌐 当前环境"
          },
          "classList": [
            "title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "body"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "网络"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.network}
              },
              "classList": [
                "value",
                "blue"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "电量"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.battery}
              },
              "classList": [
                "value"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "位置"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.location}
              },
              "classList": [
                "value"
              ],
              "style": {
                "textAlign": "right",
                "width": "100%"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "trip-card"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "🚄 当前行程"
          },
          "classList": [
            "title"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "body"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "row"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "出发地"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.depart}
              },
              "classList": [
                "value"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.departTime}
              },
              "classList": [
                "time"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "row",
            "center-row"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "车次"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.trainNo}
              },
              "classList": [
                "value",
                "train-no"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "row"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "目的地"
              },
              "classList": [
                "label"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.arrive}
              },
              "classList": [
                "value"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.arriveTime}
              },
              "classList": [
                "time"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "progress-row"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + '预计剩余时间 ' + (this.remain) + ' 分钟'}
              },
              "classList": [
                "progress-text"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return '' + '预计 ' + (this.estimated) + ' 到达'}
              },
              "classList": [
                "progress-text"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "nav-bar"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "nav-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "✦ 团团"
              },
              "classList": [
                "brand"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tag"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "陪你每一程"
                  },
                  "classList": [
                    "tag-text"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "nav-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "🕊"
              },
              "classList": [
                "icon"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "scroll-area"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "scroll-inner"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "msg-row"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "avatar"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/assets/images/avatar.png"
                      },
                      "classList": [
                        "avatar-img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "bubble-wrap"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return '' + '你好！我是你的旅行伙伴 团团 ✨' + ('\n') + '无论网络如何，我都会陪伴你。' + ('\n') + '让每一段旅程都安心又愉快。'}
                          },
                          "classList": [
                            "bubble-text"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.greetingTime}
                      },
                      "classList": [
                        "bubble-time"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-wrap"
              ],
              "children": [
                {
                  "type": "trip-card",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "card-wrap"
              ],
              "children": [
                {
                  "type": "env-card",
                  "attr": {}
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "msg-row"
              ],
              "repeat": {
                "exp": function () {return this.messages},
                "key": "index",
                "value": "msg"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "shown": function () {return this.msg.role==='assistant'},
                  "classList": [
                    "msg-left"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "avatar"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/assets/images/avatar.png"
                          },
                          "classList": [
                            "avatar-img"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble-wrap"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "bubble"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.msg.content}
                              },
                              "classList": [
                                "bubble-text"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.msg.time}
                          },
                          "classList": [
                            "bubble-time"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "shown": function () {return this.msg.role==='user'},
                  "classList": [
                    "msg-right"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "bubble-wrap"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "bubble-user"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.msg.content}
                              },
                              "classList": [
                                "bubble-text"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.msg.time}
                          },
                          "classList": [
                            "bubble-time"
                          ],
                          "style": {
                            "textAlign": "right"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "bottom-space"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-bar"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "text",
            "placeholder": "说点什么...",
            "value": function () {return this.inputText}
          },
          "classList": [
            "input-field"
          ],
          "events": {
            "change": "onInput"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "send-btn"
          ],
          "events": {
            "click": "onSend"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "➤"
              },
              "classList": [
                "send-icon"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_script$ = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./EnvCard.ux?uxType=comp */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/EnvCard.ux?uxType=comp")
$app_define$('@app-component/env-card', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./EnvCard.ux?uxType=comp& */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/EnvCard.ux?uxType=comp&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./EnvCard.ux?uxType=comp */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/EnvCard.ux?uxType=comp")
});
;

/***/ }),

/***/ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_script$ = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./TripCard.ux?uxType=comp */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/TripCard.ux?uxType=comp")
$app_define$('@app-component/trip-card', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./TripCard.ux?uxType=comp& */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/TripCard.ux?uxType=comp&")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./TripCard.ux?uxType=comp */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/TripCard.ux?uxType=comp")
});
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/pages/Chat/index.ux?uxType=page ***!
  \*********************************************/
__webpack_require__(/*! !../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&type=import!../../components/TripCard.ux?uxType=comp&name=trip-card */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&type=import!./src/components/TripCard.ux?uxType=comp&name=trip-card")
__webpack_require__(/*! !../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&type=import!../../components/EnvCard.ux?uxType=comp&name=env-card */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&type=import!./src/components/EnvCard.ux?uxType=comp&name=env-card")
var $app_script$ = __webpack_require__(/*! !../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\Users\chengyuanyuan.com\QuickAppProjects\banxing&cacheDirectory&plugins[]=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\dsl-xvm\lib\loaders\babel-plugin-jsx.js&comments=false&configFile=c:\Users\chengyuanyuan.com\.quickapp-studio\extensions\hapteam.hap-toolbar-1.3.9\node_modules\@hap-toolkit\packager\babel.config.js!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/packager/lib/loaders/module-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/babel-loader/lib/index.js?cwd=c:\\Users\\chengyuanyuan.com\\QuickAppProjects\\banxing&cacheDirectory&plugins[]=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\dsl-xvm\\lib\\loaders\\babel-plugin-jsx.js&comments=false&configFile=c:\\Users\\chengyuanyuan.com\\.quickapp-studio\\extensions\\hapteam.hap-toolbar-1.3.9\\node_modules\\@hap-toolkit\\packager\\babel.config.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Chat/index.ux?uxType=page")
$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
        if ($app_exports$.__esModule && $app_exports$.default) {
          $app_module$.exports = $app_exports$.default
        }
    $app_module$.exports.template = __webpack_require__(/*! !../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Chat/index.ux?uxType=page&importNames[]=trip-card,importNames[]=env-card")
    $app_module$.exports.style = __webpack_require__(/*! !../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../.quickapp-studio/extensions/hapteam.hap-toolbar-1.3.9/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Chat/index.ux?uxType=page")
});
$app_bootstrap$('@app-component/index',{ packagerVersion: "2.0.9" });
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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QkFBTyxDQUFDLGdwQkFBb1U7QUFDN1csQ0FBQztBQUNELEM7Ozs7Ozs7Ozs7O0FDVEEsbUJBQW1CLG1CQUFPLENBQUMsczFEQUF5N0I7QUFDcDlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbUJBQU8sQ0FBQywwbkJBQXlUO0FBQ3JXLGlDQUFpQyxtQkFBTyxDQUFDLGtwQkFBcVU7QUFDOVcsQ0FBQztBQUNELEM7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7OztBQ3RCQSxtQkFBTyxDQUFDLDRmQUFrUTtBQUMxUSxtQkFBTyxDQUFDLHdmQUFnUTtBQUN4USxtQkFBbUIsbUJBQU8sQ0FBQywybEVBQXNrQztBQUNqbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLHN0QkFBMFc7QUFDdFosaUNBQWlDLG1CQUFPLENBQUMsa3BCQUF3VTtBQUNqWCxDQUFDO0FBQ0QseUNBQXlDLGlCQUFpQixPQUF3QixFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmlwYWwvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD81YzEzIiwid2VicGFjazovL3RyaXBhbC8uL3NyYy9jb21wb25lbnRzL0VudkNhcmQudXg/NGNhZiIsIndlYnBhY2s6Ly90cmlwYWwvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9mMjJhIiwid2VicGFjazovL3RyaXBhbC8uL3NyYy9jb21wb25lbnRzL0VudkNhcmQudXg/Y2E4YSIsIndlYnBhY2s6Ly90cmlwYWwvLi9zcmMvY29tcG9uZW50cy9UcmlwQ2FyZC51eD9lOWE0Iiwid2VicGFjazovL3RyaXBhbC8uL3NyYy9wYWdlcy9DaGF0L2luZGV4LnV4PzFjNzAiLCJ3ZWJwYWNrOi8vdHJpcGFsLy4vc3JjL2NvbXBvbmVudHMvRW52Q2FyZC51eD9hMGViIiwid2VicGFjazovL3RyaXBhbC8uL3NyYy9jb21wb25lbnRzL1RyaXBDYXJkLnV4P2ZhNTciLCJ3ZWJwYWNrOi8vdHJpcGFsLy4vc3JjL3BhZ2VzL0NoYXQvaW5kZXgudXg/ZDNiMSIsIndlYnBhY2s6Ly90cmlwYWwvLi9zcmMvY29tcG9uZW50cy9FbnZDYXJkLnV4PzMxZWMiLCJ3ZWJwYWNrOi8vdHJpcGFsLy4vc3JjL2NvbXBvbmVudHMvVHJpcENhcmQudXg/YmE5NSIsIndlYnBhY2s6Ly90cmlwYWwvd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly90cmlwYWwvLi9zcmMvcGFnZXMvQ2hhdC9pbmRleC51eD85MGJjIl0sInNvdXJjZXNDb250ZW50IjpbIjxpbXBvcnQgbmFtZT1cInRyaXAtY2FyZFwiIHNyYz1cIi4uLy4uL2NvbXBvbmVudHMvVHJpcENhcmQudXhcIj48L2ltcG9ydD5cclxuPGltcG9ydCBuYW1lPVwiZW52LWNhcmRcIiBzcmM9XCIuLi8uLi9jb21wb25lbnRzL0VudkNhcmQudXhcIj48L2ltcG9ydD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicGFnZVwiPlxyXG4gICAgPCEtLSDlr7zoiKrmoI8gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibmF2LWJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmF2LWxlZnRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImJyYW5kXCI+4pymIOWbouWbojwvdGV4dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFnXCI+PHRleHQgY2xhc3M9XCJ0YWctdGV4dFwiPumZquS9oOavj+S4gOeoizwvdGV4dD48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtcmlnaHRcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImljb25cIj7wn5WKPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0g5raI5oGv5YiX6KGoIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC1hcmVhXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtaW5uZXJcIj5cclxuICAgICAgICA8IS0tIOWbuuWumumXruWAmeivrSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXNnLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJhdmF0YXItaW1nXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYXZhdGFyLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWJibGUtd3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGV4dFwiPuS9oOWlve+8geaIkeaYr+S9oOeahOaXheihjOS8meS8tCDlm6Llm6Ig4pyoe3snXFxuJ3195peg6K66572R57uc5aaC5L2V77yM5oiR6YO95Lya6Zmq5Ly05L2g44CCe3snXFxuJ3196K6p5q+P5LiA5q615peF56iL6YO95a6J5b+D5Y+I5oSJ5b+r44CCPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJidWJibGUtdGltZVwiPnt7Z3JlZXRpbmdUaW1lfX08L3RleHQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSDooYznqIvljaHniYcgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgPHRyaXAtY2FyZD48L3RyaXAtY2FyZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSDnjq/looPljaHniYcgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcFwiPlxyXG4gICAgICAgICAgPGVudi1jYXJkPjwvZW52LWNhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0g5Yqo5oCB5raI5oGv5YiX6KGoIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtc2ctcm93XCIgZm9yPVwiKGluZGV4LCBtc2cpIGluIG1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGlmPVwie3ttc2cucm9sZSA9PT0gJ2Fzc2lzdGFudCd9fVwiIGNsYXNzPVwibXNnLWxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImF2YXRhci1pbWdcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWJibGUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWJibGVcIj48dGV4dCBjbGFzcz1cImJ1YmJsZS10ZXh0XCI+e3ttc2cuY29udGVudH19PC90ZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRpbWVcIj57e21zZy50aW1lfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlmPVwie3ttc2cucm9sZSA9PT0gJ3VzZXInfX1cIiBjbGFzcz1cIm1zZy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnViYmxlLXVzZXJcIj48dGV4dCBjbGFzcz1cImJ1YmJsZS10ZXh0XCI+e3ttc2cuY29udGVudH19PC90ZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYnViYmxlLXRpbWVcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0O1wiPnt7bXNnLnRpbWV9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbS1zcGFjZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0g6L6T5YWl5qCPIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWJhclwiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLor7Tngrnku4DkuYguLi5cIiB2YWx1ZT1cInt7aW5wdXRUZXh0fX1cIiBAY2hhbmdlPVwib25JbnB1dFwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZW5kLWJ0blwiIEBjbGljaz1cIm9uU2VuZFwiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwic2VuZC1pY29uXCI+4p6kPC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5kYXRhKCkge1xyXG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpXHJcbiAgdmFyIGggPSBub3cuZ2V0SG91cnMoKVxyXG4gIHZhciBtID0gbm93LmdldE1pbnV0ZXMoKVxyXG4gIHZhciBoaCA9IGggPCAxMCA/ICcwJyArIGggOiAnJyArIGhcclxuICB2YXIgbW0gPSBtIDwgMTAgPyAnMCcgKyBtIDogJycgKyBtXHJcbiAgdmFyIHRpbWVTdHIgPSBoaCArICc6JyArIG1tXHJcbiAgcmV0dXJuIHtcclxuICAgIGdyZWV0aW5nVGltZTogdGltZVN0cixcclxuICAgIG1lc3NhZ2VzOiBbXSxcclxuICAgIGlucHV0VGV4dDogJydcclxuICB9XHJcbn0sXHJcbiAgb25JbnB1dChlKSB7XHJcbiAgICB0aGlzLmlucHV0VGV4dCA9IGUudmFsdWU7XHJcbiAgfSxcclxuXHJcbiAgb25TZW5kKCkge1xyXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuaW5wdXRUZXh0LnRyaW0oKTtcclxuICAgIGlmICghdGV4dCkgcmV0dXJuO1xyXG4gICAgdGhpcy5zZW5kTWVzc2FnZSh0ZXh0KTtcclxuICAgIHRoaXMuaW5wdXRUZXh0ID0gJyc7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgc2VuZE1lc3NhZ2UoaW5wdXQpIHtcclxuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnemgtQ04nLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2goeyByb2xlOiAndXNlcicsIGNvbnRlbnQ6IGlucHV0LCB0aW1lIH0pO1xyXG4gICAgLy8g5qih5oufQUnlm57lpI3vvIjlrp7pmYXlj6/mm7/mjaLkuLrnnJ/lrp5BUEnvvIlcclxuICAgIGNvbnN0IHJlcGx5ID0gYXdhaXQgdGhpcy5nZXRBSVJlc3BvbnNlKGlucHV0KTtcclxuICAgIHRoaXMubWVzc2FnZXMucHVzaCh7IHJvbGU6ICdhc3Npc3RhbnQnLCBjb250ZW50OiByZXBseSwgdGltZTogbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoJ3poLUNOJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pIH0pO1xyXG4gIH0sXHJcblxyXG4gIGdldEFJUmVzcG9uc2UoaW5wdXQpIHtcclxuICAgIC8vIOaooeaLn+W8guatpeWbnuetlFxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ+WbouWbouaUtuWIsOWVpu+8geKcqCDmiJHmmoLml7bmmK/nprvnur/mqKHlvI/vvIzkvYbkvJrkuIDnm7TpmarnnYDkvaDjgILmnInku4DkuYjpnIDopoHpmo/ml7bpl67miJF+Jyk7XHJcbiAgICAgIH0sIDgwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5wYWdlIHtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY0ZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm5hdi1iYXIge1xyXG4gIGhlaWdodDogNTZweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVmMmZmO1xyXG59XHJcbi5uYXYtbGVmdCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMxYTJhNGE7XHJcbn1cclxuLnRhZyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDJweCAxMHB4O1xyXG59XHJcbi50YWctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNGU3Y2ZmO1xyXG59XHJcbi5uYXYtcmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnNjcm9sbC1hcmVhIHtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5zY3JvbGwtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDE2cHggMTRweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5tc2ctcm93IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi8qIEFJ5raI5oGv77yI5bem5L6n77yJ77ya5aS05YOPICsg5rCU5rOhIOWQjOihjCAqL1xyXG4ubXNnLWxlZnQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIOeUqOaIt+a2iOaBr++8iOWPs+S+p++8ie+8muWPquacieawlOazoSAqL1xyXG4ubXNnLXJpZ2h0IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjJmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uYXZhdGFyLWltZyB7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG59XHJcbi5idWJibGUtd3JhcCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4uYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6MThweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5idWJibGUtdXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlN2NmZjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4IDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbi5idWJibGUtdXNlciAuYnViYmxlLXRleHQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5idWJibGUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMmQzYTVlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcbi5idWJibGUtdGltZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjOGZhM2M4O1xyXG59XHJcbi5jYXJkLXdyYXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ib3R0b20tc3BhY2Uge1xyXG4gIGhlaWdodDogOHB4O1xyXG59XHJcblxyXG4uaW5wdXQtYmFyIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDE0cHggMTZweCAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgZmxleDogMTtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAwLCAxNTAsIDI1NSwgMC4yKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZDNhNWU7XHJcbn1cclxuLnNlbmQtYnRuIHtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU3Y2ZmO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlbmQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJlbnYtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+8J+MkCDlvZPliY3njq/looM8L3RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsYWJlbFwiPue9kee7nDwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInZhbHVlIGJsdWVcIj57e25ldHdvcmt9fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJsYWJlbFwiPueUtemHjzwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInZhbHVlXCI+e3tiYXR0ZXJ5fX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgPHRleHQgY2xhc3M9XCJsYWJlbFwiPuS9jee9rjwvdGV4dD5cclxuICA8dGV4dCBjbGFzcz1cInZhbHVlXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDsgd2lkdGg6IDEwMCU7XCI+e3tsb2NhdGlvbn19PC90ZXh0PlxyXG48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZXR3b3JrOiAn5Yqg6L295LitLi4uJyxcclxuICAgICAgYmF0dGVyeTogJ+WKoOi9veS4rS4uLicsXHJcbiAgICAgIGxvY2F0aW9uOiAn5Yqg6L295LitLi4uJyxcclxuICAgICAgdGltZXJJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIC8vIOmmluasoeiOt+WPllxyXG4gICAgc2VsZi51cGRhdGVFbnZEYXRhKClcclxuICAgIC8vIOavjzXnp5Lmm7TmlrDkuIDmrKHvvIjmm7Tlrp7ml7bvvIlcclxuICAgIHNlbGYudGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLnVwZGF0ZUVudkRhdGEoKVxyXG4gICAgfSwgNTAwMClcclxuICB9LFxyXG5cclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKVxyXG4gICAgICB0aGlzLnRpbWVySWQgPSBudWxsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlRW52RGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAvLyA9PT09PSAxLiDnnJ/lrp7nlLXph48gPT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBiYXR0ZXJ5ID0gcmVxdWlyZSgnQHN5c3RlbS5iYXR0ZXJ5JylcclxuICAgICAgYmF0dGVyeS5nZXRCYXR0ZXJ5SW5mbyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB2YXIgbGV2ZWwgPSBNYXRoLnJvdW5kKHJlcy5sZXZlbCAqIDEwMClcclxuICAgICAgICAgIHNlbGYuYmF0dGVyeSA9IGxldmVsICsgJyUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHNlbGYuYmF0dGVyeSA9ICfojrflj5blpLHotKUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZWxmLmJhdHRlcnkgPSAn5LiN5pSv5oyBJ1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09IDIuIOecn+Wunue9kee7nOeKtuaAgSA9PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIG5ldHdvcmsgPSByZXF1aXJlKCdAc3lzdGVtLm5ldHdvcmsnKVxyXG4gICAgICBuZXR3b3JrLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIHZhciBtYXAgPSB7XHJcbiAgICAgICAgICAgICd3aWZpJzogJ1dpLUZpJyxcclxuICAgICAgICAgICAgJzRnJzogJzRHJyxcclxuICAgICAgICAgICAgJzVnJzogJzVHJyxcclxuICAgICAgICAgICAgJzNnJzogJzNHJyxcclxuICAgICAgICAgICAgJzJnJzogJzJHJyxcclxuICAgICAgICAgICAgJ25vbmUnOiAn5peg572R57ucJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2VsZi5uZXR3b3JrID0gbWFwW3Jlcy50eXBlXSB8fCByZXMudHlwZSB8fCAn5pyq55+lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBzZWxmLm5ldHdvcmsgPSAn6I635Y+W5aSx6LSlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgc2VsZi5uZXR3b3JrID0gJ+S4jeaUr+aMgSdcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PSAzLiDnnJ/lrp7kvY3nva7vvIhHUFPvvIkgPT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoJ0BzeXN0ZW0uZ2VvbG9jYXRpb24nKVxyXG4gICAgICBnZW9sb2NhdGlvbi5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAvLyDkvJjlhYjmmL7npLrln47luILlkI3vvIzlhbbmrKHlnLDlnYDvvIzmnIDlkI7nlKjnu4/nuqzluqZcclxuICAgICAgICAgIGlmIChyZXMuY2l0eSkge1xyXG4gICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gcmVzLmNpdHlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgc2VsZi5sb2NhdGlvbiA9IHJlcy5hZGRyZXNzXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5sYXRpdHVkZSAmJiByZXMubG9uZ2l0dWRlKSB7XHJcbiAgICAgICAgICAgIHNlbGYubG9jYXRpb24gPSAn5bey5a6a5L2NICgnICsgcmVzLmxhdGl0dWRlLnRvRml4ZWQoMikgKyAnLCAnICsgcmVzLmxvbmdpdHVkZS50b0ZpeGVkKDIpICsgJyknXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLmxvY2F0aW9uID0gJ+W3suWumuS9jSdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbiA9ICflrprkvY3lpLHotKUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBzZWxmLmxvY2F0aW9uID0gJ+S4jeaUr+aMgSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5lbnYtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMThweCAyMnB4IDE4cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzFhMmE0YTtcclxufVxyXG4uYm9keSB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLml0ZW0ge1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjOGZhM2M4O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmQzYTVlO1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogIzRlN2NmZjtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwidHJpcC1jYXJkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGl0bGVcIj7wn5qEIOW9k+WJjeihjOeoizwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGFiZWxcIj7lh7rlj5HlnLA8L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ2YWx1ZVwiPnt7ZGVwYXJ0fX08L3RleHQ+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0aW1lXCI+e3tkZXBhcnRUaW1lfX08L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGNlbnRlci1yb3dcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImxhYmVsXCI+6L2m5qyhPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidmFsdWUgdHJhaW4tbm9cIj57e3RyYWluTm99fTwvdGV4dD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImxhYmVsXCI+55uu55qE5ZywPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidmFsdWVcIj57e2Fycml2ZX19PC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGltZVwiPnt7YXJyaXZlVGltZX19PC90ZXh0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLXJvd1wiPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicHJvZ3Jlc3MtdGV4dFwiPumihOiuoeWJqeS9meaXtumXtCB7e3JlbWFpbn19IOWIhumSnzwvdGV4dD5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cInByb2dyZXNzLXRleHRcIj7pooTorqEge3tlc3RpbWF0ZWR9fSDliLDovr48L3RleHQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlcGFydDogJ+adreW3nuS4nOermScsXHJcbiAgICAgIGFycml2ZTogJ+S4iua1t+iZueahpeermScsXHJcbiAgICAgIGRlcGFydFRpbWU6ICcxMDowMCcsXHJcbiAgICAgIGFycml2ZVRpbWU6ICcxMTowMicsXHJcbiAgICAgIHRyYWluTm86ICdHMTIyMycsXHJcbiAgICAgIHJlbWFpbjogMzIsXHJcbiAgICAgIGVzdGltYXRlZDogJzExOjAyJyxcclxuICAgICAgdGltZXJJZDogbnVsbFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHNlbGYucmVtYWluID4gMCkge1xyXG4gICAgICAgIHNlbGYucmVtYWluID0gc2VsZi5yZW1haW4gLSAwLjU7XHJcbiAgICAgICAgaWYgKHNlbGYucmVtYWluIDwgMCkgc2VsZi5yZW1haW4gPSAwO1xyXG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIG5vdy5zZXRNaW51dGVzKG5vdy5nZXRNaW51dGVzKCkgKyBNYXRoLnJvdW5kKHNlbGYucmVtYWluKSk7XHJcbiAgICAgICAgc2VsZi5lc3RpbWF0ZWQgPSBub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCd6aC1DTicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwMCk7XHJcbiAgfSxcclxuICBvbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy50aW1lcklkKSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi50cmlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNnB4IDE4cHggMThweCAxOHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMWEyYTRhO1xyXG59XHJcbi5ib2R5IHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5yb3cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcbi5jZW50ZXItcm93IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzhmYTNjODtcclxuICB3aWR0aDogNTBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMWEyYTRhO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLnRyYWluLW5vIHtcclxuICBjb2xvcjogIzRlN2NmZjtcclxufVxyXG4udGltZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNWE2ZDhhO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5wcm9ncmVzcy1yb3cge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNmMGY0ZmE7XHJcbn1cclxuLnByb2dyZXNzLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzJkM2E1ZTtcclxufVxyXG48L3N0eWxlPiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5lbnYtY2FyZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMThweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCI1MCVcIlxuICB9LFxuICBcIi5oZWFkZXJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTZweFwiXG4gIH0sXG4gIFwiLnRpdGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTZweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCJcbiAgfSxcbiAgXCIuYm9keVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcIi5pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNHB4XCJcbiAgfSxcbiAgXCIudmFsdWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5ibHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudHJpcC1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuaGVhZGVyXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycHhcIlxuICB9LFxuICBcIi50aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2cHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIixcbiAgICBcImNvbG9yXCI6IFwiIzFhMmE0YVwiXG4gIH0sXG4gIFwiLmJvZHlcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLnJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjZweFwiXG4gIH0sXG4gIFwiLmNlbnRlci1yb3dcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5sYWJlbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEzcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiLFxuICAgIFwid2lkdGhcIjogXCI1MHB4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIudmFsdWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNjAwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMxYTJhNGFcIixcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcIi50cmFpbi1ub1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0ZTdjZmZcIlxuICB9LFxuICBcIi50aW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjNWE2ZDhhXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDBcbiAgfSxcbiAgXCIucHJvZ3Jlc3Mtcm93XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNmMGY0ZmFcIlxuICB9LFxuICBcIi5wcm9ncmVzcy10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMmQzYTVlXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5wYWdlXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGY0ZmZcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5uYXYtYmFyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjU2cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZWVmMmZmXCJcbiAgfSxcbiAgXCIubmF2LWxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmJyYW5kXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWEyYTRhXCJcbiAgfSxcbiAgXCIudGFnXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVmMmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcHhcIlxuICB9LFxuICBcIi50YWctdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzRlN2NmZlwiXG4gIH0sXG4gIFwiLm5hdi1yaWdodFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIycHhcIlxuICB9LFxuICBcIi5zY3JvbGwtYXJlYVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCIuc2Nyb2xsLWlubmVyXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTZweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIubXNnLXJvd1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCJcbiAgfSxcbiAgXCIubXNnLWxlZnRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiXG4gIH0sXG4gIFwiLm1zZy1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuYXZhdGFyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDZweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDZweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjNweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2VlZjJmZlwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcImZsZXhTaHJpbmtcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmF2YXRhci1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0NnB4XCJcbiAgfSxcbiAgXCIuYnViYmxlLXdyYXBcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWF4V2lkdGhcIjogXCI4MCVcIlxuICB9LFxuICBcIi5idWJibGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMThweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE0cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLmJ1YmJsZS11c2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjE4cHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxNnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0cHhcIlxuICB9LFxuICBcIi5idWJibGUtdXNlciAuYnViYmxlLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJfbWV0YVwiOiB7XG4gICAgICBcInJ1bGVEZWZcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0XCI6IFwiYVwiLFxuICAgICAgICAgIFwiblwiOiBcImNsYXNzXCIsXG4gICAgICAgICAgXCJpXCI6IGZhbHNlLFxuICAgICAgICAgIFwiYVwiOiBcImVsZW1lbnRcIixcbiAgICAgICAgICBcInZcIjogXCJidWJibGUtdXNlclwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInRcIjogXCJkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidFwiOiBcImFcIixcbiAgICAgICAgICBcIm5cIjogXCJjbGFzc1wiLFxuICAgICAgICAgIFwiaVwiOiBmYWxzZSxcbiAgICAgICAgICBcImFcIjogXCJlbGVtZW50XCIsXG4gICAgICAgICAgXCJ2XCI6IFwiYnViYmxlLXRleHRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcIi5idWJibGUtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0cHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzJkM2E1ZVwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0cHhcIlxuICB9LFxuICBcIi5idWJibGUtdGltZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjExcHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmYTNjOFwiXG4gIH0sXG4gIFwiLmNhcmQtd3JhcFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIyMHB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwiLmJvdHRvbS1zcGFjZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5pbnB1dC1iYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjhweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTRweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE2cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTRweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwiLmlucHV0LWZpZWxkXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImhlaWdodFwiOiBcIjQ0cHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMjRweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxOHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yKVwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yKVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCJyZ2JhKDEwMCwxNTAsMjU1LDAuMilcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMTAwLDE1MCwyNTUsMC4yKVwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNHB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMyZDNhNWVcIlxuICB9LFxuICBcIi5zZW5kLWJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ0cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0ZTdjZmZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuc2VuZC1pY29uXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThweFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJlbnYtY2FyZFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImhlYWRlclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn4yQIOW9k+WJjeeOr+Wig1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImJvZHlcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnvZHnu5xcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5uZXR3b3JrfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgIFwiYmx1ZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueUtemHj1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImxhYmVsXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhdHRlcnl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIml0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5L2N572uXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubG9jYXRpb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ0cmlwLWNhcmRcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi8J+ahCDlvZPliY3ooYznqItcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJib2R5XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlh7rlj5HlnLBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kZXBhcnR9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRlcGFydFRpbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicm93XCIsXG4gICAgICAgICAgICBcImNlbnRlci1yb3dcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2m5qyhXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibGFiZWxcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudHJhaW5Ob31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICBcInRyYWluLW5vXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJvd1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnm67nmoTlnLBcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5hcnJpdmV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmFycml2ZVRpbWV9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRpbWVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicHJvZ3Jlc3Mtcm93XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICcnICsgJ+mihOiuoeWJqeS9meaXtumXtCAnICsgKHRoaXMucmVtYWluKSArICcg5YiG6ZKfJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3MtdGV4dFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJycgKyAn6aKE6K6hICcgKyAodGhpcy5lc3RpbWF0ZWQpICsgJyDliLDovr4nfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwcm9ncmVzcy10ZXh0XCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJwYWdlXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2LWJhclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYXYtbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLinKYg5Zui5ZuiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnJhbmRcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ0YWdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6Zmq5L2g5q+P5LiA56iLXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFnLXRleHRcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcIm5hdi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLwn5WKXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNjcm9sbC1hcmVhXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInNjcm9sbC1pbm5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXItaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS13cmFwXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAnJyArICfkvaDlpb3vvIHmiJHmmK/kvaDnmoTml4XooYzkvJnkvLQg5Zui5ZuiIOKcqCcgKyAoJ1xcbicpICsgJ+aXoOiuuue9kee7nOWmguS9le+8jOaIkemDveS8mumZquS8tOS9oOOAgicgKyAoJ1xcbicpICsgJ+iuqeavj+S4gOauteaXheeoi+mDveWuieW/g+WPiOaEieW/q+OAgid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZ3JlZXRpbmdUaW1lfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtdGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjYXJkLXdyYXBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0cmlwLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY2FyZC13cmFwXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZW52LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibXNnLXJvd1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgICAgICBcImV4cFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWVzc2FnZXN9LFxuICAgICAgICAgICAgICAgIFwia2V5XCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwibXNnXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cucm9sZT09PSdhc3Npc3RhbnQnfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtc2ctbGVmdFwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJidWJibGUtd3JhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubXNnLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1zZy5yb2xlPT09J3VzZXInfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJtc2ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXdyYXBcIlxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS11c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubXNnLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1YmJsZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tc2cudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnViYmxlLXRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYm90dG9tLXNwYWNlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW5wdXQtYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCLor7Tngrnku4DkuYguLi5cIixcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlucHV0VGV4dH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW5wdXQtZmllbGRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjaGFuZ2VcIjogXCJvbklucHV0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJzZW5kLWJ0blwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwib25TZW5kXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKepFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlbmQtaWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcUXVpY2tBcHBQcm9qZWN0c1xcXFxiYW54aW5nJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL0VudkNhcmQudXg/dXhUeXBlPWNvbXBcIilcbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvZW52LWNhcmQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKSB7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlIS4vRW52Q2FyZC51eD91eFR5cGU9Y29tcCZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9FbnZDYXJkLnV4P3V4VHlwZT1jb21wXCIpXG59KTtcbjsiLCJcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvcGFja2FnZXIvbGliL2xvYWRlcnMvbW9kdWxlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcUXVpY2tBcHBQcm9qZWN0c1xcXFxiYW54aW5nJmNhY2hlRGlyZWN0b3J5JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXGRzbC14dm1cXFxcbGliXFxcXGxvYWRlcnNcXFxcYmFiZWwtcGx1Z2luLWpzeC5qcyZjb21tZW50cz1mYWxzZSZjb25maWdGaWxlPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXC5xdWlja2FwcC1zdHVkaW9cXFxcZXh0ZW5zaW9uc1xcXFxoYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45XFxcXG5vZGVfbW9kdWxlc1xcXFxAaGFwLXRvb2xraXRcXFxccGFja2FnZXJcXFxcYmFiZWwuY29uZmlnLmpzIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdCEuL1RyaXBDYXJkLnV4P3V4VHlwZT1jb21wXCIpXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3RyaXAtY2FyZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcCZcIilcbiAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3N0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGUhLi9UcmlwQ2FyZC51eD91eFR5cGU9Y29tcFwiKVxufSk7XG47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3V4LWxvYWRlci5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcUXVpY2tBcHBQcm9qZWN0c1xcXFxiYW54aW5nJnR5cGU9aW1wb3J0IS4uLy4uL2NvbXBvbmVudHMvVHJpcENhcmQudXg/dXhUeXBlPWNvbXAmbmFtZT10cmlwLWNhcmRcIilcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL3V4LWxvYWRlci5qcz9jd2Q9YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcUXVpY2tBcHBQcm9qZWN0c1xcXFxiYW54aW5nJnR5cGU9aW1wb3J0IS4uLy4uL2NvbXBvbmVudHMvRW52Q2FyZC51eD91eFR5cGU9Y29tcCZuYW1lPWVudi1jYXJkXCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L3BhY2thZ2VyL2xpYi9sb2FkZXJzL21vZHVsZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y3dkPWM6XFxcXFVzZXJzXFxcXGNoZW5neXVhbnl1YW4uY29tXFxcXFF1aWNrQXBwUHJvamVjdHNcXFxcYmFueGluZyZjYWNoZURpcmVjdG9yeSZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcY2hlbmd5dWFueXVhbi5jb21cXFxcLnF1aWNrYXBwLXN0dWRpb1xcXFxleHRlbnNpb25zXFxcXGhhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjlcXFxcbm9kZV9tb2R1bGVzXFxcXEBoYXAtdG9vbGtpdFxcXFxkc2wteHZtXFxcXGxpYlxcXFxsb2FkZXJzXFxcXGJhYmVsLXBsdWdpbi1qc3guanMmY29tbWVudHM9ZmFsc2UmY29uZmlnRmlsZT1jOlxcXFxVc2Vyc1xcXFxjaGVuZ3l1YW55dWFuLmNvbVxcXFwucXVpY2thcHAtc3R1ZGlvXFxcXGV4dGVuc2lvbnNcXFxcaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOVxcXFxub2RlX21vZHVsZXNcXFxcQGhhcC10b29sa2l0XFxcXHBhY2thZ2VyXFxcXGJhYmVsLmNvbmZpZy5qcyEuLi8uLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8ucXVpY2thcHAtc3R1ZGlvL2V4dGVuc2lvbnMvaGFwdGVhbS5oYXAtdG9vbGJhci0xLjMuOS9ub2RlX21vZHVsZXMvQGhhcC10b29sa2l0L2RzbC14dm0vbGliL2xvYWRlcnMvZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHQhLi9pbmRleC51eD91eFR5cGU9cGFnZVwiKVxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpIHtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy90ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLnF1aWNrYXBwLXN0dWRpby9leHRlbnNpb25zL2hhcHRlYW0uaGFwLXRvb2xiYXItMS4zLjkvbm9kZV9tb2R1bGVzL0BoYXAtdG9vbGtpdC9kc2wteHZtL2xpYi9sb2FkZXJzL2ZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGUhLi9pbmRleC51eD91eFR5cGU9cGFnZSZpbXBvcnROYW1lc1tdPXRyaXAtY2FyZCxpbXBvcnROYW1lc1tdPWVudi1jYXJkXCIpXG4gICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4uLy4uLy4uLy4uLy4uLy5xdWlja2FwcC1zdHVkaW8vZXh0ZW5zaW9ucy9oYXB0ZWFtLmhhcC10b29sYmFyLTEuMy45L25vZGVfbW9kdWxlcy9AaGFwLXRvb2xraXQvZHNsLXh2bS9saWIvbG9hZGVycy9mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlIS4vaW5kZXgudXg/dXhUeXBlPXBhZ2VcIilcbn0pO1xuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlclZlcnNpb246IFFVSUNLQVBQX1RPT0xLSVRfVkVSU0lPTiB9KTsiXSwibmFtZXMiOlsiZGF0YSIsIm5vdyIsIkRhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsImhoIiwibW0iLCJ0aW1lU3RyIiwiZ3JlZXRpbmdUaW1lIiwibWVzc2FnZXMiLCJpbnB1dFRleHQiLCJvbklucHV0IiwiZSIsInZhbHVlIiwib25TZW5kIiwidGV4dCIsInRyaW0iLCJzZW5kTWVzc2FnZSIsImlucHV0IiwidGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJwdXNoIiwicm9sZSIsImNvbnRlbnQiLCJyZXBseSIsImdldEFJUmVzcG9uc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJuZXR3b3JrIiwiYmF0dGVyeSIsImxvY2F0aW9uIiwidGltZXJJZCIsIm9uUmVhZHkiLCJzZWxmIiwidXBkYXRlRW52RGF0YSIsInNldEludGVydmFsIiwib25EZXN0cm95IiwiY2xlYXJJbnRlcnZhbCIsInJlcXVpcmUiLCJnZXRCYXR0ZXJ5SW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJsZXZlbCIsIk1hdGgiLCJyb3VuZCIsImZhaWwiLCJnZXROZXR3b3JrVHlwZSIsIm1hcCIsInR5cGUiLCJnZW9sb2NhdGlvbiIsImdldExvY2F0aW9uIiwiY2l0eSIsImFkZHJlc3MiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRvRml4ZWQiLCJkZXBhcnQiLCJhcnJpdmUiLCJkZXBhcnRUaW1lIiwiYXJyaXZlVGltZSIsInRyYWluTm8iLCJyZW1haW4iLCJlc3RpbWF0ZWQiLCJzZXRNaW51dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==