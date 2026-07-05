import storage from '@system.storage'

export function saveChatHistory(history) {
  return storage.set({ key: 'chat_history', value: JSON.stringify(history) })
}

export function getChatHistory() {
  return storage.get({ key: 'chat_history' }).then(res => {
    return res.data ? JSON.parse(res.data) : []
  })
}

export function saveUserSettings(settings) {
  return storage.set({ key: 'user_settings', value: JSON.stringify(settings) })
}

export function getUserSettings() {
  return storage.get({ key: 'user_settings' }).then(res => {
    return res.data ? JSON.parse(res.data) : {}
  })
}