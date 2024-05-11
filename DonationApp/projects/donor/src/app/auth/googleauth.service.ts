import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  constructor(private http: HttpClient) { }

  authenticate(): void {
    const redirectUri = 'http://localhost:4200/auth/callback'; // Your callback URL
    const clientId = '37414551093-po0bi5aqq3ttnc5153sf7b80squqci7o.apps.googleusercontent.com'; // Your Google client ID
    const scope = 'https://www.googleapis.com/auth/drive.file'; // Scope for Google Drive API access
    const responseType = 'token'; // Use 'token' for implicit flow
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    console.log(authUrl);
    window.location.href = authUrl;
  }

  // You'll need to handle the callback URL and extract the access token from the URL fragment
  handleCallback(): string {
    const accessToken = window.location.hash.split('&')[0].split('=')[1];
    return accessToken;
  }

  // Example method to make authenticated requests to Google APIs
  getDriveFiles(): void {
    // Make authenticated HTTP requests to Google Drive APIs using the access token
  }
}
