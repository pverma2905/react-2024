import { Box, Container } from '@mui/material'
import React from 'react'
import Sidebar from '../sidebar'

const Subscription = () => {
    return (
        // <Box sx={{display:'flex',marginTop:'100px'}}>
        //     <div>
        //         <Sidebar/>
        //         <Container fixed>
        //             <h1>Dashboard</h1>
        //             <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</h4>
        //         </Container>   
        //     </div>
        // </Box>

        <Box sx={{display:'flex', marginTop:'100px'}}>
        <Sidebar/>
        <Container fixed>
            <h1>Subscription</h1>
              <p>a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

              </p>
          </Container>
      </Box>
    )
}

export default Subscription