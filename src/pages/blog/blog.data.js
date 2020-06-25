
const BLOG_DATA = [
  {
    id: 1,
    category: 'Web Developement',
    routeName: 'javascript',
    blogs: [
      {
        id: 1,
        title: 'JavaScript Frameworks',
        imageUrl: 'https://i.postimg.cc/y6fr4btL/javascript-frameworks.png',
        link: '/javascript',
        excerpt: 'JavaScript has evolved in many ways over the last few years. There are so many frameworks to choose from now that it can be a challenge to figure out which one you want to use.'

      },
      {
        id: 2,
        title: 'Algorithms & Data Structure',
        imageUrl: 'https://i.postimg.cc/R0rDpJy9/javascript-algorithms.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 3,
        title: 'TypeScript',
        imageUrl: 'https://i.postimg.cc/SsG8FHKV/Type-Script.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 4,
        title: 'Debugging',
        imageUrl: 'https://i.postimg.cc/7hLsJ3G1/javascript-debugging.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
    ]
  },
  {
    id: 2,
    category: 'Cloud Technology',
    routeName: 'aws',
    blogs: [
      {
        id: 10,
        title: 'AWS KMS, SSM Parameters, Security & Encryption ',
        imageUrl: 'https://i.postimg.cc/q7Ymncvr/aws-encryption.png',
        link: '/aws-security',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 11,
        title: 'AWS CLI, EC2, ASG, SDK, IAM Roles and VPC',
        imageUrl: 'https://i.postimg.cc/zGJb1DC2/cloud1.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 12,
        title: 'S3 and Elastic Beanstalk',
        imageUrl: 'https://i.postimg.cc/VLVTMVFJ/beanstalk.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
        
      },
      {
        id: 13,
        title: 'AWS ECS, ECR, Fargate and Docker',
        imageUrl: 'https://i.postimg.cc/vZxKvtP3/cloud-tech.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
        
      },
      {
        id: 14,
        title: 'AWS CI/CD',
        imageUrl: '',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 15,
        title: 'CloudFormation',
        imageUrl: '',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
      {
        id: 16,
        title: 'AWS Integration, SQS, SNS, Kinesis',
        imageUrl: '',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'

      },
    ]
  },
  {
    id: 3,
    category: 'Mobile Developement',
    routeName: 'mobile',
    blogs: [
      {
        id: 23,
        title: 'React Native',
        imageUrl: 'https://i.postimg.cc/FFCQm4K6/react-native.png',
        link: '/reactnative',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
      },
      {
        id: 24,
        title: 'IOS Swift',
        imageUrl: 'https://i.postimg.cc/0NKC67Gm/swift.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
      },
      {
        id: 25,
        title: 'Flutter and Dart',
        imageUrl: 'https://i.postimg.cc/Df9ns6Py/flutter-dart.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
      },
      {
        id: 26,
        name: 'Android',
        imageUrl: 'https://i.postimg.cc/7ZWjSYg8/android-development.png',
        link: '/javascript',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nulla facilisi cras fermentum odio.'
      }
    ]
  }
];

export default BLOG_DATA;