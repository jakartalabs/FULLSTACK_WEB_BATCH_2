export const setupInterceptors = (instance) => {
  instance.interceptors.response.use((response) => {
    return response;
  }, error => {
    if (error.response.status === 404) {
      window.location.href = '/404';
    }
    return Promise.reject(error);
  });
};