import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from"../app/app-routing.module";
import { AppComponent } from "../app/app.component";
import { HeaderComponent } from "../app/components/layout/header/header.component";
import { FooterComponent } from "../app/components/layout/footer/footer.component";
import { DigitalAgencyTwoComponent } from "../app/components/pages/digital-agency-two/digital-agency-two.component";
import { DigitalAgencyThreeComponent } from "../app/components/pages/digital-agency-three/digital-agency-three.component";
import { ProjectsComponent } from "../app/components/pages/projects/projects.component";
import { ProjectDetailsComponent } from "../app/components/pages/project-details/project-details.component";
import { ServicesComponent } from "../app/components/pages/services/services.component";
import { ServiceDetailsComponent } from "../app/components/pages/service-details/service-details.component";
import { BlogComponent } from "../app/components/pages/blog/blog.component";
import { BlogDetailsComponent } from "../app/components/pages/blog-details/blog-details.component";
import { TeamComponent } from "../app/components/pages/team/team.component";
import { TestimonialsComponent } from "../app/components/pages/testimonials/testimonials.component";
import { AboutComponent } from "../app/components/pages/about/about.component";
import { ContactComponent } from "../app/components/pages/contact/contact.component";
import { BusinessStartupsComponent } from "../app/components/pages/business-startups/business-startups.component";
import { SeoAgencyComponent } from "../app/components/pages/seo-agency/seo-agency.component";
import { FAQComponent } from "../app/components/pages/faq/faq";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DigitalAgencyTwoComponent,
        DigitalAgencyThreeComponent,
        ProjectsComponent,
        ProjectDetailsComponent,
        ServicesComponent,
        ServiceDetailsComponent,
        BlogComponent,
        BlogDetailsComponent,
        TeamComponent,
        TestimonialsComponent,
        AboutComponent,
        ContactComponent,
        BusinessStartupsComponent,
        SeoAgencyComponent,
        FAQComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
