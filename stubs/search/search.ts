/**
 * SuiteScript search common module
 * Load the search module to create and run on-demand or saved searches and analyze and iterate through the search results.
 *
 * @module N/search
 * @suiteScriptVersion 2.x
 *
 */
class search {

    /**
     * Creates a new search and returns it as a search.Search object.
     * The search can be modified and run as an on demand search with Search.run(), without saving it. Alternatively,
     * calling Search.save() will save the search to the database, so it can be reused later in the UI or loaded with search.load(options).
     * @governance none
     * @param {Object} options  the options object
     * @param {string} options.type  The search type that you want to base the search on. Use the search.Type enum for this argument.
     * @param {Filter|Filter[]|Object[]} [options.filters] A single search.Filter object, an array of search.Filter objects, a search filter expression, or an array of search filter expressions.
     * @param {Object[]} [options.filterExpression] Search filter expression for the search as an array of expression objects.
     * @param {Column|Column[]|Object[]} [options.columns] A single search.Column object or array of search.Column objects.
     * @param {string} [options.packageId] The application ID for this search.
     * @param {Setting|Setting[]|Object[]} [options.settings] Search settings for this search as a single search.Setting object or an array of search.Setting objects. Search settings let you specify search parameters that are typically available only in the UI. See Search.settings.
     * @param {string} [options.title] The name for a saved search. The title property is required to save a search with Search.save().
     * @param {string} [options.id] Script ID for a saved search. If you do not set the saved search ID, NetSuite generates one for you. See Search.id.
     * @param {boolean} [options.isPublic] Set to true to make the search public. Otherwise, set to false. If you do not set this parameter, it defaults to false.
     * @return {Search}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_FILTER_EXPR The options.filters parameter is not a valid search filter, filter array, or filter expression.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN The options.columns parameter is not a valid column, string, or column or string array.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING An unknown search parameter name is provided.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE An unsupported value is set for the provided search parameter name.
     *
     * @since 2015.2
     */

    create(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Loads an existing saved search and returns it as a search.Search. The saved search could have been created using the UI or created with search.create(options) and Search.save().
     * @governance 5 units
     * @param {Object} options  the options object
     * @param {string} options.id Internal ID or script ID of a saved search. The script ID starts with customsearch. See Search.id.
     * @param {string} [options.type] The search type of the saved search to load. Use a value from the search.Type enum for this parameter. Required if the saved search to load uses a standalone search type, optional otherwise.
     * @return {Search}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} INVALID_SEARCH Cannot find saved search with the saved search ID from options.id parameter.
     *
     * @since 2015.2
     */

    load(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Deletes an existing saved search. The saved search could have been created using the UI or created with search.create(options) and Search.save().
     * @governance 5 units
     * @param {Object} options the options object
     * @param {string} options.id Internal ID or script ID of a saved search. The script ID starts with customsearch. See Search.id.
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} INVALID_SEARCH Cannot find saved search with the saved search ID from options.id parameter.
     * @return {void}
     *
     * @since 2015.2
     */

