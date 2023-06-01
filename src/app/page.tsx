"use client"

import { Box, Flex, Text, Center } from '@chakra-ui/react'
import Image from 'next/image'
import Post from './comps/post'
import Posts from './comps/posts'
import { useEffect, useRef, useState } from 'react'


import "./styles/todo.css"
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
  
      <Flex
        alignItems     = "center"
        justifyContent = "center"
        flexWrap       = "wrap"
        gap            = "50px"
      >
        <Posts arr={posts_v}></Posts>
      </Flex>
      <Box
        position="fixed"
        w="100%"
        h={`${height_v}px`}
        display={modal_v? "flex": "none"}
        alignItems="center"
        justifyContent="center"
        
        top="0"
        left="0"
        zIndex="5"
        
      >
        <Box
        position="absolute"
        zIndex="-10" 
        w="100%"
        h="100%"
        transition="10s"
        backdropFilter={modal_v? "blur(10px)": "blur(0)"}
        bgColor={modal_v? "#00000050": "00000000"}
        onClick={() => {modal_c(!modal_v)}}
        ></Box>
        <form action="" id="post-add" onSubmit={(e) => {
          e.preventDefault()
          modal_c(!modal_v)
          let a = [...posts_v]
          a.push({t: title.current?.value, d: des.current?.value})
          posts_c(a)
        }}>
          <Center
            fontSize="30px"
            fontWeight="600"
            pb="30px"
          >add</Center>
          <input type="text" id="title" ref={title} required/>
          <br />
          <label htmlFor="title">title</label>
          
          <br />
          <br />

          <input type="text" id="des"  ref={des} required/>
          <br />
          <label htmlFor="des">description</label>
          
          <br />
          <br />

          <input type="submit" value="submit" />
        </form>
      </Box>

      <Box id="push" onClick={() => {
        modal_c(!modal_v)
      }}
      
      ><img src="./add.svg" alt="+" width={"100%"}/></Box>


    </>
  )
}
