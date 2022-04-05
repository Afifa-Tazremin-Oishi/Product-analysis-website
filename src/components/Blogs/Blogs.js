import React from 'react';
import './Blogs.css';

const Blogs=()=> {
  return (
    <div className='blogs'>
      <h2>
        1. What is contaxt api?
      </h2>
      <h4>
      The Context API is a React structure that lets you share unique details and helps you solve prop-drilling problems at various levels of your project. It's used to change the status of things. The best example of a context API is Redux.
      </h4>

      <h2>
        2. What is symantic tag?
      </h2>
      <h4>
      HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
      </h4>
    </div>
  )
}

export default Blogs;