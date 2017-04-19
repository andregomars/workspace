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

  markers: Marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
      title: 'A001',
		  draggable: true,
      icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
	  },
    {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
      title: 'C333',
		  draggable: true,
      icon: 'https://maps.google.com/mapfiles/kml/shapes/bus_maps.png' 
	  },
	  {
		  lat: 51.573858,
		  lng: 7.215982,
		  label: 'B',
      title: '2079',
		  draggable: false,
      icon: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png' 
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


