import { Test, TestingModule } from '@nestjs/testing';
import { CurriculumItemService } from './curriculum-item.service';

describe('CurriculumItemService', () => {
  let service: CurriculumItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurriculumItemService],
    }).compile();

    service = module.get<CurriculumItemService>(CurriculumItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
