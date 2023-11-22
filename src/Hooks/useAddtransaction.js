import React from 'react'
import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import { db } from '../Config/firebase.config';

import { useGetUserInfo } from './useGetUserInfo';

export default function useAddtransaction() {
    let transactioncollectionref = collection(db,"transaction");

    const {userID} = useGetUserInfo();


    // collection(db,collectionname)
    


    const addtransaction = async({description,transactionAmount,transactionType})=>{
       


        // addDoc(collectionref,data)

        await addDoc(transactioncollectionref,
            {
                userID:userID,
                description:description,
                transactionAmount:transactionAmount,
                transactionType:transactionType,
                createdAt:serverTimestamp(),

            })
    }
  return {addtransaction}
}