import express = require("express");

import { AddressInfo } from "net";

const app: express.Express = express();

app.get("/", (_req, res) => {
    res.send(`<a href="#">Link with Patreon</a>`);
});

const server = app.listen(5000, () => {
    const port: AddressInfo = server.address() as AddressInfo;
    console.log(`Listening on http://localhost:${port?.port}`);
});
