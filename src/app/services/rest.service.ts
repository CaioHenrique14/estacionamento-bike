import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

  }

  getUserAll() {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/user`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/user/${id}`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  authUser(body) {
    return new Promise((resolve, reject) => {
      this.http.post(`${SERVER_URL}/auth/login`, body).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }
  postUser(body) {
    return new Promise((resolve, reject) => {
      this.http.post(`${SERVER_URL}/user`, body).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  postParkingSpace(body) {
    // {
    //   "idPlace": 4,
    //   "available": true
    // }
    return new Promise((resolve, reject) => {
      this.http.post(`${SERVER_URL}/parking-space`, body).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getAllParkingSpace() {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/parking-space`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getParkingSpaceById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/parking-space/${id}`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  postParking(body) {
    //   {
    //     "idPlace": 2,
    //     "name": "Estacionamento 01",
    //     "description": "Vagas para bicicletas"
    // }
    return new Promise((resolve, reject) => {
      this.http.post(`${SERVER_URL}/parking`, body).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getAllParking() {

    return new Promise((resolve, reject) => {
    
      this.http.get(`${SERVER_URL}/parking`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getParkingById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/parking/${id}`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  postPlaces(body) {
    //   {
    //     "name": "Eu num sei",
    //     "description": "Decrito",
    //     "latitude": 12341234.00,
    //     "longitude": 23423.00
    // }
    return new Promise((resolve, reject) => {
      this.http.post(`${SERVER_URL}/place`, body).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getAllPlaces() {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/place`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getPlacesById(id) {
    return new Promise((resolve, reject) => {
      this.http.get(`${SERVER_URL}/place/${id}`).subscribe((res: any) => {
        resolve(res);
      }, (err: any) => {
        reject(err);
      });
    });
  }
}
