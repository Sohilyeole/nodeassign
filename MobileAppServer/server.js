const express = require('express');
const si = require('systeminformation');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const battery = await si.battery();
  const fsSize = await si.fsSize();

  res.json({
    currentTime: new Date().toISOString(),
    name: "Your Name",
    batteryLevel: battery.percent,
    platform: process.platform,
    freeStorage: fsSize[0].size - fsSize[0].used
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://192.168.1.1:${port}`);
});
