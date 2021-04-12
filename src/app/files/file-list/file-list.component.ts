import { Component, OnInit } from '@angular/core';
import { FileEnum } from 'src/app/entities/enums/FileEnum';
import { IFileEntity } from 'src/app/entities/IFileEntity';
import { DataFileService } from 'src/app/services/data/data-file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files: IFileEntity[] = [];
  displayFiles: IFileEntity[] = [];

  constructor(private dataSv: DataFileService) { }

  ngOnInit(): void {
    this.dataSv.getData().subscribe({
      next: files => {
        //console.log('list', files);
        this.files = files;
        this.displayFiles = files;
      },
      error: err => console.error(err)
    });
  }

  navigateTo(file: IFileEntity){
    console.log('click file', file);
    if (file.type === FileEnum.Folder){
      this.displayFiles = file.subFolders;
      // let res = this.getAllFilesOfFolder(file.subFolders, file.id);
      // console.log('click folder', res);
      // if (res){
      // }
    }
  }

  getAllFilesOfFolder(fodler: IFileEntity[], id: number): IFileEntity | undefined{
    let res = fodler?.find(x => x.id == id);
    if (res){
      return res;
    }
    return;
  }

}
