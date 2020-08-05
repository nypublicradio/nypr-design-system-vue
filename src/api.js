import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const getShows = () => API.get('/buckets/newsounds-featured-shows/?site=newsounds')
const getOtherShows = () => API.get('/buckets/newsounds-more-shows/?site=newsounds')
const getRecentEpisodes = () => API.get('/story/?audio_only=1&item_type=episode&ordering=-newsdate&page_size=12&show=gig-alerts%2Csoundcheck%2Cnewsounds%2Chelga')

export {
  getShows,
  getOtherShows,
  getRecentEpisodes
}
