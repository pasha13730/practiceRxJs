import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CourseComponent } from "./course/course.component";
import { IncludesComponent } from './includes/includes.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableUxTrendzComponent } from './observable-ux-trendz/observable-ux-trendz.component';
import { ListComponent } from './observable-ux-trendz/list/list.component';
import { FromEventComponent } from './observable-ux-trendz/from-event/from-event.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "UxTrendz",
        component: IncludesComponent,

        children: [
            {
                path: "promise",
                component: PromiseComponent
            },
            {
                path: "observable",
                component: ObservableUxTrendzComponent,
                children: [
                    {
                        path: "",
                        component: ListComponent
                    },
                    {
                        path: "fromEvent",
                        component: FromEventComponent
                    }
                ]
            },
            {
                path: "**",
                component: ObservableUxTrendzComponent
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
