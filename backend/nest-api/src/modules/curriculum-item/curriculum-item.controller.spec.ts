import { Test, TestingModule } from '@nestjs/testing';
import { CurriculumItemController } from './curriculum-item.controller';

describe('CurriculumItemController', () => {
  let controller: CurriculumItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurriculumItemController],
    }).compile();

    controller = module.get<CurriculumItemController>(CurriculumItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
