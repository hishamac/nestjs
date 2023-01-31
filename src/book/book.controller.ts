import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './schemas/book.schema';
import {Query as ExpressQuery} from 'express-serve-static-core'

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  // Get All Books
  // @Get()
  // async getAllBooks(): Promise<Book[]> {
  //   return this.bookService.findAll();
  // }

  // Get All Books with Query
  @Get()
  async getAllBooks(@Query() query:ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  // Create Book
  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  // Get One Book By Id
  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.findById(id);
  }

  // Update Book by id
  @Put(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body()
    book: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id,book);
  }

  // Delete One Book By Id
  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.deleteById(id);
  }
}