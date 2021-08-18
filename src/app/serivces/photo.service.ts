import { HttpClient } from '@angular/common/http';
import { Image } from '../pictures/pictures.model';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) { }

    public images: Image[] = [
        {source: "https://lh3.google.com/u/0/d/1dz3T96JXeCL9cxLf7JuLSPOSZam_B3ZI=w1920-h942-iv1", title: "Sarti első nap", 
        subtitle: "Sarti strand sziklánál", description: "Sarti strand szikláknál"},
        {source: "https://lh3.google.com/u/0/d/1MtFrUFr007zjO6geddlLI-7CWwqevxKi=w1920-h942-iv1", title: "Sarti második nap", 
        subtitle: "Orange beach strand sziklánál", description: "Orange beach strand szikláknál"},
        {source: "https://lh3.google.com/u/0/d/1AU2NUT1K_-62Ad24hZcyTSULIy2gHun2=w1920-h942-iv1", title: "Sarti második nap", 
        subtitle: "Sarti strand kilátó sziklánál", description: "Sarti strand kilátó sziklánál"},
        {source: "https://lh3.google.com/u/0/d/1YBd4QUFqQfcewAwJRzY3n6PwkMmHWi1S=w1252-h942-iv1", title: "Sarti harmadik nap", 
        subtitle: "Orange beach strand szikláknál", description: "Orange beach strand szikláknál a büfék oldalánál"},
        {source: "https://lh3.google.com/u/0/d/18CQRCmCAK2RbCW2EtnpNjYeM2Ot1fNbC=w1252-h942-iv1", title: "Sarti harmadik nap", 
        subtitle: "Szív öböl kilátó", description: "Szív öböl kilátóba mentünk strand után a melegben"}
      ];

      public getImages(): Image[] {
          return [... this.images];
      }
}