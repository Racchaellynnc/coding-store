const BLOG_DATA = [
  {
    id: 1,
    title: 'JavaScript',
    routeName: 'javascript',
    blogs: [
      {
        id: 1,
        name: 'JavaScript Frameworks',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwlXjjPVmmnor3AxomqJPabK49JRBWGHZAqD3aBBW_mcc0KalYgSLTzuOVkyHO9tokS9lEMcXc9GebiJNwg0sSKZfjpPcvx2E_TM0uh-M3ME_sIqa4xBiL8Thc3ySXpNguPeF82F5j-C-pjnZ8vIdt2xB0kNsLffzBqMHzF_96Uo_GBsSkXAHWF7-fW5DaGc46uRytme0e81QGteZkc4oBgWtrllZ3SSgvUB6AJKnEZ2qiqPamkhHnpzk1qpaeAa2vZjdeKvGXPrdqQw05pYb_xoS8gJ-OLODsQiOiUg3WK49NxEqiBMlA_nLu61HSsGKXdZrIdRPilmGqpDRgwkBPd9JdT7_QcjFOF1Fqfyi2l8Q/p.png?size=1600x1200&size_mode=3',
        link: '/javascript'
      },
      {
        id: 2,
        name: 'JavaScript ES6 Arrow Functions',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwLjxmL-CxQ0rcQrxQnlKSa7eqPS2WwGZSAZJ5MztChsQ1BPQsdfLBiShRRrJSv01JMM1b22DLHmJINcmIJxiFc7TSwfX3kiU56V4eGJZES8u66-XvDVip0M9YFI0IUkRrdwV1Z5RiQubsssqRBcx-YbS2aie-Y5M5pG2I6vP5r3ag6xEEsyIeh8jPG9OnfmkBAZEm3iykK5WEbNLhv8FlZMggvgA8zw-Ok_jxEOB4TkFMwosfRcfoIJ3cOaGTwYUSWgDdipXXiq9mwOMznRFb0U6cNuSGgaB6qgzH8UdXVLM4ONxHSYRZBSp3W51qGH9HM7h__s-slDhK2kQk-_FHiI1NJBC-88Ki417tb893Sww/p.png?fv_content=true&size_mode=5',
        price: 5
      },
      {
        id: 3,
        name: 'TypeScript',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAxwDuS4Y1vM_hzM2ZzVQVhqIpK2rxrJPPGWC5-SnVIHALFiZqEfSopB2GRf3OJnkjiTA7wd1d1e78De90yWqZ_yxGDBPVJgcCFk4dtIeZF1N_YTCMUoBbFzAmMYqtZ6p-yxTRa7Kdom06fYhfhlwwEdBGpgDjhdV41pLtk5TCSJyv_YCWPk4cJ0mfO0MaN4vuO77vj7TMLZbuNmdrx4jFu7KagWZaOF_F8wYZfc8hxYFtcLi8QHAqp2pVIcF6Ys2Um8dZwI-mmgqDv7CzuSC94cezJdnyydl-QkGOlvO-MvCuEnX6aDV55zhlBiljYa6QIYKf_2ogUUnzm5JSW3fAM8rTwV6MAvpW-6rsXBDGfxpA/p.png?fv_content=true&size_mode=5',
        price: 5
      },
      {
        id: 4,
        name: 'JavaScript Debugging',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwBhaPxJv_HE7EEu2TC1LKd7ogQv8tCSvQjwckdWrxIDJoyPDeglPFmpYD_kCtsLVmTmVxE93ujzK8_vxCwJoy7ZJOTWAgUn0PLZp4324-PovmkfJER5m3zrUAzjmpb1YAUeI0zcxO57O2Jv3fB8svksu1xmz4xqg7Ek2pOdpTp4jweuF3vO-eiPzHzts35FFecjCxh_qnL8LiqQyNKiTb1Cjs1zgB_IjkSy27GEqUnJ0e0t_-oaT6e0XSZct5PB7v3vBgg6YlK0hC62M_3xrRPoG1Y8ed5aWi3s8fy0OD44KpCDbmLvHQzq5oXFcfnbWrNI8tyXNJJX4WeH3QQVBTqVZ3xqHOkFZde6GeFzwd-Lg/p.png?fv_content=true&size_mode=5',
        price: 15
      },
      {
        id: 5,
        name: 'JavaScipt Objects',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
        price: 5
      },
      {
        id: 6,
        name: 'JavaScript Loops',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
        price: 5
      },
      {
        id: 7,
        name: 'JavaScript Conditional Statements',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
        price: 5
      },
      {
        id: 8,
        name: 'JavaScript Understanding DOM',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
        price: 15
      },
      {
        id: 9,
        name: 'JavaScript Debugging',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwBhaPxJv_HE7EEu2TC1LKd7ogQv8tCSvQjwckdWrxIDJoyPDeglPFmpYD_kCtsLVmTmVxE93ujzK8_vxCwJoy7ZJOTWAgUn0PLZp4324-PovmkfJER5m3zrUAzjmpb1YAUeI0zcxO57O2Jv3fB8svksu1xmz4xqg7Ek2pOdpTp4jweuF3vO-eiPzHzts35FFecjCxh_qnL8LiqQyNKiTb1Cjs1zgB_IjkSy27GEqUnJ0e0t_-oaT6e0XSZct5PB7v3vBgg6YlK0hC62M_3xrRPoG1Y8ed5aWi3s8fy0OD44KpCDbmLvHQzq5oXFcfnbWrNI8tyXNJJX4WeH3QQVBTqVZ3xqHOkFZde6GeFzwd-Lg/p.png?fv_content=true&size_mode=5',
        price: 15
      },
    ]
  },
  {
    id: 2,
    title: 'AWS Cloud Technology',
    routeName: 'aws',
    blogs: [
      {
        id: 10,
        name: 'AWS EC2 and ASG',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwoGEOpISZ_ER93Jdf6-injSIYSCCRjJ6vf-UnQP4F0qpgsuUtujomgeASeW11wYns9t0NlsI18zGNnd1Zmh23-GkmpvKOwJD62jwLsKLIwvB9huuDPmfQJi6wLZKGZw276YN9T0t7fyQGADUKCmYsGp7imC8Fmky81_BIL6ku88HQ77tkQTh3D5fpxyUIqlurTsSju98_HH0eZNO_Y5QKVvWvh5qd7vqRMAkXdbF2PK5QYcdcWqB5Rq9aAZvi5_3JzAhTPpeaKRRHYTvR0ya_2zoo71BdnpP8CmksHEB1N_7yKzT7DJc7KWM6OjBJHKeC3anNHV7B6lg7MlF0gT-yK9J5LyFhL68cxghsNeuylww/p.png?fv_content=true&size_mode=5',
        price: 10
      },
      {
        id: 11,
        name: 'AWS CLI, SDK, IAM Roles and VPC',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAxtV5FRWLtOjCYafZd1w-xogMH1i_V4ocy9iF-OUIdJMvulxUGTryn6uTVN4MU9CvhifW2d9-WXzKdFNHVQA9oab8yuwpW4nGnfRrdEocx4CSE-pzPJ26smH5-odQQGNhjPAHWDpVUhxcLs-5RTvby5o9r5tSHKj6dfyIG26Id9FkbcE8wTc08gs00heGQSToCRVR5rSgRzw8fP2sQZi1nlDlheNd2vgvcppsyvP-vTnD1DjtvBqEMxKsSup5UP15_Ok9TZ71u2l5SzEI06VW12lMnnxZgnhZ67o8HoooNCFONqop82WMY6THhFWM35tCtjnR3eXRcavrhjFEvaQsT7lipVJzIo9f18lblzdUBpeQ/p.png?fv_content=true&size_mode=5',
        price: 10
      },
      {
        id: 12,
        name: 'S3 and Elastic Beanstalk',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAz5YgLDcDIjSA_9gKAmYIS8HXV1s3wmX07Wm9xqvG6-gcArdq8w8qKJ57egk6bMEDumdQiMESbW61MK4B-rIY_tCGRvtxn1kxOpvf8ARcmD3NMB2yAgf-k3z260AX3phShXXueSI8ewqZPqREBWbf0m7AMVlcNFh9oZeDD7WnTts4iEZlAyPxVWtVqO69GNoYkmaHkO8RFjCZ_QuD8un0eD_IeHcu7H74z59W9nuIbEpAZbwqgpeL5RjKHFWXvdFIQfHTL-BoLrKGkVLQYBOS4wHZ6DO0t0c-mlsb9ockm0NSFU38u7UbJOV04jJgP9Bcm17QA4kVUBUpv0-nOSMMlWqjcUbytVB_OO220f8wRXNQ/p.png?fv_content=true&size_mode=5',
        price: 10
      },
      {
        id: 13,
        name: 'AWS ECS, ECR, Fargate and Docker',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwdSBHgsqaYQhlACwU7hHNvNKZR6q9xsK5tKXhlXbn5WM6is_JxwGqP0M5aHGcX6o68p35mvUR8YECX5IwNwOhpFMIQ6AK3ZqjkcEpnwgt4PRuR1XHACRrlPZXcn2Y6so8Y9lYOqQDHuwnD7AqvcJR43USUe4R9mlf7_hCexCI1KKQpI4PqcKPS5aSJk5EWefb364siDNaXlVGP3aVKxklgpKyp6Fm23QcgfVbtzOQO2kc6k9pmy0Izxjh-QnvcY6H88ZeyzER-7sKijSC2ZGAMn3glqBYCO_-cLxOn4Y7bPXaaNXaCtuZAMhO-xF4oqLOro-0_7Khnh7ZpLZmUFyt7YRTP375SHkcMcs5wbeEL3A/p.png?fv_content=true&size_mode=5',
        price: 15
      },
      {
        id: 14,
        name: 'AWS CI/CD',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwuKyiHX3bwjp3J2Ph0jDHROvQrJ0-1t2V9egtZ98_D2reOYSAVHsRmF6xg_rIR0aO2JyTHmvxJx2txnDFLl5mJtQsCbTbQ0wGYUtwmnjUV0CakYZMtxQOvaRM3LftYy900JqZXVYLvuyB59_cNP5Vqk9tN6pbjmF-PZ-kIc99Zod_fCOfMTYK5-Gtf-DleqZcliMjkPtwf5Kb78ahvcr_gmiVui-vTJvxJwHaQRplTQn8653JSYi-z2vN55z0MPVGfb8dRSCkKE26LgNsM5zMGjaVZnegryqCnut9G9WJyga-AJEt34WkwBBc-Tw0Qh-cYMKl-uzhAlTLVlUsieHTRSZ-8qKADGRx8URueafyp4A/p.png?fv_content=true&size_mode=5',
        price: 15
      },
      {
        id: 15,
        name: 'CloudFormation',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwN3XS6nOET5aUpo45MtRFQgOVgHwA99uQs_lYOYE1mcsqXntV3dBE3TXfbh-53mzafzKPTOZnd3GnyPtYY6u9FQo44aVQYobClh40DFW8JG8C4jT8Zm9FD5fUKmtu149LjyYQGoVyMdvayYmMyBdyFH0lI6JiNAT4ciJ-GAtS2NIfFtGM5CUq_qphzwHtmUmYWPCLQ3uDzVEKHx5YYO0GHghBVL_xXzsjCEuVohZFF_T4wOZM_SL8w54VVS6NaCS-L0xnj46-2FqcJ3rM4cpMPPaVRJeIARcLlfqdbXHusK73m3bW4i8sA3uELq1MIAEVZOpkxicGeczZcZJ-YU-7KcKKAr7T8XpdLzadcd_Io1g/p.png?fv_content=true&size_mode=5',
        price: 15
      },
      {
        id: 16,
        name: 'AWS Integration, SQS, SNS, Kinesis',
        imageUrl: 'https://previews.dropbox.com/p/thumb/AAwDasd9r2HKTqs9V21yjJAinQnq9gpYhRWAjuAKFsD0fz_NX5qaHjC-vppZSpM0LKKFjU46iyxqhahQoRqvGLRGqIKkLxUbiSPr1FItsfPisWR6sLAwhydQXmABJqP1wQ6e3bEcZl9_feg5Q0GfiH2cPByQKGDph-LQD_siy4kIhXdtRPL7UoVqOd10qL0N0EsjhnlJMlTgnMRc8-1xwc8wgFM7HXOnMtKXUy234_OGVo-jBHVqGUyZVqfegNpHNX6_4cSSwDy_5v9A-94wXVJHP0YVSlYu9u1z-Y-CTNQRZ_WhHgZ_5gGT_ZsZ6iTxeil6kR6uOKMpSSN1pvvib1LcuJN33Lp4hoiTjh74xy7P4w/p.png?fv_content=true&size_mode=5',
        price: 10 
      }
    
//   {
//     id: 3,
//     title: 'Algorithms and Data Structures',
//     routeName: 'algorithms',
//     blogs: [
//       {
//         id: 23,
//         name: 'Binary Search Trees',
//         imageUrl: 'https://previews.dropbox.com/p/thumb/AAxPFNcjDzy5gatgk4VA45Eesu_9kHFZAkyDVvR0idzm16i8Rt4nYrIzCnuo2a4c-Cp12YdF0rfT7zXSvNiGRnNfj1cniq8XVdnRjO8m-n5GsHV0JSQG7ql0p5MRZZV9vgElAJkfx1XdpKiAANh0hpAxNQtVc-EUdvLLJZ6Ukn96nUyEm7OvNKThYeIhT7ukTM5eGiy_QKnPT-muvO202LsfRzwzLfkkL5tz55mz_n9YW0xeaEhES1uj_XFUkYn4tqyGe4oB-LhcD2AIx6kMBqBh160Ah9oEZBdfc7lk6aYe0lbS5FziItHudN9_2vi-p-S0gAWiMtx5DsW9Kb_An7RjQLpSOzDzle-3Rs5Z8oL55w/p.png?fv_content=true&size_mode=5',
//         price: 5
//       },
//       {
//         id: 24,
//         name: 'Runtime Complexity',
//         imageUrl: 'https://previews.dropbox.com/p/thumb/AAzw7pNeJmy-Rx_6NC5NSJySAsY50VGL-X9oN2YDeLLlB0fyk-1uAB30xj_o83e-AUIOq0HjU8VfhhXtZSHPB-NKa0jPVd8Gsl41AmEM3w0rPtZtauBony-6VuvwfOzOI_lqxp1pC2syyRt7Yj6MpjV2Caxmk7YURiQUXZPWHVFkwohKL9WkN-9XY7iCtCI3dfbI1QSVA11v9eX2dtCN6QQlQ637bMHr3IcD1g2dp21xFyzkdiwESgFlJ97X6kRytMqmAtv29ej8jdXjNwBJjKryc-Xb50Ue2EzxtxpX52SM2Dn_If8dXCq4siQLGI7DiMAAR13QfvK3usU6OwVVIOHMdFu5-czyYKxgZQvpOLg-yA/p.png?fv_content=true&size_mode=5',
//         price: 5
//       },
//       {
//         id: 25,
//         name: 'Understanding Algorithms',
//         imageUrl: 'https://previews.dropbox.com/p/thumb/AAyKlHc0dG6rEk4S_ZjZT4CkU14-Fg2H8ZUEMhv36pCi6V2s89v5EnVJEQRHkTBF3OiH2RXKIwjMlUxwmJ3LBiuH43GX9C5x0_7Xcra2SpEiWCwqOZGLxBPCGNFBmgq_3vrB_IB_hybhEPQ4s00DYSjnKKvgfWHth9lEWA1us6DEjaq10l7lAGbos9mbDUFqROvbmifNb5Av96dEqh18px8ZuHMc22Xn2Bm4e_UKrSddh52pdAnSIWvk1CbjrodPDrXHieXCphgrgCuRQC1zgxydnw-oxdH6gwU-cQjEn556YuCFsvpV6arZdEFH560oXRZVBAihSaSx9Prkj0fggssurhh9aCzPMjT47ASDqA5AyA/p.png?fv_content=true&size_mode=5',
//         price: 80
//       },
//       {
//         id: 26,
//         name: 'Recursion',
//         imageUrl: 'https://previews.dropbox.com/p/thumb/AAziOjzhRJWCSt-V7J_SbqKbhMNpW0euixtBtyrBzb0c-eNMEqwKnla4ayQQOOEEtfj9PjLoPpJT_xnbyVR0KDMJyAxIr19LJGnpZSfHiouz1xhLRwczwtatH9jR-zsGzeiGBtC_5_T7suV3n7FqgrM2kkDclX3xPtiM8yepFNtNqtamYMQ50KDO1c6vZWOx0gDmbOCuhmcJNh9l1TPX-nkL9OA52qmfihHmXdV7RYfdh47ggf6fbCYtquVqFuiKy4kxJSey1ZojUtKww-lviR3C4Y_n7n87FWeFdGuTVNv9f6G9DLRw8ERyTdecunvnjiZkFzXg1OQjCLJuTTqwQLR-UFJEqFB4N7sbmRvxvIZ5Ww/p.png?fv_content=true&size_mode=5',
//         price: 80
//       }
    ]
  }
];

export default BLOG_DATA;