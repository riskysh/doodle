"use client"

import { FileObject } from "imagekit/dist/libs/interfaces"
import { IKImage } from "imagekitio-next"
import { urlEndpoint } from "../providers"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function MemeList({ files }: { files: FileObject[] }) {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {files.map((file) => {
            return (
                <Card key={file.filePath}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                <IKImage 
                    key={file.fileId}
                    path={file.filePath}
                    alt={file.name}
                    width={300}
                    urlEndpoint={urlEndpoint}
                    height={300}
                />
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
              
            )
        })}</div>
        </>
    )
}