/* @refresh reload */
import { render } from 'solid-js/web'
import App from '../App'
import Popup from '../components/Popup'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  )
}

console.log('ran popup tsx')

render(
  () => (
    <App>
      <Popup />
    </App>
  ),
  root!
)
