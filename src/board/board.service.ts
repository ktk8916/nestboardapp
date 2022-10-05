import { Injectable } from '@nestjs/common';
import { Board } from './board.domain';
import { BoardCreateDto } from './dto/board.create.dto';
import { BoardViewDto } from './dto/board.view.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];
  private sequence: number = 0; //게시글 번호

  findAll(): Board[] {
    return this.boards;
  }

  findById(findBoardId: string) :BoardViewDto{
    const {boardId, title, content} = this.boards.find(board=> board.boardId === parseInt(findBoardId));
    const boardViewDto : BoardViewDto = new BoardViewDto(boardId, title, content);
    return boardViewDto;
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

  delete(deleteBoardId:string){
    this.boards = this.boards.filter( board=> board.boardId !== parseInt(deleteBoardId));
  }
}
