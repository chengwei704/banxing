const express = require('express');
const router = express.Router();
const aiService = require('../services/aiService');
const preloadData = require('../data/preload.json');

// 在线问答接口
router.post('/chat', async (req, res) => {
  const { msg, history, conversation_id } = req.body;
  
  if (!msg) {
    return res.status(400).json({ code: -1, message: '消息不能为空' });
  }

  try {
    const result = await aiService.callAI(msg, history || [], conversation_id || null);
    res.json({ 
      code: 0, 
      data: { 
        reply: result.reply,
        conversation_id: result.conversationId  // 返回给前端，下次对话时带上
      } 
    });
  } catch (err) {
    res.status(500).json({ code: -1, message: err.message });
  }
});

// 预加载数据接口
router.get('/preload', (req, res) => {
  const city = req.query.city || '上海';
  // 获取城市数据
  const cityData = preloadData[city];

  // 如果城市存在，正常返回数据；如果不存在，返回“正在开发中”提示
  if (cityData) {
    res.json({
      code: 0,
      data: {
        city: city,
        ...cityData,
        status: 'available'  // 告诉前端这个城市有数据
      }
    });
  } else {
    // 城市不存在，返回“正在开发中”提示
    res.json({
      code: 0,  // 仍然返回成功码，避免前端报错
      data: {
        city: city,
        status: 'developing',  // 前端根据这个判断显示占位UI
        message: `🕊️ 团团还没去过“${city}”，正在做攻略中，再等我一下下！`,
        attractions: [],
        food: [],
        tips: ['更多城市即将上线，感谢您的耐心等待 🙏']
      }
    });
  }
  res.json({ code: 0, data: { city, ...data } });
});

module.exports = router;