import React from 'react'
import Sidebar from "../Components/Sidebar"
import {
  Flex,
  Box,
  Text,
  Spacer
} from '@chakra-ui/react'

function Dashboard() {
  return (
    <Flex
      flexDir="row"
    >
      <Sidebar />
      <Flex
        h="95vh"
        marginTop="2.5vh"
        marginLeft="20px"
        boxShadow="10px 4px 12px 5px rgba(0, 0, 0, 0.05)"
        borderRadius="30px"
        w="100%"
        marginRight="50px"
        flexDir="column"
        p="50px"
      >
        <Text>Welcome, Admin</Text>
        
        <Flex
          flexDir="row"
          w="100%"
        >
         <Flex
          flexDir="column"
          w="70%"
         >
           <Flex
            flexDir="row"
           >
              <Box
                bg="#C7F2FF"
                w="320px"
                height="152px"
                p={4}
                borderRadius="50px 10px"
                mr="50px"
              >
              </Box>
              <Box
                bg="#FFE5EE"
                w="450px"
                height="152px"
                p={4}
                borderRadius="10px 50px"
              >

              </Box>
           </Flex>
            <Flex
              flexDir="row"
            >
              <Box>
                Sales Statistics
              </Box>
            </Flex>
         </Flex>
         <Flex
          w="30%"
          flexDir="column"
         >
          <div>Top Product</div>
          <div>Top Product</div>
         </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Dashboard
