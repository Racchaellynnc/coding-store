
const BLOG_DATA = [
  {
    id: 1,
    category: 'Web Development',
    routeName: 'javascript',
    blogs: [
      {
        id: 1,
        title: 'What JavaScript Frameworks Should You Choose?',
        imageUrl: 'https://i.postimg.cc/y6fr4btL/javascript-frameworks.png',
        link: '/',
        excerpt: 'JavaScript has evolved in many ways over the last few years. There are so many frameworks to choose from now that it can be a challenge to figure out which one you want to use.'
      },
      {
        id: 2,
        title: 'Algorithms & Data Structure',
        imageUrl: 'https://i.postimg.cc/R0rDpJy9/javascript-algorithms.png',
        link: '/',
        excerpt: 'Having a deep understanding of Data Structures and Algorithms will help you as a programmer to be able to make more informed decisions and write code that runs better. '
      },
      {
        id: 3,
        title: 'TypeScript',
        imageUrl: 'https://i.postimg.cc/SsG8FHKV/Type-Script.png',
        link: '/',
        excerpt: 'TypeScript is an open-source programming language that was developed and maintained by Microsoft. It is a typed superset of JavaScript and adds optional static typing to the language and compiles down to JavaScript.'
      },
      {
        id: 4,
        title: 'Debugging',
        imageUrl: 'https://i.postimg.cc/7hLsJ3G1/javascript-debugging.png',
        link: '/',
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
        link: '/',
        excerpt: 'Learn about the importance of encryption and how to use KMS (Key Management Service) within AWS. KMS allows you to create and control your CMK (Customer Master Key).'
      },
      {
        id: 11,
        title: 'AWS CLI, EC2, ASG, SDK, IAM Roles and VPC',
        imageUrl: 'https://i.postimg.cc/zGJb1DC2/cloud1.png',
        link: '/',
        excerpt: 'What are the benefits of using AWS? We will show you step-by-step how to launch an EC2, ASG, and other AWS services.'

      },
      {
        id: 12,
        title: 'How to deploy a Node.js Application onto Elastic Beanstalk',
        imageUrl: 'https://i.postimg.cc/VLVTMVFJ/beanstalk.png',
        link: '/',
        excerpt: 'Beanstalk is a fast way to deploy and scale your web applications to AWS. You simply upload your code and Elastic Beanstalk automatically deploys your application. Learn more about the many features and how to get started.'
      }
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
        link: '/',
        excerpt: 'React Native combines Native Development with React Code. It is written with JavaScript and rendered with native code but of web components, it uses native components.'
      },
      {
        id: 24,
        title: 'IOS Swift',
        imageUrl: 'https://i.postimg.cc/0NKC67Gm/swift.png',
        link: '/javascript',
        excerpt: 'Swift is a powerful language that is used by Apple for developing applications on IOS, IpadOS, macOS, watchOS, tvOS and Linux. You need to have x-code to use swift and it gives developers the freedom to create anything that comes to mind. '
      },
      {
        id: 25,
        title: 'Flutter and Dart',
        imageUrl: 'https://i.postimg.cc/Df9ns6Py/flutter-dart.png',
        link: '/javascript',
        excerpt: 'Flutter is a UI SDK created by Google. It uses dart for the programming language. Learn how to create mobile, web and desktop apps in one single codebase.'
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