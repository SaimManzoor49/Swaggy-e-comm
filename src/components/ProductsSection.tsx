import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard'

const ProductsSection = () => {
    const imgUrl = "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
            <div className="p-10 md:p-4">
                <h6 className='ms-6 py-3 text-muted-foreground text-sm'>NEW ARRIVALS</h6>
                <div className="relative">
                    <Image
                        priority
                        placeholder='blur'
                        blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACcAUUDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9mAAAAAAAAACACAAAAAAAAKAKAAAAAAAAAAIAAAqAAAAACugBkAAAAAABAABAEUUQBRAFAAVBBQBQAAAAAAEAAAQBQEBUAUAB2AMgAAAAIAAIICgIAogCiAKIoKIAqoIKIooAAIAAAIAoCAAgqoAAANABkAABAABBBFFQQFQAARUVUAUQFVUEFEUFEBVEEFEAVAFEAAQABBQAAAGoAyAgAAggAgIoAggCAogoogCqgCiKKoioCoAogKoggAgKgCiAAgIAIKogDdAVkAARUEEVAQBRAQQAAAUAAFQBQEFAAVAVQEAQFAAEBFEABAAAAEAbgCAAiAKIACIqAIqKgioAAAqAKAAqKAqAKAigAAACKiKAgAAqAAIqAAA3AEABEABAFERUARUVBFAQAAFAAAUAAAUBAAFAEBFQBFQUBAAEVBUAABuAqAAgioCCoogAIioIAKIKgKAAAAoAAIKAAAAAiiKgCKgoAggACKgoADcBUAAEVBBFRRAARFBEAUAARUUAAFAAVFQAAAAAEURQERQVAEEAAABAAf/2Q=='
                        src={imgUrl}
                        alt='coverImage'
                        height={1080}
                        width={1920}
                        className='object-cover max-h-[540px]'
                    />
                    <div className="absolute top-10 left-5">
                        <h2 className='text-xl xsm:text-3xl md:text-xl lg:text-3xl font-bold text-white'>OUR NEW PRODUCTS</h2>
                        <Button className='bg-transparent border-2 hover:bg-primary hover:text-secondary py-3 mt-6'>SHOP NOW!</Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 px-10 md:px-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductsSection