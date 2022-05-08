import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

    @Get("brand")
    getBrand(){
        return "Soy un brand"
    }

    @Get(':id')
    getBrandId(@Param('id') id: number){
        return `Soy el brand número ${id}`
    }
}
