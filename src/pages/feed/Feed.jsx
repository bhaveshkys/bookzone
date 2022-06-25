import React from 'react'
import { useState, useEffect } from 'react'
import List from '../../components/card/List'
import "./feed.css"
import { Box } from '@mui/material'
import Popup from "../../components/form/Popup"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Filter from '../../components/filter/Filter'
import { returnFilteredBooks , notReturnUserBooks } from '../../firebase_func'
const Feed = ({user}) =>  {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    const[sucess,setSucess]=useState(false)
    const [book,setBook]=useState([])
    const[Sort,setSort]=useState('')
    const[genreFilter,setGenreFilter]=useState()
    const[priceFilter,setPriceFilter]=useState([0,1000])
    const[lessThanPrice,setLessThanPrice]=useState(1000)
    const[moreThanPrice,setMoreThanPrice]=useState(0)
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      
      setSucess(false);
      console.log("sucess value in close",sucess)
    };
    
    useEffect(()=>{
        const getBook=async()=>{
            /* const data =await getDocs(collection(db,"books")); */
            /* console.log(data.docs.map((book)=>({...book.data(), id: book.id}))) */
          
            const data=await notReturnUserBooks(user)
            setBook(data.docs.map((book)=>({...book.data(), id: book.id})))
            console.log("useeffect running")
            
        };
        getBook()
    },[user])
    const handleReset=()=>{
      window.location.reload(false);   
      }
      const splitPrice=(e)=>{
          setPriceFilter(e.target.value)
          setLessThanPrice(priceFilter[1])
          setMoreThanPrice(priceFilter[0])
      }
      const showFilterValue=(value)=>{
          if (value>1000) {
             return `>1000`
          }else {
             return `<${value}`
          } 
      }
      const handleFilterClick=async()=>{
        const result= await returnFilteredBooks(genreFilter,lessThanPrice,moreThanPrice)
        setBook(result)
      }
      const handleSortClick=()=>{
        const copy = [...book]
        if (Sort==="price") {
          copy.sort(function(a,b){ return a.price - b.price})
          setBook(copy)
        }
        if (Sort==="price_reverse") {
          copy.sort(function(a,b){ return b.price - a.price})
          setBook(copy)
        }
        if (Sort==="name") {
          copy.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
          setBook(copy)
        }
        if (Sort==="name_reverse") {
          copy.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();
        
            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        })
          setBook(copy)
        }
      }
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridTemplateRows:"repeat(4, 1fr)"}} >
      <div style={{gridArea:"1 / 1 / 5 / 5"}} >
    <div style={{ width: '100%' }}>
    <Box
   sx={{
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap:"wrap",
    p: 1,
    m: 1,
    borderRadius: 1,

  }}
  >
    {!book ? (
                <>
                    loading
                </>
            ):  (
                book?.map((content)=>
                    <List user={user} key={content.DocId} content={content}/>
                )
            )
           }
  </Box> 
  <Popup user={user} sucess={setSucess}/>
  </div>
  <Snackbar sx={{ height: "100%" ,alignItems:"end" ,top:-20 }} open={sucess} autoHideDuration={6000} onClose={handleClose}  >
        <Alert  onClose={handleClose} severity="success" sx={{zIndex:-1 ,width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      </div>
    <div style={{gridArea:"1 / 5 / 5 / 6"}} ><Filter setGenreFilter={setGenreFilter} priceFilter={priceFilter} handleReset={handleReset} splitPrice={splitPrice} showFilterValue={showFilterValue} handleFilterClick={handleFilterClick} setSort={setSort}  handleSortClick={handleSortClick}  /></div>
  </div>
  )
}
/* export default function FlexDirection() {
  return (
    <div style={{ width: '100%' }}>
     
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,
          
          borderRadius: 1,
        }}
      >
        <List/>
        <List/>
        <List/>
      </Box>
     
    </div>
  );
} */
export default Feed