    ["delete"](options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Performs a search for duplicate records based on the account"s duplicate detection configuration.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.type The search type that you want to check for duplicates. Use the search.Type enum for this parameter.
     * @param {Object} [options.fields] A set of key/value pairs used to detect duplicates. The keys are internal ID names of the fields used to detect duplicates.
     * @param {number} [options.id] Internal ID of an existing record.
     * @return {Result[]}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     *
     * @since 2015.2
     */

    duplicates(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Performs a global search against a single keyword or multiple keywords.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {string} options.keywords Global search keywords string or expression.
     * @return {Result[]}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     *
     * @since 2015.2
     */

    global(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Performs a search for one or more body fields on a record.
     * @governance 1 unit
     * @param {Object} options  the options object
     * @param {string} options.type The search type that you want to check for duplicates. Use the search.Type enum for this parameter.
     * @param {string} options.id Internal ID for the record, for example 777 or 87.
     * @param {string|string[]} options.columns Array of column/field names to look up, or a single column/field name. The columns parameter can also be set to reference joined fields.
     * @return {Object}
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN The options.columns parameter is not a valid column, string, or column or string array.
     *
     * @since 2015.2
     */

    lookupFields(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Creates a new search column as a search.Column object.
     * @governance none
     * @param {Object} options  the options object
     * @param {string} options.name  Name of the search column.
     * @param {string} [options.join]  Join ID for the search column.
     * @param {string} [options.summary] Summary type for the column.
     * @param {string} [options.formula] Formula used for the column.
     * @param {string} [options.function] Special function for the search column.
     * @param {string} [options.label] Label for the search column.
     * @param {string} [options.sort] The sort order of the column.
     * @return {Column} the created column object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM The options.summary parameter is not a valid search summary type.
     * @throws {SuiteScriptError} INVALID_SRCH_FUNCTN An unknown function is provided.
     *
     * @since 2015.2
     */

    createColumn(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Creates a new search filter as a search.Filter object.
     * @governance none
     * @param {Object} options  the options object
     * @param {string} options.name  Name or internal ID of the search field.
     * @param {string} [options.join] Join ID for the search filter.
     * @param {string} options.operator Operator used for the search filter. Use the search.Operator enum.
     * @param {string|Date|Number|boolean|string[]|Date[]|Number[]} [options.values] Values to be used as filter parameters.
     * @param {string} [options.formula] Formula used for this filter
     * @param {Summary} [options.summary] Summary type for the search filter.
     * @return {Filter} the created filter object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT Required parameter is missing.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR Options.summary parameter is not a valid search summary type.
     * @throws {SuiteScriptError} INVALID_SRCH_SUMMARY_TYP Options.operator parameter is not a valid operator type.
     *
     * @since 2015.2
     */

    createFilter(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Creates a new search setting and returns it as a search.Setting object.
     * @governance none
     * @param {Object} options  the options object
     * @param {string} options.name The name of the search parameter to set
     * @param {string} options.value The value of the search parameter.
     * @return {Setting} the created setting object
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT A required parameter is missing.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING An unknown search parameter name is provided.
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_SETTING_VALUE An unsupported value is set for the provided search parameter name.
     *
     * @since 2015.2
     */

    createSetting(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Enumeration that holds the values for search operators to use with the search.Filter.
     * @enum {string}
     * @readonly
     */

    public Operator = {
        AFTER: "after",
        ALLOF: "allof",
        ANY: "any",
        ANYOF: "anyof",
        BEFORE: "before",
        BETWEEN: "between",
        CONTAINS: "contains",
        DOESNOTCONTAIN: "doesnotcontain",
        DOESNOTSTARTWITH: "doesnotstartwith",
        EQUALTO: "equalto",
        GREATERTHAN: "greaterthan",
        GREATERTHANOREQUALTO: "greaterthanorequalto",
        HASKEYWORDS: "haskeywords",
        IS: "is",
        ISEMPTY: "isempty",
        ISNOT: "isnot",
        ISNOTEMPTY: "isnotempty",
        LESSTHAN: "lessthan",
        LESSTHANOREQUALTO: "lessthanorequalto",
        NONEOF: "noneof",
        NOTAFTER: "notafter",
        NOTALLOF: "notallof",
        NOTBEFORE: "notbefore",
        NOTBETWEEN: "notbetween",
        NOTEQUALTO: "notequalto",
        NOTGREATERTHAN: "notgreaterthan",
        NOTGREATERTHANOREQUALTO: "notgreaterthanorequalto",
        NOTLESSTHAN: "notlessthan",
        NOTLESSTHANOREQUALTO: "notlessthanorequalto",
        NOTON: "noton",
        NOTONORAFTER: "notonorafter",
        NOTONORBEFORE: "notonorbefore",
        NOTWITHIN: "notwithin",
        ON: "on",
        ONORAFTER: "onorafter",
        ONORBEFORE: "onorbefore",
        STARTSWITH: "startswith",
        WITHIN: "within",
    };

    /**
     * Enumeration that holds the values for summary types used by the Column.summary or Filter.summary properties.
     * @enum {string}
     * @readonly
     */

    public Summary = {
        GROUP: "GROUP",
        COUNT: "COUNT",
        SUM: "SUM",
        AVG: "AVG",
        MIN: "MIN",
        MAX: "MAX",
    };

    /**
     * Enumeration that holds the values for supported sorting directions used with search.createColumn(options).
     * @enum {string}
     * @readonly
     */

    public Sort = {
        ASC: "ASC",
        DESC: "DESC",
        NONE: "NONE",
    };

    public Type = {
        ACCOUNT: "account",
        ACCOUNTING_BOOK: "accountingbook",
        ACCOUNTING_CONTEXT: "accountingcontext",
        ACCOUNTING_PERIOD: "accountingperiod",
        ADV_INTER_COMPANY_JOURNAL_ENTRY: "advintercompanyjournalentry",
        ALLOC_RECOMMENDATION_DEMAND: "AllocRecommendationDemand",
        ALLOC_RECOMMENDATION_DETAIL: "AllocRecommendationDetail",
        AMORTIZATION_SCHEDULE: "amortizationschedule",
        AMORTIZATION_TEMPLATE: "amortizationtemplate",
        ASSEMBLY_BUILD: "assemblybuild",
        ASSEMBLY_ITEM: "assemblyitem",
        ASSEMBLY_UNBUILD: "assemblyunbuild",
        BALANCE_TRX_BY_SEGMENTS: "BalanceTrxBySegments",
        BILLING_ACCOUNT: "billingaccount",
        BILLING_CLASS: "billingclass",
        BILLING_RATE_CARD: "billingratecard",
        BILLING_REVENUE_EVENT: "billingrevenueevent",
        BILLING_SCHEDULE: "billingschedule",
        BIN: "bin",
        BIN_ITEM_BALANCE: "BinItemBalance",
        BIN_TRANSFER: "bintransfer",
        BIN_WORKSHEET: "binworksheet",
        BLANKET_PURCHASE_ORDER: "blanketpurchaseorder",
        BOM: "bom",
        BOM_REVISION: "bomrevision",
        BONUS: "bonus",
        BONUS_TYPE: "bonustype",
        BUDGET_EXCHANGE_RATE: "budgetexchangerate",
        BULK_OWNERSHIP_TRANSFER: "bulkownershiptransfer",
        BUNDLE_INSTALLATION_SCRIPT: "bundleinstallationscript",
        CALENDAR_EVENT: "calendarevent",
        CAMPAIGN: "campaign",
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
        COMMERCE_SEARCH_ACTIVITY_DATA: "CommerceSearchActivityData",
        COMPETITOR: "competitor",
        COM_SEARCH_BOOST: "ComSearchBoost",
        COM_SEARCH_BOOST_TYPE: "ComSearchBoostType",
        COM_SEARCH_ONE_WAY_SYN: "ComSearchOneWaySyn",
        COM_SEARCH_GROUP_SYN: "ComSearchGroupSyn",
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
        CURRENCY_EXCHANGE_RATE: "CurrencyExchangeRate",
        CUSTOMER: "customer",
        CUSTOMER_CATEGORY: "customercategory",
        CUSTOMER_DEPOSIT: "customerdeposit",
        CUSTOMER_MESSAGE: "customermessage",
        CUSTOMER_PAYMENT: "customerpayment",
        CUSTOMER_PAYMENT_AUTHORIZATION: "customerpaymentauthorization",
        CUSTOMER_REFUND: "customerrefund",
        CUSTOMER_STATUS: "customerstatus",
        CUSTOMER_SUBSIDIARY_RELATIONSHIP: "customersubsidiaryrelationship",
        CUSTOM_PURCHASE: "custompurchase",
        CUSTOM_RECORD: "customrecord",
        CUSTOM_SALE: "customsale",
        CUSTOM_TRANSACTION: "customtransaction",
        DEPARTMENT: "department",
        DEPOSIT: "deposit",
        DEPOSIT_APPLICATION: "depositapplication",
        DESCRIPTION_ITEM: "descriptionitem",
        DISCOUNT_ITEM: "discountitem",
        DOWNLOAD_ITEM: "downloaditem",
        EMPLOYEE: "employee",
        EMPLOYEE_CHANGE_REQUEST: "employeechangerequest",
        EMPLOYEE_CHANGE_REQUEST_TYPE: "employeechangerequesttype",
        EMPLOYEE_PAYROLL_ITEM: "EmployeePayrollItem",
        EMPLOYEE_STATUS: "EmployeeStatus",
        EMPLOYEE_TYPE: "EmployeeType",
        ENTITY_ACCOUNT_MAPPING: "entityaccountmapping",
        ESTIMATE: "estimate",
        EXPENSE_AMORT_PLAN_AND_SCHEDULE: "ExpenseAmortPlanAndSchedule",
        EXPENSE_AMORTIZATION_EVENT: "expenseamortizationevent",
        EXPENSE_CATEGORY: "expensecategory",
        EXPENSE_PLAN: "expenseplan",
        EXPENSE_REPORT: "expensereport",
        FAIR_VALUE_PRICE: "fairvalueprice",
        FIXED_AMOUNT_PROJECT_REVENUE_RULE: "fixedamountprojectrevenuerule",
        FINANCIAL_INSTITUTION: "financialinstitution",
        FOLDER: "folder",
        FULFILLMENT_REQUEST: "fulfillmentrequest",
        GENERIC_RESOURCE: "genericresource",
        GIFT_CERTIFICATE: "giftcertificate",
        GIFT_CERTIFICATE_ITEM: "giftcertificateitem",
        GL_NUMBERING_SEQUENCE: "glnumberingsequence",
        GLOBAL_ACCOUNT_MAPPING: "globalaccountmapping",
        GLOBAL_INVENTORY_RELATIONSHIP: "globalinventoryrelationship",
        GOAL: "goal",
        INBOUND_SHIPMENT: "inboundshipment",
        INTER_COMPANY_JOURNAL_ENTRY: "intercompanyjournalentry",
        INTER_COMPANY_TRANSFER_ORDER: "intercompanytransferorder",
        INVENTORY_ADJUSTMENT: "inventoryadjustment",
        INVENTORY_COST_REVALUATION: "inventorycostrevaluation",
        INVENTORY_COUNT: "inventorycount",
        INVENTORY_DEMAND: "InventoryDemand",
        INVENTORY_DETAIL: "inventorydetail",
        INVENTORY_ITEM: "inventoryitem",
        INVENTORY_NUMBER: "inventorynumber",
        INVENTORY_NUMBER_ITEM: "InventoryNumberItem",
        INVENTORY_STATUS: "inventorystatus",
        INVENTORY_STATUS_LOCATION: "InventoryStatusLocation",
        INVENTORY_STATUS_CHANGE: "inventorystatuschange",
        INVENTORY_TRANSFER: "inventorytransfer",
        INVOICE: "invoice",
        INVOICE_GROUP: "invoicegroup",
        INVT_NUMBER_ITEM_BALANCE: "InvtNumberItemBalance",
        ISSUE: "issue",
        ITEM_ACCOUNT_MAPPING: "itemaccountmapping",
        ITEM_BIN_NUMBER: "ItemBinNumber",
        ITEM_COLLECTION: "itemcollection",
        ITEM_COLLECTION_ITEM_MAP: "itemcollectionitemmap",
        ITEM_DEMAND_PLAN: "itemdemandplan",
        ITEM_FULFILLMENT: "itemfulfillment",
        ITEM_GROUP: "itemgroup",
        ITEM_LOCATION_CONFIGURATION: "itemlocationconfiguration",
        ITEM_PROCESS_FAMILY: "itemprocessfamily",
        ITEM_PROCESS_GROUP: "itemprocessgroup",
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
        MEM_DOC: "memdoc",
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
        ORDER_TYPE: "ordertype",
        OTHER_CHARGE_ITEM: "otherchargeitem",
        OTHER_NAME: "othername",
        OTHER_NAME_CATEGORY: "othernamecategory",
        PARTNER: "partner",
        PARTNER_CATEGORY: "partnercategory",
        PAYCHECK: "paycheck",
        PAYCHECK_JOURNAL: "paycheckjournal",
        PAYMENT_ITEM: "paymentitem",
        PAYMENT_METHOD: "paymentmethod",
        PAYROLL_ITEM: "payrollitem",
        PAYROLL_SETUP: "PayrollSetup",
        PERFORMANCE_METRIC: "performancemetric",
        PERFORMANCE_REVIEW: "performancereview",
        PERFORMANCE_REVIEW_SCHEDULE: "performancereviewschedule",
        PERIOD_END_JOURNAL: "periodendjournal",
        PCT_COMPLETE_PROJECT_REVENUE_RULE: "pctcompleteprojectrevenuerule",
        PHONE_CALL: "phonecall",
        PICK_STRATEGY: "pickstrategy",
        PICK_TASK: "picktask",
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
        RESOURCE_ALLOCATION: "resourceallocation",
        RES_ALLOCATION_TIME_OFF_CONFLICT: "ResAllocationTimeOffConflict",
        RESTLET: "restlet",
        RETURN_AUTHORIZATION: "returnauthorization",
        REVENUE_ARRANGEMENT: "revenuearrangement",
        REVENUE_COMMITMENT: "revenuecommitment",
        REVENUE_COMMITMENT_REVERSAL: "revenuecommitmentreversal",
        REVENUE_PLAN: "revenueplan",
        REV_REC_PLAN_AND_SCHEDULE: "RevRecPlanAndSchedule",
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
        SUPPLY_CHAIN_SNAPSHOT_DETAILS: "SupplyChainSnapshotDetails",
        SUPPORT_CASE: "supportcase",
        TASK: "task",
        TAX_GROUP: "taxgroup",
        TAX_PERIOD: "taxperiod",
        TAX_TYPE: "taxtype",
        TERM: "term",
        TIME_APPROVAL: "TimeApproval",
        TIME_BILL: "timebill",
        TIME_ENTRY: "timeentry",
        TIME_OFF_CHANGE: "timeoffchange",
        TIME_OFF_PLAN: "timeoffplan",
        TIME_OFF_REQUEST: "timeoffrequest",
        TIME_OFF_RULE: "timeoffrule",
        TIME_OFF_TYPE: "timeofftype",
        TIME_SHEET: "timesheet",
        TIMESHEET_APPROVAL: "TimesheetApproval",
        TOPIC: "topic",
        TRANSFER_ORDER: "transferorder",
        UNITS_TYPE: "unitstype",
        UNLOCKED_TIME_PERIOD: "unlockedtimeperiod",
        USAGE: "usage",
        USEREVENT_SCRIPT: "usereventscript",
        VENDOR: "vendor",
        VENDOR_BILL: "vendorbill",
        VENDOR_CATEGORY: "vendorcategory",
        VENDOR_CREDIT: "vendorcredit",
        VENDOR_PAYMENT: "vendorpayment",
        VENDOR_PREPAYMENT: "vendorprepayment",
        VENDOR_PREPAYMENT_APPLICATION: "vendorprepaymentapplication",
        VENDOR_RETURN_AUTHORIZATION: "vendorreturnauthorization",
        VENDOR_SUBSIDIARY_RELATIONSHIP: "vendorsubsidiaryrelationship",
        WAVE: "wave",
        WBS: "wbs",
        WEBSITE: "website",
        WORKFLOW_ACTION_SCRIPT: "workflowactionscript",
        WORK_ORDER: "workorder",
        WORK_ORDER_CLOSE: "workorderclose",
        WORK_ORDER_COMPLETION: "workordercompletion",
        WORK_ORDER_ISSUE: "workorderissue",
        WORKPLACE: "workplace",
        ZONE: "zone",
        BALANCING_RESULT: "BalancingResult",
        BALANCING_TRANSACTION: "BalancingTransaction",
        BALANCING_DETAIL: "BalancingDetail",
        FIN_RPT_AGGREGATE_F_R: "FinRptAggregateFR",
        AGGR_FIN_DAT: "AggrFinDat",
        BILLING_ACCOUNT_BILL_CYCLE: "BillingAccountBillCycle",
        BILLING_ACCOUNT_BILL_REQUEST: "BillingAccountBillRequest",
        DELETED_RECORD: "DeletedRecord",
        END_TO_END_TIME: "EndToEndTime",
        GL_LINES_AUDIT_LOG: "GlLinesAuditLog",
        INSTALLMENT: "Installment",
        INVENTORY_BALANCE: "InventoryBalance",
        INVENTORY_NUMBER_BIN: "InventoryNumberBin",
        PERMISSION: "Permission",
        PRICING: "Pricing",
        PROJECT_IC_CHARGE_REQUEST: "ProjectIcChargeRequest",
        RECENT_RECORD: "RecentRecord",
        ROLE: "Role",
        SAVED_SEARCH: "SavedSearch",
        SHOPPING_CART: "ShoppingCart",
        STATE: "State",
        SUBSCRIPTION_LINE_REVISION: "SubscriptionLineRevision",
        SUBSCRIPTION_RENEWAL_HISTORY: "SubscriptionRenewalHistory",
        SUITE_SCRIPT_DETAIL: "SuiteScriptDetail",
        S_C_M_PREDICTED_RISKS: "SCMPredictedRisks",
        S_C_M_PREDICTION_TRAIN_HISTORY: "SCMPredictionTrainHistory",
        SYSTEM_NOTE: "SystemNote",
        TAX_DETAIL: "TaxDetail",
        UBER: "Uber",
        ENTITY: "entity",
        ACTIVITY: "activity",
        ITEM: "item",
        TRANSACTION: "transaction",
        PAYMENT_EVENT: "PaymentEvent",
        GATEWAY_NOTIFICATION: "GatewayNotification",
        PAYMENT_INSTRUMENT: "PaymentInstrument",
        PAYMENT_RESULT_PREVIEW: "PaymentResultPreview",
        PAYMENT_OPTION: "PaymentOption",
        CARDHOLDER_AUTHENTICATION: "CardholderAuthentication",
        CARDHOLDER_AUTHENTICATION_EVENT: "CardholderAuthenticationEvent",
        AUTHENTICATE_DEVICE_INPUT: "AuthenticateDeviceInput",
        CHALLENGE_SHOPPER_INPUT: "ChallengeShopperInput",
    };
}

export default new search();