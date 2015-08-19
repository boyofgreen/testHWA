




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
    if (navigationStack.length <= 0) {
        return;
    }
    args.handled = true;
    goBack();
}

// Initialize the code on Windows load

   //  setNavigationState();
        var systemNavigationManager = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
        systemNavigationManager.addEventListener("backrequested", this.handleSystemNavigationEvent.bind(this));
		var systemNavigation = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
systemNavigation.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
