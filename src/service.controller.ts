import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('/services')
export class ServiceController {
  @Get()
  index() {
    return 'Index';
  }

  @Get(':id')
  show(@Param('id') id) {
    return 'Show: ' + id;
  }

  @Post()
  store() {
    return 'Store';
  }

  @Put()
  update() {
    return 'Update';
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return 'Delete: ' + id;
  }
}
