// Company create
document.getElementById('company-form').addEventListener('submit', function(e){
    e.preventDefault();
    let company = {
        name: document.getElementById('companyName').value,
        address: document.getElementById('companyAddress').value,
        gst: document.getElementById('companyGST').value,
        mobile: document.getElementById('companyMobile').value
    };
    localStorage.setItem('company', JSON.stringify(company));
    alert('Company Created: ' + company.name);
});

// Example buttons (future features)
document.getElementById('createAccountBtn').addEventListener('click', function(){
    alert('Account creation feature will work here.');
});
document.getElementById('createJeansBtn').addEventListener('click', function(){
    alert('Jeans creation feature will work here.');
});
document.getElementById('createPackingBtn').addEventListener('click', function(){
    alert('Packing creation feature will work here.');
});

// Voucher buttons
document.getElementById('cashPaymentBtn').addEventListener('click', function(){
    alert('Cash payment entry feature will work here.');
});
document.getElementById('bankCashJournalBtn').addEventListener('click', function(){
    alert('Bank/Cash/Journal entry feature will work here.');
});
document.getElementById('journalEntryBtn').addEventListener('click', function(){
    alert('Journal entry feature will work here.');
});

// Inventory buttons
document.getElementById('purchaseSaleBtn').addEventListener('click', function(){
    alert('Purchase & Sale entry feature will work here.');
});
document.getElementById('salerSlipBtn').addEventListener('click', function(){
    alert('Saler slip feature will work here.');
});
document.getElementById('auctionBillBtn').addEventListener('click', function(){
    alert('Auction bill feature will work here.');
});

// Reports buttons
document.getElementById('ledgerReportBtn').addEventListener('click', function(){
    alert('Ledger report will be generated here.');
});
document.getElementById('stockReportBtn').addEventListener('click', function(){
    alert('Stock report will be generated here.');
});
document.getElementById('gstReportBtn').addEventListener('click', function(){
    alert('GST report will be generated here.');
});

// Books buttons
document.getElementById('dayBookBtn').addEventListener('click', function(){
    alert('Day book will be generated here.');
});
document.getElementById('cashBookBtn').addEventListener('click', function(){
    alert('Cash book will be generated here.');
});
document.getElementById('journalBookBtn').addEventListener('click', function(){
    alert('Journal book will be generated here.');
});
document.getElementById('balanceSheetBtn').addEventListener('click', function(){
    alert('Balance sheet will be generated here.');
});
document.getElementById('tradingAccountBtn').addEventListener('click', function(){
    alert('Trading account will be generated here.');
});
document.getElementById('profitLossBtn').addEventListener('click', function(){
    alert('Profit & Loss account will be generated here.');
});
