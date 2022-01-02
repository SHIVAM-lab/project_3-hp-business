const fun = require('./function');

async function deletebusId(Id){
    try {
        var x = await fun.query_exec(`delete  from nrm_business where business_id = '${Id}'`);
        // var array = [];
        // for (let i = 0; i < x.length; i++) {
        //     var flag = 'Inactive';
        //     if (x[i].status == 1) {
        //         flag = 'Active'
        //     }
        //     var type = await fun.query_exec(`select business_type_name from nrm_business_type where business_type_id = ${x[i].business_type_id}`);
        //     var names = await fun.query_exec(`select * from nrm_contact where business_id = ${x[i].business_id}`);
        //     var full_name = '';
        //     if(names.length) {
        //        full_name = `${names[0].first_name} ${names[0].last_name}`;
        //     }
        //     var data = {
        //         "Business Name": x[i].business_name,
        //         "Phone": x[i].phone,
        //         "Status": flag,
        //         "Business Type": type[0].business_type_name,
        //         "Contact Name": full_name
        //     }
        //     array[i] = data;
        // }
        // return array;
        console.log(x);
        return ({
            'status':1,
             'message':'Business Deleted Successfully!',
             'error':''
        });
    } catch (error) {
        if (error) {
            console.log(error);
            //throw error;
            return ({
                'status':0,
                'message':'Some Error Occured!',
                'error':error
            });
        }
    }
}

module.exports = {
    deletebusId
}