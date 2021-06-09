
        
        (function () {
            var insertJs = function () {
                        var secScript = document.createElement("script");
                        secScript.setAttribute("type", "text/javascript");
                        secScript.setAttribute("src", "https://rmcsdf.qunar.com/js/device.js?orgId=ucenter.login&sessionId=02c56c14-9185-41dc-b3af-57b5e8625775&auto=false");
                        document.body.insertBefore(secScript, document.body.lastChild);
                        
                        
                    },
                    init = function () {
                        document.body !== void 0 && document.body ? (insertJs()) : (setTimeout(init, 500))
                    };
            init();
        })();
