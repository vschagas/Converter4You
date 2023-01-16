import axios from 'axios'
import { ICoin } from '../interfaces/ICoin'
import { IResponse } from '../interfaces/IResponse'



export class Api {

  async exchange(baseCoin: ICoin, exchangeCoin: ICoin): Promise<IResponse | any > {
    const URL = `https://economia.awesomeapi.com.br/json/last/${baseCoin}-${exchangeCoin}`
    const { data } = await axios.get(URL)

    return data
  }
}

