import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const getWhatsOn = () => API.get('/v1/whats_on/')
const getShows = () => API.get('/v3/buckets/newsounds-featured-shows/?site=newsounds')
const getOtherShows = () => API.get('/v3/buckets/newsounds-more-shows/?site=newsounds')
const getRecentEpisodes = () => API.get('/v3/story/?audio_only=1&item_type=episode&ordering=-newsdate&page_size=12&show=gig-alerts%2Csoundcheck%2Cnewsounds%2Chelga')

export {
  getWhatsOn,
  getShows,
  getOtherShows,
  getRecentEpisodes
}
