import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import { IncludesComponent } from './includes/includes.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "UxTrendz",
        component: IncludesComponent,
        children: [{
            path : "promise",
            component: PromiseComponent
        },
        {
            path : "**",
            component: PromiseComponent
        }
    ]


    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: 'courses/:id',
        component: CourseComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
