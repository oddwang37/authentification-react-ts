import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/',
});

instance.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const oldRequest = error.config;
    if (error.response.status === 401 && !error.config.isRetry) {
      oldRequest.isRetry = true;
      // Вроде бы обычно для получения нового accessToken необходимо передать его в теле post запроса, а не в его хедере,
      // но такого эндпоинта с параметрами я не увидел
      try {
        const result = await axios.get(
          'http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/auth/refresh',
          { headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` } },
        );
        localStorage.setItem('accessToken', result.data.accessToken);
        return result.request(oldRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw Error;
  },
);

export default instance;
