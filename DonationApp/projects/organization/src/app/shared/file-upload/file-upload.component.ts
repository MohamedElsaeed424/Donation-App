import { Component } from '@angular/core';
import { Dropbox } from 'dropbox'; // Import Dropbox SDK
import { ToastrService } from "ngx-toastr";
import {FileUploadService} from "./file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  shortLink: string = "";
  loading: boolean = false;
  file: File = null;
  dbx: any; // Dropbox instance
  accessToken: string = "sl.B1GKDfRufTGAb-LPXBkJ4sgNEuHBiDDGpLWfMEXmNOV4tMhBHfGV8UzU_F2omwh7vlaT18eh-w_Lnvj9bpD35vJZbp94bhYtek_o102vf5tDf45ulH_scU_OuHrsggzRZPjVG3K59L2DpwJH4AdVaEs"; // Replace with your access token

  constructor(
    private toastrService: ToastrService,
    private fileUploadService: FileUploadService,
  ) {
    this.dbx = new Dropbox({ accessToken: this.accessToken }); // Initialize Dropbox with access token
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  async onUpload() {
    if (this.file) {
      try {
        this.loading = true;

        this.toastrService.info('Uploading file to Dropbox...' , 'Info');

        const response = await this.dbx.filesUpload({ path: '/' + this.file.name, contents: this.file });
        console.log('File uploaded to Dropbox:', response);

        const downloadResponse = await this.dbx.filesDownload({ path: response.result.path_display });
        console.log('Downloaded file:', downloadResponse);

        this.shortLink = URL.createObjectURL(downloadResponse.result.fileBlob);
        this.fileUploadService.isUploaded = true
        this.toastrService.success('File uploaded successfully to Dropbox.' ,'Success');
      } catch (error) {
        console.error('Dropbox upload error:', error);
        this.toastrService.error('Error uploading file to Dropbox. Please try again.', 'Error' );
      } finally {
        this.loading = false;
      }
    } else {
      this.toastrService.error('Please select a file to upload.' , 'Error'  );
    }
  }
}
