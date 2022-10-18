import $http from '@Config/axios';
// import $store from '@Store';

const prefix = 'room';

export default {
  index() {
    return new Promise((resolve, reject) => {
      $http.get(`${prefix}`)
        .then(response => resolve(response))
        .catch(response => reject(response));
    });
  },
  show(id) {
    return new Promise((resolve, reject) => {
      $http.get(`${prefix}/${id}`)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  store(params) {
    return new Promise((resolve, reject) => {
      $http.post(prefix, params)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      $http.put(`${prefix}/${params.id}`, params)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  destroy(id) {
    return new Promise((resolve, reject) => {
      $http.delete(`${prefix}/${id}`)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  },
  restore(id) {
    return new Promise((resolve, reject) => {
      $http.patch(`${prefix}/${id}`)
        .then(response => {
          resolve(response);
        })
        .catch(response => reject(response));
    });
  }
};
