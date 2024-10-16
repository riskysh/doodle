import MemeCard from "./meme-card";
import { UploadMemeBtn } from "./upload-meme-btn";
import { auth } from "@/auth";


export default function Search() {
    return (
    <>
    <div className="container mx-auto space-y-8 py-8 px-4">
      <UploadBtnToUser />
      <MemeCard />
    </div>
    </>
    )
}

async function UploadBtnToUser() {
    const session = await auth()

    if (session) {
        return (
        <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Search Results</h1>
            <UploadMemeBtn />
        </div>
        )
    }
}