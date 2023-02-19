console.log('ran devtools')

try {
  chrome.devtools.panels.create(
    'My Panel',
    'assets/favicon.ico',
    'src/panel/index.html'
  )
} catch (e) {
  console.error(e)
}

export {}
