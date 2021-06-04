
        
        (function () {
            var insertJs = function () {
                        var secScript = document.createElement("script");
                        secScript.setAttribute("type", "text/javascript");
                        secScript.setAttribute("src", "https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=99a6c080-e36d-4c5a-9348-d5876bb5a879&auto=false");
                        document.body.insertBefore(secScript, document.body.lastChild);
                        
                        
                    },
                    init = function () {
                        document.body !== void 0 && document.body ? (insertJs()) : (setTimeout(init, 500))
                    };
            init();
        })();
