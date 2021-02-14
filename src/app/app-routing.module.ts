import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { CommunityComponent } from './components/community/community.component';
import { AirComponent } from './components/air/air.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CarbonComponent } from './components/carbon/carbon.component';
import { PlantsComponent } from './components/plants/plants.component';
import { WaterComponent } from './components/water/water.component';
import { SoilComponent } from './components/soil/soil.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { MembersComponent } from './components/members/members.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'community', component: CommunityComponent},
  { path: 'air', component: AirComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'carbon', component: CarbonComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'soil', component: SoilComponent },
  { path: 'water', component: WaterComponent },

  { path: 'personal', component: PersonalComponent},
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'proposals', component: ProposalsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'settings', component: SettingsComponent },
];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
