import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Button, } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import CategoryFilter from './CategoryFilter'
import SizesFilter from './SizesFilter'
import ColorFilter from './ColorFilter'
import BrandFilter from './BrandFilter'

const FilterProducts = () => {

    return (
        <div className="relative">
            <div className={cn("py-3", "sticky top-14 right-3 w-full")}>
                <div className="flex items-center justify-between px-2 ">
                    <p className='text-sm font-medium cursor-default'>Filters:</p>
                    <Button variant={'ghost'} size={'sm'} className='text-secondary hover:text-secondary hover:bg-transparen p-0 hover:underline'>Clear All</Button>
                </div>
                <div className="px-2">
                    <Accordion type="single" > {/*test:type multiple */}
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Category</AccordionTrigger>
                            <AccordionContent>
                                <CategoryFilter />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Size</AccordionTrigger>
                            <AccordionContent>
                               <SizesFilter />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Colour</AccordionTrigger>
                            <AccordionContent>
                               <ColorFilter />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Brand</AccordionTrigger>
                            <AccordionContent>
                                <BrandFilter />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Price</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FilterProducts