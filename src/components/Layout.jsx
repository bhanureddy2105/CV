import { Footer } from './Footer'
import { Header } from './Header'
import { HomePage } from './HomePage'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from 'react'



export function Layout() {
  const [docs, setDocs] = useState([])
  const getExperience = async () => {
    await getDocs(collection(db, "experience"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setDocs(newData);
        console.log(newData);
      })
  }

  useEffect(() => {
    getExperience()
  }, []);

  return (
    <div className='flex h-full bg-zinc-50 dark:bg-black'>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <HomePage experience={docs} />
        <Footer />
      </div>
    </div>
  )
}
