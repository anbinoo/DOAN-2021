import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { formatEther } from "@ethersproject/units";
import Logo from "assets/images/logo.png";
import { ReactComponent as MetamaskIcon } from "assets/images/metamask.svg";
import { ReactComponent as WalletConnectIcon } from "assets/images/walletconnect.svg";
import { injected, walletconnect } from "connectors";
import { useWallet } from "connectors/hooks";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "styles/Layout.css";

export const Layout = ({ children }) => {
  const { account, isConnected, library } = useActiveWeb3React();
  const { connect } = useWallet();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ETHBalacne, setETHBalance] = useState();

  useEffect(() => {
    const getBalance = async () => {
      library
        .getBalance(account, "latest")
        .then((balance) =>
          setETHBalance(parseFloat(formatEther(balance.toString())).toFixed(4))
        );
    };

    isConnected && getBalance();
  }, [isConnected]);

  return (
    <Box minH="100vh" color="white">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Modal size="sm" isOpen={isOpen && !isConnected} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect Wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap="12">
              <VStack
                cursor="pointer"
                p="4"
                borderRadius="md"
                _hover={{
                  bg: "gray.300",
                }}
                onClick={() => connect(injected)}
              >
                <Box h="12">
                  <MetamaskIcon />
                </Box>
                <Text as="b" textAlign="center">
                  Metamask
                </Text>
              </VStack>

              <VStack
                cursor="pointer"
                p="4"
                borderRadius="md"
                _hover={{
                  bg: "gray.300",
                }}
                onClick={() => connect(walletconnect)}
              >
                <Box h="12">
                  <WalletConnectIcon />
                </Box>
                <Text as="b" textAlign="center">
                  WalletConnect
                </Text>
              </VStack>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack
        justify="center"
        bg="#2d333a"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
      >
        <HStack flex="1" maxW="80em" h="14" py="4" align="center">
          <Link to="/">
            <Box h="14">
              <Image
                h="100%"
                src="https://res.cloudinary.com/munumber2/image/upload/v1634747465/LOGO_ehr87k_qcxtqf.png"
                alt="logo"
              />
            </Box>
          </Link>

          <HStack flex="1" justify="flex-end" spacing="4">
            {isConnected ? (
              <HStack>
                <Link to="/recruiter">
                  <Button id="recruiter" colorScheme="teal">
                    Nh?? tuy???n d???ng
                  </Button>
                </Link>
                <Link to="/candidate">
                  <Button id="candidate" colorScheme="teal">
                    ???ng vi??n
                  </Button>
                </Link>
              </HStack>
            ) : (
              <Button id="connect" colorScheme="teal" onClick={onOpen}>
                K???t n???i v??
              </Button>
            )}
          </HStack>
        </HStack>
      </HStack>
      <HStack
        justify="center"
        minH="calc(100vh - 16.8em)"
        pt="24"
        pb="12"
        px="8"
        className="main-contanier"
        align="flex-start"
      >
        <Box flex="1" maxW="80em">
          {children}
        </Box>
      </HStack>

      <Box bg="gray.600" p="8">
        <Grid templateColumns="repeat(5,1fr)" gap="4em">
          <GridItem colSpan="2">
            <VStack align="stretch">
              <Box fontSize="2xl" fontWeight="semibold">
                C??ng ty c??? ph???n Vi???c L??m 24H
              </Box>
              <Box fontSize="sm">Gi???y ph??p ho???t ?????ng:S??? 4938/SL??TBXH-GP</Box>
              <Box fontSize="sm">
                ?????a ch???:T??a nh?? Si??u Vi???t , 23 Tr???n Cao V??n, Ph?????ng ??a Kao, Qu???n
                1, TP. H??? Ch?? Minh.
              </Box>
              <Box fontSize="sm">
                ??i???n tho???i:(028) 7108 2424|(024) 7308 2424
              </Box>
              <Box fontSize="sm">Email h??? tr??? NTV:ntv@vieclam24h.vn</Box>
              <Box fontSize="sm">
                Chi nh??nh:T???ng 12A, T??a nh?? Center Building, S??? 1 Nguy???n Huy
                T?????ng, Q.Thanh Xu??n, H?? N???i.
              </Box>
            </VStack>
          </GridItem>

          <Box>
            <Box pb="4" fontSize="xl" fontWeight="semibold">
              Th??ng tin
            </Box>
            <Box fontSize="sm" cursor="pointer">
              Gi???i thi???u
            </Box>
            <Box fontSize="sm" cursor="pointer">
              Th???a thu???n s??? d???ng
            </Box>
            <Box fontSize="sm" cursor="pointer">
              Ch??nh s??ch b???o m???t
            </Box>
          </Box>

          <VStack>
            <Image
              src="https://vieclam24h.vn/it/static/logo/bocongthuong.png"
              alt="image"
            />
            <Image
              src="https://vieclam24h.vn/it/static/logo/DMCA.png"
              alt="image"
            />
          </VStack>

          <GridItem>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.427088913944!2d106.697539!3d10.783963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16b5821dda85acef!2zQ8O0bmcgdHkgQ-G7lSBQaOG6p24gTmd14buTbiBOaMOibiBM4buxYyBTacOqdSBWaeG7h3Q!5e0!3m2!1sen!2sus!4v1638802341951!5m2!1sen!2sus"
              style={{
                width: "auto",
                height: "100%",
                style: "border:0;",
                allowfullscreen: "",
                loading: "lazy",
              }}
            ></iframe>
          </GridItem>
        </Grid>
        <Box textAlign="center" style={{ color: "white" }}>
          ?? {new Date().getFullYear()} Copyright
        </Box>
      </Box>
    </Box>
  );
};
