import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { users } from "@/db/schema";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function MemeCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      <Card>
          <CardHeader>
            <CardTitle>Username</CardTitle>
            <CardDescription>Meme description that is not much long</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="h-80 w-80" src="https://files.edgestore.dev/s3yzmcdwaxcqqzzl/publicMemes/_public/f935fd03-f950-433e-8631-7eca833fe9cd.jpg" />
          </CardContent>
          <CardFooter>
            <LikeBtnRestriction />
          </CardFooter>
          </Card>
        </div>
    )
}

async function LikeBtnRestriction() {
  const session = await auth()

  if (!session) {
    return (
      <Button disabled><Heart className="h-4 w-4 mr-1" /> Like</Button>
    )
  }
  return (
    <Button><Heart className="h-4 w-4 mr-1" /> Like</Button>
  )

}