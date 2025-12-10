// const fileInput = document.getElementById('fileInput');
// const file = fileInput.target.files[0]
// if(file){
//     try{
//         const base64Image = await imageTo
//     }
// }

export function imageToBase64(file) {
	return new Promise((res, rej) => {
		const reader = new FileReader()
		reader.onload = () => {
			// The result will be a data URL (e.g., "data:image/png;base64,...")
			// We often need to remove the "data:image/png;base64," prefix.
			// const base64String = reader.result.split(",")[1]
			res(reader.result)
		}
		reader.onerror = (error) => rej(error)
		reader.readAsDataURL(file) // Reads the file as a data URL
	})
}

export async function uploadImage(file) {
	// const file = fileInput.target.files[0]
	const base64Image = await imageToBase64(file)
	return base64Image
}
