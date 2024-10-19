import carolImage from './assets/carol.png';
import johnImage from './assets/john.jpg';
import janeImage from './assets/jane.jpg';

const teamMembers = [
    {
      name: 'Carol De Cerff',
      title: 'Founder & Senior Attorney',
      specialty: 'Family Law',
      bio: 'Carol has over 25 years of experience in family law, providing compassionate and dedicated legal services to her clients.',
      image: carolImage , // Make sure the image path is correct
    },
    {
      name: 'John Smith',
      title: 'Criminal Defense Lawyer',
      specialty: 'Criminal Law',
      bio: 'John is committed to defending the rights of his clients with integrity and persistence.',
      image: johnImage,
    },
    {
      name: 'Jane Doe',
      title: 'Civil Litigation Expert',
      specialty: 'Civil Litigation',
      bio: 'Jane has extensive experience in civil litigation, representing clients in high-stakes cases with precision and determination.',
      image: janeImage,
    },
    // Add more team members as needed
  ];
  
  export default teamMembers;