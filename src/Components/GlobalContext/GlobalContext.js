
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export async function FetchData() {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
          
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



