import React,{useEffect} from 'react';
import {Pagination , PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';

import styles from './styles'




const Paginate = ({page}) => {
    const classes = styles();
    const dispatch = useDispatch();
    const {numberOfPages} = useSelector((state) => state.posts);

    useEffect(() => {
      if(page) dispatch(getPosts(page))
    
    }, [page])
    

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