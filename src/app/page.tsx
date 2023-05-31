"use client"

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Post from './comps/post'
import Posts from './comps/posts'
import { useEffect, useRef, useState } from 'react'


import "./styles/todo.css"
export default function Home() {
  let [posts_v, posts_c] = useState<Array<{t: string|undefined, d: string|undefined}>>([{t: "title", d: "asdf"}])
  let [modal_v, modal_c] = useState<boolean>(false)
  let [title, des] = [ useRef<HTMLInputElement>(null),  useRef<HTMLInputElement>(null)]
  useEffect(() => {
    console.log("reload")
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
        width="100%"
        bgColor=""
        height={`${window.outerHeight}px`}
        display={modal_v? "block": "none"}
      >
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          
          let a = [...posts_v]
          a.push({t: title.current?.value, d: des.current?.value})
          posts_c(a)
        }}>
          <input type="text" id="title" ref={title}/>
          <br />
          <input type="text" id="des"  ref={des}/>
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
