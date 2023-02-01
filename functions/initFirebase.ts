import { cert, initializeApp } from 'firebase-admin/app'

const credPath =
    process.env['FIREBASE_MYAPP_CREDENTIALS'] ||
    process.env['GOOGLE_APPLICATION_CREDENTIALS']

if (!credPath) {
    console.error('Error: FIREBASE_MYAPP_CREDENTIALS env is not set')
    process.exit(1)
}

initializeApp({ credential: cert(credPath) })