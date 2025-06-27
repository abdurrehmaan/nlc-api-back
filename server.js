const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 9001;

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:3001",
    "https://osct.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.set("trust proxy", 1);
app.use(cookieParser());

// -- NOTE: remove express.json() on this route so you can handle raw bytes instead!
const bodyParser = require('body-parser');

// Accept raw buffer for this route only (important!)
app.post('/api/nlc', bodyParser.raw({ type: '/'}), (req, res) => {
  // Log raw buffer as hex string
  console.log("Raw Buffer:", req.body.toString('hex'));

  // If body length is too short, reject
  if (!req.body || req.body.length < 24) {
    return res.status(400).json({ error: "Invalid or empty tracker packet" });
  }

  // Packet parsing example: check for start bits (0x78, 0x78)
  const buf = req.body;
  if (!(buf[0] === 0x78 && buf[1] === 0x78)) {
    return res.status(400).json({ error: "Invalid packet start bits" });
  }

  const length = buf[2];
  const protocolNo = buf[3];

  // Only handle Positioning Packets (0x22), but you can add others!
  if (protocolNo !== 0x22) {
    return res.status(400).json({ error: "Unsupported protocol: " + protocolNo.toString(16) });
  }

  // Parse fields
  const year   = 2000 + buf[4];
  const month  = buf[5];
  const day    = buf[6];
  const hour   = buf[7];
  const min    = buf[8];
  const sec    = buf[9];
  const timestamp = new Date(Date.UTC(year, month - 1, day, hour, min, sec)).toISOString();

  // Sat count
  const satellites = buf[10];

  // Helper to parse 4 bytes coordinate
  function parseCoord(buffer, offset) {
    const value = buffer.readUInt32BE(offset);
    return parseFloat((value / 30000.0 / 60.0).toFixed(6));
  }

  const latitude = parseCoord(buf, 11);
  const longitude = parseCoord(buf, 15);

  const speed = buf[19];
  const courseState = buf.readUInt16BE(20);
  const heading = courseState & 0x03FF; 
  res.json({
    timestamp,
    satellites,
    latitude,
    longitude,
    speed_kmh: speed,
    heading,
    raw_hex: buf.toString('hex')
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", ${PORT});
});