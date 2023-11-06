import styles from './page.module.css'
import SearchInput from '@/components/SearchInput'
import DiscountBox from "@/components/DiscountBox";

export default function Home() {
  return (
   <main className={styles.container}>
       <div className={styles.navigation}>
           <span>Hello, Dan</span>
           <SearchInput/>
       </div>
       <DiscountBox/>
   </main>
  )
}
