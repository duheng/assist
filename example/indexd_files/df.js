
        
        (function () {
            var insertJs = function () {
                        var secScript = document.createElement("script");
                        secScript.setAttribute("type", "text/javascript");
                        secScript.setAttribute("src", "https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=44552258-0ef5-4ae1-9e13-c2a0e55dcf33&auto=false");
                        document.body.insertBefore(secScript, document.body.lastChild);
                        
                        
                    },
                    init = function () {
                        document.body !== void 0 && document.body ? (insertJs()) : (setTimeout(init, 500))
                    };
            init();
        })();
