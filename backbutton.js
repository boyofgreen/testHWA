

	var webview = document.getElementById('webview');

// function to handle the system Navigation Event
function handleSystemNavigationEvent(args) {
    if (webview.canGoBack == false) {
        return;
    }
    webview.goBack();

}

// Initialize the code on Windows load

   //  setNavigationState();
        var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
        systemNavigationManager.addEventListener("backrequested", handleSystemNavigationEvent.bind(this));
		var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();

        
     
     //set up event to show if you can
     
      webview.addEventListener('MSWebViewDOMContentLoaded', function(){
        
    if (webview.canGoBack == true) {
                systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        
    }
    else{
        systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
    }
      });
      