"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useEdgeStore } from "@/lib/edgestore"
import { useState } from "react"

export function UploadMemeBtn() {

  const [file, setFile] = useState<File>()
  const { edgestore } = useEdgeStore()
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Upload Meme</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload a meme image</DialogTitle>
          <DialogDescription>
            Upload a meme image to share with the fun community.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <h1>
              Meme Content
            </h1>
            <Input
              id="name"
              placeholder="Meme Content"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h1>
              Upload Meme
            </h1>
            <Input

              onChange={(e) => {
                setFile(e.target.files?.[0])
              }}

              type="file"
              id="username"
              placeholder="Upload Meme"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async () => {
            if (file) {
              const res = await edgestore.publicMemes.upload({ file })
            }
          }}>Select and Upload Image</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
