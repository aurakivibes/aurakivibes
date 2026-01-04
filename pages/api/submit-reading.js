export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0ojHv3Q3_t5AhhvQSUTMN86VMNuFB351IF29YQ6vGmSp3WqEDgn_R4Xg0EUL3ClS5PA/exec";

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  res.status(200).json({ success: true });
}
