import React, {useState} from 'react'

function Showgame({
    images0,images1,images2,images3,images4,images5,images6,images7,images8,images9,images10,images11,images12,images13,})


 {
     const ranBody = images0[Math.floor(Math.random() * images0.length)];
     const ranFacial = images1[Math.floor(Math.random() * images1.length)];
     const ranHair = images2[Math.floor(Math.random() * images2.length)];
     const ranGalss= images3[Math.floor(Math.random() * images3.length)];
     const ranHats = images4[Math.floor(Math.random() * images4.length)];
     const ranEring = images5[Math.floor(Math.random() * images5.length)];
     const ranNeck = images6[Math.floor(Math.random() * images6.length)];
     const ranLayer1 = images7[Math.floor(Math.random() * images7.length)];
     const ranLayer2 = images8[Math.floor(Math.random() * images8.length)];
     const ranLayer3 = images9[Math.floor(Math.random() * images9.length)];
     const ranEyeBro = images10[Math.floor(Math.random() * images10.length)];
     const ranEyes = images11[Math.floor(Math.random() * images11.length)];
     const ranMouths = images12[Math.floor(Math.random() * images12.length)];
     const ranNores = images13[Math.floor(Math.random() * images13.length)];


     const [listRandom, setListRandom] = useState([
        ranBody,  ranFacial,  ranGalss, ranHair, ranHats,  ranEring, ranNeck, ranLayer1,
        ranLayer2, ranLayer3, ranEyeBro,  ranEyes, ranMouths, ranNores,





     ]);
     const click = () => {
        const ranBody = images0[Math.floor(Math.random() * images0.length)];
        const ranFacial = images1[Math.floor(Math.random() * images1.length)];
        const ranHair = images2[Math.floor(Math.random() * images2.length)];
        const ranGalss= images3[Math.floor(Math.random() * images3.length)];
        const ranHats = images4[Math.floor(Math.random() * images4.length)];
        const ranEring = images5[Math.floor(Math.random() * images5.length)];
        const ranNeck = images6[Math.floor(Math.random() * images6.length)];
        const ranLayer1 = images7[Math.floor(Math.random() * images7.length)];
        const ranLayer2 = images8[Math.floor(Math.random() * images8.length)];
        const ranLayer3 = images9[Math.floor(Math.random() * images9.length)];
        const ranEyeBro = images10[Math.floor(Math.random() * images10.length)];
        const ranEyes = images11[Math.floor(Math.random() * images11.length)];
        const ranMouths = images12[Math.floor(Math.random() * images12.length)];
        const ranNores = images13[Math.floor(Math.random() * images13.length)];
        setListRandom(() => {
     


     return [
        ranBody,  ranFacial,  ranGalss, ranHair, ranHats,  ranEring, ranNeck, ranLayer1,
        ranLayer2, ranLayer3, ranEyeBro,  ranEyes, ranMouths, ranNores,

     ]
        })};
    return(
<>
        <div className="showgame">
        <div className="avatar-wrapper">
        <div className="avatar">
            {listRandom.map((listRandom) =>{
                return <img src={listRandom}></img>
            } )}
        </div>
        <div className="text-center"><button onClick={click} className="button">Randomize!</button></div>
        </div> 
        </div>

</>
    )
 
}

export default Showgame