"use client"

import { Box, Flex, Text, Center } from '@chakra-ui/react'
import Image from 'next/image'
import Post from './comps/post'
import Posts from './comps/posts'
import { useEffect, useRef, useState } from 'react'
import Head from './comps/head'
import "./styles/todo.css"
import AddModal from './comps/modals'





export default function Home() {
  let [posts_v, posts_c] = useState<Array<{t: string|undefined, d: string|undefined}>>([{t: "title", d: "asdf"}])
  let [modal_v, modal_c] = useState<boolean>(false)
  let [height_v, height_c] = useState<number>(0)
  let [title, des] = [ useRef<HTMLInputElement>(null),  useRef<HTMLInputElement>(null)]
  useEffect(() => {
    console.log("reload")
    height_c(window.outerHeight)
  })
  return (
    <>
      <Head></Head>
      <Flex
        alignItems     = "center"
        justifyContent = "center"
        flexWrap       = "wrap"
        gap            = "50px"
      >
        <Posts arr={posts_v}></Posts>
      </Flex>
      
      <AddModal
        modal_c={modal_c}
        modal_v={modal_v}
    
        height={height_v}

        posts_c={posts_c}
        posts_v={posts_v}

        title={title}
        des={des}/>
      

      <Box id="push" onClick={() => {
        modal_c(!modal_v)
      }}
      
      ><img src="./add.svg" alt="+" width={"100%"}/></Box>


    </>
  )
}
