import { Component, OnInit } from '@angular/core';
import { FileEnum } from 'src/app/entities/enums/FileEnum';
import { IFileEntity } from 'src/app/entities/IFileEntity';
import { DataFileService } from 'src/app/services/data/data-file.service';

const parentId = 'parentId';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files: IFileEntity[] = [];
  displayFiles: IFileEntity[] = [];

  private _currentParentId = 0;
  get currentParentId(): number {
    return this._currentParentId;
  };
  set currentParentId(value: number) {
    this._currentParentId = value;
    this.backBtnDisable = value === 0 ? true : false;
  }
  backBtnDisable: boolean = true;

  constructor(private dataSv: DataFileService) { }

  ngOnInit(): void {
    this.currentParentId = Number(localStorage.getItem(parentId));
    //console.log('currentParentId', this.currentParentId);

    this.dataSv.getData().subscribe({
      next: files => {
        //console.log('list', files);
        this.files = files;
        this.displayFiles = files.filter(x => x.parentId === this.currentParentId);
      },
      error: err => console.error(err)
    });
  }

  navigateTo(file: IFileEntity){
    //console.log('click file', file);
    if (file.type === FileEnum.Folder){
      this.displayFiles = this.files.filter(f => f.parentId == file.id);
      localStorage.setItem(parentId, file.id.toString());
      this.currentParentId = file.id;
    }
  }

  goBack(){
    let id = this.getParentFolder(this.currentParentId);
    if (id !== -1){
      this.currentParentId = id;
      this.displayFiles = this.files.filter(x => x.parentId === id);
    }
  }

  deleteFile(file: IFileEntity){
    // this.dataSv.deletefile(file).subscribe({
    //   next: status => {
    //     this.files = this.files.filter(x => x.id != file.id);
    //     this.displayFiles = this.files.filter(x => x.parentId === this.currentParentId);
    //   },
    //   error: err => console.error(err)
    // });
  
  }

  getParentFolder(currentParentId: number): number {
    let f = this.files.find(x => x.id == currentParentId);
    if (f){
      return f.parentId;
    }

    return -1;
  }
 

}


