import { Component } from '@angular/core';
import { Conference } from '../../models/conference';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confrence-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confrence-list.html',
  styleUrl: './confrence-list.css',
})
export class ConfrenceList {
  favorites: Conference[] = [];

  addToFavorite(conf: Conference): void {
    const alreadyAdded = this.favorites.map(f => f.id).includes(conf.id);
    if (alreadyAdded) {
      alert(conf.titre + ' est deja dans vos favoris !');
    } else {
      this.favorites.push(conf);
    }
  }

  confList: Conference[] = [
    {
      id: 1,
      titre: 'Angular Workshop',
      description: 'Decouvrez les nouveautes d Angular et developpez vos competences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 30,
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
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Musique',
      nbLikes: 12,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conference consacree a l intelligence artificielle et a l innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Snusse',
      prix: 100,
      imageUrl: 'images/conf.jpg',
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
      imageUrl: 'images/conf.jpg',
      nbPlaces: 100,
      category: 'Business',
      nbLikes: 0,
    },
  ];
}
