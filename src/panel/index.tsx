/* @refresh reload */
import { render } from 'solid-js/web'

import App from '../App'
import Panel from '../components/Panel'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  )
}

console.log('ran panel')

render(
  () => (
    <App>
      <Panel />
    </App>
  ),
  root!
)
