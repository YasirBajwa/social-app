import React, { useEffect, useState } from "react";

import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import Posts from "../Posts/Posts";
import Form from "../Forms/Form";
import { useDispatch } from "react-redux";
import { getPosts ,getPostBySearch} from "../../actions/action";
import useStyles from "./styles";
import Pagination from "../Pagination";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";





function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  const query = useQuery();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  const searchPost = () => {
    if(search.trim() || tags){
     dispatch(getPostBySearch({search,tags:tags.join(',')}))
     history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    }
    else{
      history.push('/')
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost()
    }
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div>
      <Grow in>
        <Container maxWidth="xl">
          <Grid
            container
            className={classes.gridContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="Search"
                  variant="outlined"
                  label="Search Memories"
                  fullWidth
                  onKeyPress={handleKeyPress}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  value={tags}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                  label="search tags"
                  variant="outlined"
                />

                <Button
                  onClick={searchPost}
                  className={classes.searchButton}
                  color="primary"
                  variant="contained"
                >
                  Search Post
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Pagination  page={page}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
