import fetch from '@system.fetch'

// ⚠ 上线时请替换为你真实的服务器IP或域名
const BASE_URL = 'http://localhost:3000' 

// 1. 在线调用后端 AI
export function chatWithAI(message) {
  return fetch.fetch({
    url: `${BASE_URL}/api/chat`,
    method: 'POST',
    data: { message },
    header: { 'Content-Type': 'application/json' }
  }).then(res => {
    const data = JSON.parse(res.data)
    return data.reply || '团团现在有点累，请稍后再试哦。'
  }).catch(err => {
    console.error('AI请求失败:', err)
    return '网络连接失败，请检查网络。'
  })
}

// 2. 获取预加载城市数据
export function getPreloadCityData(city) {
  return fetch.fetch({
    url: `${BASE_URL}/api/preload/city?city=${encodeURIComponent(city)}`,
    method: 'GET'
  }).then(res => {
    return JSON.parse(res.data)
  }).catch(err => {
    console.error('预加载数据请求失败:', err)
    return { name: city, tips: ['数据加载失败，请重试'] }
  })
}