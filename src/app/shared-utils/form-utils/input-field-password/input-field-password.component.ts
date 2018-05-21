import { Component, OnInit, Input } from '@angular/core';
import { User} from '../../../user';

@Component({
  selector: 'app-input-field-password',
  templateUrl: './input-field-password.component.html',
  styleUrls: ['./input-field-password.component.css']
})
export class InputFieldPasswordComponent implements OnInit {
  @Input() labelName: string;
  @Input() optional?: boolean;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  user: User;
  constructor() {
    this.user = new User(1, 'Rabeendranath123', 'Naga', '', 'rabin123');
  }

  ngOnInit() {
  }

}
