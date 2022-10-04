import { Injectable } from '@nestjs/common';
import { Board } from './board.domain';
import { BoardCreateDto } from './dto/board.create.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];
  private sequence: number = 0; //게시글 번호

  findAll(): Board[] {
    return this.boards;
  }

  //id는 시퀀스하게 올라가지만.. filter의 반환은 여러개 일 수 있음.. 반환타입을 어떻게 해야할 지..
  findById(boardId: Number) {
    return this.boards.filter((i) => i.boardId === boardId);
  }

  save(boardCreateDto: BoardCreateDto) {
    this.sequence++;
    const board: Board = new Board(
      this.sequence,
      boardCreateDto.title,
      boardCreateDto.content,
    );
    console.log(board);
    this.boards.push(board);
  }
}
