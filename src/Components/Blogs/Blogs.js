import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h1>Question-1</h1>
      <h2>What is the purose of React Router ?</h2>
      <h1>Answer</h1>
      <h5>
        Routing is a process in which a user is directed to different pages
        based on their action or request. ReactJS Router is mainly used for
        developing Single Page Web Applications. React Router is used to define
        multiple routes in the application. When a user types a specific URL
        into the browser, and if this URL path matches any 'route' inside the
        router file, the user will be redirected to that particular route. React
        Router is a standard library system built on top of the React and used
        to create routing in the React application using React Router Package.
        It provides the synchronous URL on the browser with data that will be
        displayed on the web page. It maintains the standard structure and
        behavior of the application and mainly used for developing single page
        web applications.
      </h5>
      <br></br>
      <h5>
        React Router plays an important role to display multiple views in a
        single page application. Without React Router, it is not possible to
        display multiple views in React applications. Most of the social media
        websites like Facebook, Instagram uses React Router for rendering
        multiple views.
      </h5>
      <br></br>
      <br></br>
      <h1>Question-2</h1>
      <h2>How Does Context API Work ?</h2>
      <h1>Answer</h1>
      <h5>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on. Context is also touted as an easier, lighter approach to state
        management using Redux. Context API is a (kind of) new feature added in
        version 16.3 of React that allows one to share state across the entire
        app (or part of it) lightly and with ease.
      </h5>
      <br></br>
      <h5>
        React.createContext() is all we need. It returns a consumer and a
        provider. Provider is a component that as it's names suggests provides
        the state to its children. It will hold the "store" and be the parent of
        all the components that might need that store. Consumer as it so happens
        is a component that consumes and uses the state. More information can be
        found on React's documentation page
      </h5>

      <br></br>
      <br></br>
      <h1>Question-3</h1>
      <h2>What is React useRef Hook ?</h2>
      <h1>Answer</h1>
      <h5>
        useRef returns a mutable ref object whose .current property is
        initialized to the passed argument (initialValue). The returned object
        will persist for the full lifetime of the component.
      </h5>
      <br></br>
      <h5>
        `The useRef Hook is a function that returns a mutable ref object whose
        .current property is initialized with the passed argument
        (initialValue). The returned object will persist for the full lifetime
        of the component. There are two main uses of useRef that are explained
        in the following sections: Accessing the DOM nodes or React elements and
        keeping a mutable variable. we might be familiar with refs primarily as
        a way to access the DOM. If we pass a ref object to React with , React
        will set its .current property to the corresponding DOM node whenever
        that node changes. However, it is useful for more than the ref
        attribute. It’s handy for keeping any mutable value around similar to
        how we’d use instance fields in classes. This works because it creates a
        plain JavaScript object. The only difference between useRef() and
        creating a object werself is that useRef will give we the same ref
        object on every render. Keep in mind that useRef doesn’t notify we when
        its content changes. Mutating the .current property doesn’t cause a
        re-render. If we want to run some code when React attaches or detaches a
        ref to a DOM node, we may want to use a callback ref instead.`
      </h5>
    </div>
  );
};

export default Blogs;
