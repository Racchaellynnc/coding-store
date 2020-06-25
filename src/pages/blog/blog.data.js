
const BLOG_DATA = [
  {
    id: 1,
    title: 'Web Developement',
    routeName: 'javascript',
    blogs: [
      {
        id: 1,
        name: 'JavaScript Frameworks',
        imageUrl: 'https://i.postimg.cc/y6fr4btL/javascript-frameworks.png',
        link: '/javascript',
        excerpt: 'blah blah blah'

      },
      {
        id: 2,
        name: 'Algorithms & Data Structure',
        imageUrl: 'https://i.postimg.cc/R0rDpJy9/javascript-algorithms.png',
        
      },
      {
        id: 3,
        name: 'TypeScript',
        imageUrl: 'https://i.postimg.cc/SsG8FHKV/Type-Script.png',
        price: 5
      },
      {
        id: 4,
        name: 'Debugging',
        imageUrl: 'https://i.postimg.cc/7hLsJ3G1/javascript-debugging.png',
        price: 15
      },
    ]
  },
  {
    id: 2,
    title: 'Cloud Technology',
    routeName: 'aws',
    blogs: [
      {
        id: 10,
        name: 'AWS KMS, SSM Parameters, Security & Encryption ',
        imageUrl: 'https://i.postimg.cc/3RYbY53c/binary.png',
        price: 10,
        // link: '/aws-security'
      },
      {
        id: 11,
        name: 'AWS CLI, EC2, ASG, SDK, IAM Roles and VPC',
        imageUrl: 'https://i.postimg.cc/zGJb1DC2/cloud1.png',
        price: 10
      },
      {
        id: 12,
        name: 'S3 and Elastic Beanstalk',
        imageUrl: 'https://i.postimg.cc/VLVTMVFJ/beanstalk.png',
        price: 10
      },
      {
        id: 13,
        name: 'AWS ECS, ECR, Fargate and Docker',
        imageUrl: 'https://i.postimg.cc/vZxKvtP3/cloud-tech.png',
        price: 15
      },
      {
        id: 14,
        name: 'AWS CI/CD',
        imageUrl: '',
        price: 15
      },
      {
        id: 15,
        name: 'CloudFormation',
        imageUrl: '',
        price: 15
      },
      {
        id: 16,
        name: 'AWS Integration, SQS, SNS, Kinesis',
        imageUrl: '',
        price: 10 
      },
    ]
  },
  {
    id: 3,
    title: 'Mobile Developement',
    routeName: 'mobile',
    blogs: [
      {
        id: 23,
        name: 'React Native',
        imageUrl: 'https://i.postimg.cc/FFCQm4K6/react-native.png',
        price: 5,
        // link: '/reactnative'
      },
      {
        id: 24,
        name: 'IOS Swift',
        imageUrl: 'https://i.postimg.cc/0NKC67Gm/swift.png',
        price: 5
      },
      {
        id: 25,
        name: 'Flutter and Dart',
        imageUrl: 'https://i.postimg.cc/Df9ns6Py/flutter-dart.png',
        price: 80
      },
      {
        id: 26,
        name: 'Android',
        imageUrl: 'https://i.postimg.cc/7ZWjSYg8/android-development.png',
        price: 80
      }
    ]
  }
];

export default BLOG_DATA;