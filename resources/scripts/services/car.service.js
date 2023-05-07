import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://20.238.184.98/cars';
class CarService {
 async getAvailableCars(pickUpDate,pickUpHour,returnDate,returnHour, currency) {
    return await axios.get(API_URL + '?pickupdate=' + pickUpDate + '&pickuphour=' + pickUpHour+ '&returndate=' + returnDate +'&returnhour=' + returnHour+'&currency='+currency).then((response) => {
      return response.data})
  }

  async getCarByCarId(carId) {
    return await axios.get(API_URL + '/' +carId).then((response) => {
      return response.data})
  }
}

export default new CarService();