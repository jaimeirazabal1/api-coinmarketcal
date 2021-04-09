require('dotenv').config()
const axios = require('axios');

async function peticion(){
    try {
        const options = {
            headers: { 
                "Content-Type": 'application/json',
                "x-api-key": process.env.API_KEY 
            },
            params:{
                "qs": { 
                    "max": '10', 
                    "coins": 'bnb' 
                }
            }
        };
        // console.log(options);
        // return;
        const results = await axios.get('https://developers.coinmarketcal.com/v1/events', options );
        // console.log(results.data)
        results.data.body.map( o => {
            console.log('id:',o.id,'\n');
            console.log('coin:',o.coins,'\n');
            console.log('date_event:',o.date_event,'\n');
            console.log('categories:',o.categories,'\n');
            console.log('title:',o.title,'\n');
        })
    } catch (error) {
        console.log(error.message)
    }
}
peticion();