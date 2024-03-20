import React from "react"
import Image from "next/image";
import Card from '../../Components/card'
import dataBase from '../../Components/data'





export default function games() {

    return(
          <>
        <br />
        <br />
        <br />n
                      <div className='flex flex-row'>
                                  <a href={dataBase[0].url}><Card 
                title={dataBase[0].name}
                body={dataBase[0].body}
                image={dataBase[0].image}
                 />
                 </a>
                 <a href={dataBase[1].url}>
                  <Card 
                title={dataBase[1].name}
                body={dataBase[1].body}
                image={dataBase[1].image}
                 />
                 </a>
                  <Card 
                title={dataBase[2].name}
                body={dataBase[2].body}
                image={dataBase[2].image}
                 />
                      <Card 
                title={dataBase[3].name}
                body={dataBase[3].body}
                image={dataBase[3].image}
                 />
                 </div>
                  
        </>
    )
}