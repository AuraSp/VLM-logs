'use strict';

const { Console } = require("console");
const xml2js = require('xml2js');
const fs = require('fs');

const [
    info,
    warn,
    error,
    fatal,
    debug
] = require('./helper/logger.js');

//export console logs to file
const loggerFile = new Console({
    stdout: fs.createWriteStream("./logs/Info.txt"),
    stderr: fs.createWriteStream("./logs/Error.txt"),
});


const parser = new xml2js.Parser({ attrkey: 'ATTR' });
let xml_file = fs.readFileSync('karnel_logs_20220414.xml', 'utf8');


//Parsing .XML FILE
parser.parseString(xml_file, (error, result) => {
    if (error === null) {
        logDetails(result.karnel_log_management);
    }
    else {
        loggerFile.error(error);
    }
});


function logDetails(xml) {

    //ALL EXISTING TRANSACTIONS
    const data = xml.transaction;

    //ALL SUCCEEDED TRANSACTIONS
    const succeeded_transaction = data.filter(x => x.status !== undefined && x.status.includes('01'));

    //ALL FAILED TRANSACTIONS
    const failed_transaction = data.filter(x => x.status == undefined || !x.status.includes('01'));

    //DATE TIME
    const karnel_log_date = xml.ATTR.date;



    //INFO LOGGER
    loggerFile.table({
        ManagementDate: karnel_log_date,
        TransactionsLength: data.length,
        MaxPropLength: Math.max(...data.map(a => Object.keys(a).length)),
        SucceededTransactions: succeeded_transaction.length,
        FailedTransactions: failed_transaction.length,
    });


    failed_transaction.map((i) => {

        //Transaction ID
        let ids = i.id.join();
        //Start Time

        let start_time = i.start_time.join();

        //Responsible Employee
        let employee = i.wh_emp.join();

        //Status
        let status = '';

        //Error levels undentifying for missing data
        if (i.status === undefined) {
            status = 'No /or missing/ data';

            fatal(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
            loggerFile.error(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);

        } else {
            status = i.status.join();

            //Error levels undentifying
            if (status === '02') {
                error(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
                loggerFile.error(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
            } else {
                warn(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
                loggerFile.error(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
            };
        };
    });
};
