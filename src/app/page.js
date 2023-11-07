import styles from './page.module.css'
import SearchInput from '@/components/SearchInput'
import DiscountBox from "@/components/DiscountBox";
import Category from "@/components/Category";

export default function Home() {
  return (
   <div className={styles.container}>
       <div className={styles.navigation}>
           <span>Hello, Dan</span>
           <SearchInput/>
       </div>
       <DiscountBox/>
       <Category/>
   </div>
  )
}
