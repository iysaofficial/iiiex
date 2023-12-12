import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DigitalAgencyTwoComponent } from "./components/pages/digital-agency-two/digital-agency-two.component";
import { DigitalAgencyThreeComponent } from "./components/pages/digital-agency-three/digital-agency-three.component";
import { NewsComponent } from "./components/pages/news/news.component";
import { News1Component } from "./components/pages/news/news.component";
import { News2Component } from "./components/pages/news/news.component";
import { News3Component } from "./components/pages/news/news.component";
import { News4Component } from "./components/pages/news/news.component";
import { News5Component } from "./components/pages/news/news.component";
import { News6Component } from "./components/pages/news/news.component";
import { FAQComponent } from "./components/pages/faq/faq";

const routes: Routes = [
    { path: "", component: DigitalAgencyTwoComponent },
    { path: "id", component: DigitalAgencyThreeComponent },
    { path: "listnews", component: NewsComponent },
    { path: "news1", component: News1Component },
    { path: "news2", component: News2Component },
    { path: "news3", component: News3Component },
    { path: "news4", component: News4Component },
    { path: "news5", component: News5Component },
    { path: "news6", component: News6Component },
    { path: "FAQ", component: FAQComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
