
(function () {
	var webview = document.getElementById('webview');

            webview.addEventListener("MSWebViewNavigationStarting", function(){toggleLoadingScreen(true)});
            // when navigation is complete, remove the loading icon
            webview.addEventListener("MSWebViewNavigationCompleted", function(){toggleLoadingScreen(false)});


       var  toggleLoadingScreen =  function (isLoading) {
          var clearOverlay = document.querySelector(".transparent-overlay");
            var blurOverlay = document.querySelector(".webview-overlay");

            if (isLoading) {

                        // use base64 encoded bitmap to improve performance in Windows
                        var capturePreview = WAT.options.webView.capturePreviewToBlobAsync();
                        var blurImage = document.querySelector(".webview-overlay svg image");

                        capturePreview.oncomplete = function (completeEvent) {
                            var reader = new window.FileReader();
                            reader.readAsDataURL(completeEvent.target.result);
                            reader.onloadend = function () {
                                // skip show blurred previous page if next page was already shown
                                if (!self.contentLoaded && WAT.options.stage.classList.contains("loading")) {
                                    clearOverlay.style.display = 'inline';

                                    blurImage.setAttribute("xlink:href", reader.result);
                                    blurOverlay.classList.remove("fadeOut");
                                }
                            };
                        };
                        capturePreview.start();
                    }


                WAT.options.stage.classList.add("loading");
            }
            if (WAT.options.stage.classList.contains("loading")) {
                    if (blurOverlay && clearOverlay) {
                        clearOverlay.style.display = "none";
                        blurOverlay.classList.add("fadeOut");
                    }

                    WAT.options.stage.classList.remove("loading");
            }
        }
        
        
        
        })();