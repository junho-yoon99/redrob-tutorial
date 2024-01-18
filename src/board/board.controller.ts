import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto';
import { BoardDocs } from './board.docs';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  @BoardDocs.getBoardList
  getBoardList() {
    return this.boardService.getBoardList();
  }

  @Post()
  @BoardDocs.createBoard
  createBoard(@Body() dto: CreateBoardDto) {
    return this.boardService.createBoard(dto);
  }
}
