import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart } from "lucide-react";

export default function MemeCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                      <Card>
          <CardHeader>
            <CardTitle>Trust me this is a meme</CardTitle>
            <CardDescription>Meme description that is not much long</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="h-80 w-80" src="https://media.discordapp.net/attachments/1021517275334979605/1294137202640683018/image0.jpg?ex=670b3c31&is=6709eab1&hm=aaf267ec115bc7b04c3a47c47a82e9b60413eeec7d6d0d760816f77f3d0deac5&=&format=webp&width=358&height=350" />
          </CardContent>
          <CardFooter>
            <Button><Heart className="h-4 w-4 mr-1" /> Like</Button>
          </CardFooter>
          </Card>
          <Card>
          <CardHeader>
            <CardTitle>Trust me this is a meme</CardTitle>
            <CardDescription>Meme description that is not much long</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="h-80 w-80" src="https://media.discordapp.net/attachments/1021517275334979605/1294137202640683018/image0.jpg?ex=670b3c31&is=6709eab1&hm=aaf267ec115bc7b04c3a47c47a82e9b60413eeec7d6d0d760816f77f3d0deac5&=&format=webp&width=358&height=350" />
          </CardContent>
          <CardFooter>
            <Button><Heart className="h-4 w-4 mr-1" /> Like</Button>
          </CardFooter>
          </Card>
          <Card>
          <CardHeader>
            <CardTitle>Trust me this is a meme</CardTitle>
            <CardDescription>Meme description that is not much long</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="h-80 w-80" src="https://media.discordapp.net/attachments/1021517275334979605/1294137202640683018/image0.jpg?ex=670b3c31&is=6709eab1&hm=aaf267ec115bc7b04c3a47c47a82e9b60413eeec7d6d0d760816f77f3d0deac5&=&format=webp&width=358&height=350" />
          </CardContent>
          <CardFooter>
            <Button><Heart className="h-4 w-4 mr-1" /> Like</Button>
          </CardFooter>
          </Card>
        </div>
    )
}