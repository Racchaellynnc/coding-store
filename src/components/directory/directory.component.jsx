import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import '../../assets/hats.png';
import '../../assets/jackets.png';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAnj63rq5Eiowav-k7-JO1zZkqZv8ptrUXkE-qGZx7df8-AAqsUELQWxaT0dUsC1zgpRdGvbdxBLE3RSGiUzrVB0r7wLrxsgOkUFK4AMFt3gDG6cZZ8vynpPuy8w5eTtLNqSt4XtN8GVGVIBKA5yuEdj7VyIMnvKkweuOUodOkddmXDG20di77Vh1YMzuut5Y19-SLAV8RWETS1PaftsA-JncoUyKhObJ26QEfXVfc6g92PNfc677upPJktLkvbHnpB3ranRcth99nGwWTWjH3E_ryCEVMgUBi2dxDcSq_XdgRPSR3gzOEcci0mf_nUr_1bxU8vUqqZb8pf1g0MPKz-rdCk2cM-kqtjG3OSNjSOQ5Q/p.png?fv_content=true&size_mode=5',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAmRw1rUorxdzOjSQcmG7OIEgQGGWeMBwrSCWmdZ-sIItuWoMiV7TICuYSwOcKEAyy_LODVhTzEW925CR5s8lFc306pYV4sDufJNcy0aOgME2ylraWWsQs3Econ0cXpw3Wn918niIdlorpwHldYf4MZRNkBk6nZHLtc4aPUIfTSASRxSI0MwS8Ftd8ZnMadTlksLD9Ku4zFV06cwpJfdOex9kcGwepzWQWkHALdCXTYCqE5Zf2FxYlw4qaTcNcQdO3teOhP-_ELmVKAmcdV3Vnbt6_2Xtz_JCjcbcxgVdqdivm-_n-32dRluFjXxymrgj4ZYBjDVCtb0PJAUKu7SuBVRlKANZ9n4jHa-MK9M4ogYKA/p.png?fv_content=true&size_mode=5',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAlOl_Dr2ZX6Emvx9fIJhYEAiSiA7wVDC-UWPFcuY2g8pMp8EZ_1Adaw55Vh1oSU0auKP19sEKUhQhEVKaS-xOucsqMG3BayUj-UWG0IuBzjMOxFfmrdLgVKvPIdM0Mcp9GT51UcxGXKkD1GebZ0S1cUMnqnRyn9IXByKriJFZNh7ZndnQDo3XknEHgZXRCEyrAod2QP8-e0N1tfy3tzcRSem2bEQMvUXvN2M9wPbOKfONPcpOdPpbV7IXzOv6MJ0PAl-AuPnPIJu88p-rZEguiXrG8iLlWEY-1pZDNtd00JQ7ANAqKHPOtkLTLZu6s1EMgC4tO8AYDhinfSOmq_ukpiAzcIHUHEEHCa-5OWV-HsjA/p.png?fv_content=true&size_mode=5',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAmUtj0Zwk8Y8CXrcwpry3lztS3WmWy3va7mnYRcZAVxabqnVNADqlOqEf0aedvMnn6MtEoFOk8ER6sttVeO45KG7yq8EnT3C-AdFeWDQZztpqe_Ho8C69RIjgbUWP72_lGA2XvAU1sMGvH21ipi4gl5bA0SuTMQx6oEgg8F5CbqtbYtU4d3_MJSJwXpS41ZggZfd3pktvEyz8L5VCT5SVaAGEH2GSKqEj7SV0r8ZCX4041l7vW-ux9puehPI6Y7NdW52tXRMvQeQ21cKDjsezVHs22aFycgtitR3tHLBcsegDxl64K8uEask8U19tzExWCw83hfqnggQHBEWO1n7MV8/p.png?fv_content=true&size_mode=5',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://previews.dropbox.com/p/thumb/AAkBJrMqV0ZOzhb3hcKtnmJpOUzHircy6ej9giL0USfBENhGpB4PZ2uVikfbd9LspueBmBoNLCkkyQIqhjE4t9ChT55fAgwEbnzIJ30mEnGCeGRI3Mv8vLAXwlJ2df2qlVcxviZbqA5cHAToXSpRL4YIqgw9SvoPLQJmILSqg4ETQIdOBmupu20ng9IrCfIZ8a5PJr7rCCCTgg8cQgfxA-GCQMeWkjUyCEo--apr6lFwi-WsI5XfROlfnie9db54oCpT0L_pKyceNwc9W7_izm3oyhNKmd3TFTgXyR_cP8QDNeRMV-mMGoDhLYa6vJmaXAdKQKYbaRJl4e4iM8Nlw8m4/p.png?fv_content=true&size_mode=5',
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