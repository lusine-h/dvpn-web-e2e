import { Mixin } from 'ts-mixer';

import LoginPageActions from '../actions/LoginPageActions'

export class User extends Mixin(
    LoginPageActions,
) {}
