const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed voluptatum
        laborum odit veritatis, voluptates assumenda asperiores animi officiis
        cumque fugiat libero dolore quis, vero ipsum excepturi nesciunt, nobis
        ratione dolorem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Reiciendis numquam earum quos itaque minima totam illum quae ipsum
        quaerat dolor? Voluptate a odio, dolor fugit similique unde nesciunt
        dolorum mollitia!
      </p>
    </>
  )
}

export default About
