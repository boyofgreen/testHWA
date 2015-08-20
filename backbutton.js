

	var webview = document.getElementById('webview');


// Hardcoded Navigation Stack
// var navigationStack = [
//     { "url": "http://www.bing.com" },
//     { "url": "http://www.msn.com" }
// ]

// GoBack function
// function goBack() {
//     var place = navigationStack.pop();
//     // TODO: Navigate to place.url;
//     setNavigationState();
// }

// Function to set Navigation State
function setNavigationState() {

        var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();

        if (navigationStack.length > 0) {
            systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        } else {
            systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        }
}

// function to handle the system Navigation Event
function handleSystemNavigationEvent(args) {
    if (webview.canGoBack == false) {
        return;
    }

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
      });
      