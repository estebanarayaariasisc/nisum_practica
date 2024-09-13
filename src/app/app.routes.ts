import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ZodiacSignsComponent } from './zodiac-signs/zodiac-signs.component';
import { SignMoreInfoComponent } from './sign-more-info/sign-more-info.component';

export const routes: Routes = [
    { path: '', component: ZodiacSignsComponent },
    { path: 'info/:message', component: SignMoreInfoComponent }
];
