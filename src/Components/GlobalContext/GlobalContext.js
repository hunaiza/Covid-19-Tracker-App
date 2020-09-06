
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export async function FetchData(country) {
    let changeurl = url;

    if (country) {
        changeurl= `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeurl);
          
        const modifydata={
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifydata;
    
       
    } catch (error) {
    
    }
     
}

// export async function FetchDialyData()  {
//     try {
//         const { data } = await axios.get(`${url}/daily`);
//         console.log(data);
//     } catch (error) {
        
//     }
// }

export async function FetchCountries() {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name)
    } catch (error) {
        return error;
    }
   

}

