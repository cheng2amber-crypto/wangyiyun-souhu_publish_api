export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: "Vercel API 已成功响应",
    method: req.method
  });
}

