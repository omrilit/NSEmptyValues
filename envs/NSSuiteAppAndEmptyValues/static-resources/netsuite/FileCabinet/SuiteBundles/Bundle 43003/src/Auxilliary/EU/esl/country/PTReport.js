/**
 * Copyright © 2014, Oracle and/or its affiliates. All rights reserved.
 */

var VAT = VAT || {};
VAT.EU = VAT.EU || {};
VAT.EU.ESL = VAT.EU.ESL || {};
VAT.EU.ESL.PT = VAT.EU.ESL.PT || {};

/**
 * Report Class
 */
VAT.EU.ESL.PT.Report = function _PTReport(baseDetails, countryDetails) {
    if (!baseDetails) {
        throw nlapiCreateError('MISSING_ARGUMENT', 'baseDetails is required');
    }
    
    if (!countryDetails) {
        throw nlapiCreateError('MISSING_ARGUMENT', 'countryDetails is required');
    }
    
    VAT.EU.ESL.BaseReport.call(this);
    
    try {
        this.initializeBaseDetails(baseDetails);
        this.supplementCountryDetails(countryDetails);
    } catch (e) {
        logException(e, 'VAT.EU.ESL.PT.Report');
        throw e;
    }
};

VAT.EU.ESL.PT.Report.prototype = Object.create(VAT.EU.ESL.BaseReport.prototype);


/**
 * Data Formatter Class
 */
VAT.EU.ESL.PT.DataFormatter = function _PTDataFormatter() {
    VAT.EU.BaseDataFormatter.call(this);
};

VAT.EU.ESL.PT.DataFormatter.prototype = Object.create(VAT.EU.BaseDataFormatter.prototype);

VAT.EU.ESL.PT.DataFormatter.prototype.formatData = function _formatData() {
    try {
        this.setColumnProperty('align');
        this.setDecimalPlaces(0, 'amount');
    } catch (e) {
        logException(e, 'VAT.EU.ESL.PT.DataFormatter.formatData');
        throw e;
    }
};