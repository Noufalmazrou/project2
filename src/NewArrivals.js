import React, { Component } from 'react'
import { Image} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import InfiniteCarousel from 'react-leaf-carousel';
export default class NewArrivals extends Component{
render() {

return(
    <InfiniteCarousel 
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={.5}
      sideSize={.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
   className= "slide">
      <div>
        <img className='pic'
          alt=''
          src='https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://irp-cdn.multiscreensite.com/853b7cbf/dms3rep/multi/mobile/the-makeup-mirror-professional-makeup-product-546x300.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://www.dizzybrunette3.com/wp-content/uploads/2019/05/IMG_8938-1440x2160.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://uploads.dailyvanity.sg/wp-content/uploads/2018/01/gino-mccray-trio-cheek-palette.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw136e6985/products/L6210215/large/L6210215.JPG'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://cdn11.bigcommerce.com/s-fpn7tb49nr/images/stencil/500x659/products/531/2533/pro-palette-boho__92539.1531121504.jpg?c=2'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://thumbs.dreamstime.com/b/makeup-cosmetics-tools-background-beauty-products-facial-package-lipstick-eyeshadow-white-bac-top-view-copy-space-132830726.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://beautypalast.ch/images/products/13663_2_NYX_Professional_Makeup_Looser_Lidschatten_-_Foil_Play_Cream_Pigment.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://cdn-img.prettylittlething.com/0/7/6/4/0764dbc53e2ba3d1f1a2b9168f3c0ec7f2744dc6_cmd1364_2.jpg?imwidth=300'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://ik.imagekit.io/91ubcvvnh3k/tr:w-500/https://s3.thcdn.com/productimg/600/600/11530444-1284512512422587.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://cdn2.stylecraze.com/wp-content/uploads/2013/06/MAC-Lipsticks.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://www.farmers.co.nz/INTERSHOP/static/WFS/Farmers-Shop-Site/-/Farmers-Shop/en_NZ/product/63/93/741/1/6393741_00_W220_H287.jpg?lastmodified=201810082204033'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://media1.popsugar-assets.com/files/thumbor/lpZqp7uBQi3D4WOLL-mxRWSBY3I/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/11/04/834/n/1922153/a23d147158f9a48b_netimgNxL2fq/i/NYX-Professional-Makeup-8-Pc-Love-Lust-Disco-Soft-Matte-Lip-Cream-Vault-Set.webp'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6Oi5Nv3Y3YSdo2_ykxy0FdUzVfQvZI2fLDo3KQiC0QSuUsLvP'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://cdn2-www.thefashionspot.com/assets/uploads/2017/01/best-makeup-products-l.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://i.pinimg.com/originals/17/aa/a7/17aaa7728e1f351c982d04baa5770878.jpg'
        />
      </div>
      <div>
        <img className='pic'
          alt=''
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtqgq1ga46THPIe3R8yErKPr2-rj4r81IQBYR7zGo5odsdjvft'
        />
      </div>
    </InfiniteCarousel>
)
    }
}