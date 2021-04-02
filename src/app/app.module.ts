import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/Shared.Module';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductsModule } from './products/products.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressIndicatorInterceptor } from './shared/services/progress-indicator-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressIndicatorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
