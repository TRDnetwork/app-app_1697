// Optional AI image generation integration (not in MVP)
// import { Resend } from 'resend';

// const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// export async function generateImage(prompt: string): Promise<string | null> {
//   try {
//     /* IMAGE_GEN_API_KEY */
//     const apiKey = import.meta.env.VITE_IMAGE_GEN_API_KEY;
//     if (!apiKey) throw new Error("Missing VITE_IMAGE_GEN_API_KEY");

//     // Example using DALL-E via external wrapper or direct fetch
//     // This is a stub for future implementation
//     const response = await fetch("https://api.openai.com/v1/images/generations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       },
//       body: JSON.stringify({
//         prompt,
//         n: 1,
//         size: "1024x1024",
//         response_format: "url",
//       }),
//     });

//     if (!response.ok) throw new Error("Image generation failed");

//     const data = await response.json();
//     return data.data[0].url;
//   } catch (error) {
//     console.error("[ImageGen] Error:", error);
//     return null;
//   }
// }
---