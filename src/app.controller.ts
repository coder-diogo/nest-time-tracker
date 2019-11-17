import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    /**
 * @todo Start Coding
 * @body Testing TODO BOT
 */
    return this.appService.getHello();
  }
}
