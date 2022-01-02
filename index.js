require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpress=require('aws-serverless-express');
const app = express();
// const app = express();
const fun = require('./function');
const request = require('request');
const {
    getList
} = require('./businessList');


const {
    getbusId
} = require('./getBusinessbyId');

const {
    createBusiness
} = require('./createBusinessId');
const {
    deletebusId
} = require('./deleteBusinessId');
const {
    updateBusinessId
} = require('./updateBusinessId');






const cors = require('cors');
app.use(cors());
app.use(express.static("public"));
//app.use(bodyParser.json({limit: '1000mb'}));
app.use(bodyParser.json());


//////////////////////////////////ALL SITE RELATED API'S/////////////////////////////////////




////////////////////////////ALL USERS RELATED API'S/////////////////////////////////////////


//////////////////////////---------------------BUSINESS RELATED API'S------------------/////////////////////////////


app.get('/business/business_list', async function (req, res) {
    res.send(await getList());
});



app.post('/business/getBusinessId', async function (req, res) {
    if (!req.body.Id) {
        res.send({
            'status': 0,
            'message': 'Id not provided',
            'error': 'Invalid Id'
        });
        return 0;
    }
    res.send(await getbusId(req.body.Id));
});


app.post('/business/createBusiness', async function (req, res) {
    var x = req.body;
    if (!x.business_name || !x.business_type || !x.status || !x.email) {
        res.send({
            'status': 0,
            'message': 'Mandatory fields Null!',
            'error': 'Invalid Request'
        });
        return 0;
    }
    res.send(await createBusiness(x));

});

app.post('/business/deleteBusinessId', async function (req, res) {
    var x = req.body;
    if (!x.Id) {
        res.send({
            'status': 0,
            'message': 'Id not provided!',
            'error': 'Invalid Id'
        });
        return 0;
    }
    res.send(await deletebusId(x.Id));
});


app.post('/business/updateBusinessId', async function (req, res) {
    var x = req.body;
    if (!x.Id) {
        res.send({
            'status': 0,
            'message': 'Id not provided!',
            'error': 'Invalid Id'
        });
        return 0;
    }
    res.send(await updateBusinessId(x));
});

/////////////////////////////////////---------------------END OF BUSINESS API'S-----------------------//////////////////////////////////

// app.listen(3000, function (req, res) {
//     console.log(`server is listening on port...................`);
// });
const server=awsServerlessExpress.createServer(app);
exports.handler=(event,context)=>{
	console.log("Event handler :"+JSON.stringify(event));
	awsServerlessExpress.proxy(server,event,context);
}