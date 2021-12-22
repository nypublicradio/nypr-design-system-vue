import NotFound from '../views/404.vue'
import Home from '../views/Home.vue'
import Kim from '../views/Kim.vue'
import Test from '../views/Test.vue'

const routes = {
  '/': Home,
  '/kim': Kim,
  '/test': Test,
  '*': NotFound
}

export default routes
