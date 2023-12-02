import axios from "axios";

const API_URL = "http://192.168.101.2:3004/toilets";

class ToiletService {
  async getAll({
    currentLatitude,
    currentLongitude,
  }: {
    currentLatitude: string;
    currentLongitude: string;
  }) {
    const { data } = await axios.get(API_URL);
    return data;
  }

  get(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  create(data) {
    return axios.post(API_URL, data);
  }

  update(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  }

  delete(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  addReview(id, review) {
    return axios.post(`${API_URL}/${id}/reviews`, review);
  }

  getReview(id) {
    return axios.get(`${API_URL}/${id}/reviews`);
  }

  deleteReview(id, user) {
    return axios.delete(`${API_URL}/${id}/reviews`, { data: { user } });
  }
}

export default new ToiletService();
