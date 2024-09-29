export const  Notesshortcut = (keyboardMap, note) => {
    const keyboardShortcuts = Object.keys(keyboardMap);
    return keyboardShortcuts.filter(shortcut => keyboardMap[shortcut] === note);
  }