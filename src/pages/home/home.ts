import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';
import { ResultsPage } from '../results/results';
import { ModalController } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  distance: number = 1000;

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public modalCtrl: ModalController,
    private performanceData: PerformanceDataProvider) {
    this.person.age = 20;
    this.person.gender = 'female';
  }

  calculate() {
    this.person.doAssessment(this.distance);
    }

  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

  saveResults() {
    this.performanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  }
}
