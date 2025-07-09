import { Test, TestingModule } from '@nestjs/testing';
import { HintController } from './hint.controller';
import { HintService } from './hint.service';

describe('HintController', () => {
  let controller: HintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HintController],
      providers: [HintService],
    }).compile();

    controller = module.get<HintController>(HintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
