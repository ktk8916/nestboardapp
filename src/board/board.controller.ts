import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.domain';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardViewDto } from './dto/board.view.dto';

@Controller('board')
export class BoardController {
  //스프링의 생성자 주입과 유사 constructor 안에 접근지정자가 있으면 nest가 boardService를 알아서 주입
  constructor(private readonly boardService: BoardService) {}

  
  @Get("/:id")
  findById(@Param('id') id:string):BoardViewDto{
    return this.boardService.findById(id);
  }

  @Delete("/:id")
  delete(@Param('id')id:string){
    this.boardService.delete(id);
  }

  @Get()
  findAll() :Board[]{
    return this.boardService.findAll();
  }

  @Post()
  save(@Body() boardCreateDto: BoardCreateDto) {
    this.boardService.save(boardCreateDto);
  }


}
