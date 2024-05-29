import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        console.error('Ошибка при входе:', error);
        throw error;
      }
    },
    async register({ commit }, { email, password }) {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
        // Дополнительные действия после регистрации (если нужны)
      } catch (error) {
        console.error('Ошибка при регистрации:', error);
        throw error;
      }
    },
    async logout({ commit }) {
      const auth = getAuth();
      try {
        await signOut(auth);
        commit('clearUser');
      } catch (error) {
        console.error('Ошибка при выходе из системы:', error);
        throw error;
      }
    },
    fetchUser({ commit }) {
      const auth = getAuth();
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('setUser', user);
        } else {
          commit('clearUser');
        }
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    user(state) {
      return state.user;
    },
  },
};
