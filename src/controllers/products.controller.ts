import { 
    Controller, Get, Query, Param, Post, Body, Put, Delete 
} from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('')
    getProducts(
        @Query('limit') limit = 100, 
        @Query('offset') offset = 0,  
        @Query('brand') brand: string,
        ){
        // const {limit, offset } = params;
        message: `products ${limit} ${offset} brand => ${brand}`
    }

    @Get('filter')
    getProductFilter(){
        message: `Yo soy un filtro`
    }

    @Get(':productId')
    getProduct(@Param('productId') productId: string){
        message: `product ${productId}`
    }

    @Post()
    create(@Body() payload: any){
        return{
            message: "Acción de crear",
            payload,
        }
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
        return{
            id,
            payload
        }
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return{id}
    }
}

