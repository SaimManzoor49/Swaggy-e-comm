import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'

const ProductCard = () => {
    const imgUrl = "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div>
            <div className="relative group cursor-pointer ">
                <Image
                    priority
                    placeholder='blur'
                    blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACcAUUDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9mAAAAAAAAACACAAAAAAAAKAKAAAAAAAAAAIAAAqAAAAACugBkAAAAAABAABAEUUQBRAFAAVBBQBQAAAAAAEAAAQBQEBUAUAB2AMgAAAAIAAIICgIAogCiAKIoKIAqoIKIooAAIAAAIAoCAAgqoAAANABkAABAABBBFFQQFQAARUVUAUQFVUEFEUFEBVEEFEAVAFEAAQABBQAAAGoAyAgAAggAgIoAggCAogoogCqgCiKKoioCoAogKoggAgKgCiAAgIAIKogDdAVkAARUEEVAQBRAQQAAAUAAFQBQEFAAVAVQEAQFAAEBFEABAAAAEAbgCAAiAKIACIqAIqKgioAAAqAKAAqKAqAKAigAAACKiKAgAAqAAIqAAA3AEABEABAFERUARUVBFAQAAFAAAUAAAUBAAFAEBFQBFQUBAAEVBUAABuAqAAgioCCoogAIioIAKIKgKAAAAoAAIKAAAAAiiKgCKgoAggACKgoADcBUAAEVBBFRRAARFBEAUAARUUAAFAAVFQAAAAAEURQERQVAEEAAABAAf/2Q=='
                    src={imgUrl}
                    alt='coverImage'
                    height={1080}
                    width={1920}
                    className='object-cover max-h-[320px] group-hover:brightness-75'
                />
                <div className="absolute top-2 left-2 xsm:top-6 xsm:left-5">
                    <p className='bg-primary font-medium text-sm text-black px-3 md:px-1 lg:px-3 lg:py-1 my-1 '>New</p>
                    <p className='bg-secondary font-medium text-sm text-white px-3 md:px-1 lg:px-3 lg:py-1 '>Sale</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <p className='text-muted-foreground text-sm'>{"Clothes"}</p>
                    <p className=' font-bold'>{"Title"}</p>
                    <p className='font-medium'>{"300"}$</p>
                </div>
                {/* <div className=" justify-center items-center flex-col absolute top-[35%]  hidden sm:flex sm:left-[40%] md:left-[30%] lg:left-[37%] xl:left-[40%] opacity-0 group-hover:opacity-100 transition-all text-white"> */}
                <div className="flex justify-center items-center flex-col absolute z-20 top-[35%] w-full    opacity-0 group-hover:opacity-100 transition-all text-white">
                    <ShoppingBag className='lg:w-10 lg:h-10' />
                    <p>Shop now</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard