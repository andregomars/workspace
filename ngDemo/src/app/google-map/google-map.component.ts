import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
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

  constructor() { }

  ngOnInit() {
  }

}

interface Marker {
	lat: number;
	lng: number;
	label?: string;
  title: string;
	draggable: boolean;
  icon: string;
}


