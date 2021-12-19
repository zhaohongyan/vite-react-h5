import Home from '@/pages/home'
import Page1 from '@/pages/page1'
import NoMatch from '@/pages/NoMatch'

export default [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/page1/:id',
    element: <Page1 />
  },
  { path: "*", element: <NoMatch /> }
]
