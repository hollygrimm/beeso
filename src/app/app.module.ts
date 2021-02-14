import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './components/card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { MiniCardComponent } from './components/mini-card/mini-card.component';

import { AirComponent } from './components/air/air.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CarbonComponent } from './components/carbon/carbon.component';
import { CommunityComponent } from './components/community/community.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PlantsComponent } from './components/plants/plants.component';
import { SoilComponent } from './components/soil/soil.component';
import { WaterComponent } from './components/water/water.component';
import { MembersComponent } from './components/members/members.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ProposalsComponent } from './components/proposals/proposals.component';
import { SettingsComponent } from './components/settings/settings.component';

import { IncomeSourceCoinChartComponent } from './components/charts/income-source-coin-chart/income-source-coin-chart.component';
import { CoinAllocationChartComponent } from './components/charts/coin-allocation-chart/coin-allocation-chart.component';
import { AnnualIncomeChartComponent } from './components/charts/annual-income-chart/annual-income-chart.component';
import { IncomeSourceChartComponent } from './components/charts/income-source-chart/income-source-chart.component';

import { TransactionsComponent } from './components/tables/transactions/transactions.component';
import { RemindersComponent } from './components/tables/reminders/reminders.component';
import { MarketplaceTableComponent } from './components/tables/marketplace-table/marketplace-table.component';
import { MembersTableComponent } from './components/tables/members-table/members-table.component';
import { ProposalsTableComponent } from './components/tables/proposals-table/proposals-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonalComponent,
    CardComponent,
    IncomeSourceCoinChartComponent,
    CoinAllocationChartComponent,
    AnnualIncomeChartComponent,
    IncomeSourceChartComponent,
    TransactionsComponent,
    MiniCardComponent,
    RemindersComponent,
    CommunityComponent,
    AirComponent,
    WaterComponent,
    CarbonComponent,
    PlantsComponent,
    AnimalsComponent,
    SoilComponent,
    MembersComponent,
    MarketplaceComponent,
    ProposalsComponent,
    SettingsComponent,
    MarketplaceTableComponent,
    MembersTableComponent,
    ProposalsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
