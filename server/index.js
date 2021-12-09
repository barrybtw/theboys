import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	console.log("xin chao");
});
