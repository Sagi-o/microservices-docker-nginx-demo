import express from "express";
import axios from "axios";

const app = express();

app.listen(3000, () =>
  console.log("Service-b listening on internal port 3000...")
);

app.get("/", (req, res) => {
  res.send("Hello from service-b!");
});

app.get("/message", (req, res) => {
  console.log("/message on service-b called");
  res.send({ message: "This is a message from service-b" });
});

app.get("/message-to-service-a", async (req, res) => {
  try {
    // http://<container_hostname>:<internal_port>/
    const response = await axios.get("http://service_a:3000/message");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});
