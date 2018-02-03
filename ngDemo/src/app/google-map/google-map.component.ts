import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

import { ToNumberPipe } from '../shared/to-number.pipe';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
	rows = [];
  temp = [];
	lat: number = 33.934353;
	lng: number = -117.934343;
  data$: Observable<any>;
  dataLocalUrl = `assets/data/fleet/AVTA.json`;
  dataRemoteUrl = `https://ioccatsdemo.firebaseio.com/fleet/AVTA.json`;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.data$ = this.http.get<any>(this.dataRemoteUrl)
    //   .map(x => x.vehicles);
    this.http.get<any>(this.dataRemoteUrl).subscribe(data => {
      this.rows = data.vehicles;
    });
	}
	
	private convert(value: string): number {
		return +value;
}

  // lat: number = 51.678418;
  // lng: number = 7.809007;
  zoom: number = 10;
	
	clusterIcon: string = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

  markers: Marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: '1073',
      title: 'A001',
		  draggable: true,
      icon: 'http://cloud.iocontrols.com/online2017/hams/images/mapicon/oi_map_marker.green.72px.png' 
	  },
    {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: '5866',
      title: 'C333',
		  draggable: true,
      icon: 'http://cloud.iocontrols.com/online2017/hams/images/mapicon/oi_map_marker.lightblue.46px.png' 
	  },
	  {
		  lat: 51.994876,
		  lng: 7.355982,
		  label: '5866',
      title: 'C333',
		  draggable: true,
      icon: 'http://cloud.iocontrols.com/online2017/hams/images/mapicon/oi_map_marker.lightred.46px.png' 
	  },
	  {
		  lat: 51.573858,
		  lng: 7.215982,
		  label: '7500',
      title: '2079',
		  draggable: false,
      icon: 'http://cloud.iocontrols.com/online2017/hams/images/mapicon/oi_map_marker.yellow.46px.png' 
	  }
	]

}

interface Marker {
	lat: number;
	lng: number;
	label?: string;
  title: string;
	draggable: boolean;
  icon: string;
}


