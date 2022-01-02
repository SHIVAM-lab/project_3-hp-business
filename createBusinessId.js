const fun = require('./function');


async function createBusiness(options){
    try{
   // var a = await fun.query_exec(`select suburb_id from suburb_table where suburb = '${options.suburb}'`);
    
    var b = await fun.query_exec(`select * from  nrm_countries where country_name = '${options.country}'`);
    var c = await fun.query_exec(`select * from nrm_business_type where business_type_name = '${options.business_type}'`);
    console.log(b);
    console.log(c);
    //return 0;
   var data = {
       'business_name':options.business_name,
       'business_type_id':`${c.business_type_id}`,
       'status':options.status,
       'email':options.email,
       'mobile':options.mobile,
       'phone':options.phone,
       'ABN':options.ABN,
       'bank_account_number':options.bank_account_number,
       'street_number':options.street_number,
       'postcode_id':options.poastal_code,
       'longitude':options.longitude,
       'street_name':options.street_name,
       'latitude':options.latitude,
       'suburb_id':'',
       'directions':options.directions,
       'country_id':b.country_id
    }
          var column = [];
          var values = [];
          for (var key in data) {

            column.push(key);
            values.push(data[key]);
          }

          var insert = await fun.query_insert(column, values, 'nrm_business');
          console.log(insert);
          return ({
              'status':1,
              'message':'Bussiness Created Successfully',
              'error':''
          });

    }catch(error){
        if(error){
            console.log(error);
             return ({
                'status':0,
                'message':`Failed to Create Business`,
                'error':`Some Error Occured`
            });
        }
    }


}

module.exports = {
    createBusiness
}