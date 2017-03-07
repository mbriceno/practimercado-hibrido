import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { SideMenuComponent } from '../pages/sidemenu/sidemenu.component';
import { Page2 } from '../pages/page2/page2';
import { OrdersComponent } from '../pages/orders/orders.component';
import { LoginComponent } from '../pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    MyApp,
    SideMenuComponent,
    Page2,
    OrdersComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginComponent,
    MyApp,
    SideMenuComponent,
    Page2,
    OrdersComponent
  ],
  providers: [Storage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
