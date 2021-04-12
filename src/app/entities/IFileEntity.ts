import { FileEnum } from './enums/FileEnum';

export interface IFileEntity {
  id: string;
  createAt: Date;
  createBy: string;
  modified: string;
  modifiedBy: string;
  name: string;
  type: FileEnum;
}
