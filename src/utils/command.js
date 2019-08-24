export function addSelection (node = null) {
  if (!node)
    return

  const range = document.createRange()
  range.selectNode(node)
  window.getSelection().addRange(range)
}

export function clearSelection () {
  window.getSelection().removeAllRanges()
}

export function copyToClipboard (node = null) {
  if (!node)
    return

  addSelection(node)

  let successful = false
  try {
    // Now that we've selected the anchor text, execute the copy command
    successful = document.execCommand('copy')
  } catch(err) {
    successful = false
  }
  clearSelection()

  return successful
}
