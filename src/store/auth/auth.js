import axios from 'axios';

export const auth = {
  state: {
    auth_status: false,
    auth_token: null,
    auth_info: {
      id: null,
			firstname: null,
			lastname: null,
			nik: null,
			phone: null,
			email: null,
			gender: null,
			birth_date: null,
			birth_place: null,
			image: null,
			roleid: null,
			isactive: null,
			isverif: null,
			iskyc: null,
			lastlogin: null,
			createdat: null,
			updatedat: null
    },
    auth_reset: false,
  },

  getters: {
    GET_AUTH_TOKEN(state) {
      return state.auth_token;
    },

    GET_AUTH_INFO(state) {
      return state.auth_info;
    },

    GET_AUTH_RESET(state) {
      return state.auth_reset;
    },
  },

  actions: {
    LOGIN(context, loginData) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://172.30.14.30:5110/api/v1/login', loginData)
          .then((response) => {
            context.commit('SET_AUTH_TOKEN', response.data.data.token);
            context.commit('SET_AUTH_INFO', response.data.data.user);
            resolve(response);
            window.location.reload();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    REFRESH(context) {
      axios.defaults.headers.common['Authorization'] = context.state.auth_token;
      return new Promise((resolve, reject) => {
        axios
          .get('/login')
          .then((response) => {
            context.commit('SET_AUTH_TOKEN', response.data.data.token);
            context.commit('SET_AUTH_INFO', response.data.data.user);
            resolve(response);
          })
          .catch((error) => {
            context.commit('SET_AUTH_LOGOUT');
            reject(error);
          });
      });
    },

    FORGOT(context, forgotData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/forgot', forgotData)
          .then((response) => {
            context.commit('SET_AUTH_RESET');
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    RESET(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/reset', payload)
          .then((response) => {
            context.commit('SET_AUTH_RESET');
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    LOGOUT(context) {
      axios.defaults.headers.common['Authorization'] = context.state.auth_token;
      return new Promise((resolve, reject) => {
        axios
          .get('http://172.30.14.30:5110/api/v1/logout')
          .then((response) => {
            context.commit('SET_AUTH_LOGOUT');
            resolve(response);
          })
          .catch((error) => {
            context.commit('SET_AUTH_LOGOUT');
            reject(error);
          });
      });
    },
  },

  mutations: {
    SET_AUTH_TOKEN(state, token) {
      state.auth_token = token;
    },

    SET_AUTH_INFO(state, info) {
      state.auth_info.id = info.id;
      state.auth_info.firstname = info.firstname;
      state.auth_info.lastname = info.lastname;
      state.auth_info.nik = info.nik;
      state.auth_info.email = info.email;
      state.auth_info.phone = info.phone;
      state.auth_info.gender = info.gender;
      state.auth_info.birth_date = info.birth_date;
      state.auth_info.birth_place = info.birth_place;
      state.auth_info.image = info.image;
      state.auth_info.roleid = info.roleid;
      state.auth_info.isactive = info.isactive;
      state.auth_info.isverif = info.isverif;
      state.auth_info.iskyc = info.iskyc;
      state.auth_info.lastlogin = info.lastlogin;
      state.auth_info.createdat = info.createdat;
      state.auth_info.updatedat = info.updatedat;
    },

    SET_AUTH_RESET(state) {
      state.auth_reset = true;
    },

    SET_AUTH_LOGOUT(state) {
      state.auth_token = null;
      state.ref_token = null;
      state.auth_info= {
      id: null,
			firstname: null,
			lastname: null,
			nik: null,
			phone: null,
			email: null,
			gender: null,
			birth_date: null,
			birth_place: null,
			image: null,
			roleid: null,
			isactive: null,
			isverif: null,
			iskyc: null,
			lastlogin: null,
			createdat: null,
			updatedat: null
    }
    },
  },
};
