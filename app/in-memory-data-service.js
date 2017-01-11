"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var message = [
            { message: "DB request received" },
            { message: "Azure account created" },
            { message: "Azure Database created" },
            { message: "Database Initiated" },
            { message: "Process complete" }
        ];
        return { message: message };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data-service.js.map