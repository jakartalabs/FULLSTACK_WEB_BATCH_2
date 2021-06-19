import React from 'react'
import { Box, Input, Text, Center, Button } from "@chakra-ui/react"
function Login() {
  return (
    <>
      <Center w="500px" m="auto">
        <Box
          mt="10"
          w="100%"
          h="400"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="2"
          px="8"
        >
          <Center>
            <Text fontSize="3xl" mt="5">Admin Login</Text>
          </Center>
          <Text fontSize="md" mt="10" mb="2">Username</Text>
          <Input placeholder="Username " />
          <Text fontSize="md" mt="6" mb="2">Password</Text>
          <Input placeholder="Password " />
          <Button w="100%" mt="4" colorScheme="blue">LOGIN</Button>
        </Box>
      </Center>
    </>
  )
}

export default Login
