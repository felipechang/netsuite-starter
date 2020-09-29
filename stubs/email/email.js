define([], function () {
    /**
     * SuiteScript module
     *
     * @module N/email
     * @suiteScriptVersion 2.x
     *
     */
    var email = function () {
    };


    /**
     * Method used to send transactional email asynchronously and receive bounceback notifications if the email is not successfully delivered.
     */
    function send(options) {
    }

    /**
     * This method is used to send bulk email when a bounceback notification is not required.
     */
    function sendBulk(options) {
    }

    /**
     * Method used to send a single “on-demand” campaign email to a specified recipient and return a campaign response ID to track the email.
     * Email (campaignemail) sublists are not supported. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     */
    function sendCampaign(options) {
    }

    email.prototype.send = send;
    email.prototype.sendBulk = sendBulk;
    email.prototype.sendCampaign = sendCampaign;

    email.prototype.send.promise = send;
    email.prototype.sendBulk.promise = sendBulk;
    email.prototype.sendCampaign.promise = sendCampaign;

    return new email();
});