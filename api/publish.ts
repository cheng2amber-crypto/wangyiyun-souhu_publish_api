import fetch from "node-fetch";

// Core handler function
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).send("Only POST requests are allowed");
  }

  // Destructure title and content from the request body
  const { title, content } = req.body;

  try {
    // Update the API endpoint and body as necessary for the new service
    const response = await fetch("https://new.api.endpoint/here", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers needed for the new API
      },
      body: JSON.stringify({ title, content }), // Adapt body structure based on new API
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
