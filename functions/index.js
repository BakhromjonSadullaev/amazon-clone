const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const { RepeatOneSharp } = require("@material-ui/icons");

const stripe = require("stripe")(
  "sk_test_51IewvQAwlfYokIYSTTrqyo2MHjX0pv7xGjZGt5ih4ujPKcu8N2BxoaxKDVQTWHZtt2rkdxpggTwFQJ0jQtUfkv4u004OddExzd"
);

//API

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

//API ROUTES
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-94f64/us-central1/api
