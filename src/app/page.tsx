"use client"

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Post from './comps/post'
import Posts from './comps/posts'
import { useEffect, useState } from 'react'


import "./styles/todo.css"
export default function Home() {
  let [posts_v, posts_c] = useState<Array<{t: string, d: string}>>([{t: "title", d: "asdf"}])
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

      <Box id="push" onClick={() => {
        let a = [...posts_v]
        a.push({t: "title", d: "asdf"})
        posts_c(a)
      }}

      // position={'fixed'}
      // bottom="10px"
      // right="10px"
      // borderRadius="100%"
      // width="40px"
      // height="40px"
      // bgColor="#ddd"

      
      ><img src="./add.svg" alt="+" width={"100%"}/></Box>
  
    </>
  )
}
