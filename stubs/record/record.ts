/**
 * SuiteScript record common module
 *
 * @module N/record
 * @suiteScriptVersion 2.x
 *
 */
class record {

    /**
     * Create a new record object based on provided type
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type is missing
     *
     * @since 2015.2
     */
    create(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Load an existing nlobjRecord from the database based on provided type, id
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    load(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Copy a record object based on provided type, id
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] record default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    copy(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Transform a record into another type (i.e. salesOrder -> invoice -or- opportunity -> estimate)
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     *
     * @param {Object} options
     * @param {string} options.fromType record type to be transformed from
     * @param {number|string} options.fromId record id to be transformed from
     * @param {string} options.toType record type to be transformed to
     * @param {boolean} [options.isDynamic=false] record is dynamic
     * @param {Object} [options.defaultValues={}] transformed record"s default values
     * @return {Record}
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if options.type or options.id is missing
     *
     * @since 2015.2
     */
    transform(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Delete a record object based on provided type, id and return the id of deleted record
     *
     * @governance 20 units for transactions, 4 for custom records, 10 for all other records
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @return {number} recordId
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    ["delete"](options: any): any {
        if (options) {
            //
        }
    };

    /**
     * commit record field updates to the system
     *
     * @governance 10 units for transactions, 2 for custom records, 5 for all other records
     * @restriction only supported for records and fields where DLE (Direct List Editing) is supported
     *
     * @param {Object} options
     * @param {string} options.type record type
     * @param {number|string} options.id record id
     * @param {Object} options.values field and value mapping to be submitted
     * @param {Object} [options.options] additonal flags for submission
     * @param {boolean} [options.options.enablesourcing=true] enable sourcing during record update
     * @param {boolean} [options.options.ignoreMandatoryFields=false] ignore mandatory field during record submission
     *
     * @return {number} id of submitted record
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if type or id is missing
     *
     * @since 2015.2
     */
    submitFields(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * attach record to another record
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Object} options.record record to be attached
     * @param {Object} options.record.type the type of the record to be attached
     * @param {number|string} options.record.id the id of the record to be attached
     * @param {Object} options.to the destination record where options.record will be attached to
     * @param {string} options.to.type the type of the destination
     * @param {number|string} options.to.id the id of the destination
     * @param {Object} [options.attributes=null] name/value pairs containing attributes
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or to (and their type and id) are missing
     *
     * @since 2015.2
     */
    attach(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * detach record from another record
     *
     * @governance 10 units
     *
     * @param {Object} options
     * @param {Object} options.record record to be detached
     * @param {Object} options.record.type the type of the record to be detached
     * @param {number|string} options.record.id the id of the record to be detached
     * @param {Object} options.from the destination record where options.record will be detached from
     * @param {string} options.from.type the type of the destination
     * @param {number|string} options.from.id the id of the destination
     * @param {Object} [options.attributes=null] name/value pairs containing attributes
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if any of record or from (and their type and id) are missing
     *
     * @since 2015.2
     */
    detach(options: any): any {
        if (options) {
            //
        }
    };

    Type = {
        ACCOUNT: "account",
        ACCOUNTING_BOOK: "accountingbook",
        ACCOUNTING_CONTEXT: "accountingcontext",
        ACCOUNTING_PERIOD: "accountingperiod",
        ADV_INTER_COMPANY_JOURNAL_ENTRY: "advintercompanyjournalentry",
        ALLOCATION_SCHEDULE: "allocationschedule",
        AMORTIZATION_SCHEDULE: "amortizationschedule",
        AMORTIZATION_TEMPLATE: "amortizationtemplate",
        ASSEMBLY_BUILD: "assemblybuild",
        ASSEMBLY_ITEM: "assemblyitem",
        ASSEMBLY_UNBUILD: "assemblyunbuild",
        BILLING_ACCOUNT: "billingaccount",
        BILLING_CLASS: "billingclass",
        BILLING_RATE_CARD: "billingratecard",
        BILLING_REVENUE_EVENT: "billingrevenueevent",
        BILLING_SCHEDULE: "billingschedule",
        BIN: "bin",
        BIN_TRANSFER: "bintransfer",
        BIN_WORKSHEET: "binworksheet",
        BLANKET_PURCHASE_ORDER: "blanketpurchaseorder",
        BOM: "bom",
        BOM_REVISION: "bomrevision",
        BUNDLE_INSTALLATION_SCRIPT: "bundleinstallationscript",
        BULK_OWNERSHIP_TRANSFER: "bulkownershiptransfer",
        CALENDAR_EVENT: "calendarevent",
        CAMPAIGN: "campaign",
        CAMPAIGN_RESPONSE: "campaignresponse",
        CAMPAIGN_TEMPLATE: "campaigntemplate",
        CASH_REFUND: "cashrefund",
        CASH_SALE: "cashsale",
        CHARGE: "charge",
        CHARGE_RULE: "chargerule",
        CHECK: "check",
        CLASSIFICATION: "classification",
        CLIENT_SCRIPT: "clientscript",
        CMS_CONTENT: "cmscontent",
        CMS_CONTENT_TYPE: "cmscontenttype",
        CMS_PAGE: "cmspage",
        COMMERCE_CATEGORY: "commercecategory",
        COMPETITOR: "competitor",
        CONSOLIDATED_EXCHANGE_RATE: "consolidatedexchangerate",
        CONTACT: "contact",
        CONTACT_CATEGORY: "contactcategory",
        CONTACT_ROLE: "contactrole",
        COST_CATEGORY: "costcategory",
        COUPON_CODE: "couponcode",
        CREDIT_CARD_CHARGE: "creditcardcharge",
        CREDIT_CARD_REFUND: "creditcardrefund",
        CREDIT_MEMO: "creditmemo",
        CURRENCY: "currency",
        CUSTOMER: "customer",
        CUSTOMER_CATEGORY: "customercategory",
        CUSTOMER_DEPOSIT: "customerdeposit",
        CUSTOMER_MESSAGE: "customermessage",
        CUSTOMER_PAYMENT: "customerpayment",
        CUSTOMER_PAYMENT_AUTHORIZATION: "customerpaymentauthorization",
        CUSTOMER_REFUND: "customerrefund",
        CUSTOMER_STATUS: "customerstatus",
        CUSTOMER_SUBSIDIARY_RELATIONSHIP: "customersubsidiaryrelationship",
        CUSTOM_RECORD: "customrecord",
        CUSTOM_TRANSACTION: "customtransaction",
        DEPARTMENT: "department",
        DEPOSIT: "deposit",
        DEPOSIT_APPLICATION: "depositapplication",
        DESCRIPTION_ITEM: "descriptionitem",
        DISCOUNT_ITEM: "discountitem",
        DOWNLOAD_ITEM: "downloaditem",
        EMAIL_TEMPLATE: "emailtemplate",
        EMPLOYEE: "employee",
        ENTITY_ACCOUNT_MAPPING: "entityaccountmapping",
        ESTIMATE: "estimate",
        EXPENSE_CATEGORY: "expensecategory",
        EXPENSE_REPORT: "expensereport",
        FAIR_VALUE_PRICE: "fairvalueprice",
        FIXED_AMOUNT_PROJECT_REVENUE_RULE: "fixedamountprojectrevenuerule",
        FOLDER: "folder",
        FULFILLMENT_REQUEST: "fulfillmentrequest",
        GENERAL_TOKEN: "generaltoken",
        GENERIC_RESOURCE: "genericresource",
        GIFT_CERTIFICATE: "giftcertificate",
        GIFT_CERTIFICATE_ITEM: "giftcertificateitem",
        GLOBAL_ACCOUNT_MAPPING: "globalaccountmapping",
        GLOBAL_INVENTORY_RELATIONSHIP: "globalinventoryrelationship",
        INBOUND_SHIPMENT: "inboundshipment",
        INTERCOMP_ALLOCATION_SCHEDULE: "intercompallocationschedule",
        INTER_COMPANY_JOURNAL_ENTRY: "intercompanyjournalentry",
        INTER_COMPANY_TRANSFER_ORDER: "intercompanytransferorder",
        INVENTORY_ADJUSTMENT: "inventoryadjustment",
        INVENTORY_COST_REVALUATION: "inventorycostrevaluation",
        INVENTORY_COUNT: "inventorycount",
        INVENTORY_DETAIL: "inventorydetail",
        INVENTORY_ITEM: "inventoryitem",
        INVENTORY_NUMBER: "inventorynumber",
        INVENTORY_STATUS: "inventorystatus",
        INVENTORY_STATUS_CHANGE: "inventorystatuschange",
        INVENTORY_TRANSFER: "inventorytransfer",
        INVOICE: "invoice",
        ISSUE: "issue",
        ISSUE_PRODUCT: "issueproduct",
        ISSUE_PRODUCT_VERSION: "issueproductversion",
        ITEM_ACCOUNT_MAPPING: "itemaccountmapping",
        ITEM_DEMAND_PLAN: "itemdemandplan",
        ITEM_FULFILLMENT: "itemfulfillment",
        ITEM_GROUP: "itemgroup",
        ITEM_LOCATION_CONFIGURATION: "itemlocationconfiguration",
        ITEM_RECEIPT: "itemreceipt",
        ITEM_REVISION: "itemrevision",
        ITEM_SUPPLY_PLAN: "itemsupplyplan",
        JOB: "job",
        JOB_STATUS: "jobstatus",
        JOB_TYPE: "jobtype",
        JOURNAL_ENTRY: "journalentry",
        KIT_ITEM: "kititem",
        LABOR_BASED_PROJECT_REVENUE_RULE: "laborbasedprojectrevenuerule",
        LEAD: "lead",
        LOCATION: "location",
        LOT_NUMBERED_ASSEMBLY_ITEM: "lotnumberedassemblyitem",
        LOT_NUMBERED_INVENTORY_ITEM: "lotnumberedinventoryitem",
        MANUFACTURING_COST_TEMPLATE: "manufacturingcosttemplate",
        MANUFACTURING_OPERATION_TASK: "manufacturingoperationtask",
        MANUFACTURING_ROUTING: "manufacturingrouting",
        MAP_REDUCE_SCRIPT: "mapreducescript",
        MARKUP_ITEM: "markupitem",
        MASSUPDATE_SCRIPT: "massupdatescript",
        MERCHANDISE_HIERARCHY_LEVEL: "merchandisehierarchylevel",
        MERCHANDISE_HIERARCHY_NODE: "merchandisehierarchynode",
        MERCHANDISE_HIERARCHY_VERSION: "merchandisehierarchyversion",
        MESSAGE: "message",
        MFG_PLANNED_TIME: "mfgplannedtime",
        NEXUS: "nexus",
        NON_INVENTORY_ITEM: "noninventoryitem",
        NOTE: "note",
        NOTE_TYPE: "notetype",
        OPPORTUNITY: "opportunity",
        ORDER_SCHEDULE: "orderschedule",
        OTHER_CHARGE_ITEM: "otherchargeitem",
        OTHER_NAME: "othername",
        OTHER_NAME_CATEGORY: "othernamecategory",
        PARTNER: "partner",
        PARTNER_CATEGORY: "partnercategory",
        PAYCHECK: "paycheck",
        PAYCHECK_JOURNAL: "paycheckjournal",
        PAYMENT_CARD: "paymentcard",
        PAYMENT_CARD_TOKEN: "paymentcardtoken",
        PAYMENT_ITEM: "paymentitem",
        PAYMENT_METHOD: "paymentmethod",
        PAYROLL_ITEM: "payrollitem",
        PERIOD_END_JOURNAL: "periodendjournal",
        PCT_COMPLETE_PROJECT_REVENUE_RULE: "pctcompleteprojectrevenuerule",
        PHONE_CALL: "phonecall",
        PORTLET: "portlet",
        PRICE_BOOK: "pricebook",
        PRICE_LEVEL: "pricelevel",
        PRICE_PLAN: "priceplan",
        PRICING_GROUP: "pricinggroup",
        PROJECT_EXPENSE_TYPE: "projectexpensetype",
        PROJECT_TASK: "projecttask",
        PROJECT_TEMPLATE: "projecttemplate",
        PROMOTION_CODE: "promotioncode",
        PROSPECT: "prospect",
        PURCHASE_CONTRACT: "purchasecontract",
        PURCHASE_ORDER: "purchaseorder",
        PURCHASE_REQUISITION: "purchaserequisition",
        REALLOCATE_ITEM: "reallocateitem",
        RECEIVE_INBOUND_SHIPMENT: "receiveinboundshipment",
        RESOURCE_ALLOCATION: "resourceallocation",
        RESTLET: "restlet",
        RETURN_AUTHORIZATION: "returnauthorization",
        REVENUE_ARRANGEMENT: "revenuearrangement",
        REVENUE_COMMITMENT: "revenuecommitment",
        REVENUE_COMMITMENT_REVERSAL: "revenuecommitmentreversal",
        REVENUE_PLAN: "revenueplan",
        REV_REC_SCHEDULE: "revrecschedule",
        REV_REC_TEMPLATE: "revrectemplate",
        SALES_ORDER: "salesorder",
        SALES_ROLE: "salesrole",
        SALES_TAX_ITEM: "salestaxitem",
        SCHEDULED_SCRIPT: "scheduledscript",
        SCHEDULED_SCRIPT_INSTANCE: "scheduledscriptinstance",
        SCRIPT_DEPLOYMENT: "scriptdeployment",
        SERIALIZED_ASSEMBLY_ITEM: "serializedassemblyitem",
        SERIALIZED_INVENTORY_ITEM: "serializedinventoryitem",
        SERVICE_ITEM: "serviceitem",
        SHIP_ITEM: "shipitem",
        SOLUTION: "solution",
        STATISTICAL_JOURNAL_ENTRY: "statisticaljournalentry",
        STORE_PICKUP_FULFILLMENT: "storepickupfulfillment",
        SUBSCRIPTION: "subscription",
        SUBSCRIPTION_CHANGE_ORDER: "subscriptionchangeorder",
        SUBSCRIPTION_LINE: "subscriptionline",
        SUBSCRIPTION_PLAN: "subscriptionplan",
        SUBSIDIARY: "subsidiary",
        SUBTOTAL_ITEM: "subtotalitem",
        SUITELET: "suitelet",
        SUPPLY_CHAIN_SNAPSHOT: "supplychainsnapshot",
        SUPPORT_CASE: "supportcase",
        TASK: "task",
        TAX_ACCT: "taxacct",
        TAX_GROUP: "taxgroup",
        TAX_PERIOD: "taxperiod",
        TAX_TYPE: "taxtype",
        TERM: "term",
        TIME_BILL: "timebill",
        TIME_ENTRY: "timeentry",
        TIME_OFF_CHANGE: "timeoffchange",
        TIME_OFF_PLAN: "timeoffplan",
        TIME_OFF_REQUEST: "timeoffrequest",
        TIME_OFF_RULE: "timeoffrule",
        TIME_OFF_TYPE: "timeofftype",
        TIME_SHEET: "timesheet",
        TOPIC: "topic",
        TRANSFER_ORDER: "transferorder",
        UNITS_TYPE: "unitstype",
        USAGE: "usage",
        USEREVENT_SCRIPT: "usereventscript",
        VENDOR: "vendor",
        VENDOR_BILL: "vendorbill",
        VENDOR_CATEGORY: "vendorcategory",
        VENDOR_CREDIT: "vendorcredit",
        VENDOR_PAYMENT: "vendorpayment",
        VENDOR_RETURN_AUTHORIZATION: "vendorreturnauthorization",
        VENDOR_SUBSIDIARY_RELATIONSHIP: "vendorsubsidiaryrelationship",
        WEBSITE: "website",
        WORKFLOW_ACTION_SCRIPT: "workflowactionscript",
        WORK_ORDER: "workorder",
        WORK_ORDER_CLOSE: "workorderclose",
        WORK_ORDER_COMPLETION: "workordercompletion",
        WORK_ORDER_ISSUE: "workorderissue",
        WORKPLACE: "workplace",
    };
}

export = new record();