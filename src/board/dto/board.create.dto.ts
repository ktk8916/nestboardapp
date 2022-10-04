//글 작성 dto
export class BoardCreateDto {
  public title: String;
  public content: String;

  //getter 반환값이 undefind..
  public get getTitle(): String {
    return this.title;
  }

  public get getContent(): String {
    return this.content;
  }
}
