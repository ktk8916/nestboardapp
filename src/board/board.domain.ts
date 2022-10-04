export class Board {
  boardId: number;
  title: String;
  content: String;

  //도메인에 있는 생성자 이게 맞나 ?? 스프링에 빌더같은걸 사용해야 하는게 아닌가
  constructor(boardId: number, title: String, content: String) {
    this.boardId = boardId;
    this.title = title;
    this.content = content;
  }
}
