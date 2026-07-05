import battery from '@system.battery'

let batteryTimer = null

// 开始监听电量
export function startBatteryMonitor(onBatteryChangeCallback) {
  checkCurrentBattery(onBatteryChangeCallback)
  if (batteryTimer) clearInterval(batteryTimer)
  // 每分钟检查一次电量
  batteryTimer = setInterval(() => {
    checkCurrentBattery(onBatteryChangeCallback)
  }, 60000) 
}

function checkCurrentBattery(callback) {
  battery.getStatus({
    success: (res) => {
      // 把真实的电量百分比 (0-100) 传出去
      callback(res.level) 
    },
    fail: () => {
      callback(100) // 获取失败时默认满电
    }
  })
}

export function stopBatteryMonitor() {
  if (batteryTimer) {
    clearInterval(batteryTimer)
    batteryTimer = null
  }
}