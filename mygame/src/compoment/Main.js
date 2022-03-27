import React from 'react'
import Chater from './Chater';
 import Showgame from './Showgame';


function Main() {
    function allimages (r){
        return r.keys().map(r);
    }
    const images0 = allimages(
        require.context(
          "../character/body",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images1 = allimages(
        require.context(
          "../character/accessories/earrings",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images2 = allimages(
        require.context(
          "../character/accessories/glasses",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images3 = allimages(
        require.context(
          "../character/accessories/hats",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images4 = allimages(
        require.context(
          "../character/accessories/neckwear",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images5 = allimages(
        require.context(
          "../character/clothes/layer_1",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images6 = allimages(
        require.context(
          "../character/clothes/layer_2",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images7 = allimages(
        require.context(
          "../character/clothes/layer_3",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images8 = allimages(
        require.context(
          "../character/eyebrows",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images9 = allimages(
        require.context(
          "../character/eyes",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images10 = allimages(
        require.context(
          "../character/facial_hair",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images11 = allimages(
        require.context(
          "../character/hair",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
      const images12 = allimages(
        require.context(
          "../character/mouths",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );const images13 = allimages(
        require.context(
          "../character/noses",
          false,
          /\.(png|jpe?g|svg)$/
        )
      );
  return (
    <>
    <div className="main">
        <Showgame
        images0 = {images0}
        images1 = {images1}
        images2 = {images2}
        images3 = {images3}
        images4 = {images4}
        images5 = {images5}
        images6 = {images6}
        images7 = {images7}
        images8 = {images8}
        images9 = {images9}
        images10 = {images10}
        images11 = {images11}
        images12 = {images12}
        images13 = {images13}
        />
        <Chater
        images0 = {images0}
        images1 = {images1}
        images2 = {images2}
        images3 = {images3}
        images4 = {images4}
        images5 = {images5}
        images6 = {images6}
        images7 = {images7}
        images8 = {images8}
        images9 = {images9}
        images10 = {images10}
        images11 = {images11}
        images12 = {images12}
        images13 = {images13}
        />
    </div>
    
    
    </>
  )
}


export default Main