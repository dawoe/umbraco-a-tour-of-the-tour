(function () {
    "use strict";

    function ChangePasswordController($scope, tourService) {
        var vm = this;        

        function startHelp() {
            tourService.getTourByAlias('howToChangeMyPassword').then(function(tour) {
				tourService.startTour(tour);
			});
        };

        vm.startHelp = startHelp;       
    }

    angular.module("umbraco").controller("TourDemo.HelpDashBoard.ChangePasswordController",
        [
            "$scope",
            "tourService",            
            ChangePasswordController
        ]);

})();

(function () {
    "use strict";

    function ShowHelpController($scope, tourService) {
        var vm = this;       

	    var tour = {
    "name": "Show help",
    "alias": "showHelp",
    "group": "Show help",
    "groupOrder": 100,
    "allowDisable": false,
    "requiredSections": [
      "content"
    ],
    "steps": [
      {
        "title": "Click on the help icon",
        "content": "",
        "type": null,
        "element": "[data-element=\"section-help\"]",
        "elementPreventClick": false,
        "backdropOpacity": 0.4,
        "event": "click",
        "view": null,
        "eventElement": null,
        "customProperties": null
      },
      {
        "title": "Click on the first tour subject",
        "content": "",
        "type": null,
        "element": ".umb-help-list a:first",
        "elementPreventClick": false,
        "backdropOpacity": 0.4,
        "event": "click",
        "view": null,
        "eventElement": null,
        "customProperties": null
      },
      {
        "title": "Click on the button to start or rerun a tour",
        "content": "",
        "type": null,
        "element": ".umb-help-list-item .umb-button:first",
        "elementPreventClick": true,
        "backdropOpacity": 0.4,
        "event": null,
        "view": null,
        "eventElement": null,
        "customProperties": null
      }
    ]
  };

        function startHelp() {
            tourService.startTour(tour);			
        };

        vm.startHelp = startHelp;       
    }

    angular.module("umbraco").controller("TourDemo.HelpDashBoard.ShowHelpController",
        [
            "$scope",
            "tourService",            
            ShowHelpController
        ]);

})();