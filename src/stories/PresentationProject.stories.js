import React from 'react';
import { storiesOf } from '@storybook/react';

import { PresentationProject } from '../components/PresentationProject';

const stories = storiesOf('App test', module);

const projectData = {
  _id: 1,
  name: 'LaReponseDevRS',
  logo: 'https://i.imgur.com/1Q9ZQ2M.png',
  image: 'https://i.imgur.com/1Q9ZQ2M.png',
  link: 'https://lareponsedevrs.netlify.app/',
  technologies: ['React', 'Sanity', 'Netlify'],
  github: 'https://github.com/DevWeb13/LaReponseDevReseauSocial',
  date: '2023-01',
  categorie: 'new project',
  title: "LaReponseDevRS: Le réseau social de partage d'images fait pour vous",
  description:
    "LaReponseDevRS est un réseau social de partage d'images où les utilisateurs peuvent découvrir et partager des images inspirantes avec une communauté mondiale de passionnés d'images. Les utilisateurs peuvent explorer des collections d'images organisées par thèmes ou rechercher des images en utilisant des mots-clés. Les utilisateurs peuvent également  aimer et commenter des images, ainsi que partager leurs propres images avec la communauté. LaReponseDevRS permet aux utilisateurs de trouver l'inspiration, de découvrir de nouvelles idées et de se connecter avec d'autres personnes partageant les mêmes centres d'intérêt",
  features: [
    'Connexion avec Google - Les utilisateurs peuvent se connecter avec Google pour créer un compte et accéder à toutes les fonctionnalités de LaReponseDevRS.',
    'Explorer des collections d’images organisées par thèmes: Les utilisateurs peuvent parcourir une variété de collections d’images organisées par thèmes pour trouver facilement des images qui les intéressent.',
    'Recueillir des images avec des mots-clés: Les utilisateurs peuvent rechercher des images en utilisant des mots-clés pour trouver rapidement les images qu’ils cherchent.',
    'Aimer et commenter des images: Les utilisateurs peuvent aimer et commenter des images pour interagir avec la communauté et montrer leur appréciation pour les images qu’ils aiment.',
    'Partager des images avec la communauté: Les utilisateurs peuvent publier leurs propres images pour que les autres puissent les voir et les aimer.',
    "Suppression d'images: Les utilisateurs peuvent supprimer les images qu'ils ont publiées.",
    "Lien de l'image: Les utilisateurs peuvent indiquer le lien correspondant à l'image qu'ils ont publiée.",
    'Télécharger des images: Les utilisateurs peuvent télécharger des images pour les sauvegarder sur leur appareil.',
    'Sauvegarder des images: Les utilisateurs peuvent sauvegarder des images pour les ajouter dans leur profil.',
  ],
  upcomingFeatures: [
    'Suivre d’autres utilisateurs: Les utilisateurs peuvent suivre d’autres utilisateurs pour voir leurs dernières images et se connecter avec d’autres passionnés d’images.',
    'Créer des collections: Les utilisateurs peuvent créer des collections pour organiser leurs images favorites.',
    'Rechercher des utilisateurs: Les utilisateurs peuvent rechercher d’autres utilisateurs pour trouver des personnes avec les mêmes centres d’intérêt.',
    'Suppression de compte - Les utilisateurs peuvent supprimer leur compte pour supprimer toutes leurs données personnelles.',
    'Notifications: Les utilisateurs reçoivent des notifications lorsqu\'ils reçoivent des nouveaux abonnés, des nouveaux commentaires ou des nouveaux "j\'aime" sur leurs images.',
    'Outils de modération: Les administrateurs de LaReponseDevRS ont accès à des outils de modération pour garantir la qualité du contenu publié sur la plateforme.',
    'Intégration avec les réseaux sociaux: Les utilisateurs peuvent partager des images sur les réseaux sociaux tels que Facebook, Twitter et Instagram directement depuis LaReponseDevRS',
  ],
  screenShot: [
    'https://i.imgur.com/1Q9ZQ2M.png',
    'https://i.imgur.com/1Q9ZQ2M.png',
  ],
  video: 'https://www.youtube.com/watch?v=1Q9ZQ2M',
  testimonials: [
    {
      name: 'John Doe',
      title: 'CEO of ABC Company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquet lacinia, quam odio tincidunt nunc, eget aliquam massa nisl eget dolor. Donec euismod, nunc sit amet aliquet lacinia, quam odio tincidunt nunc, eget aliquam massa nisl eget dolor.',
      image: 'https://i.imgur.com/1Q9ZQ2M.png',
    },
  ],
  callToAction:
    "Vous êtes passionné d'images et vous cherchez à trouver de l'inspiration, à partager votre créativité ou à vous connecter avec d'autres passionnés d'images ? Alors, rejoignez-nous sur LaReponseDevRS ! Découvrez des collections d'images organisées par thèmes, partagez vos images préférées et connectez-vous avec d'autres utilisateurs partageant les mêmes centres d'intérêt. LaReponseDevRS est accessible partout où il y a une connexion Internet, alors commencez dès maintenant en vous inscrivant sur notre plateforme ou contactez-nous pour en savoir plus sur les fonctionnalités de LaReponseDevRS.",
};

stories.add('PresentationProject', () => {
  return <PresentationProject projectData={projectData} />;
});
