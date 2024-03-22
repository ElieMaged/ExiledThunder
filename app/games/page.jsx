'use client'
import React, {useEffect, useState} from "react"
import Image from "next/image";
import Card from '../../components/card'
import dataBase from '../../components/data'
import Loading from '../Loading'
import Link from 'next/link';






export default function Games() {
const [load, setLoad] = React.useState(false)
React.useEffect(() => {
  setLoad(true)
},[])
if(!load) {
  return null;
}
else{
    return(
          <>
         
           
        <br />
        <br />
        <br />
                      <span className='flex flex-row'>
                                  <Link passHref href={dataBase[0].url}><Card 
                title={dataBase[0].name}
                body={dataBase[0].body}
                image={dataBase[0].image}
                 />
                 </Link>
                 <Link passHref  href={dataBase[1].url}>
                  <Card 
                title={dataBase[1].name}
                body={dataBase[1].body}
                image={dataBase[1].image}
                 />
                 </Link>
                  <Card passHref
                title={dataBase[2].name}
                body={dataBase[2].body}
                image={dataBase[2].image}
                 />
                      <Card passHref
                title={dataBase[3].name}
                body={dataBase[3].body}
                image={dataBase[3].image}
                 />
                 </span>
               
                
                 
        </>
    )
}}