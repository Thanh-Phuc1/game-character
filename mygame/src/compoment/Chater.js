import React from 'react'

function Chater( {
    images0, 
    images1,
    images2,
    images3,
    images4,
    images5,
    images6,
    images7,
    images8,
    images9,
    images10,
    images11, 
    images12,
    images13,
})
{
    const resdue = [
        { name : "Body", images : images0 },
        { name : "Facial Hair", images : images10 },
        { name : "Hair", images : images11 },
        { name : "Glasses", images : images2 },
        { name : "Hats", images : images3 },
        { name : "Earings", images : images1 },
        { name : "Neckwear", images : images4 },
        { name : "Layer 1", images : images5 },
        { name : "Layer 2 ", images : images6 },
        { name : "Layer 3", images : images7},
        { name : "Eyes Brows", images : images8 },
        { name : "Eyes", images : images9 },
        { name : "Mouths", images : images12 },
        { name : "Noses", images : images13 },
    ]


  return (
      <>
    <div className="selectimage">
     {resdue.map((element) => {
      return (
          <div className= "list-section"> 
          <h2>{element.name}</h2>
          <div className="list">
              <div className="square">
                  {element.images.map((task) => {
                      return <img className="img-center"  alt height="60px" key={task} src={task} >
                      </img>
                  }
                  )}
              </div>
          </div>
          </div>
      );
     })}
    </div>
    </>
  )

  }

export default Chater

