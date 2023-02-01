import { getFirestore } from 'firebase-admin/firestore'
import './initFirebase' //Initialize Firebase App

const db = getFirestore()
const booksCollection = db.collection('/books')

/** booksコレクションに一つのドキュメントを追加 */
async function addBook(id: string, title: string) {
    await booksCollection.doc(id).set({ title })
}

/** booksコレクションにサンプルデータを追加 */
async function addSampleBooks() {
    await Promise.all([
        addBook('id-001', 'Title-001'),
        addBook('id-002', 'Title-002'),
        addBook('id-003', 'Title-003'),
    ])
}

/** boksコレクションのすべてのドキュメントを取得して表示 */
async function dumpSampleBooks() {
    const snapshot = await booksCollection.get()
    snapshot.docs.forEach((doc) => {
        const book = doc.data()
        console.dir(book)
    })
}

/** エントリーポイント */
void (async function main() {
    await addSampleBooks()
    await dumpSampleBooks()
})()