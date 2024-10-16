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

export function UploadMemeBtn() {
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
              Meme Title
            </h1>
            <Input
              id="name"
              placeholder="Meme Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <h1>
              Content
            </h1>
            <Input
              id="username"
              placeholder="Meme Content"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Select and Upload Image</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
