import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function Home() {
    return (
        <>
            <section>
                <div className='card'>
                    Commodo irure velit cupidatat qui sint proident sit aliquip labore. Voluptate amet ea nisi eiusmod deserunt labore occaecat. Dolore est sit non quis non excepteur esse sit duis do ad cillum voluptate incididunt. Labore proident excepteur ipsum est aliquip elit eu irure labore aute. Commodo aliquip ad eu exercitation non amet consectetur aliquip laboris esse minim ut.
                </div>
                <br></br>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
                <p>Anim nostrud exercitation fugiat sit cupidatat exercitation voluptate qui veniam officia aliqua fugiat et occaecat.</p>
                <Link className='btn' to="/">Test Button</Link>
            </section>
        </>
    )
}

export default Home
