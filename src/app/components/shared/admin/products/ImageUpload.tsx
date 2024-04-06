"use client"
import { getImagePath } from "@/app/utils";
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image";
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"

interface ImageUploadProps {
  image?:string
}
export default function ImageUpload({image}:ImageUploadProps) {
  const [imageUrl,setImageUrl] = useState('');
  return (
    <CldUploadWidget
    onSuccess={(result,{widget})=>{
      console.log(result)
      if(result.event === 'success'){
        widget.close();
        //@ts-ignore
        setImageUrl(result.info.secure_url)
      }
    }}
      uploadPreset="jqgcqstz"
      options={{
        maxFiles:1
      }}
    >
      {({open})=>(
        <div className="flex flex-col justify-center">
          <div className="space-y-2">
            <label className="text-slate-800">Product Image</label>
            <div
              onClick={()=>open()}
              className="rounded-md relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
              <TbPhotoPlus size={50}/>
              <p className="text-lg font-semibold">Agree image</p>
              {imageUrl && 
                <div className="absolute inset-0 w-full h-full">
                  <Image fill style={{objectFit:'contain'}} src={imageUrl} alt="Product-image"/>
                </div>
              }
            </div>
          </div>

          {image && !imageUrl && 
            <div className="space-y-2 self-start mt-4">
              <label className="self-start text-lg">Actual image:</label>
              <div className="relative w-64 h-64 self-center">
                <Image src={getImagePath(image)} className="object-contain rounded-lg" fill alt="product-image"/>
              </div>
            </div>
          }
          <input type="hidden" name="image" defaultValue={imageUrl ? imageUrl : image} />
        </div>
      )}
    </CldUploadWidget>
  )
}
