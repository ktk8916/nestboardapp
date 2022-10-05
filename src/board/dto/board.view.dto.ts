//글 조회 dto
export class BoardViewDto{
    boardId:number;
    title:string;
    content:string;

    constructor(boardId:number, title:string, content:string){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
    }
}