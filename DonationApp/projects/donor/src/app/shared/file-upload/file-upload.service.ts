import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { google } from 'googleapis';
import { GoogleAuthService } from '../../auth/googleauth.service';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {}

  // async uploadToGoogleDrive(file: File): Promise<any> {
  //   const authService = new GoogleAuthService(this.http); // Inject the HttpClient into GoogleAuthService constructor
  //   console.log('here');
  //   authService.authenticate(); // Authenticate with Google
  //
  //   // Handle callback after authentication (You need to implement this method in GoogleAuthService)
  //   const accessToken:string = authService.handleCallback();
  //
  //   const auth = new google.auth.OAuth2(); // Use OAuth2 instead of GoogleAuth
  //   auth.setCredentials({ access_token: accessToken }); // Set access token
  //
  //   const drive = google.drive({ version: 'v3', auth });
  //   try {
  //     const response = await drive.files.create({
  //       requestBody: {
  //         name: file.name
  //       },
  //       media: {
  //         mimeType: file.type,
  //         body: file
  //       }
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error uploading file to Google Drive:', error);
  //     throw error;
  //   }
  // }
}
