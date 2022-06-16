import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto'
// import { Request, Response } from "express";

import { ProductsService } from "./products.service";
import { Products } from "./interfaces/Products";

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) { }

    // @Get()
    // getProduct(): { hello: string } {
    //     return { "hello": "product" };
    // }
    // getProduct(@Req() req, @Res() res): Response {
    //     return res.send('Hello word')
    // }
    @Get()
    getProducts(): Products[] {
        return this.productService.getProducts()
    }
    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProduct(parseInt(id))
    }

    @Post()
    createProduct(@Body() task: CreateTaskDto): string {
        console.log(task.name)
        return 'Creating a product';
    }

    @Delete(':id')
    deleteProduct(@Param('id') id): string {
        console.log('id', id);
        return `Deleting a product number: ${id}`
    }

    @Put(':id')
    updateProduct(@Body() product: CreateTaskDto, @Param('id') id): string {
        console.log('product', product)
        console.log('id', id)
        return `Updating a product number: ${id}`
    }

}
