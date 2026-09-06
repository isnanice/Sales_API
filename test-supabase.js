import dotenv from "dotenv";

dotenv.config();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

const response = await fetch(`${url}/rest/v1/categories`, {
  method: "POST",
  headers: {
    apikey: key,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  },
  body: JSON.stringify({
    name: "TEST NODE",
  }),
});

console.log("STATUS:", response.status);
console.log("RESPONSE:", await response.text());