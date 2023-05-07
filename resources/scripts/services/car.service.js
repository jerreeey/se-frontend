import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://se-api-management-service-resource-name.azure-api.net/cars';
class CarService {
 async getAvailableCars(pickUpDate,pickUpHour,returnDate,returnHour, currency) {
    return await axios.get(API_URL + '?pickupdate=' + pickUpDate + '&pickuphour=' + pickUpHour+ '&returndate=' + returnDate +'&returnhour=' + returnHour+'&currency='+currency, {
      headers: authHeader(),
    }).then((response) => {
      return response.data})
  }

  async getCarByCarId(carId) {
    return await axios.get(API_URL + '/' +carId, {
      headers: authHeader(),
    }).then((response) => {
      return response.data})
  }
}

export default new CarService();