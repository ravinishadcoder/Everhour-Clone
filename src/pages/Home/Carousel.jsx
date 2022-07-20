import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import styles from './home.module.css'
const Carousel = () => {
  return (
    <Box>
    <Box className={styles.estimate}>
        <Text>
        Estimate tasks, set budgets, build   
        </Text>
        <Text>reports & track time. All inside your</Text>
        <Text>project management tool</Text>
    </Box>
    </Box>
  )
}

export default Carousel