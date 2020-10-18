/**
 * SuiteScript module
 *
 * @module N/email
 * @suiteScriptVersion 2.x
 *
 */

class Email {

    /**
     * Method used to send transactional email asynchronously and receive
     * bounceback notifications if the email is not successfully delivered
     */
    public send(options: any): void {
        if (options) {
            //
        }
    }

    /** This method is used to send bulk email when a bounceback notification is not required */
    public sendBulk(options: any): void {
        if (options) {
            //
        }
    }

    /**
     * Method used to send a single “on-demand” campaign email to a specified recipient and return a campaign response ID to track the email.
     * Email (campaignemail) sublists are not supported. The campaign must use a Lead Nurturing (campaigndrip) sublist.
     */
    public sendCampaign(options: any): void {
        if (options) {
            //
        }
    }
}

export default new Email();