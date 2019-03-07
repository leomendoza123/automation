import dotenv from "dotenv";
import mqtt from "mqtt";

dotenv.config();

console.log(
  "Connecting to: %s using access token: %s",
  process.env.THINGSBOARD_HOST,
  process.env.ACCESS_TOKEN
);

const client = mqtt.connect("mqtt://" + process.env.THINGSBOARD_HOST, {
  username: process.env.ACCESS_TOKEN
});

client.on("connect", () => {
  console.log("Client connected!");
  client.publish(
    "v1/devices/me/attributes",
    JSON.stringify({
      state: "on"
    }),
    {qos: 0},
    console.log
  );
  console.log("Attributes published!");
  client.publish(
    "v1/devices/me/telemetry",
    JSON.stringify({
      celsius: Math.round(Math.random() * 100)
    }),
    {qos: 0},
    console.log
  );
  console.log("Telemetry published!");
});
