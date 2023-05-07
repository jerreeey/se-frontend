import axios from 'axios'; 
import authHeader from './auth-header';

const API_URL = 'http://20.103.105.116/bookings';
class BookingService {
  async getBookings(userid) {
    return await axios.get(API_URL + '/users/' + userid,{
      headers: authHeader(),
    }).then((response) =>  {return response.data})
  }

  async addBooking(carid, userid, pickUpDate,pickUpHour,returnDate,returnHour) {
    return await axios.post(API_URL,{
      carId: carid,
      userId: userid,
      pickupDate: pickUpDate,
      pickupHour: pickUpHour,
      returnDate: returnDate,
      returnHour: returnHour,
      returned: false
    },
    {
      headers: authHeader(),
    }).then((response) => {return response.status}) 
  }

  async returnCar(bookingId) {
    return await axios.put(API_URL + '/' + bookingId, {},{
        headers: authHeader(),
    }).then((response) => {return response.data})
  }
}

export default new BookingService();