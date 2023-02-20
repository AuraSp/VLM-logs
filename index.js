'use strict';

const xml2js = require('xml2js');
const fs = require('fs');
const log4js = require('log4js');
const logger = require('./helper/logger');


const parser = new xml2js.Parser({ attrkey: 'ATTR' });
let xml_file = fs.readFileSync('karnel_logs_20220414.xml', 'utf8');


//Parsing .XML FILE
parser.parseString(xml_file, (error, result) => {
    if (error === null) {
        logDetails(result.karnel_log_management);
    }
    else {
        logger.error(error);
    }
});


function logDetails(xml) {

    //ALL EXISTING TRANSACTIONS
    const data = xml.transaction;


    //ALL FAILED TRANSACTIONS
    const failed_transaction = data.filter(x => x.status == undefined || !x.status.includes('01'));



    //Date Time
    const karnel_log_date = xml.ATTR.date;

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

            logger.fatal(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
        } else {
            status = i.status.join();

            //Error levels undentifying
            if (status === '02') {
                logger.warn(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
            } else {
                logger.error(`${karnel_log_date} | ${ids} | ${start_time} | ${employee} | ${status}`);
            };
        };
    });
};

log4js.shutdown(() => { });
