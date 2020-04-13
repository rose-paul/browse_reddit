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
            <Col xs={2} sm={2} md={2} large={2} xl ={2}>
              <Search updateQuery={updateQuery} />
              <SubList handleClick={handleClick} subreddits={subreddits} />
            </Col>
            <Col xs={10} sm={10} md={10} large={10} xl ={10}>
            {posts}
            </Col>
          </Row>
        </Container>
      </div>
    );


}

export default Controller;