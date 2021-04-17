import sdk from '@stackblitz/sdk';
import './styles.css';

// Откройте репозиторий RealWorld Angular в новом окне на StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
window['openGithubProject'] = () => {
  sdk.openGithubProject('gothinkster/angular-realworld-example-app');
}

// Вставьте репозиторий RealWorld Angular на эту страницу
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'gothinkster/angular-realworld-example-app',
    { height: 600 }
  );
}