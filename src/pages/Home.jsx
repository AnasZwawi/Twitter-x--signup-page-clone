import React, { useState } from 'react'
import classes from '../styles/Home.module.css'
import { Link } from 'react-router-dom'


function Home(props) {
  
  return (
    <div className={classes.mainContainer}>
      <div className={classes.bannerContainer}>
        <main className={classes.banner}>
          <h2>You need to login in order to interract</h2>
          <Link to='/'><button>Login</button></Link>
          <p>if you dont have an account you can sign up <Link to='/' className={classes.link}>Here</Link></p>
        </main>
      </div>
      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed placeat commodi molestias ullam sint optio. Eos sed recusandae nobis cum, laborum obcaecati architecto, quasi soluta enim minus qui doloribus. Enim ex, ab vero architecto quos molestias recusandae. Nemo magni rem distinctio unde amet voluptatem exercitationem autem vel dolorem, vitae velit magnam molestiae consequuntur deserunt. Tempora ut repellat eligendi rem recusandae eos neque sequi modi quas porro harum voluptatum alias nesciunt quis libero temporibus labore perspiciatis amet, obcaecati itaque ducimus beatae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos, alias sed quam sunt suscipit distinctio tempore exercitationem modi, commodi debitis, veritatis odit! Omnis molestiae ex alias, soluta ratione commodi, nemo atque inventore odit reprehenderit itaque porro eos vero eveniet fugiat sunt quae iusto. Debitis blanditiis ex praesentium, nemo, expedita repudiandae alias numquam cupiditate, fugit aliquid laboriosam repellat quia minus. Laudantium neque sit fuga incidunt dolor, temporibus excepturi molestiae? Architecto sit aut repudiandae, laboriosam soluta cum ab nesciunt itaque praesentium consequatur tempore inventore vel quibusdam sapiente earum dicta, animi ad necessitatibus quos quis quo illo non temporibus. Porro culpa fugiat quam sequi omnis expedita. Quibusdam fuga esse corrupti amet ratione magnam maiores facilis. Ad architecto alias facilis. Sint, officia recusandae?
        </h1>
      </div>
    </div>
  )
}

export default Home