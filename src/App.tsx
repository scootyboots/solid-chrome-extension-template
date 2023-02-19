import { children, Component, JSXElement } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'
import './index.css'

const App: Component<{ children?: JSXElement }> = (props) => {
  return <div class={styles.App}>{props.children}</div>
}

export default App
