import styles from './Popup.module.css'

export default function Popup() {
  return (
    <div class={styles.container}>
      <p>hey it's the popup</p>
      <button
        class={styles.myButton}
        onClick={() => chrome.runtime.openOptionsPage()}
      >
        options page
      </button>
    </div>
  )
}
