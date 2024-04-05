"use client"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image";
import { useState } from "react"
import { TbPhotoPlus } from "react-icons/tb"
export default function ImageUpload() {
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
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Product Image</label>
            <div
              onClick={()=>open()}
            className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100">
              <TbPhotoPlus size={50}/>
              <p className="text-lg font-semibold">Agree image</p>
              {imageUrl && 
                <div className="absolute inset-0 w-full h-full">
                  <Image fill style={{objectFit:'contain'}} src={imageUrl} alt="Product-image"/>
                </div>
              }
            </div>
          </div>
          <input type="hidden" name="image" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  )
}
