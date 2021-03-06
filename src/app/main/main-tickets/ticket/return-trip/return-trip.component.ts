import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/main/search.service';
import { BookingService } from 'src/app/main/main-ticket-booking/booking.service';

@Component({
  selector: 'app-return-trip',
  templateUrl: './return-trip.component.html',
  styleUrls: ['./return-trip.component.css']
})
export class ReturnTripComponent implements OnInit {
  
  get tickets() {
    return this.searchService.calculateTickets();
  }

  constructor( private searchService: SearchService, private bookingService: BookingService) { }

  
  ngOnInit() {
    console.log(this.tickets)
  }

}
