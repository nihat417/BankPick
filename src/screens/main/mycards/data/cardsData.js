import React from 'react';
import CreditCardVisa from '../../components/creditcardVisa';
import CreditCardMaster from '../../components/creditCardMaster';

const cardsData = [
  { id: '1', type: 'visa', component: <CreditCardVisa /> },
  { id: '2', type: 'master', component: <CreditCardMaster /> },
  { id: '3', type: 'master', component: <CreditCardMaster /> },
  { id: '4', type: 'visa', component: <CreditCardVisa /> },
];


export default cardsData;
