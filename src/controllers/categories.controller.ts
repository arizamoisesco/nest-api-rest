import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get(':id/products/:productId')
    getCategory(@Param('productId') productId: string, @Param('id') id: string){
    message: `product ${productId} and ${id}`
    }
}
