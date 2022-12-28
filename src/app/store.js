import { reactive, readonly } from 'vue';
import axios from 'axios';
import useNotification from './hooks/useNotification';

const { setNotification } = useNotification();

const state = reactive({
  listings: [],
  loading: false
});

const mutations = {
  updateListings: (payload) => state.listings = payload,
  loadingPending: () => state.loading = true,
  loadingComplete: () => state.loading = false
};

const actions = {
  getListings: () => {
    mutations.loadingPending();
    return axios.get('/api/listings').then((response) => {
      mutations.updateListings(response.data);
      mutations.loadingComplete();
    });
  },
  removeListing: (listing) => {
    return axios.post('/api/listings/delete', listing).then((response) => {
      setNotification('Listing is deleted')
      mutations.updateListings(response.data)
    });
  },
  resetListings: () => {
    return axios.post('/api/listings/reset').then((response) => {
      setNotification('Listings have been reset!');
      mutations.updateListings(response.data)
    });
  },
};

export default {
  state: readonly(state),
  mutations,
  actions,
};
