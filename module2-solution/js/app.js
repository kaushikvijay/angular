(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl= this;
        toBuyCtrl.items = ShoppingListCheckOffService.toBuyItems;
        toBuyCtrl.buy = ShoppingListCheckOffService.buy;
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl= this;
        boughtCtrl.items = ShoppingListCheckOffService.boughtItems;
    }

    // If not specified, maxItems assumed unlimited
    function ShoppingListCheckOffService() {
      var service = this;

      // List of shopping items
      service.toBuyItems = [ { name: "cookies", quantity: 1 },
                    { name: "bread", quantity: 2 },
                    { name: "milk", quantity: 3 },
                    { name: "eggs", quantity: 4 },
                    { name: "jam", quantity: 5 }
                  ];
      service.boughtItems = [];

      service.buy = function (itemIndex) {
          service.boughtItems.push(service.toBuyItems[itemIndex]);
          service.toBuyItems.splice(itemIndex, 1);
      };
    }

})();
