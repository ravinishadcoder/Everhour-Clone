import styles from "./home.module.css";
import billing from "../../assests/billing.png";
import expenses from "../../assests/expenses.png";
import file from "../../assests/file.png";
import invoice from "../../assests/invoicing.png";
import visual from "../../assests/visual.png";
import timetrack from "../../assests/timetrack.png";
import ambry from "../../assests/Ambry.png";
import box from "../../assests/box.png";
import foundation from "../../assests/foundation.png";
import nelson from "../../assests/nelson.png";
import next from "../../assests/next.png";
import play from "../../assests/play.png";
import pub from "../../assests/public.png";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import UseCase from "./UseCase";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Box>
        <Box className={styles.topHeading}>
          <Text lineHeight={1.5} fontWeight={500} fontSize={"45px"}>
            Powerful time tracking software with hassle-free integrations
          </Text>
        </Box>
        <Box className={styles.subTitle}>
          <HStack>
            <Text>
              Accurate time tracker for budgeting, client invoicing and painless
              payroll.
              <br />
              <HStack>
                <p className={styles.perfect}> Perfect for</p>
                <HStack className={styles.asana}>
                  <Text>Asana</Text>
                  <Text>Terello</Text>
                  <Text>Basecamp</Text>
                  <Text>Jira</Text>
                  <Text>ClickUp</Text>
                  <Text>GitHub</Text>
                </HStack>
              </HStack>
            </Text>
          </HStack>
        </Box>
        <Flex className={styles.buttonSub}>
          <Button
            background={"#57bb71"}
            size="lg"
            width={"150px"}
            color="white"
            _hover={{ bg: "#57bb71" }}
            borderColor="#ccd0d5"
          >
            Try free
          </Button>
          <Button variant="outline" size="lg" width={"150px"} color="#57bb71">
            Book a demo
          </Button>
        </Flex>
        <Box display="flex" justifyContent="center" mt="50px">
          <img
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/home-narrow-v2.webp"
            alt=""
          />
        </Box>
        <Box>
          <UseCase />
        </Box>
        <Box mt={"100px"}>
          <Text color={'#7c7c7c'}>
            Over 3,500 businesses from all over the world use Everhour daily
          </Text>
          <Flex justifyContent={'center'} gap='30px' mt='20px'>
            <img src={ambry} width="123px" height="24px" />
            <img src={box} width="109px" height="23px" />
            <img src={pub} width="31px" height="30px" />
            <img src={nelson} width="109px" height="12px" />
            <img src={foundation} width="123px" height="22px" />
            <img src={next} width="86px" height="17px" />
            <img src={play} width="110px" height="11px" />
          </Flex>
        </Box>
        <Box mt={'100px'}>
            <Carousel/>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
