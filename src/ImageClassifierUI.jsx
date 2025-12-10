import { useState } from "react"
import main from "./ai"
import { uploadImage } from "./helper/convertImageToBase64"

function ImageClassifierUI() {
	const [imgPreview, setImgPreview] = useState(null)
	const [aiOutput, setAiOutput] = useState(null)
	return (
		<div className="flex gap-4 p-8">
			<section className="input flex p-8 pb-10 items-center flex-col border w-1/2 h-fit rounded-xl shadow-xl">
				<h2 className="font-bold text-3xl">Book Classifier</h2>
				<div className="my-4">
					<h3 className="italic text-sm">
						Make sure your image contains only one book, otherwise it might give
						error.
					</h3>
					<p className="italic text-sm">Allowed images - jpg,jpeg,png,webp</p>
				</div>
				<button className="border border-slate-300 py-2 px-4 w-fit mb-4">
					<input
						type="file"
						name="fileInput"
						id="fileInput"
						onChange={async (e) => {
							const img = await uploadImage(e.target.files[0])
							setImgPreview(img)
							const output = await main(img)
							setAiOutput(output)
						}}
						accept=".jpg,.jpeg,.png,.webp"
						className="cursor-pointer"
					/>
				</button>
				{imgPreview ? (
					<img
						src={imgPreview}
						alt=""
						className="preview w-1/2 object-contain max-h-[300px]"
					/>
				) : (
					<div className="bg-gray-300/50 w-[350px] h-[250px] flex justify-center items-center text-black/70">
						Image Preview
					</div>
				)}
			</section>

			{aiOutput && (
				<section className="output flex p-8 items-center flex-col border w-1/2 h-fit min-h-[480px] rounded-xl shadow-xl">
					<h2 className="font-bold text-3xl">Result</h2>
					<div className="mt-8 flex gap-14 flex-col items-center justify-center">
						{aiOutput?.result && (
							<div className="flex justify-center items-center gap-4 flex-col">
								<p className="font-semibold underline">Book Info</p>
								<div>
									{Object.entries(aiOutput.result).map(([key, val]) => (
										<div key={key} className="flex gap-2">
											<span className="font-semibold">{key}:</span>
											<p>
												{val === null || val === undefined
													? "NA"
													: typeof val === "boolean"
													? val.toString()
													: val}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
						{aiOutput?.tokenDetails && (
							<div className="flex justify-center items-center gap-4 flex-col">
								<p className="font-semibold underline">Query Info</p>
								<div>
									{Object.entries(aiOutput.tokenDetails).map(([key, val]) => (
										<div key={key} className="flex gap-2">
											<span className="font-semibold">{key}:</span>
											<p>{val}</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</section>
			)}
		</div>
	)
}

export default ImageClassifierUI
