# devweb13-libraries-react

Library of different useful React components:

- DataTableReact: A flexible, dynamic and easy-to-use table to search and sort this data.

## Made with

![JavaScript](https://img.shields.io/badge/Language-JS-yellow)
![CSS](https://img.shields.io/badge/Style-CSS-ff69b4)
![npm](https://img.shields.io/badge/Deploy-npm-black)
![fontawesome](https://img.shields.io/badge/Library-fontawesome-blueviolet)
![IDE](https://img.shields.io/badge/IDE-VsCode-blue)
![NODE](https://img.shields.io/badge/Node-v16.13.0-ff69b4)
![@storybook/react](https://img.shields.io/badge/Library-@storybook/react-blueviolet)
![JsDoc](https://img.shields.io/badge/Library-JsDoc-blueviolet)
![RollUp](https://img.shields.io/badge/Library-RollUp-blueviolet)

## Measures SonarCloud

|                                                                                                              summary                                                                                                               |                                                                                                           score                                                                                                            |                                                                                                      to do                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|              [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)              |  [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)  |  [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)   |
| [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react) | [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react) | [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react) |
|                   [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=bugs)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)                   |    [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)    |                                                                                                                                                                                                                 |
|        [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=DevWeb13_devweb13-libraries-react&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)        |                                                                                                                                                                                                                            |

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=DevWeb13_devweb13-libraries-react)](https://sonarcloud.io/summary/new_code?id=DevWeb13_devweb13-libraries-react)

## Deployment

To deploy this project run

```bash
  npm i devweb13-libraries-react
```

## Run DataTableReact

After installing the library

```js
import { DataTableReact } from 'devweb13-libraries-react';
```

- The array takes a single required parameter, an array of objects with all the same properties. The first property will be the first column of the table and so on…

- The pagination of the table is managed automatically according to the number of entries displayed on the screen.

- Special feature!!: Properties starting with a "\_" are not displayed on the screen.

## Usage/Examples

```javascript
import { DataTableReact } from 'devweb13-libraries-react';

function App() {
  const arrayOfObjects = [
    {
      _id: 1,
      id: 1,
      name: 'John Doe',
      age: '30',
      salary: 20000,
    },
    {
      _id: 2,
      id: 2,
      name: 'Jane Doe',
      age: '25',
      salary: 25000,
    },
    {
      _id: 3,
      id: 3,
      name: 'Joe Doe',
      age: '35',
      salary: 30000,
    },
    {
      _id: 4,
      id: 4,
      name: 'Jack Doe',
      age: '40',
      salary: 40000,
    },
    {
      _id: 5,
      id: 5,
      name: 'Jill Doe',
      age: '45',
      salary: 50000,
    },
    {
      _id: 6,
      id: 6,
      name: 'Juan Doe',
      age: '50',
      salary: 60000,
    },
    {
      _id: 7,
      id: 7,
      name: 'Juan Doe',
      age: '55',
      salary: 70000,
    },
    {
      _id: 8,
      id: 8,
      name: 'Juan Doe',
      age: '60',
      salary: 80000,
    },
    {
      _id: 9,
      id: 9,
      name: 'Juan Doe',
      age: '65',
      salary: 90000,
    },
    {
      _id: 10,
      id: 10,
      name: 'Juan Doe',
      age: '70',
      salary: 100000,
    },
    {
      _id: 11,
      id: 11,
      name: 'Juan Doe',
      age: '75',
      salary: 110000,
    },
  ];
  return;
  <div>
    <DataTableReact arrayOfObjects={arrayOfObjects} />
  </div>;
}
```

## Result

![App Screenshot](https://github.com/DevWeb13/devweb13-libraries-react/blob/master/src/components/DataTableReact/img/Capture%20d%E2%80%99%C3%A9cran%20de%202022-06-20%2014-34-23.png)

## Documentation

[Documentation](https://devweb13.github.io/devweb13-libraries-react/)

# Hi, I'm DevWeb13! 👋

## 🚀 About Me

I'm a full stack developer...

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/loic-g-76968b219/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/DeveloppementW1)
[![CodinGame](https://img.shields.io/static/v1?style=for-the-badge&message=CodinGame&color=222222&logo=CodinGame&logoColor=F2BB13&label=)](https://www.codingame.com/profile/4f9df2adc1f95abbab8380d47656ade10865463)

## 🛠 Skills

Javascript, React, Sass, Node...

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@DevWeb13](https://github.com/DevWeb13)
