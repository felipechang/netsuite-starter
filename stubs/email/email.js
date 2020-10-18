(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var send = function () {
    };
    var sendBulk = function () {
    };
    var sendCampaign = function () {
        return 0;
    };
    var Email = /** @class */ (function () {
        function Email() {
            /**
             * Method used to send transactional email asynchronously and receive bounceback notifications if the email is not successfully delivered.
             */
            this.send = send;
            /**
             * This method is used to send bulk email when a bounceback notification is not required.
             */
            this.sendBulk = sendBulk;
            /**
             * Method used to send a single “on-demand” campaign email to a specified recipient and return a campaign response ID to track the email.
             * Email (campaignemail) sublists are not supported. The campaign must use a Lead Nurturing (campaigndrip) sublist.
             */
            this.sendCampaign = sendCampaign;
        }
        return Email;
    }());
    return new Email();
});
