import React,{useEffect} from 'react';
import {Pagination , PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from '../actions/action';

import styles from './styles'




const Paginate = ({page}) => {
    const classes = styles();
    const dispatch = useDispatch();
    const {numberOfPages} = useSelector((state) => state.postReducer);

    useEffect(() => {
      if(page) dispatch(getPosts(page))
    
    }, [page])
    
console.log('numberOfPages',numberOfPages)

  return (
    <div>
        <Pagination 
         className={{ul:classes.ul} }
         count={numberOfPages}
         page={Number(page) || 1}
         variant="outlined"
         color='primary'
         renderItem={ (item) => (
          <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
         
         )}
        />
    </div>
  )
}

export default Paginate