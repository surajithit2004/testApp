﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'https://demo-api.now.sh/';

    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(this.apiUrl+`users`, user);
    }

}