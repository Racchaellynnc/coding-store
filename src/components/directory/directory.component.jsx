import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Learn about JavaScript',
          imageUrl: '',
          id: 1,
          linkUrl: 'blog'
        },
        {
          title: 'Sign In',
          imageUrl: '',
          id: 2,
          linkUrl: 'signin'
        },
        {
          title: 'Learn More About Us',
          imageUrl: '',
          id: 3,
          linkUrl: 'about'
        },
        {
          title: 'Shop with Us',
          imageUrl: '',
          size: 'large',
          id: 4,
          linkUrl: 'shop'
        },
        {
          title: 'Read our Blog Posts',
          imageUrl: '',
          size: 'large',
          id: 5,
          linkUrl: 'blog'
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