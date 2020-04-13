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
      //clear styling since reddit gives same ids on next list of 25
      let el = document.querySelector('.selected');
      if (el) {
        el.classList.remove('selected');
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
              <SubList handleClick={handleClick} subreddits={subreddits} />
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