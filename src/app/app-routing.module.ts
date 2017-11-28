import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { EngagementComponent } from './engagement/engagement.component';
import { WeddingComponent } from './wedding/wedding.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpComponent } from './rsvp/rsvp.component';


const routes: Routes = [
    // { path: 'home', component: HomeComponent },
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'story', component: StoryComponent },
    { path: 'engagement', component: EngagementComponent },
    { path: 'wedding', component: WeddingComponent },
    { path: 'registry', component: RegistryComponent },
    { path: 'rsvp', component: RsvpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
