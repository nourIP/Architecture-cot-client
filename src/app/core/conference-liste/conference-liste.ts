import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-liste',
  imports: [DatePipe, FormsModule],
  templateUrl: './conference-liste.html',
  styleUrl: './conference-liste.css',
})
export class ConferenceListe {
  searchQuery: string = '';

  conferences: Conference[] = [
    {
      id: 1,
      titre: 'Angular Workshop',
      description: 'Decouvrez les nouveautes d Angular et developpez vos competences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/event.jpg',
      nbPlaces: 25,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Ariana',
      prix: 80,
      imageUrl: 'images/event.jpg',
      nbPlaces: 0,
      category: 'Musique',
      nbLikes: 0,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conference consacree a l intelligence artificielle et a l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Sousse',
      prix: 100,
      imageUrl: 'images/event.jpg',
      nbPlaces: 0,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, etudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/event.jpg',
      nbPlaces: 100,
      category: 'Business',
      nbLikes: 0,
    },
  ];

  filteredConferences(): Conference[] {
    if (!this.searchQuery.trim()) {
      return this.conferences;
    }
    return this.conferences.filter(c =>
      c.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  inscrire(conf: Conference): void {
    if (conf.nbPlaces > 0) {
      conf.nbPlaces--;
    }
  }

  like(conf: Conference): void {
    conf.nbLikes++;
  }
}

export { Conference };
