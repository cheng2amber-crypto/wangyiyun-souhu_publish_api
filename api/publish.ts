// 小白备注：这段代码就是后端接口，不用改，除非你懂了之后再调
import fetch from "node-fetch";

// 核心处理函数：接收前端请求，转发给网易云
export default async function handler(req, res) {
  // 只允许 POST 请求（前端发数据用）
  if (req.method !== "POST") {
    return res.status(405).send("只支持POST请求");
  }

  // 从前端接收标题和内容
  const { title, content } = req.body;

  try {
    // 转发请求到网易云（通用接口已替换正确）
    const response = await fetch("https://music.163.com/weapi/cloudmusic/article/publish", {
      method: "POST", // ✅ 这行要缩进，和下面的 headers 对齐
      headers: {
        // 从 Vercel 环境变量拿 Cookie，前端看不到
        Cookie: process.env.NETEASE_COOKIE,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        Referer: "https://mp.music.163.com/",
      },
      // 把前端传的标题和内容发给网易云
      body: JSON.stringify({ title, content }),
    });

    // 把网易云的返回结果传给前端
    const text = await response.text();
    res.status(200).send(text);
  } catch (e) {
    // 出错时告诉前端错误原因
    res.status(500).json({ error: e.message });
  }
}
