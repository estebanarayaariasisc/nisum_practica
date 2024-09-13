import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})

export class ZodiacService {

  // Datos para conectar con el API CRUD_Operations de RapidApi
  private rapidApiURL = 'https://crud-operations2.p.rapidapi.com/api/v1'
  private rapidApiKey = '93a207f35fmshacc1798b51649b9p1373e4jsn790617a9e046'
  private rapidApiHost = 'crud-operations2.p.rapidapi.com'

  private horoscopeURL = 'https://horoscope19.p.rapidapi.com/get-horoscope/monthly?sign='
  private horoscopeKey = '93a207f35fmshacc1798b51649b9p1373e4jsn790617a9e046'
  private horoscopeHost = 'horoscope19.p.rapidapi.com'

  constructor() { }

  async getSigns() {
    try {
      const response = await axios.get(this.rapidApiURL, {
        headers: {
          'X-RapidAPI-Host': this.rapidApiHost,
          'X-RapidAPI-Key': this.rapidApiKey
        }
      });
      // Se obtienen los datos de respuesta
      return response.data;
    } catch (error) {
      console.error('Error al conectar con el API:', error);
      throw error;
    }
  }

  async getHoroscope(signName: any) {
    try {
      const response = await axios.get(this.horoscopeURL + signName, {
        headers: {
          'X-RapidAPI-Host': this.horoscopeHost,
          'X-RapidAPI-Key': this.horoscopeKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al conectar con el API:', error);
      throw error;
    }
  }
  
}
