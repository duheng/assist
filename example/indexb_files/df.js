
        
        (function () {
            var insertJs = function () {
                        var secScript = document.createElement("script");
                        secScript.setAttribute("type", "text/javascript");
                        secScript.setAttribute("src", "https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=c9bb967c-ae0e-494e-805e-223593c4e901&auto=false");
                        document.body.insertBefore(secScript, document.body.lastChild);
                        
                        
                    },
                    init = function () {
                        document.body !== void 0 && document.body ? (insertJs()) : (setTimeout(init, 500))
                    };
            init();
        })();
