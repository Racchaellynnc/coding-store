import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'JavaScript Tutorials      ',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'Vue Tutorials',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'React Tutorials',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Programming T-Shirts',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAmIGkGcCbbCNBOdqz2UmlohIl8EUK0s4l9ZnFK_JUbAh7uiIr0gvBFHWHPgza0_FgozqfaA6giT7bew1Pa6tNO1s6_vlmhsFMdfyuXwJNPe75rIOJ-hHzaMOKyTioNyXlZv2MAHosXbfvL4eDnj73t-3mMOTRTsG8XIEtYo4K0H5pSZL1GZsNKFFz2q95qbIaWS-2TcbOIET-i51VZCS5-97ndWppAZi9SriphyZ0M1xqQ9twQjzxL4uE2BzClcT7YuqZvkoPo6Qlw55BS0avEh25ngnMwKnb3R2vlCj9KAhJXy6dHNH9mNEVayCZ0oTS3TXRyeLoVaUITKyg7_-BWS/p.png?fv_content=true&size_mode=5',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Full-Stack Courses',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;