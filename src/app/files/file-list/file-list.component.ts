import { Component, OnInit } from '@angular/core';
import { IFileEntity } from 'src/app/entities/IFileEntity';
import { DataFileService } from 'src/app/services/data/data-file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  files: IFileEntity[] = [];

  constructor(private dataSv: DataFileService) { }

  ngOnInit(): void {
    this.dataSv.getData().subscribe({
      next: files => {
        //console.log('list', files);
        this.files = files;
      },
      error: err => console.error(err)
    });
  }

}
