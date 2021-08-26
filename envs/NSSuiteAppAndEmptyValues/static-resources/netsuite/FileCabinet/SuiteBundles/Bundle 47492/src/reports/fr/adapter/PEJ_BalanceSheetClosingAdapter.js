/**
 * Copyright 2015, 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 */

var TAF = TAF || {};
TAF.FR = TAF.FR || {};
TAF.FR.Adapter = TAF.FR.Adapter || {};

// START - PEJ SAFT Adapter
TAF.FR.Adapter.PEJSAFT = function _PEJSAFT() {
	return {
		journalCode: '',
		journalLib: '',
		ecritureNum: '',
		ecritureDate: '',
		compteNum: '',
		compteLib: '',
		pieceRef: '',
		pieceDate: '',
		ecritureLib: '',
		debit: 0,
		credit: 0,
		validDate: '',
		montantDevise: '',
		iDevise:'',
        compAuxNum: '',
        compAuxLib: '',
        ecritureLet: '',
        dateLet: '',
        establishmentCode: ''
	};
};

//Initialization of PEJBalanceSheetClosing Adapter
TAF.FR.Adapter.PEJBalanceSheetClosingAdapter = function _PEJBalanceSheetClosingAdapter(params) {
	this.defaultCurrency = params.currency;
    this.isGLSupported = false;
    this.isSubAccountEnabled = params.isSubAccountEnabled;
    this.accountsMap = params.accountsMap;
    this.txnSequenceNo = 0;
    this.lastInternalId = -1;
    this.resource = params.resource;
    this.accountingBook = params.accountingBook;
    this.usesAccountingContext = params.usesAccountingContext;
    this.usePostingDate = params.usePostingDate;
};


//Getting SAFT Line
TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getSAFTLine = function _getSAFTLine(txnObj) {
	if(!txnObj) {
		throw nlapiCreateError('MISSING_ARGUMENT',
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getSAFTLine: Parameter txnObj is null.');
	}
	
	var line = null;

	if (txnObj.posting === 'T' && txnObj.accountName.length > 0 && 
		(txnObj.credit != 0 || txnObj.debit != 0)) {		
		try {
			var row = new TAF.FR.Adapter.PEJSAFT();
		    var tranDate = nlapiStringToDate(txnObj.date);
		    var glNumDate = (this.usePostingDate || !txnObj.glNumDate) ? tranDate : nlapiStringToDate(txnObj.glNumDate);
		    var account = this.getAccountInfo(txnObj);

		    row.journalCode = 'AN';
		    row.journalLib = 'ANOUVEAUX ';
		    row.ecritureNum = this.getEcritureNum(txnObj) ? this.getEcritureNum(txnObj).toString() : ''; //'AN1'; //
		    row.ecritureDate = tranDate;
		    row.compteNum = account.number;
		    row.compteLib = account.name;
		    row.pieceRef = 'OBL';
		    row.pieceDate = this.getDate(txnObj);
		    row.ecritureLib = this.getEcritureLib(txnObj);
		    row.debit = txnObj.debit;
		    row.credit = txnObj.credit;
		    row.validDate = nlapiStringToDate(txnObj.glNumDate);
		    row.montantDevise = txnObj.amount;
		    row.iDevise = txnObj.currency || txnObj.subsidiaryCurrency;
		    
		    line = {};
		    line.convertedRow = row;
		    line.lastInternalId = this.lastInternalId;
		    line.txnSequenceNo = this.txnSequenceNo;
		} catch (ex) {
			nlapiLogExecution('ERROR', 'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getSAFTLine', ex.toString());
			throw nlapiCreateError('DATA_ERROR', 'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getSAFTLine');
		}
	}

	return line;
};

//Get date from Transaction
TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getDate = function _getDate(txnObj) {
	if(!txnObj) {
		throw nlapiCreateError('MISSING_ARGUMENT', 
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getDate: parameter txnObj is null.');
	}
		
    return nlapiStringToDate(txnObj.documentDate || txnObj.date);
};

//Get Account info
TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getAccountInfo = function _getAccountInfo(txnObj) {
	if(!txnObj) {
		throw nlapiCreateError('MISSING_ARGUMENT', 
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getAccountInfo: parameter txnObj is null.');
	}
	
    var scoa = this.accountsMap[txnObj.account];
    var account = {};
    
    if (this.usesAccountingContext) {
        account.number = scoa.getLocalizedNumber() || scoa.getAccountNumber();
        account.name = scoa.getLocalizedName() || scoa.getAccountName();
    } else if (this.accountingBook && !this.accountingBook.isPrimary) {
        account.number = scoa.getAccountNumber();
        account.name = scoa.getAccountName();
    } else {
        account.number = scoa.getSCOANumber() || scoa.getAccountNumber();
        account.name = scoa.getSCOAName() || scoa.getAccountName();
    }

    if (account.number && account.name.indexOf(account.number) === 0) {
        account.name = account.name.replace(account.number + ' ', ''); // only replace the first occurrence
    }
    
    return account;
};

TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getEcritureLib = function _getEcritureLib(txnObj) {
	if(!txnObj) {
		throw nlapiCreateError('MISSING_ARGUMENT', 
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getEcritureLib: parameter txnObj is null.');
	}
	
    var account = this.getAccountInfo(txnObj);
    
    var memoText = txnObj.memo || txnObj.memoMain;
    memoText = memoText.replace(/\|/g, ' ');
    
    return memoText || (account.number + ' ' + account.name);
};

TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getEcritureNum = function _getEcritureNum(txnObj) {
	if(!txnObj) {
		throw nlapiCreateError('MISSING_ARGUMENT', 
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getEcritureNum: parameter txnObj is null.');
	}
	
    return this.isGLSupported ? txnObj.glNumber : this.getTxnSequenceNo(txnObj.internalId);
};

TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.prototype.getTxnSequenceNo = function _getTxnSequenceNo(id) {
	if(!id) {
		throw nlapiCreateError('MISSING_ARGUMENT', 
				'TAF.FR.Adapter.PEJBalanceSheetClosingAdapter.getTxnSequenceNo: parameter id is null.');
	}
	
	if (id == this.lastInternalId) {
        return this.txnSequenceNo;
    }
    
    this.lastInternalId = id;
    return ++this.txnSequenceNo;
};

// END - PEJ SAFT Adapter