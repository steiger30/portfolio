import { Project } from "./projects.dto";

export const projects: Project[] = [
  {
    name: 'Venda360',
    describe: 'Venda360 é um software desenvolvido para auxiliar no gerenciamento de vendas.Com o venda360, você pode controlar e monitorar todas as etapas do processo de vendas de forma eficiente e organizada.',
    img: '../../../../assets/img/projects/Venda360.png',
    technologies: [
      'TypeScript', 'Angular', 'Express', 'JWT', 'POO', 'Boostrap'
    ],
    github: 'https://github.com/steiger30/Venda360'

  },
  {
    name: 'MyHealth',
    img: '../../../../assets/img/projects/myhealth.png',
    describe: ' MyHealth é uma carteira de vacinação digital para controlar as vacinas recebidas, incluindo a imagem do comprovante vacinal bem como as datas das próximas doses.',
    technologies: [
      'Mobile', 'Redux', 'Firebase', 'Stack Navigator', 'React Native'
    ],
    github: 'https://github.com/steiger30/myhealth-Drawer',

  }
]
