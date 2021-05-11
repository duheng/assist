
        
        (function () {
            var insertJs = function () {
                        var secScript = document.createElement("script");
                        secScript.setAttribute("type", "text/javascript");
                        secScript.setAttribute("src", "https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=a12b3134-615e-4686-82bb-7f82fd58d53f&auto=false");
                        document.body.insertBefore(secScript, document.body.lastChild);
                        
                        
                    },
                    init = function () {
                        document.body !== void 0 && document.body ? (insertJs()) : (setTimeout(init, 500))
                    };
            init();
        })();
