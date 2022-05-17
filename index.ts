import sdk from '@stackblitz/sdk';
import './styles.css';

// Откройте репозиторий RealWorld Angular в новом окне на StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
window['openGithubProject'] = () => {
  sdk.openGithubProject('https://try.gitea.io/warsan/sdk-github-project-sandro');
}

// Вставьте репозиторий RealWorld Angular на эту страницу
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'https://try.gitea.io/warsan/sdk-github-project-sandro',
    { height: 600 }
  );
}