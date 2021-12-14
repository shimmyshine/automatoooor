import { Contracts } from "helpers/Interfaces";

export const contracts: Contracts = {
  tokens: {
    WAGMI: "0x0dc78c79b4eb080ead5c1d16559225a46b580694",
    sWAGMI: "0xf38593388079f7f5130d605e38abf6090d981ec2",
    wsWAGMI: "0xbb948620fa9cd554ef9a331b13edea9b181f9d45",
  },
  WAGMI: {
    StakingDistributor: "0x159e0d93d387e18329a4dacd39dbecc587f78589",
    BondDepository: "0xa2473b5b85a9ebec65679d279979222f28cd9467",
    Staking: "0x95066025af40f7f7832f61422802cd1e13c23753",
    StakingHelper: "0xec6c0b83410c732ac41ee8391e35a4fcb0dcc799",
    Treasury: "0x1a9be7d6f94d3ba8c37568e08d8d8780aad128e6",
    DAO: "0x21f0826c5dd25aecf4df9102442a9fd4f8b73e5b",
    Bonds: {
      DAI: "0xa2473b5b85a9ebec65679d279979222f28cd9467",
      DAI_WAGMI: "0xecdb54197b7a7f62a8fa3a04850347c4c99ab7e1",
      UST: "0xf43911c859532e38c969ee1b59eeca3de5630fe3",
      UST_WAGMI: "0x17adf3fc3319afc79bf7d7dd49c34e59a30d410f",
      USDC: "0x202c598E93F69dbe3a5e5706DfB85bdc598bb16F",
      BUSD: "0x5fa3eC803Ed6EeE64A52C101F4FA96dd1B093ac7",
      ONE_WAGMI: "0x88eD43604976a65F88EE5be38FC743F7b955AB1e",
    },
  },
};
