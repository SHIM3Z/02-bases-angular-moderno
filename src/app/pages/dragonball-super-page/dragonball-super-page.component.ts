import { Character } from './../../interfaces/character.interface';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonBallService);

  // characters = signal<Character[]>([
  //   {
  //     id: 1,
  //     name: 'Goku',
  //     power: 9001,
  //   },
  //   {
  //     id: 2,
  //     name: 'Vegeta',
  //     power: 8000,
  //   }
  // ]);

  // addCharacter(character: Character) {
  //   this.characters.update((list) => [...list, character]);
  // }

}
