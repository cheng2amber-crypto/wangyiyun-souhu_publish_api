export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST requests are allowed");
  }

  res.status(200).json({
    ok: true,
    message: "Vercel API 已正常工作",
    body: req.body
  });
}
