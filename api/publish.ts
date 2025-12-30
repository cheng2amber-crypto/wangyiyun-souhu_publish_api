import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({
    ok: true,
    message: "Vercel API 已成功响应",
    method: req.method
  });
}
