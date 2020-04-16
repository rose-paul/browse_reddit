import React, { useState, useReducer } from 'react';
import PostsList from './postsList';
import Search from './search';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import selectReducer from './reducer';
import SubredditList from './subredditList';

const Controller = ({ handlePostClick }) => {

    const [subreddits, setSubreddits] = useState(); //subreddit list based on query
    const [posts, setPosts] = useState(<p>Select a subreddit!</p>); // posts from chosen subreddit
    const [state, dispatch] = useReducer(selectReducer, { select: false, id: null }) // state active styling

    function updateQuery(data) { //pass function as props to search component
      if (state.select) {
        dispatch('unselect')
      }
      if (data) {
        axios.get(`https://www.reddit.com/subreddits/search.json?q=${data}`)
          .then(res => {
            setSubreddits(res.data.data.children)
          })
      } else {
        setSubreddits(null)
      }
    }

    function handleSubClick(data) { //set posts state if click on subreddit
        return setPosts(
        <PostsList url={data} handlePostClick={handlePostClick} />
            )
    }

    return (
      <div>
        <Container>
          <Row>
            <Col xs={3} sm={3} md={3} large={3} xl ={3}>
              <Search updateQuery={updateQuery} />
              <SubredditList subredditQuery={subreddits} state={state} dispatch={dispatch} handleSubClick={handleSubClick}/>
            </Col>
            <Col xs={9} sm={9} md={9} large={9} xl ={9}>
            {posts}
            </Col>
          </Row>
        </Container>
      </div>
    );


}

export default Controller;