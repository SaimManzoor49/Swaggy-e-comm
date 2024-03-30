import FilterProducts from '@/components/FilterProducts'
import ProductCard from '@/components/ProductCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumb, BreadcrumbList, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import { store } from '@/constants/content'
import useScrollDetection from '@/hooks/useScrolled'
import Image from 'next/image'
import React from 'react'

const ShopPage = () => {


  return (
    <div>

      <Breadcrumb className='my-2 ms-2'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative">
        <Image
          priority
          placeholder='blur'
          blurDataURL={store.blurDataUrl}
          src={store.ContactPage.BannerImage}
          alt='coverImage'
          height={1080}
          width={1920}
          className='object-cover max-h-[150px] text-white '
        />
        <div className="absolute  flex items-center justify-center flex-col w-full h-full top-0  text-white font-bold">
          <h3 className='text-2xl lg:text-5xl text-white'>Shop Now!</h3>
          <p>Have a look on our Amazing Products</p>
        </div>
      </div>

      <div className="px-2 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="col-span-3 ">
            <div className="flex justify-between items-center py-4">
              <div className="">
                <p className='text-muted-foreground text-sm'>Showing <span className='text-black font-medium'>{6}</span> of <span className='text-black font-medium'>{43}</span> Products</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span className='text-sm'>Sort by:</span>
                <Select>
                  <SelectTrigger className="w-[100px] h-[26px] rounded-none bg-muted">
                    <SelectValue className='text-xs' placeholder="Default" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Fruits</SelectLabel> */}
                      <SelectItem value="apple">Most Popular</SelectItem>
                      <SelectItem value="banana">High Selling</SelectItem>
                      <SelectItem value="blueberry">Most Rated</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <FilterProducts />
        </div>
      </div>

    </div>
  )
}

export default ShopPage