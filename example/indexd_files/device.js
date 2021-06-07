

/**
 * Created by macbinn on 16/5/17.
 */
(function() {
    try {
        if (window.QDevice) return;
        var jsonp = function (url, callback) {
            var callbackName = 'callback_' + new Date().getTime(),
                scriptElem = document.createElement('script'),
                headElem = document.getElementsByTagName('head')[0]
                || document.documentElement;
            window[callbackName] = function (arg) {
                // delete window[callbackName];
                callback(arg);
            };
            scriptElem.src = url.replace(/=\?/, '=' + callbackName);
            headElem.insertBefore(scriptElem, headElem.firstChild);
        };
        var sessionId = '44552258-0ef5-4ae1-9e13-c2a0e55dcf33';
        var urlPrefix = 'https://rmcsdf.qunar.com/api/device/';
        window.QDevice = {
            getDevice: function (callback, domain) {
                if (typeof callback !== 'function') {
                    throw 'getDevice arguments[1] must be a function';
                }
                domain = domain || 'qunar.com';
                jsonp(urlPrefix + 'challenge.json?callback=?&sessionId=' + sessionId + "&domain=" + domain + "&orgId=ucenter.login", function (answer) {
                    jsonp(urlPrefix + 'answer.json?callback=?&sessionId=' + sessionId + '&answer=' + answer, function (result) {
                        callback(result);
                    });
                });
            }
        }
        if (false) {
            window.QDevice.getDevice(function (device) {
                // console.log(device);
            });
        }
    }catch (e) {

    };
})();
