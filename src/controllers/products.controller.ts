import { 
    Controller, 
    Get, 
    Query, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete 
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @Get('')
    getProducts(
        @Query('limit') limit = 100, 
        @Query('offset') offset = 0,  
        @Query('brand') brand: string,
        ){
        // const {limit, offset } = params;
        // message: `products ${limit} ${offset} brand => ${brand}`
        return this.productsService.findAll();
    }

    @Get('filter')
    getProductFilter(){
        message: `Yo soy un filtro`
    }

    @Get(':productId')
    getProduct(@Param('productId') productId: string){
        //message: `product ${productId}`
        return this.productsService.findOne(+productId);
    }

    @Post()
    create(@Body() payload: any){
       // return{
       //     message: "Acción de crear",
       //     payload,
       // }

       return this.productsService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
     //   return{
     //       id,
     //       payload
     //   }

     return this.productsService.update(+id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        
        return this.productsService.delete(+id);
    }
}

