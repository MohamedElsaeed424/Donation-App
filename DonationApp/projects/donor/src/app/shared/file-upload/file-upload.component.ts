import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  shortLink: string = "";
  loading: boolean = false;
  file: File = null;

  constructor(
    private fileUploadService: FileUploadService,
    private toastrService : ToastrService) {    console.log('here'); }

  onChange(event) {
    this.file = event.target.files[0];
  }

  async onUpload() {
    this.loading = true;
    // try {
    //   const response = await this.fileUploadService.uploadToGoogleDrive(this.file);
    //   this.shortLink = response.link;
    //   this.toastrService.success('File uploaded successfully' , 'Success');
    // } catch (error) {
    //   console.error('Error uploading file', error);
    // } finally {
    //   this.loading = false;
    // }
  }
}
