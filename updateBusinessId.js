const fun = require('./function');


async function updateBusinessId(options) {
    try {
        var arr = [];
        var data = await fun.query_exec(`select * from nrm_business where business_id = '${options.Id}'`);
        arr[0] = data[0].business_name;
        arr[1] = data[0].business_type_id;
        arr[2] = data[0].status;
        arr[3] = data[0].email;
        arr[4] = data[0].mobile;
        arr[5] = data[0].phone;
        arr[6] = data[0].ABN;
        arr[7] = data[0].bank_account_number;
        arr[8] = data[0].street_number;
        arr[9] = data[0].postcode_id;
        arr[10] = data[0].longitude;
        arr[11] = data[0].street_name;
        arr[12] = data[0].latitude;
        arr[13] = data[0].suburb_id;
        arr[14] = data[0].directions;
        arr[15] = data[0].country_id;

        if (options.business_name != null) {
            arr[0] = options.business_name;
        }
        if (options.business_type != null) {
            arr[1] = options.business_type;
        }
        if (options.status != null) {
            arr[2] = options.status;
        }
        if (options.email != null) {
            arr[3] = options.email;
        }
        if (options.email != null) {
            arr[4] = options.mobile;
        }
        if (options.email != null) {
            arr[5] = options.phone;
        }
        if (options.email != null) {
            arr[6] = options.ABN;
        }
        if (options.email != null) {
            arr[7] = options.bank_account_number;
        }
        if (options.email != null) {
            arr[8] = options.street_number;
        }
        if (options.email != null) {
            arr[9] = options.poastal_code;
        }
        if (options.email != null) {
            arr[10] = options.longitude;
        }
        if (options.email != null) {
            arr[11] = options.street_name;
        }
        if (options.email != null) {
            arr[12] = options.latitude;
        }

       // var a = await fun.query_exec(`select suburb_id from suburb_table where suburb = '${options.suburb}'`);
        var b = await fun.query_exec(`select country_id from  nrm_countries where country_name = '${options.country}'`);


        if (options.suburb != null) {
            arr[13] = '';
        }
        if (options.directions != null) {
            arr[14] = options.directions;
        }
        if (options.country != null) {
            arr[15] = b;
        }


        var datax = {
            'business_name': arr[0],
            'business_type_id': arr[1],
            'status': arr[2],
            'email': arr[3],
            'mobile': arr[4],
            'phone': arr[5],
            'ABN': arr[6],
            'bank_account_number': arr[7],
            'street_number': arr[8],
            'postcode_id': arr[9],
            'longitude': arr[10],
            'street_name': arr[11],
            'latitude': arr[12],
            'suburb_id': arr[13],
            'directions': arr[14],
            'country_id': arr[15]
        }
        const update = await fun.query_update(`business_id = '${options.Id}'`, datax, `nrm_business`);
        console.log(update);
        return ({
            'status': 1,
            'message': 'Bussiness Details Updated Successfully!',
            'error': ''
        });

    } catch (error) {
        if (error) {
            console.log(error);
            return ({
                'status': 0,
                'message': `Failed to Update Business Details!`,
                'error': error
            });
        }
    }


}

module.exports = {
    updateBusinessId
}