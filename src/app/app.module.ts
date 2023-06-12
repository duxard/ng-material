import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/ui/home/home.module';
import { ClipboardComponent } from './components/cdk/clipboard/clipboard.component';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { CollectionsComponent } from './components/cdk/collections/collections.component';
import { AccordionComponent } from './components/cdk/accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragAndDropComponent } from './components/cdk/drag-and-drop/drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ClipboardComponent,
    CollectionsComponent,
    AccordionComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule,
    ClipboardModule,
    CdkAccordionModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
