Docker angular: https://github.com/coronadoedgar/docker/tree/master/angular
docker-compose run -p 0.0.0.0:3000:3000 app_node bash
docker exec -it nodejs_app_node_run_1 /bin/bash

ng new project-api
Configuración "hola mundo" -> http://coronadoedgar.github.io/angular/2017/04/22/hello-world.html
Agregar en package.json:
"dependencies": {
	...
	"angular-in-memory-web-api": "~0.3.1",
	...
},
Luego: nmp install

ng g class classes/my-class
ng g s services/my-service
ng g c components/my-component

Agregar fichero: project-api/src/app/my-data.ts:
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class MyData implements InMemoryDbService {
  createDb(){
    let mydata = [
      { id: 1, name: 'Edgar' },
      { id: 2, name: 'Edynson' },
      { id: 3, name: 'Edd' },
      { id: 4, name: 'Coronado' }
    ];
    return {mydata};
  }
}

