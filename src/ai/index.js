import { Groq } from "groq-sdk"

const groq = new Groq({
	apiKey: import.meta.env.VITE_GROQ_API_KEY,

	// Note: 'dangerouslyAllowBrowser' is only for local learning experiments.
	// Do NOT use this in production or with a real API key in public code.
	dangerouslyAllowBrowser: true,
})

async function main(fileInput) {
	const base64Image = fileInput
	const chatCompletion = await groq.chat.completions.create({
		messages: [
			{
				role: "assistant",
				content: `You are an image classifier. Analyze the image and detect books. Rules for output:
				1. One book (or multiple with same title) and readable title=>{ "status": true, "book_name", "author","number_of_pages" }
				2. Multiple books with different titles => { "status": false, "error": "Multiple books detected" }
				3. No book=>{ "status": false, "error": "No book detected" }
				4. Book present but title unreadable=>{ "status": false, "error": "Book title not visible" }
                Respond with only valid JSON. No extra text or code fences.`,
			},
			{
				role: "user",
				content: [
					{
						type: "text",
						text: "Can you determine the book name by the text/content of it?",
					},
					{
						type: "image_url",
						image_url: {
							url: base64Image,
						},
					},
				],
			},
		],
		model: "meta-llama/llama-4-scout-17b-16e-instruct",
		temperature: 0.5,
		max_completion_tokens: 100,
		top_p: 0.9,
		stream: false,
		stop: null,
	})
	const result = JSON.parse(chatCompletion.choices[0].message.content)
	const tokenDetails = {
		input_tokens: chatCompletion.usage.prompt_tokens,
		output_tokens: chatCompletion.usage.completion_tokens,
	}

	// console.log(chatCompletion)
	return { result, tokenDetails }
}

export default main
