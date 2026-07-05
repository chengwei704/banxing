const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const cityData = {
  "杭州": { id: 1, name: "杭州", tips: ["西湖断桥残雪是冬季绝景。", "冷知识：西湖其实是一个泻湖。"] },
  "北京": { id: 2, name: "北京", tips: ["故宫门票需提前7天预约。", "冷知识：故宫实际房间数为8700多间。"] }
};

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  const aiReply = `团团收到：“${message}”。作为你的旅行助手，祝你玩得开心！(模拟回复)`;
  res.json({ success: true, reply: aiReply });
});

app.get('/api/preload/city', (req, res) => {
  const { city } = req.query;
  const data = cityData[city] || { name: city, tips: ["暂无该城市数据。"] };
  res.json(data);
});

app.listen(port, () => { console.log(`✅ 后端运行在 http://localhost:${port}`); });