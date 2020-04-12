import React, { useState } from 'react';
import SubList from './subList';
import SubPostsRender from './subPostsList';
import Search from './search';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";

const Controller = ({ handlePostClick }) => {

    const [posts, setPosts] = useState(); // post from chosen subreddit
    const [subreddits, setSubreddits] = useState(); //subreddit list state based on query, props for subreddit list

    function updateQuery(data) { //pass as props to search component
      axios.get(`https://www.reddit.com/subreddits/search.json?q=${data}`)
        .then(res => {
          setSubreddits(res.data.data.children)
        })
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
            <Col>
              <h2>What's Popular on Reddit?</h2>
              <Search updateQuery={updateQuery} />
              <SubList handleClick={handleClick} subreddits={subreddits} />
            </Col>
            <Col>
            {posts}
            </Col>
          </Row>
        </Container>
      </div>
    );


}

export default Controller;