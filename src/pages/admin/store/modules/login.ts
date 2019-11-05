import {
  Module,
  VuexModule,
  MutationAction,
  Action,
} from 'vuex-module-decorators';

@Module
export default class Login extends VuexModule {
  public foo: number = 2222;
  @MutationAction
  public login(_: any, data: any) {
    console.log('120', this);
    return this.dispatch('callInterface', {
      method: 'get',
      url: '/api/login',
    }).then(res => {
      return res;
    });
  }
}
