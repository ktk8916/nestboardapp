import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.domain';
import { BoardCreateDto } from './dto/board.create.dto';

@Controller('board')
export class BoardController {
  //스프링의 생성자 주입과 유사 constructor 안에 접근지정자가 있으면 nest가 boardService를 알아서 주입
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Post()
  save(@Body() boardCreateDto: BoardCreateDto) {
    this.boardService.save(boardCreateDto);
  }
}
