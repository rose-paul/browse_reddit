import React, { useState, useReducer } from 'react';
import SubList from './subList';
import SubPostsRender from './subPostsList';
import Search from './search';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import selectReducer from './reducer';

// step back through this a bit
// useReducer() --> some redux behavior
const Controller = ({ handlePostClick }) => {

    const [subreddits, setSubreddits] = useState(); //subreddit list state based on query
    const [posts, setPosts] = useState(); // posts from chosen subreddit
    const [state, dispatch] = useReducer(selectReducer, { select: false, id: null })

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

    function handleClick(data) { //set posts state if click on subreddit
        return setPosts(
        <SubPostsRender url={data} handlePostClick={handlePostClick} />
            )
    }

    return (
      <div>
        <Container>
          <Row>
            <Col xs={3} sm={3} md={3} large={3} xl ={3}>
              <Search updateQuery={updateQuery} />
              <SubList handleClick={handleClick} subreddits={subreddits} state={state} dispatch={dispatch}/>
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