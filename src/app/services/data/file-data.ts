import { InMemoryDbService } from 'angular-in-memory-web-api';
import { FileEnum } from '../../entities/enums/FileEnum';
import { IFileEntity } from '../../entities/IFileEntity';

export class FileData implements InMemoryDbService {

  createDb() {
    const files: IFileEntity[] = [
      {
        id: 1,
        name: 'Hihi',
        modified: '03/03/2021',
        modifiedBy: 'Thanh Duy Pham',
        subFolders: [],
        type: FileEnum.Folder,
        createAt: new Date('09/04/2021'),
        createBy: 'hohoho',
        parentId: 0
      },

      {
        id: 2,
        name: 'eeee.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'eeee',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 0
      },
      {
        id: 3,
        name: 'ffff.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'ffff',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 0
      },
      {
        id: 4,
        name: 'aaaa.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'aaaa',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 1
      },
      {
        id: 5,
        name: 'bbb.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'bbb',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 1
      },
      {
        subFolders: [],
        type: FileEnum.Folder,
        name: 'hahah',
        id: 6,
        createAt: new Date('09/04/2021'),
        createBy: 'dddd',
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        parentId: 1
      },
      {
        id: 7,
        name: 'cccc.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'cccc',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 6
      },
      {
        id: 8,
        name: 'dddd.exe',
        createAt: new Date('09/04/2021'),
        createBy: 'dddd',
        type: FileEnum.File,
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
        subFolders: [],
        parentId: 6
      },
    ];
    return { files };
  }
}
