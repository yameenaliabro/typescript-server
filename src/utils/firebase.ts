import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { credential } from 'firebase-admin'
// @ts-ignore
import * as  ServiceAccount from "../../service-account.json"

export const firebaseApp = initializeApp({
    projectId: ServiceAccount.project_id,
    credential: credential.cert({
        privateKey: ServiceAccount.private_key,
        projectId: ServiceAccount.project_id,
        clientEmail: ServiceAccount.client_email
    })
});
export const firebaseAuth = getAuth(firebaseApp);